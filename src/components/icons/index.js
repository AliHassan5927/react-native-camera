import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AbsoluteWrapper, Wrapper } from '../wrappers'
import { height, totalSize, width } from 'react-native-dimension'
import { colors, sizes } from '../../constants'
import { appStyles } from '../../utilities'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export const RoundBgIcon = ({ children, bgColor, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={.5} >
            <Wrapper style={[styles.roundWrapper, { backgroundColor: bgColor ?? colors.white20 }, style]}>
                {children}
            </Wrapper>
        </TouchableOpacity>
    )
}




const styles = StyleSheet.create({
    roundWrapper: {
        height: height(5),
        width: height(5),
        // backgroundColor: 'red',
        borderRadius: height(3),
        ...appStyles.center
    },

})