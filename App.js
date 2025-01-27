import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './components/drawer';
import HomePage from './screen/home';
import UserInputForm from './components/form';
import UserProvider from './utils/context';
import UserProfileScreen from './components/profileCatalogue';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const Drawer = createDrawerNavigator();

const App = () => {


  const ProfileHeader = ({ navigation }) => (
    <View style={styles.header}>
      <View style={styles.emptyLeft} />
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/a.png')}
          style={styles.logo}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <AntDesign name="down" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
  return (
    <UserProvider>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
          initialRouteName="Home"

          screenOptions={({ route }) => ({
            drawerStyle: {
              backgroundColor: '#000',
            },
            headerStyle: {
              backgroundColor: route.name === 'Amazon' ? '#rgb(255 108 0)' : '#333',
            },
            headerTitleAlign: "center",
            headerTintColor: '#fff',
            drawerActiveBackgroundColor: '#003CB3',
          })}
        >
          <Drawer.Screen name="Home" component={HomePage} />
          <Drawer.Screen name="Amazon" component={UserInputForm} />
          <Drawer.Screen
            name="Profile"
            component={UserProfileScreen}
            options={{
              header: ({ navigation }) => <ProfileHeader navigation={navigation} />,
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingTop: 5,  // Adjust as necessary for your header height
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ff6c00',
    paddingHorizontal: 20,
    paddingBottom: 5,
    marginTop: '10%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  emptyLeft: {
    width: 30, // This space can be adjusted
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
