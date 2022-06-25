import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomButton from "../../components/CustomButton";

const SocialSignInButtons = () => {
    const onSignInFacebook = () => {
        console.warn("Sign in with Facebook pressed");
    };
    const onSignInGoogle = () => {
        console.warn("Sign in with Google pressed");
    };
    const onSignInApple = () => {
        console.warn("Sign in with Apple pressed");
    };
    return (
        <>
            <CustomButton
                text="Sign in with Facebook"
                onPress={onSignInFacebook}
                bgColor='#E7EAF4'
                fgColor='#4765A9'
            />
            <CustomButton
                text="Sign in with Google"
                onPress={onSignInGoogle}
                bgColor='#FAE9EA'
                fgColor='#DD4D44'
            />
            <CustomButton
                text="Sign in with Apple"
                onPress={onSignInApple}
                bgColor='#e3e3e3'
                fgColor='#363636'
            />
        </>
    );
}
export default SocialSignInButtons;