import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcLogo} from '../../assets/icon';
import {fonts, colors} from '../../utils';
import {Button} from '../../components';

const GetStarted = ({navigation}) => {
  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.page}>
      <View style={styles.topContent}>
        <Image source={IcLogo} style={styles.logo} />
        <Text style={styles.title}>New Experience</Text>
        <Text style={styles.subTitle}>
          Watch a new movie much easier than any before
        </Text>
      </View>
      <View style={styles.bottomContent}>
        <Button title="Get Started" />
        <View style={styles.askContainer}>
          <Text style={styles.askText}>Already have an account? </Text>
          <Button title="Sign In" isLink onPress={handleSignIn} />
        </View>
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  topContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 100,
    marginBottom: 70,
  },
  title: {
    fontFamily: fonts.primary[500],
    fontSize: 20,
    color: colors.text.primary,
  },
  subTitle: {
    marginTop: 16,
    maxWidth: 190,
    fontFamily: fonts.primary[300],
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: 'center',
  },
  bottomContent: {
    paddingHorizontal: 55,
    paddingBottom: 70,
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
