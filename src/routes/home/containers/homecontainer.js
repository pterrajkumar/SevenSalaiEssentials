import { connect } from "react-redux";
import home from "../components/home";
import { 
    getCurrentLocation, 
    getInputData, 
    toggleSearchResultsModal,
    getAddressPredictions,
    getSelectedAddress
} from "../modules/home";

const  mapStateToProps = (state) => ({
    region: state.home.region,
    inputData: state.home.inputData || {},
    resultTypes: state.home.resultTypes || {},
    predictions: state.home.predictions || [],
    selectedAddress:state.home.selectedAddress || {}
});
const mapActionCreators = {
    getCurrentLocation,
    getInputData,
    toggleSearchResultsModal,
    getAddressPredictions,
    getSelectedAddress
};

export default connect(mapStateToProps, mapActionCreators)(home);
