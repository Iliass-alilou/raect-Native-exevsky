import React,{useState} from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { textDecorationColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";


const TextInputScreen = () => {
    const [name, setName] = useState('Name');
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
                autoCapitalize="none"
                autoCorrect = {false}
            />
            {name.length < 4 ?
                <Text>the password should contains more then 4 charterers  </Text>
                : <Text>{ name }</Text>
            }
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        padding : 20
    },
    input : {
        height: 40,
        borderWidth: 2,
        borderRadius: 10
        
    }
});
export default TextInputScreen