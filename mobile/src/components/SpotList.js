import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';

import api from '../services/api';

function SpotList( { tech, navigation } ){
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        async function loadSpots(){
            const response = await api.get('/spots', {
                params : { tech }
            })

            setSpots(response.data);
        }

        loadSpots();

    }, []);

    function handleNavigate(id){
        navigation.navigate('Book', { id });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Empresas que usam <Text style={styles.bold}>{tech}</Text> </Text>

            <FlatList
                style={styles.list}
                data={spots}
                keyExtractor={spot => spot._id}
                horizontal
                showsHorizontalScrollIndicator={false} //Esconder a barra de rolagem
                renderItem={( { item }) => (
                    <View style={styles.listItem}>
                        <Image style={styles.thumb} source={{ uri :  `http://192.168.24.109:3333/files/${item.thumbnail}` }} /> 
                        <Text style={styles.company}>{item.company}</Text>
                        <Text style={styles.price}>{item.price ? `R$${item.price}/dia` : 'GRATUITO'}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => handleNavigate(item._id)} >
                            <Text style={styles.buttonText}>Solicitar reserva</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        marginTop: 30
    },
    title: {
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    
    bold : {
        fontWeight: 'bold',
    },

    list: {
        paddingHorizontal: 20,
    },

    listItem:{
        marginRight:15,
    },

    thumb : {
        width:200,
        height:120,
        resizeMode: 'cover',
        alignSelf: 'center',
        borderRadius: 2,
    },

    company: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
    },

    price: {
        fontSize: 15,
        color: '#999',
        marginTop: 5,

    },

    button: {
        height:32,
        backgroundColor: '#f05a5b',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginTop: 15,
    },

    buttonText:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default withNavigation(SpotList);