import React,{useState} from 'react';
import {View , Text , StyleSheet,Button } from 'react-native';

const CounterScreen = () => {
    const [counter , setCounter ] = useState(0);
    return(
       <View style ={styles.container}>
            <Button
            title='plus'
            onPress={()=> setCounter(counter+1)}
            />
            <Text style={styles.styleText}>{counter}</Text>
            <Button
            title='minus'
            onPress={()=> setCounter(counter-1)}
            />
       </View>
    );
}
const styles = StyleSheet.create({
    container : {
        padding : 20
    },
    styleText : {
        textAlign : 'center',
        fontSize : 20
    }
});
export default CounterScreen;