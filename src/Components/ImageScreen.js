import React from 'react';
import {View , Text , StyleSheet} from 'react-native';
import ImageDetail from '../Components/ImageDetail'

const ImageScreen = () => {
    return(
       <View>
            <ImageDetail title = "Forest" sourceImage={require('../../assets/forest.jpg')}/>
            <ImageDetail title = "Beach" sourceImage={require('../../assets/beach.jpg')}/>
            <ImageDetail title = "Mountain" sourceImage={require('../../assets/mountain.jpg')}/>
       </View>
    );
}

const styles = StyleSheet.create(

);
export default ImageScreen;