import {FC} from 'react';
import { View } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import {BottomTabBarProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainScreen} from '../../screens/MainScreen/MainScreen';
import {styled} from '../designSystem/styled';

export const MyTabBar: FC<BottomTabBarProps> = ({ state, descriptors, navigation }): any => {
    const { colors } = useTheme();
    const { buildHref } = useLinkBuilder();

    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options?.title || route.name;
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                return (
                    <TabButton
                        key={route.key}
                        href={buildHref(route.name, route.params)}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarButtonTestID}
                        onPress={onPress}
                    >
                        <Text style={{ color: isFocused ? colors.primary : colors.text }}>
                            {label}
                        </Text>
                    </TabButton>
                );
            })}
        </View>
    );
};

export const BottomTabs = createBottomTabNavigator({
    tabBar: (props) => <MyTabBar {...props} />,
    screens: {
        Main: {
            screen: MainScreen,
            options: {
                title: 'Inicio',
            },
        },
        Profile: MainScreen,
    },
    screenOptions: {
        animation: 'fade',
        headerShown: false,
    },
});

const TabButton = styled(PlatformPressable, {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    marginBottom: 12,
});
