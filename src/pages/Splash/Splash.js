import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {IcLogo} from '../../assets/icon';
import {colors} from '../../utils/colors/colors';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.page}>
      <Image source={IcLogo} style={styles.logo} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
});
