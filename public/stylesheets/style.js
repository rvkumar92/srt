import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": "100%",
        "font": "14px \"Lucida Grande\", Helvetica, Arial, sans-serif"
    },
    "header": {
        "backgroundColor": "blue"
    },
    "a": {
        "color": "#00B7FF"
    },
    "roundBox": {
        "background": "#00cc00",
        "borderRadius": 20,
        "textAlign": "center",
        "minWidth": 100,
        "width": 20,
        "marginRight": 50,
        "color": "#FFF",
        "border": "1px solid peru",
        "height": 10
    },
    "chart": {
        "width": "100%"
    }
});