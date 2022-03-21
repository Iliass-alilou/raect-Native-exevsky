import React from 'react';
import { Text, StyleSheet, View , Button, TouchableOpacity  } from 'react-native';

const HomeScreen = (props) => {
  return ( 
    <View>
      <Text style={styles.text}>Hi there</Text>
      <Button
       style={styles.buttonStyle}
       title='Go to Components Screen'
       onPress={()=>props.navigation.navigate('Components')}
      />
      <TouchableOpacity onPress={()=>props.navigation.navigate('ListFriend')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
      <Button
       style={styles.buttonStyle}
       title='Go to Image Screen'
       onPress={()=>props.navigation.navigate('ImgScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttonStyle:{
    
  }
});

export default HomeScreen;
