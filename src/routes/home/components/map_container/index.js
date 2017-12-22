import React from "react";
import { View } from "native-base";
import MapView from "react-native-maps";

import SearchBox from "../search_box";
import SearchResults from "../search_results";

import styles from "./mapcontainerstyles";

export const MapContainer = ({region, getInputData, toggleSearchResultsModal, getAddressPredictions, resultTypes, predictions, getSelectedAddress, selectedAddress}) => {
    return (
        <View style = {styles.container}>
            <MapView
                provider={MapView.PROVIDER_GOOGLE}
                style={styles.map}
                region={region}
            >
                <MapView.Marker 
                    coordinate={region}
                    pinColor="green"
                />
            </MapView>
            <SearchBox 
                getInputData={getInputData} 
                toggleSearchResultsModal={toggleSearchResultsModal} 
                getAddressPredictions={getAddressPredictions}
                selectedAddress={selectedAddress} 
            />
            {
                (resultTypes.pickUp || resultTypes.dropOff) && 
                <SearchResults predictions={predictions} getSelectedAddress={getSelectedAddress} />
            }
        </View>
    )
}
export default MapContainer;