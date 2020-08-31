import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, SafeAreaView, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



  //===========================================================//
  // MAIN LOGIN SCREEN
function Login({ navigation }) {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Password" />
      <StatusBar style="auto" />
      <View style={styles.buttonContainer}>
        <Button
          title="Submit"
          onPress={() => navigation.navigate('List')} />
        <Button
          title="Signup"
          onPress={() => alert("Signup successful!")} />
      </View>
    </View>
  );
}



  //===========================================================//
  // LIST OF ARTICLES
const DATA = [
  {
    id: 'item1',
    title: 'Trumpet',
  },
  {
    id: 'item2',
    title: 'French Horn',
  },
  {
    id: 'item3',
    title: 'Trombone',
  },
  {
    id: 'item4',
    title: 'Euphonium',
  },
  {
    id: 'item5',
    title: 'Tuba',
  },
];


function List({navigation}) {
  return (
    <SafeAreaView style={styles.itemList}>
      <FlatList
        style={styles.itemsList}
        data={DATA}
        renderItem={({ item }) => (
        <View style={styles.buttons}>
          <Button
            color={'#3E207A'}
            title={item.title}
              onPress={() => navigation.navigate( item.title )} />
        </View>
        )}
        keyExtractor={item => item.id}
      />
      <Button
        title='Go Back'
        onPress={() => navigation.navigate('Login')} />
    </SafeAreaView>
  );
}



  //===========================================================//
  // DETAILS OF ARTICLES (Still need to fill out for each item)
function item1({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
      source={require('./assets/trumpet.png')}
      style={styles.itemPicture} />
      <Text style={styles.title}>Details:</Text>
      <Text style={styles.description}>This instrument originated as a bugle used mainly to communicate orders to troops on the battlefields.</Text>
      <Button style={styles.buttons} title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
function item2({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
      source={require('./assets/horn.jpg')}
      style={styles.itemPicture} />
      <Text style={styles.title}>Details:</Text>
      <Text style={styles.description}>The French Horn was created to supplement notes that are both too low for the Trumpet and too high for the Trombone.</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
function item3({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
      source={require('./assets/trombone.jpg')}
      style={styles.itemPicture} />
      <Text style={styles.title}>Details:</Text>
      <Text style={styles.description}>Originally known as the Sackbut, the Trombone made its debut during the Renaissance and Baroque eras.</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
function item4({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
      source={require('./assets/euphonium.jpg')}
      style={styles.itemPicture} />
      <Text style={styles.title}>Details:</Text>
      <Text style={styles.description}>Unlike most other wind instruments, the Euphonium is actually a recently popularized instrument since the early 1900s.</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
function item5({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
      source={require('./assets/tuba.jpg')}
      style={styles.itemPicture} />
      <Text style={styles.title}>Details:</Text>
      <Text style={styles.description}>The Tuba has existed in all different shapes and sizes, but continues to grow larger as time progresses to expand its lower range.</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}



  //===========================================================//
  // NAVIGATION SETTINGS
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Trumpet" component={item1} />
      <Stack.Screen name="French Horn" component={item2} />
      <Stack.Screen name="Trombone" component={item3} />
      <Stack.Screen name="Euphonium" component={item4} />
      <Stack.Screen name="Tuba" component={item5} />
    </Stack.Navigator>
  );
}



  //===========================================================//
  // STYLE SHEET
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#7B3AFF",
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: "#7B3AFF",
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 32,
    margin: 10,
  },
  input: {
    backgroundColor: '#fff',
    width: 250,
    padding: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    margin: 10,
  },
  itemList: {
    flex: 1,
    backgroundColor: '#7B3AFF',
    alignItems: 'center',
    padding: 70,
  },
  buttons: {
    margin: 18,
  },
  itemPicture: {
    resizeMode: 'contain',
    height: 200,
    width: 200,
    borderRadius: 20,
    marginTop: 10,
    alignItems: 'flex-start',
  },
  description: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 100,
  },
})



  //===========================================================//
  // RUN THE APPLICATION
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
