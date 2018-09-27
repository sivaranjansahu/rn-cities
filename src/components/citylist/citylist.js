import React from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList,Header,Footer } from 'react-native';
import Listitem from '../listitem/listitem'

const Citylist = (props) => {
    const cityOutput = props.list.map((city, index) => {
        return <Listitem key={index} cityName={city} onItemPressed={() => { props.onItemDeleted(index) }} />
    });
    //return <ScrollView style={styles.item}>{cityOutput}</ScrollView>
    return <FlatList
        data={props.list}
        renderItem={(info) => (
            <Listitem
                //key={info.item.key.toString()}
                cityName={info.item.value}
                onItemPressed={() => { props.onItemDeleted(info.item.key) }}
                keyExtractor = { (item) => item.key.toString() }
                ListHeaderComponent={<Text>Yo</Text>}
               
            />
        )}
    />
}
const styles = {
    item: {
        width: '100%'
    }
}
export default Citylist;

