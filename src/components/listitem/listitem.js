import React from 'react';
import { Text,View ,TouchableOpacity,Image} from 'react-native'

const Listitem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listitem}> 
   
        <Text >{props.cityName}</Text>
    </View>
    </TouchableOpacity>
)

const styles = {
    listitem: {
        width: '100%',
        backgroundColor: '#dedede',
        padding: 5,
        marginBottom: 5,
        
    }
}
export default Listitem;