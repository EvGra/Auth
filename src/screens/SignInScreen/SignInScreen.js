import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignInScreen = () => {
  const height = Dimensions.get('screen').height;

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const signInPressed = () => {
    console.log('pressed');
  };

  const forgotPasswordPressed = () => {
    console.log('pressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
          source={Logo}
        />
        <CustomInput
          value={userName}
          setValue={setUserName}
          placeholder="Username"
        />
        <CustomInput
          value={password}
          setValue={setPassword}
          placeholder="Password"
          secureTextEntry
        />
        <CustomButton onPress={signInPressed} text="Sign In" />
        <CustomButton
          onPress={forgotPasswordPressed}
          text="Forgot Password?"
          type="TERTIARY"
        />
        <CustomButton
          onPress={signInPressed}
          text="Sign In with Facebook"
          fgColor="#4765A9"
          bgColor="#E7EAF4"
        />
        <CustomButton
          onPress={signInPressed}
          text="Sign In with Google"
          fgColor="#DD4D44"
          bgColor="#FAE9EA"
        />
        <CustomButton
          onPress={signInPressed}
          text="Sign In with Apple"
          fgColor="#363636"
          bgColor="#e3e3e3"
        />
        <CustomButton
          onPress={forgotPasswordPressed}
          text="Don't have an account? Create one"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});
