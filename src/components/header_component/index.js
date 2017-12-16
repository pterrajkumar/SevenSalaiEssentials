import React from "react";
import { Text, Image } from "react-native";
import { Header, Left, Right, Body, Button } from "native-base";
import styles from "./headercomponentstyles";
import Icon from "react-native-vector-icons/FontAwesome";

export const HeaderComponent = ({logo}) => {
    return (
        <Header style={{backgroundColor:"#FF5E3A"}} iosBarStyle="light-content">
            <Left>
                <Button transparent>
                    <Icon name="bars" style={styles.icon}/>
                </Button>
            </Left>
            <Body>
                <Image resizeMode="contain" style={styles.logo} source={logo} />
            </Body>
            <Right>
                <Button transparent>
                        <Icon name="gift" style={styles.icon}/>
                </Button>
            </Right>
        </Header>
    );
}
export default HeaderComponent;