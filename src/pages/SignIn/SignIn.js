import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcLogo, IcNextNotActive} from '../../assets/icon';
import {colors, fonts} from '../../utils';
import {Button, Form, Gap} from '../../components';

const SignIn = () => {
  return (
    <View style={styles.page}>
      <Image source={IcLogo} style={styles.logo} />
      <Text style={styles.welcome}>Welcome Back, Explorer!</Text>
      <Form label="Email Address" />
      <Gap height={16} />
      <Form label="Password" />
      <IcNextNotActive style={styles.button} />
      <View style={styles.askContainer}>
        <Text style={styles.askText}>Already have an account? </Text>
        <Button title="Sign In" isLink />
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
