import React, {FC} from 'react';
import MonthSelector from '../../components/MonthSelector';
import {FlatList, SafeAreaView, View} from 'react-native';
import {styled} from '../../common/designSystem/styled';
import {usePresenter} from '@nbottarini/react-presenter';
import { MainPresenter } from './MainPresenter';
import { ActivityIndicator, Card, Text, Button, Divider } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const useMainPresenter = () => {
  return usePresenter((onChange) => new MainPresenter(onChange), []);
};

export const MainScreen: FC = () => {
  const presenter = useMainPresenter();
  const navigation = useNavigation();

  // @ts-ignore
    const renderItem = ({item}) => (
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 12}}>
        <Text>{item.suggestedPercent}%</Text>
        <Text>{item.name}</Text>
        <Text>{item.spentAmount}</Text>
      </View>
  );

  const headerList = () => (
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 12}}>
        <Text>% Sugerido</Text>
        <Text>Categoría</Text>
        <Text>Valor gastado</Text>
      </View>
  );

  return (
    <MainContainer>
      <MonthSelector selectedMonth={presenter.model.selectedMonth} onSelectMonth={presenter.handleSelectMonth} />
      {presenter.model.isLoading ?
          <ActivityIndicator animating={true} color={'blue'} />
          :
          <>
            <Card style={{ marginTop: 20, width: '90%' }}>
              <BudgetResume>
                <IncomingContainer>
                  <Text> Ingresos  </Text>
                  <Text> {presenter.model.currentBudget?.income} </Text>
                </IncomingContainer>
                <ExpensesContainer>
                  <Text>
                    Egresos
                  </Text>
                  <Text>
                    {presenter.model.currentBudget?.expensesTotal}
                  </Text>
                </ExpensesContainer>
              </BudgetResume>
            </Card>

            <Card style={{ marginTop: 20, width: '90%', marginBottom: 20}}>
              <Card.Content>
                <FlatList
                    ListHeaderComponent={headerList}
                    ItemSeparatorComponent={Divider}
                    data={presenter.model.summaryBudget}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.name}
                />
              </Card.Content>
            </Card>

            <Button mode="contained" onPress={() => navigation.navigate('Home')}>
              Ir al home
            </Button>
          </>
      }
    </MainContainer>
  );
};

const MainContainer = styled(SafeAreaView, {
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

const IncomingContainer = styled(View, {});

const ExpensesContainer = styled(View, {});

