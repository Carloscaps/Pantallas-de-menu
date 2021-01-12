import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer"
import StackNavigation from "./StackNavigation";
import Historial from "../screens/Historial";
import Servicio from "../screens/Servicio";
import Menu from "../screens/Menu";

const Drawer = createDrawerNavigator();

export default function Navigation () {
    return (

    
    <Drawer.Navigator initialRouteName="app">
        <Drawer.Screen name="Mis Productos" component={StackNavigation}/>
        <Drawer.Screen name="Historial" component={Historial}/>
        <Drawer.Screen name="Servicios" component={Servicio}/>
        <Drawer.Screen name="Menu" component={Menu}/>
    </Drawer.Navigator>
    );
}
