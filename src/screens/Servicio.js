import React from "react";
import {StyleSheet, View, Text, Image,TouchableOpacity} from 'react-native';

export default function Servicio(){
    return(
        <View style={styles.view}>
            
            <Image style={styles.logo} source={require("../assests/logo.png")}/>

            <TouchableOpacity style={styles.maintenanceboton}> 
            <Image style={styles.icono} source={require("../assests/maintenanceicon.png")}/>
                <Text style={styles.text}>Mantención</Text>
            </TouchableOpacity>       

            <TouchableOpacity style={styles.botonOtro}> 
            <Image style={styles.icono} source={require("../assests/otro.png")}/>
                <Text style={styles.text}>Instalacion</Text>
            </TouchableOpacity> 
            
            <TouchableOpacity style={styles.botonNosotros}> 
            <Image style={styles.icono} source={require("../assests/mas.png")}/>
                <Text style={styles.text}>Nosotros</Text>
            </TouchableOpacity> 

        
            <TouchableOpacity style={styles.botonExtintor}> 
            <Image style={styles.icono} source={require("../assests/extintor.png")}/>
                <Text style={styles.text}>Recargas</Text>
            </TouchableOpacity> 

        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        resizeMode: "center",
        height: 140,
        marginTop: 50,
        marginBottom: 50,
    },
    icono:{
        width: 80,
        height: 80
    },
    maintenanceboton: {
        marginRight: 200,
    },
    botonOtro: {
        marginLeft: 210,
        marginTop: -100
    },
    botonNosotros:{
        marginLeft: 200,
        marginTop: 20,
    },
    botonTienda: {
        marginLeft: 200,
        marginTop: 20,
    },
    botonExtintor: {
        marginRight: 200,
        marginTop: -110,
    },
    botonContacto: {
        marginRight: 200,
        marginTop: 15,
    },
    text: {
        fontSize: 18,
    },
    textLogin: {
        fontSize: 18,
        marginTop: 50,
        textAlign: "center",
        color: "#fff"
    },
    textRegistrar:{
        fontSize: 18,
        marginTop: 20
    },
    viewLogin: {
        backgroundColor: '#212778',
        paddingVertical: 5,
        paddingHorizontal: 30,
        borderRadius: 20
    },
    boton: {
        color: '#fff',
        fontSize: 18,
        backgroundColor: '#212778',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 5
    }
});