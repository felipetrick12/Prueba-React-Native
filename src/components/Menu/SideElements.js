import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Elements from './Elements';
import { notes } from '../../data/data';


const SideElements = () => {

    return (
    <ScrollView>
    <View style={{flex:1,backgroundColor:'black',alignSelf:'center',marginBottom:10}}>
        {
            notes.map( element => (
                <Elements
                key={element.id}
                {...element}
                />
            ))
        }
    </View>
    </ScrollView>
    );
}



export default SideElements;