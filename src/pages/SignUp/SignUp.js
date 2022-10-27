import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Form, Gap, Header} from '../../components';
import {colors} from '../../utils';
import {IcAddPhoto, IcDefaultPhoto, IcNextActive} from '../../assets/icon';
import {useForm, Controller} from 'react-hook-form';

const SignUp = () => {
  const {control, handleSubmit} = useForm();

  const register = data => {
    console.warn(data);
  };

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={20} />
        <Header title="Create New Account" />
        <View style={styles.avatarWrapper}>
          <Image source={IcDefaultPhoto} style={styles.avatar} />
          <Image source={IcAddPhoto} style={styles.avatarAction} />
        </View>
        <Gap height={16} />
        <Form label="Full Name" name="fullName" control={control} />
        <Gap height={16} />
        <Form label="Email Address" name="email" control={control} />
        <Gap height={16} />
        <Form label="Password" name="password" control={control} />
        <Gap height={16} />
        <Form
          label="Confirm Password"
          name="confirmPassword"
          control={control}
        />
        <Gap height={30} />
        <TouchableOpacity onPress={handleSubmit(register)}>
          <IcNextActive style={styles.nextButton} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  avatarWrapper: {
    alignItems: 'center',
    marginVertical: 24,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    position: 'relative',
  },
  avatarAction: {
    position: 'absolute',
    bottom: -10,
    width: 28,
    height: 28,
  },
  nextButton: {
    alignSelf: 'center',
  },
});
