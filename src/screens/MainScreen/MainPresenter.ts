import {ChangeFunc, PresenterBase} from '@nbottarini/react-presenter';
import {budgets, MonthBudget} from '../../domain/Budget/MonthBudget';

export class MainPresenter extends PresenterBase<MainPresenterVM> {
  constructor(onChange: ChangeFunc) {
    super(onChange);
    this._model = { isLoading: false, selectedMonth: new Date().getMonth() + 1, currentBudget: undefined };
  }

  async start() {
    this.handleSelectMonth(this.model.selectedMonth);
  }

  handleSelectMonth = (monthId: number) => {
    const budget = this.getCurrentBudget(monthId);
    this.updateModel({
      selectedMonth: monthId,
      currentBudget: budget,
    });
  };

  private getCurrentBudget = (monthId: number) => {
    return budgets.find(item => item.id === monthId);
  };
}

export interface MainPresenterVM {
  isLoading: boolean
  selectedMonth: number
  currentBudget: MonthBudget | undefined
}
