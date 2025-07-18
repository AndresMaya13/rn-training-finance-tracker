import {ChangeFunc, PresenterBase} from '@nbottarini/react-presenter';
import {ExpenseCategory, MonthBudget} from '../../domain/Budget/MonthBudget';
import {HttpClient} from '../../infrastructure/http/HttClient';

export class MainPresenter extends PresenterBase<MainPresenterVM> {
  private api: HttpClient;
  constructor(onChange: ChangeFunc) {
    super(onChange);
    this._model = { isLoading: false, selectedMonth: new Date().getMonth() + 1, currentBudget: undefined, summaryBudget: [] };
    this.api = new HttpClient('http://localhost:3001');
  }

  async start() {
    await this.handleSelectMonth(this.model.selectedMonth);
  }

  handleSelectMonth = async (monthId: number) => {
    await this.withLoader(async () => {
      const budget = await this.getCurrentBudget(monthId) as unknown as MonthBudget;
      const summaryBudget = this.buildSummaryBudget(budget.categories);
      this.updateModel({
        selectedMonth: monthId,
        currentBudget: budget,
        summaryBudget: summaryBudget,
      });
    });
  };

  async getCurrentBudget(monthId: number)  {
    try {
      let response = await this.api.get(`/api/budget/${monthId}`);
      return response.data;
    } catch(error) {
      console.log(error);
    }
  }

  private buildSummaryBudget(categories: ExpenseCategory[]) {
    return categories.map(category => ({
      name: category.name,
      suggestedPercent:category.suggestedPercent,
      spentAmount: category.spentAmount,
    }));
  }
}

export interface MainPresenterVM {
  isLoading: boolean
  selectedMonth: number
  currentBudget: MonthBudget | undefined
  summaryBudget: SummaryBudgetVM []
}

export interface SummaryBudgetVM extends Pick<ExpenseCategory, 'name' | 'suggestedPercent' | 'spentAmount'>  {}
