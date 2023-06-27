import { StyleSheet } from "react-native";
import { colors } from "../../../constants";
import { height, width, totalSize } from 'react-native-dimension'

export const styles = StyleSheet.create({
    captureButton: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
    },
    torchButton: {
        top: 30,
        right: 20,
    },
    toggleCamera: {
        top: 80,
        right: 20,
    },

    lastCapturedPhoto: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 3,
        borderColor: colors.primary,
    },
    lastCapturedPhotoWrapper: {
        position: 'absolute',
        bottom: 30,
        left: 25
    },
    carouselImg: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        backgroundColor: colors.appBgColor3
    }
})