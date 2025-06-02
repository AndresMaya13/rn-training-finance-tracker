import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={{fontSize: 40}}>Hola</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
