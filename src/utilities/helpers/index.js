import { PermissionsAndroid, Platform, } from "react-native";

export const cameraPermission = async () => {
    let permission = true
    try {
        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Camera Permission",
                    message: "This app needs access to your camera",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the camera");
                permission = true
            } else {
                permission = false
            }
        }
        else {
            permission = true
        }
    } catch (err) {
        console.warn(err);
        permission = false
    }
    return permission
};