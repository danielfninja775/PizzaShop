import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Order from '../pages/Order';
import Dashboard from '../pages/Dashboard';
import  FinishOrder  from '../pages/FinishOrder';

export type StackPromsList= {
  DashBoard: undefined;
  Order: {
    number: number 
  }
  FinishOrder:{
    number: number | string;
    order_id: string;
  }
}

const Stack = createNativeStackNavigator<StackPromsList>();

function AppRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" 
      component={Dashboard} 
      options={{ headerShown: false }}
      />
      <Stack.Screen
      name= "Order"
      component={Order}
      options={{ headerShown: false }}
      />

<Stack.Screen
      name= "FinishOrder"
      component={FinishOrder}
      options={{
        title: 'Finishing the Order',
        headerStyle:{
          backgroundColor: '#1d1d2e'
        },
        headerTintColor: '#FFF'
      }}
    
      />
    </Stack.Navigator>
  )
}

export default AppRoutes;
