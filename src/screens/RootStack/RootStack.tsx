import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenshotsCardScreen} from '../ScreenshotsCardScreen';
import {useContext, useMemo} from 'react';
import {ThemeContext} from '../../../App.tsx';
import {ThemeContextType} from '../../types';
import {Paywall} from '../Paywall';
import {Screenshot} from '../Screenshot';
import {Home} from '../Home';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  const {theme} = useContext(ThemeContext) as ThemeContextType;

  const screenOptions = useMemo(
    () => ({
      headerStyle: {
        backgroundColor: theme.headerColor,
      },
    }),
    [theme],
  );

  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName={'Paywall'}>
      <Stack.Screen
        name="Paywall"
        component={Paywall}
        options={() => ({
          headerShown: false,
          headerTitle: '',
        })}
      />
      <Stack.Screen
        name="Screenshot"
        component={Screenshot}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ScreenshotsCardScreen"
        component={ScreenshotsCardScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
