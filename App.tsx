import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import ConfigureStore from "store/configStore";
import { routes } from 'routes/routes';
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();


const initialState:any = {};

const store = ConfigureStore(initialState);
const Stack = createStackNavigator();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator>
                {
                  routes.map((route, index) => {
                    return <Stack.Screen
                            key={index}
                            name={route.name} 
                            component={route.component}
                            options={{headerShown: route.headerShown}}
                          />
                  })
                }
            </Stack.Navigator>
        </NavigationContainer>      
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
