import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'; // Importa los iconos de Ionicons
import GameScreen from "../views/GameScreen";
import StatsScreen from "../views/StatsScreen";
import HomeScreen from "../views/HomeScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Inicio') {
                            iconName = focused ? 'home' : 'home-outline'; // Cambia el icono de Inicio
                        } else if (route.name === 'Jugar') {
                            iconName = focused ? 'game-controller' : 'game-controller-outline'; // Cambia el icono de Jugar
                        } else if (route.name === 'Puntajes') {
                            iconName = focused ? 'stats-chart' : 'stats-chart-outline'; // Cambia el icono de Puntajes
                        }

                        // Cambia el color del icono siempre a verde
                        const iconColor = 'green';

                        // Devuelve el componente de icono con el nombre y color verde
                        return <Ionicons name={iconName} size={size} color={iconColor} />;
                    },
                    tabBarLabelStyle: {
                        color: 'green', // Establece el color del título de la pestaña como verde
                    },
                })}
            >
                <Tab.Screen name="Inicio" component={HomeScreen} />
                <Tab.Screen name="Jugar" component={GameScreen} />
                <Tab.Screen name="Puntajes" component={StatsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
