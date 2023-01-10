import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmail');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          value={userName}
          setValue={setUserName}
          placeholder="Username"
        />
        <CustomInput value={email} setValue={setEmail} placeholder="Username" />
        <CustomInput
          value={password}
          setValue={setPassword}
          placeholder="Password"
          secureTextEntry
        />
        <CustomInput
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          placeholder="Repeat Password"
          secureTextEntry
        />
        <CustomButton onPress={onRegisterPressed} text="Register" />
        <Text style={styles.text}>
          By regestering, you confirm that you accept our{' '}
          <Text style={styles.link}>Terms of Use</Text> and
          <Text style={styles.link}> Privacy Policy</Text>
        </Text>
        <SocialSignInButtons />
        <CustomButton
          onPress={onSignInPressed}
          text="Have an account? Sign In"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});
