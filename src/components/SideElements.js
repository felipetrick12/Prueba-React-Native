import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Elements from './Elements';


const SideElements = () => {

    const entries = ['Ingrese algo grande, mas grande, mas , mas',2,3,4,5,6];


    return (
    <ScrollView>
    <View style={{flex:1,backgroundColor:'black',alignSelf:'center',marginBottom:10}}>
        {
            entries.map( element => (
                <Elements
                element={element}
                />
            ))
        }
    </View>
    </ScrollView>
    );
}



export default SideElements;