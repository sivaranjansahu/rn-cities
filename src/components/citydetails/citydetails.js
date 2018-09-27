import React from 'react';
import { Text, View, StyleSheet, Modal, Button, Image } from 'react-native';

const PlaceDetails = (props) => {
    modalData = null,
    showModal=false
    if (props.selectedCity) {
        showModal=false;
        modalData = (
            <View>
                <Image source={props.selectedCity.image} />
                <Text>{props.selectedCity.value}</Text>
                <Button title="modal close" onPress={()=>props.closeModal()}/>
            </View>
        )
    }
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.selectedCity != null}
            onRequestClose={props.closeModal}
        >
            {modalData}

        </Modal>
    )
}

export default PlaceDetails;