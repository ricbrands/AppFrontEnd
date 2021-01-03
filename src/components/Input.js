import React from 'react';
import { View, Text, TextInput } from 'react-native'

const Input = ({value, setValue, title}) => {
    return (
        <View style={{flex: 1, width: '100%'}}>
            <Text style={{fontSize: 20}}>{title}</Text>
            <TextInput
                style={{margin: 8, borderWidth: 1, borderRadius: 6,}}
                autoCorrect={false}
                value={value}
                onChangeText={(value) => { setValue(value) }}
                />
        </View>
    )
}

export default Input