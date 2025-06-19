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
        summaryBudget,
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
    const summaryBudget: any = [];
    categories.forEach(category  =>  {
      summaryBudget.push({
        name: category.name,
        suggestedPercent:category.suggestedPercent,
        spentAmount: category.spentAmount,
      });
    });
    return summaryBudget;
  }
}

export interface MainPresenterVM {
  isLoading: boolean
  selectedMonth: number
  currentBudget: MonthBudget | undefined
  summaryBudget: []
}
