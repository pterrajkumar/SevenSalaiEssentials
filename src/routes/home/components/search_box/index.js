import React from "react";
import { Text } from "react-native";
import { View, InputGroup, Input } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./searchboxstyles";

export const SearchBox = ({getInputData, toggleSearchResultsModal, getAddressPredictions, selectedAddress}) => {
    const { selectedPickUp, selectedDropOff } = selectedAddress || {};
    function handleInput(key, val){
        console.log(key);
        console.log(val);
        getInputData({
            key,
            value:val
        });
        getAddressPredictions();        
    }
    return(
        <View style={styles.searchBox}>
            <View style={styles.inputWrapper}>
                <Text style={styles.label}>PICK UP</Text>
                <InputGroup>
                    <Icon name="search" size={15} color="#FF5E3A"/>
                    <Input onFocus={()=> toggleSearchResultsModal("pickUp")} style={styles.inputSearch} placeholder="Choose pick-up location" 
                    onChangeText={handleInput.bind(this, "pickUp")} value={ selectedPickUp && selectedPickUp.name } />
                </InputGroup>
            </View>
            <View style={styles.secondInputWrapper}>
                <Text style={styles.label}>DROP OFF</Text>
                <InputGroup>
                    <Icon name="search" size={15} color="#FF5E3A"/>
                    <Input onFocus={()=> toggleSearchResultsModal("dropOff")} style={styles.inputSearch} placeholder="Choose drop-off location" 
                    onChangeText={handleInput.bind(this, "dropOff")} value={ selectedDropOff && selectedDropOff.name } />
                </InputGroup>
            </View>    
        </View>
    );
};

export default SearchBox;