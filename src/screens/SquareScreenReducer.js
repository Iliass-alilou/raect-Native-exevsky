import React ,{useState , useReducer} from 'react';
import {Text , View , Button , StyleSheet} from 'react-native';
import ColorCounter from '../Components/ColorCounter';


const COLOR_INCREMENT = 15;

const reducer = (state) => {
    
}

const SquareScreenReducer = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    console.log(state);
    return (
        <View style = {styles.container}>
            <ColorCounter 
                color='Red ' 
                onIncrease = {()=> } 
                onDecrease = {()=> } 
            />
            <ColorCounter
                color='Green '
                onIncrease = {()=> } 
                onDecrease = {()=> }
            />
            <ColorCounter
                color='Blue '
                onIncrease = {()=> } 
                onDecrease = {()=> }
            />
            <View style={{height:150, width:150, backgroundColor:`rgb(${red},${green},${blue})`}}/>
        </View>
        
        
    );

}
const styles = StyleSheet.create({
    container : {
        padding : 20
    },
    
});
export default SquareScreenReducer ;