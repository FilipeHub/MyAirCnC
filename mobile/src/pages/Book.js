import React, { useState } from 'react';
import { SafeAreaView, Text, AsyncStorage, StyleSheet, TextInput, View, TouchableOpacity, Alert} from 'react-native';

import api from '../services/api';

export default function Book({ navigation }){
    [date, setDate] = useState('');

    const id = navigation.getParam('id');
    
    async function handleSubmit(){
        const user_id = await AsyncStorage.getItem('user');

        await api.post(`/spots/${id}/bookings`,{
            date
        },{
            headers : { user_id }
        })

        Alert.alert("Solicitação de reserva enviada.");

        navigation.navigate('List');
    }

    function handleCancel(){
        navigation.navigate('List');
    }

    return( 
    <SafeAreaView styles={styles.container}>
        <View style={styles.form}>
            <Text style={styles.label}>DATA DE INTERESSE *</Text>
            <TextInput 
                style={styles.input} 
                placeholder="Qual data você quer reservar?"
                placeholderTextColor='#999'
                autoCapitalize='none'
                autoCorrect={false}
                value= {date}
                onChangeText={setDate}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit} >
                <Text style={styles.buttonText}>Solicitar reserva</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancel} >
                <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems: 'center', //Centraliza horizontalmente
        justifyContent: 'center', //Centraliza verticalmente
    },

    form:{
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },

    label : {
        fontWeight:'bold',
        color: '#444',
        marginBottom: 8,
    },

    input : {
        borderWidth:1,
        borderColor: '#DDD',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 4,
    },

    button: {
        height:42,
        backgroundColor: '#f05a5b',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },

    cancelButton: {
        marginTop: 5,
        backgroundColor: '#BBB',
    },

    buttonText:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});