import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export interface Month {
  id: number;
  name: string;
  shortName: string;
}

interface MonthSelectorProps {
  onSelectMonth: (month: Month) => void;
  selectedMonth: number;
}

const months: Month[] = [
  { id: 1, name: 'Enero', shortName: 'Ene' },
  { id: 2, name: 'Febrero', shortName: 'Feb' },
  { id: 3, name: 'Marzo', shortName: 'Mar' },
  { id: 4, name: 'Abril', shortName: 'Abr' },
  { id: 5, name: 'Mayo', shortName: 'May' },
  { id: 6, name: 'Junio', shortName: 'Jun' },
  { id: 7, name: 'Julio', shortName: 'Jul' },
  { id: 8, name: 'Agosto', shortName: 'Ago' },
  { id: 9, name: 'Septiembre', shortName: 'Sep' },
  { id: 10, name: 'Octubre', shortName: 'Oct' },
  { id: 11, name: 'Noviembre', shortName: 'Nov' },
  { id: 12, name: 'Diciembre', shortName: 'Dic' },
];

const MonthSelector: React.FC<MonthSelectorProps> = (props) => {
  const renderItem = ({ item }: { item: Month }) => (
    <TouchableOpacity
      style={[
        styles.monthItem,
        props.selectedMonth === item.id && styles.selectedMonthItem,
      ]}
      onPress={() => props.onSelectMonth(item)}
    >
      <Text style={[
        styles.monthText,
        props.selectedMonth === item.id && styles.selectedMonthText,
      ]}>{item.shortName}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={months}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
  },
  monthItem: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 8,
    paddingHorizontal: 4,
    marginHorizontal: 4,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 60,
  },
  monthText: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
  selectedMonthItem: {
    backgroundColor: '#007BFF',
  },
  selectedMonthText: {
    color: '#fff',
  },
  listContainer: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
});

export default MonthSelector;
