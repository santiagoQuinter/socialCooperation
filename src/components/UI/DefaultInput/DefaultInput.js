// componente genérico
import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const defaultInput = props => {
    return (
        <TextInput
            underlineColorAndroid = 'transparent'
            {...props}
            // con props.style podemos redefinir los estilos del input      
            style={[styles.input, props.style]}
            />
    );
}

const styles = StyleSheet.create({
    input: {
        width:'50%',
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 10,
        padding: 5,
        marginTop: 8,
        marginBottom: 8,
    }

})

export default defaultInput;

