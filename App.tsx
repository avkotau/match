import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack, WithSplashScreen} from './src';

export const ThemeContext = React.createContext({
  theme: {
    headerColor: 'black', // Default color
  },
});

function App() {
  const theme = {headerColor: 'black'};
  return (
    <ThemeContext.Provider value={{theme}}>
      <WithSplashScreen>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </WithSplashScreen>
    </ThemeContext.Provider>
  );
}

export default App;
