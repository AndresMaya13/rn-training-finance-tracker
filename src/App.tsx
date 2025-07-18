import React from 'react';
import { Text, View,
} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import {MainScreen} from './screens/MainScreen/MainScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStaticNavigation} from '@react-navigation/native';
import {BottomTabs} from './common/navigation/TabBarNavigation';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen....</Text>
        </View>
    );
}

const RootStack = createNativeStackNavigator({
    initialRouteName: 'MainTabs',
    screens: {
        Home: HomeScreen,
        MainScreen: {
            screen: MainScreen,
            options: {
                headerShown: false,
        },
        },
        MainTabs: {
            screen: BottomTabs,
            options: {
                headerShown: false,
            },
        },
    },
});

const Navigation = createStaticNavigation(RootStack);

const App = () => {
  return (
      <PaperProvider>
        <Navigation />
      </PaperProvider>
  );
};

export default App;
