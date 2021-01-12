import React from "react";
import {IconButton} from "react-native-paper";
import {createStackNavigator} from "@react-navigation/stack";
import Producto from "../screens/Producto";
import Movie from "../screens/Movie";
import Historial from "../screens/Historial";
import Servicio from "../screens/Servicio";
import Menu from "../screens/Menu";

const Stack = createStackNavigator();
    export default function StackNavigation(props) {
        console.log(props);
        const {navigation} = props;

        const buttonLeft = () => {
            return <IconButton icon="menu" onPress={() => navigation.openDrawer()} />;
            
        };
        return (
            <Stack.Navigator>
                <Stack.Screen name ="producto"
                 component= {Producto}
                  options={{title:'Mis Productos', headerLeft: () => buttonLeft()}}
                />
                {/* <Stack.Screen name ="otra screen"
                 component= {OtraScreen}
                  options={{title:'',headerLeft: () => buttonLeft()}}
                /> */}
                <Stack.Screen name ="historial"
                 component= {Historial}
                  options={{title:'',headerLeft: () => buttonLeft()}}
                />
                <Stack.Screen name ="servicio"
                 component= {Servicio}
                  options={{title:'',headerLeft: () => buttonLeft()}}
                />
                <Stack.Screen name ="menu"
                 component= {Menu}
                  options={{title:'',headerLeft: () => buttonLeft()}}
                />
            </Stack.Navigator>
        )
    }
