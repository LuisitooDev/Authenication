import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm } from 'react-hook-form';

const ConfirmEmailScreen = () => {

    const { control, handleSubmit} = useForm();
    const navigation = useNavigation();

    const onConfirmPressed = data => {
        navigation.navigate('Home');
      };
    
      const onSignInPressed = () => {
        navigation.navigate('SignIn');
      };
    
      const onResendPressed = () => {
        console.warn('onResendPress');
      };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm Email</Text>

                <CustomInput
                    name="code"
                    control={control}
                    placeholder="Enter your confirmation code"
                    rules={{
                        required: 'Confirmation code is required',
                    }}
                />
                <CustomButton
                    text="Confirm"
                    onPress={handleSubmit(onConfirmPressed)}
                />
                <CustomButton
                    text="Resend code"
                    onPress={onResendPressed}
                    type='SECONDARY'
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

export default ConfirmEmailScreen;