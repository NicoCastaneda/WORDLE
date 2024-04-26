import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import StatsScreen from "../views/StatsScreen";
import HomeScreen from "../views/HomeScreen";
import GameScreen from "../views/GameScreen";
import qr from "../views/qr";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Inicio') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Jugar') {
                            iconName = focused ? 'game-controller' : 'game-controller-outline';
                        } else if (route.name === 'Puntajes') {
                            iconName = focused ? 'stats-chart' : 'stats-chart-outline';
                        } else if (route.name === 'QR') {
                            iconName = focused ? 'qr-code-sharp' : 'qr-code-outline';
                        } 

                        const iconColor = 'green';

                        return <Ionicons name={iconName} size={size} color={iconColor} />;
                    },
                    tabBarLabelStyle: {
                        color: 'green',
                    },
                })}
            >
                <Tab.Screen name="Inicio" component={HomeScreen} />
                <Tab.Screen name="Jugar" component={GameScreen} />
                <Tab.Screen name="Puntajes" component={StatsScreen} />
                <Tab.Screen name="QR" component={qr} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
