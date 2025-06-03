import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import {styled} from './common/designSystem/styled';
import {MainScreen} from './screens/MainScreen/MainScreen';

const App = () => {
  return (
    <AppContainer>
      <MainScreen />
    </AppContainer>
  );
};

const AppContainer = styled(SafeAreaView, {
  flex: 1,
  alignItems: 'center',
  paddingVertical: 20,
});

export default App;
