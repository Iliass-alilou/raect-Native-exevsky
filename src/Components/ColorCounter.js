import React from 'react';
import {Text , View , Button , StyleSheet} from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.testStyle}>{color}</Text>
            <Button 
                onPress={()=>onIncrease()}
                title={`Increase ${color}`}
            />
            <Button 
                onPress={()=>onDecrease()}
                title={`Decrease ${color}`}
            />
        </View>
        
    );

}
const styles = StyleSheet.create({
    container : {
        
    },
    testStyle:{
        paddingBottom : 20,
        
    }
});
export default ColorCounter ;