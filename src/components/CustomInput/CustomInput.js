import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';
const CustomInput = ({ control, rules = {}, name, placeholder, secureTextEntry }) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <>
                    <View style={[styles.constainer, { borderColor: error ? 'red' : '#e8e8e8' }]}>
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            style={styles.input}
                            secureTextEntry={secureTextEntry}
                        />
                    </View>
                    {error &&( 
                    <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
                    )}
                </>
            )}
        />
    );
}

const styles = StyleSheet.create({
    constainer: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 10,
        height: 40,
    },
    input: {},
});

export default CustomInput;