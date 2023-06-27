import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AbsoluteWrapper, Wrapper } from '../wrappers'
import { height, totalSize, width } from 'react-native-dimension'
import { colors, sizes } from '../../constants'
import { appStyles } from '../../utilities'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export const RoundBgIcon = ({ onPress, iconName, iconType }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.bgWrapper}>
            <Icon size={totalSize(2.5)} color={colors.appIcon1} name={iconName} type={iconType} onPress={onPress} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({

    bgWrapper: {
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: colors.gray,
        height: height(5),
        width: height(5),
        borderRadius: height(2.5)
    }
})