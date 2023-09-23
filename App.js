import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
export default function App() {
  return (
    <View style={{ alignItems: 'center', flex: 1, marginTop: 60 }} >
      <Image style={{ width: 100, height: 100 }} source={require('./assets/eye.png')} />
      <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
        <FontAwesome name="user-o" size={24} color="blue" />
        <TextInput style={{ width: 300, borderBottomWidth: 1, borderColor: '#aaa', color: '#aaa', padding: 15 }} placeholder='Please input user name' />
      </View>

      <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
        <MaterialIcons name="lock-outline" size={24} color="blue" />
        <TextInput style={{ width: 300, borderBottomWidth: 1, borderColor: '#aaa', color: '#aaa', padding: 15 }} placeholder='Please input password' />
      </View>


      <View style={{ height: 50, width: 300, marginTop: 5, borderRadius: 10, flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#386FFC' }}>
        <Text style={{ color: "#fff" }}>LOGIN</Text>
      </View>

      <View style={{ height: 50, width: 300, marginTop: 5, borderRadius: 10, flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text>Register</Text>
        <Text>Forgot Password</Text>
      </View>
      <View style={{ height: 50, width: 300, marginTop: 5, borderRadius: 10, flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ marginBottom: 10, color: 'blue' }}>________</Text>
        <Text lineBreakMode='tail' numberOfLines={2}>Other Login Methods</Text>
        <Text style={{ marginBottom: 10, color: 'blue' }}>________</Text>
      </View>

      <View style={{ height: 50, width: 350, marginTop: 5, borderRadius: 10, flexDirection: 'row', padding: 40, justifyContent: 'space-around', alignItems: 'center' }}>
        <Image style={{ width: 70, height: 70, borderRadius: 20, resizeMode: 'contain' }} source={require('./assets/img3.png')} />

        <Image style={{ width: 70, height: 70, borderRadius: 20, resizeMode: 'contain' }} source={require('./assets/img1.png')} />


        <Image style={{ width: 70, height: 70, borderRadius: 20, resizeMode: 'contain' }} source={require('./assets/img2.png')} />
      </View>

    </View >
  );
}

