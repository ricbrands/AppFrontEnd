import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, ActivityIndicator } from 'react-native'
import Input from '../components/Input'
import { login } from '../service/AuthService';

const Login = ({navigation}) => {

    const [ loginText, setLoginText ] = useState('')
    const [ passwordText, setPasswordText ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)

    function logIn() {
        setIsLoading(true)
        if ( loginText && passwordText ) {
            login(loginText, passwordText).then((response) => {
                if ( response.auth ) {
                    setIsLoading(false)
                    navigation.navigate('Home', { token: response.token })
                }
            })
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.loginText}>Login</Text>
            <Input title="Usuário" value={loginText} setValue={setLoginText} />
            <Input title="Senha" value={passwordText} setValue={setPasswordText} />
            <View style={{flex: 1}}>
                {isLoading ? <ActivityIndicator size="small" color="blue" /> : <Button title="Entrar" onPress={() => { logIn() }} /> }
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    loginText: {
        flex: 2,
        fontSize: 30,
    }
})