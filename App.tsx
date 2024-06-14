import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src';

export const ThemeContext = React.createContext({
  theme: {
    headerColor: 'black', // Default color
  },
});

function App() {
  const theme = {headerColor: 'black'};
  return (
    <ThemeContext.Provider value={{theme}}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

export default App;
