import React from 'react';
import {View , Text , StyleSheet,Image, ScrollView} from 'react-native';


const ImageDetail = (props) => {
    return(
        <View style={styles.container}>
            <Image source={props.sourceImage}/>
            <Text style={styles.titleStyle}> {props.title} </Text>
        </View>      
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection : 'row',
        padding: 20,
    },
    titleStyle :{
        fontSize: 18,
        paddingLeft:20,
        textAlign: 'center'
    }
}
);
export default ImageDetail;