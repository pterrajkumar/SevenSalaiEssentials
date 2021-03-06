import React from "react";
import { View, Text } from "react-native";
import { Container } from "native-base";
import MapContainer from "./map_container";
import HeaderComponent from "../../../components/header_component";
import FooterComponent from "../../../components/footer_component";
import Fare from "./fare";
import Fab from "./fab";
const localDrinkLogo = require("../../../assets/images/ic_local_drink_white_3x.png");

class Home extends React.Component {
    componentDidMount(){
        this.props.getCurrentLocation();
    }
    render(){
        const region = {
            latitude:12.927276,
            longitude:77.662760,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421
        }

        return(
            <Container>
                <HeaderComponent logo={localDrinkLogo} />
                {this.props.region.latitude &&
                    <MapContainer 
                        region={this.props.region} 
                        getInputData={this.props.getInputData} 
                        toggleSearchResultsModal={this.props.toggleSearchResultsModal}
                        getAddressPredictions={this.props.getAddressPredictions}
                        resultTypes={this.props.resultTypes}
                        predictions={this.props.predictions}
                        getSelectedAddress={this.props.getSelectedAddress}
                        selectedAddress={this.props.selectedAddress} 
                    />
                }
                {
                    <Fab onPressAction={()=>this.props.bookDairy()}/>
                }
                {
                    this.props.fare && 
                    <Fare fare={this.props.fare}/> 
                }
                <FooterComponent />
            </Container>
        );
    }
}

export default Home;