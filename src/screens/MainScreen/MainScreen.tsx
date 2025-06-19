import React, {FC} from 'react';
import MonthSelector from '../../components/MonthSelector';
import {View} from 'react-native';
import {styled} from '../../common/designSystem/styled';
import {usePresenter} from '@nbottarini/react-presenter';
import { MainPresenter } from './MainPresenter';
import { ActivityIndicator, Card, Text } from 'react-native-paper';


const useMainPresenter = () => {
  return usePresenter((onChange) => new MainPresenter(onChange), []);
};

export const MainScreen: FC = () => {
  const presenter = useMainPresenter();
  return (
    <MainContainer>
      <MonthSelector selectedMonth={presenter.model.selectedMonth} onSelectMonth={presenter.handleSelectMonth} />
      {presenter.model.isLoading ?
          <ActivityIndicator animating={true} color={'blue'} />
          :
          <>
            <Card style={{ marginTop: 20, width: '90%' }}>
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
            </Card>

            <Card style={{ marginTop: 20, width: '90%' }}>
              <Card.Content>
                <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'space-evenly'}}>
                  <Text>% Sugerido</Text>
                  <Text>% Egresos</Text>
                  <Text>90%</Text>
                </View>
              </Card.Content>
            </Card>
          </>
      }
    </MainContainer>
  );
};

const MainContainer = styled(View, {
  flex: 1,
  width: '100%',
  alignItems: 'center',
});

const BudgetResume = styled(View, {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  padding: 10,
});


