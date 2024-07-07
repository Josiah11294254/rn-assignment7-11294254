import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import { Text, View } from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <View style={{ flex: 1, paddingTop: 50, paddingLeft: 20 }}>
      <Text onPress={() => props.navigation.navigate('Home')} style={{ marginBottom: 20 }}>Home</Text>
      <Text onPress={() => props.navigation.navigate('Cart')} style={{ marginBottom: 20 }}>Cart</Text>
    </View>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} 
      screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="stacknavigation" component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
