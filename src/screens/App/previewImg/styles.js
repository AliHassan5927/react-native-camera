import { StyleSheet } from "react-native";
import { colors } from "../../../constants";
import { height, width, totalSize } from 'react-native-dimension'

export const styles = StyleSheet.create({
    hotspotIndicator: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: colors.primary,
        zIndex: 1,
    },
    removeHotspotButton: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: colors.primary,
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    removeText: {
        color: colors.appTextColor3,
        fontSize: 12
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginTop: 5,
        paddingHorizontal: 5,
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    image: {
        flex: 1,
    },
})