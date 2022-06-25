import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {

    const { control, handleSubmit, watch} = useForm();
    const pwd = watch("password");
    const navigation = useNavigation();

    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmail');
      };
    
      const onSignInPressed = () => {
        navigation.navigate('SignIn');
      };
    
      const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed');
      };
    
      const onPrivacyPressed = () => {
        console.warn('onPrivacyPressed');
      };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>
                <CustomInput
                    name="username"
                    control={control}
                    placeholder="Username"
                    rules={{
                        required: 'Username is required',
                        minLength: {
                            value: 3,
                            message: 'Username should be minimum 3 characters long'
                        },
                        maxLength: {
                            value: 24,
                            message: 'Username should be maximum 24 characters long'
                        },
                    }}
                />
                <CustomInput
                    name="email"
                    control={control}
                    placeholder="Email"
                    rules={{
                        required: 'Email is required',
                        pattern: {
                            value: EMAIL_REGEX, 
                            message: 'Email is invalid'
                        },
                    }}
                />
                <CustomInput
                    name="password"
                    control={control}
                    placeholder="Password"
                    secureTextEntry
                    rules={{
                        required: 'Password is required',
                        minLength: {
                            value: 6,
                            message: 'Password should be minimum 8 characters long'
                        },
                    }}
                />
                <CustomInput
                    name="confirmPassword"
                    control={control}
                    placeholder="Confirm password"
                    secureTextEntry
                    rules={{
                        validate: value => value === pwd || 'Password do not match',
                    }}
                />

                <CustomButton
                    text="Register"
                    onPress={handleSubmit(onRegisterPressed)}
                />

                <Text style={styles.text}>
                    By registering, you confirm that you accept our
                    <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use</Text> and
                    <Text style={styles.link} onPress={onPrivacyPressed}> Privacy Policy.</Text>
                </Text>
                <SocialSignInButtons />
                <CustomButton
                    text="Have an account? Sign in"
                    onPress={onSignInPressed}
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
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        margin: 10,
        marginBottom: 30,
        marginTop: 30,
    },
    text: {
        color: "white",
        marginVertical: 10,
    },
    link: {
        color: "#FDB075",
    },
});

export default SignUpScreen;