import React from 'react';
import { Text, TextInput, Button, View } from 'react-native';

const Cityinput = (props) => (
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.textInput}
            placeholder={props.placeholder}
            onChangeText={props.textChangeHandler}
            value={props.val}
        />
        <Button
            style={styles.button}
            title="Add"
            onPress={props.addHandler}
        />

    </View>
)

const styles = {
    inputContainer: {
        padding:30,
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    textInput: {
        width: '70%',
        borderWidth: 1,
        borderColor:'#bababa'
    },
    button: {
        width: '30%'
    }
}
export default Cityinput;