import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DeAsaGame } from '../src/ui/deAsaGame/DeAsaGame';
import { Finish } from '../src/ui/finish/Finish';
import HomeScreen from '../src/ui/Home/HomeScreen';
import { Points } from '../src/ui/pints/Points';
import { SelectTeams } from '../src/ui/selectTeams/SelectTeams';
import { Settings } from '../src/ui/Settings/Settings';
import { SplashScreen } from '../src/ui/splashScreen/SplashScreen';

const Stack = createNativeStackNavigator();

export const Navigita = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="SelectTeams" component={SelectTeams} />
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="DeAsaGame" component={DeAsaGame} />
            <Stack.Screen name="Points" component={Points} />
            <Stack.Screen name="Finish" component={Finish} />
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}