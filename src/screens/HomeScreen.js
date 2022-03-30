import React from 'react';
import { Text, StyleSheet, View , Button, TouchableOpacity  } from 'react-native';

const HomeScreen = (props) => {
  return ( 
    <View style = {styles.container}>
      <Text style={styles.text}>Hi there</Text>
      <Button
       style={styles.buttonStyle}
       title='Go to Components Screen'
       onPress={()=>props.navigation.navigate('Components')}
      />
      {/* <TouchableOpacity onPress={()=>props.navigation.navigate('ListFriend')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
      <Button
        style={styles.buttonStyle}
        title='Go to List Demo screen'
        onPress={()=>props.navigation.navigate('ListFriend')}
      />
      <Button
        style={styles.buttonStyle}
        title='Go to Image Screen'
        onPress={()=>props.navigation.navigate('ImgScreen')}
      />
       <Button
        style={styles.buttonStyle}
        title='Go to Counter Screen'
        onPress={()=>props.navigation.navigate('CalculateScreen')}
      />

      <Button
        style={styles.buttonStyle}
        title='Go to Colors Screen'
        onPress={()=>props.navigation.navigate('ClsScreen')}
      />
       <Button
        style={styles.buttonStyle}
        title='Go to Square Color Screen '
        onPress={()=>props.navigation.navigate('sarScreenColor')}
      />

      <Button
        style={styles.buttonStyle}
        title='Go to Square Color Screen Reducer '
        onPress={()=>props.navigation.navigate('SqrScreenReducer')}
      />

      <Button
        style={styles.buttonStyle}
        title='Go to Input Text Demo '
        onPress={()=>props.navigation.navigate('Text')}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    padding:20
  },
  text: {
    fontSize: 30,
  },
  buttonStyle:{
    padding: 20
  }
});

export default HomeScreen;
