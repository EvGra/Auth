import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {
  const signInPressed = () => {
    console.log('pressed');
  };
  return (
    <>
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
    </>
  );
};

export default SocialSignInButtons;
