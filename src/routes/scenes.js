import React from "react";
import { Actions, Scene } from "react-native-router-flux";

import HomeContainer from "./home/containers/homecontainer";

const scenes = Actions.create(
    <Scene key = "root" hideNavBar>
        <Scene key="home" component={HomeContainer} title="Home" initial />
    </Scene>
);

export default scenes;