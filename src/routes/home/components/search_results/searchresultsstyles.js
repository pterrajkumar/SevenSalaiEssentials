import { Dimensions } from "react-native";
var width = Dimensions.get("window").width;
const styles = {
    searchResultsWrapper:{
        top:158,
        position:"absolute",
        width:width,
        height:1000,
        backgroundColor:"#fff",
        opacity:0.9
    },
    primaryText:{
        fontWeight:"bold",
        color:"#373737"
    },
    secondaryText:{
        fontStyle:"italic",
        color:"#7D7D7D"
    },
    leftContainer:{
        flexWrap:"wrap",
        alignItems:"flex-start"
        //borderLeftCorner:"#7D7D7D"
    },
    leftIcon:{
        fontSize:20,
        color:"#7D7D7D"
    },
    distance:{
        fontSize:10
    }
};

export default styles;