import React, {useState} from 'react';
import {
  SafeAreaView, Text,
} from 'react-native';
import MonthSelector, { Month } from './components/MonthSelector';
import { budgets } from './domain/Budget/MonthBudget';

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1);
  const [currentBudget, setCurrentBudget] = useState('');

  const handleSelectMonth = (month: Month) => {
    setSelectedMonth(month.id);
    const budget = getCurrentBudget(month.id);
    setCurrentBudget(JSON.stringify(budget));
  };

  const getCurrentBudget = (monthId: number) => {
    return budgets.find(item => item.id === monthId);
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingVertical: 20 }}>
      <MonthSelector
        selectedMonth={selectedMonth}
        onSelectMonth={handleSelectMonth}
      />
      <Text>
        {currentBudget}
      </Text>
    </SafeAreaView>
  );
};

export default App;
