import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm } from 'react-hook-form';

const ResetPasswordScreen = () => {
    const { control, handleSubmit } = useForm();

    const navigation = useNavigation();


    const onSubmitPressed = data => {
        navigation.navigate('Home');
      };
    
      const onSignInPressed = () => {
        navigation.navigate('SignIn');
      };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>
                
                <CustomInput
                    placeholder="Code"
                    name="code"
                    control={control}
                    rules={{ required: 'Code is required' }}
                />
                <CustomInput
                    placeholder="Enter your new password"
                    name="password"
                    control={control}
                    secureTextEntry
                    rules={{
                        required: 'Password is required',
                        minLength: {
                            value: 6,
                            message: 'Password should be at least 6 characters long',
                        },
                    }}
                />

                <CustomButton
                    text="Submit"
                    onPress={handleSubmit(onSubmitPressed)}
                />
                <CustomButton
                    text="Back to Sign in"
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

export default ResetPasswordScreen;