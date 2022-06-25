import React, { useState } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput } from "react-native";
import logo from "../../../assets/images/logo.png";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";


const SignInScreen = () => {

    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const {
        control,
        handleSubmit,
        formState: {errors},
      } = useForm();

  const onSignInPressed = data => {
    // validate user
    navigation.navigate('Home');
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.root}>
                    <Image
                        source={logo}
                        styles={[styles.logo, { height: height * 0.3 }]}
                        resizeMode="contain"
                    />
                    <CustomInput
                        name="username"
                        placeholder="Username"
                        control={control}
                        rules={{ required: 'Username is required' }}
                    />
                    <CustomInput
                        name="password"
                        placeholder="Password"
                        control={control}
                        rules={{
                            required: 'Password is required',
                            minLength: {
                                value: 3,
                                message: 'Password should be minimum 3 characters long'
                            },
                        }}
                        secureTextEntry
                    />

                    <CustomButton
                        text='Sign In'
                        onPress={handleSubmit(onSignInPressed)}
                    />
                    <CustomButton
                        text="Forgot password?"
                        onPress={onForgotPasswordPressed}
                        type='TERTIARY'
                    />

                    <SocialSignInButtons />

                    <CustomButton
                        text="Don't have an account? Sign up"
                        onPress={onSignUpPressed}
                        type='TERTIARY'
                    />
                </View>
            </ScrollView>
        );
    };


    const styles = StyleSheet.create({
        root: {
            alignItems: "center",
            padding: 20,
        },
        logo: {
            width: '70%',
            maxWidth: 300,
            maxheight: 200,
        },
    });

    export default SignInScreen;