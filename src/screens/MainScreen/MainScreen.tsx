import React, {FC} from 'react';
import MonthSelector from '../../components/MonthSelector';
import {Text, View} from 'react-native';
import {styled} from '../../common/designSystem/styled';
import {usePresenter} from '@nbottarini/react-presenter';
import {MainPresenter} from './MainPresenter';

const useMainPresenter = () => {
  return usePresenter((onChange) => new MainPresenter(onChange), []);
};

export const MainScreen: FC = () => {
  const presenter = useMainPresenter();
  return (
    <MainContainer>
      <MonthSelector selectedMonth={presenter.model.selectedMonth} onSelectMonth={presenter.handleSelectMonth} />
        <BudgetResume>
          <View>
            <Text>
              Ingresos
            </Text>
            <Text>
              {presenter.model.currentBudget?.income}
            </Text>
          </View>

          <View>
            <Text>
              Egresos
            </Text>
            <Text>
              {presenter.model.currentBudget?.expensesTotal}
            </Text>
          </View>
        </BudgetResume>
    </MainContainer>
  );
};

const MainContainer = styled(View, {
  width: '100%',
  flex: 1,
  alignItems: 'center',
});

const BudgetResume = styled(View, {
  width: '90%',
  height: 60,
  elevation: 8,
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 20,
  justifyContent: 'space-evenly',
  borderRadius: 20,
  padding: 10,
});


