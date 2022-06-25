import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm } from 'react-hook-form';

const ForgotPasswordScreen = () => {
    const { control, handleSubmit } = useForm();
    const navigation = useNavigation();

    const onSendPressed = data => {
        navigation.navigate('NewPassword');
    };

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>
                <CustomInput
                    name="username"
                    control={control}
                    placeholder="Username"
                    rules={{
                        required: 'Username is required',
                    }}
                />
                <CustomButton
                    text="Send"
                    onPress={handleSubmit(onSendPressed)}
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

export default ForgotPasswordScreen;