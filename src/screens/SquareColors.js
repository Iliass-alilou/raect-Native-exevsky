import React ,{useState} from 'react';
import {Text , View , Button , StyleSheet} from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const SquareScreen = () => {
    const [red , setRed] = useState(0);
    const [green , setGreen] = useState(0);
    const [blue , setBlue] = useState(0);

    const COLOR_INCREMENT = 20;
    
    const setColor = (color , change) => {
        switch(color){
            case 'red':
                red + change > 250 || red + change < 0 ? null : setRed(red+change)  
                return;
            case 'green':
                green + change > 250 || green + change < 0 ? null : setGreen(green+change)  
                return;
            case 'blue':
                blue + change > 250 || blue + change < 0 ? null : setBlue(blue+change)  
            default:
                return;
        }
    };
    console.log(red)
    return (
        <View style = {styles.container}>
            <ColorCounter 
                color='Red ' 
                onIncrease = {()=>setColor('red', COLOR_INCREMENT)} 
                onDecrease = {()=>setColor('red', -1*COLOR_INCREMENT)} 
            />
            <ColorCounter
                color='Green '
                onIncrease = {()=>setColor('green', COLOR_INCREMENT)} 
                onDecrease = {()=>setColor('green', -1*COLOR_INCREMENT)}
            />
            <ColorCounter
                color='Blue '
                onIncrease = {()=>setColor('blue', COLOR_INCREMENT)} 
                onDecrease = {()=>setColor('blue', -1*COLOR_INCREMENT)}
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
export default SquareScreen ;