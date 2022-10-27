import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcLogo, IcNextNotActive} from '../../assets/icon';
import {colors, fonts} from '../../utils';
import {Button, Form, Gap} from '../../components';
import {useForm, Controller} from 'react-hook-form';

const SignIn = ({navigation}) => {
  const {control, handleSubmit} = useForm();
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.page}>
      <Image source={IcLogo} style={styles.logo} />
      <Text style={styles.welcome}>Welcome Back, Explorer!</Text>
      <Form label="Email Address" name="email" control={control} />
      <Gap height={16} />
      <Form label="Password" name="address" control={control} />
      <IcNextNotActive style={styles.button} />
      <View style={styles.askContainer}>
        <Text style={styles.askText}>Start fresh now? </Text>
        <Button title="Sign Up" isLink onPress={handleSignUp} />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 30,
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 70,
  },
  welcome: {
    fontFamily: fonts.primary[500],
    fontSize: 20,
    color: colors.text.primary,
    maxWidth: 150,
    marginBottom: 50,
  },
  button: {
    alignSelf: 'center',
    marginTop: 30,
  },
  askContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  askText: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.secondary,
  },
});
