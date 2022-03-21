import Recat from 'react';
import {View , Text , FlatList, StyleSheet } from 'react-native';

const ListScreen  = () => {
    const friends = [
        {name:'Fiend #1'},
        {name:'Fiend #2'},
        {name:'Fiend #3'},
        {name:'Fiend #4'},
        {name:'Fiend #5'},
        {name:'Fiend #6'},
        {name:'Fiend #7'},
        {name:'Fiend #8'},
        {name:'Fiend #9'},
        {name:'Fiend #10'},
        {name:'Fiend #11'},
        {name:'Fiend #12'}
    ];
    return (
        <View style={styles.container}>
            <FlatList
            keyExtractor={(friend) =>friend.name}
            // horizontal={true}
            // showsHorizontalScrollIndicator={false}
            data={friends}
            renderItem={({item}) => {
                return(
                    <Text style = {styles.textStyle}>{item.name}</Text>
                );
            } }
        />
        </View>
    );
}
const styles =  StyleSheet.create({
    textStyle : {
        marginVertical : 50,
    },
    container:{
        padding :20 ,
    }
});
export default ListScreen ;
