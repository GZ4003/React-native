import React from 'react';
import {Text, View, TextInput} from 'react-native'
import { styles } from '../../../styles';

const Input = ({value, placeholder, handleOnchangeText, ...props}) =>{
    return (
        <View style={styles.container}>
            <TextInput
                {...props}
                placeholder={placeholder}
                style={styles.textInput}
                onChange={(text) => handleOnchangeText(text)}
            />    
        </View>
    )
}

export default Input;