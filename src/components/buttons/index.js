import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Animated, View, ActivityIndicator } from "react-native"
// import { appStyles, colors } from '../../services'
import { width, height, totalSize } from 'react-native-dimension'
import { RowWrapperBasic, Wrapper } from '../wrappers'
import { Spacer } from '../spacers'
import { useState } from 'react'
import { useRef } from 'react'
import { colors, fontFamily } from '../../constants'
import { appStyles } from '../../utilities'

export const ButtonBorderd = ({ text = '', onPress, bgColor, background, icon, textColor, style, isLoading }) => {
    return (
        <TouchableOpacity activeOpacity={.5}
            disabled={isLoading}
            style={[styles.buttonBorder, { backgroundColor: bgColor ?? null, borderColor: background ?? colors.appBorder1 }, style]}
            onPress={onPress}>
            {icon ? <RowWrapperBasic >
                {icon}
                <Spacer isSmall horizontal />
                <Text style={[styles.borderdButtonText, { color: textColor ?? colors.appTextColor1 }]}>{text}</Text>
            </RowWrapperBasic>
                : isLoading ? <ActivityIndicator color={colors.appTextColor3} />
                    : <Text style={[styles.borderdButtonText, { color: textColor ?? colors.appTextColor1 }]}>{text}</Text>}
        </TouchableOpacity>
    )
}

export const ButtonColored = ({ text = '', onPress, disabled, background, textColor, animation, duration, withIcon, style, isLoading, testStyle }) => {
    return (
        <Wrapper animation={animation} duration={duration} >
            <TouchableOpacity activeOpacity={.8}
                disabled={disabled}
                style={[styles.buttonColored, { backgroundColor: background ? background : disabled ? colors.appButton2 : colors.appButton1, }, style]}
                onPress={onPress}>
                {withIcon ? <RowWrapperBasic >
                    <Spacer isSmall horizontal />
                    <Text style={[styles.coloredButtonText, { color: textColor ?? colors.appTextColor3 },]}>{text}</Text>
                </RowWrapperBasic>
                    :
                    isLoading ? <ActivityIndicator color={colors.appTextColor3} />
                        : <Text style={[styles.coloredButtonText, { color: textColor ?? colors.appTextColor3 }, testStyle]}>{text}</Text>}
            </TouchableOpacity>
        </Wrapper>
    )
}



export const SelectableButtons = ({ buttons, onClick, animatedBtnStyle, btnStyle }) => {
    const [btnContainerWidth, setWidth] = useState(0);
    const btnWidth = btnContainerWidth / buttons.length;
    const translateX = useRef(new Animated.Value(0)).current;
    const translateXOpposit = translateX.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
    });
    const onPress = i => {
        onClick(i + 1)
        Animated.spring(translateX, {
            toValue: i * btnWidth,
            useNativeDriver: true,
            bounciness: 0,
        }).start();
    };
    return (
        <View
            style={[styles.btnContainer, btnStyle]}
            onLayout={e => setWidth(e.nativeEvent.layout.width)}>
            {buttons.map((btn, i) => (
                <TouchableOpacity
                    key={btn}
                    style={styles.btn}
                    onPress={() => onPress(i)}>
                    <Text style={styles.btnTextInactive}>{btn}</Text>
                </TouchableOpacity>
            ))}
            <Animated.View
                style={[
                    styles.animatedBtnContainer,
                    { width: btnWidth, transform: [{ translateX }] }, animatedBtnStyle
                ]}>
                {buttons.map(btn => (
                    <Animated.View
                        key={btn}
                        style={[
                            styles.animatedBtn,
                            { width: btnWidth, transform: [{ translateX: translateXOpposit }], animatedBtnStyle },
                        ]}>
                        <Text style={styles.btnTextActive}>{btn}</Text>
                    </Animated.View>
                ))}
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonBorder: {
        height: height(6.5),
        borderRadius: 10,
        ...appStyles.center,
        // marginHorizontal: width(5),
        borderWidth: 1,
    },
    borderdButtonText: {
        fontSize: totalSize(1.75),
        fontFamily: fontFamily.appTextBold,
        fontWeight: '700',
    },
    buttonColored: {
        height: height(6.5),
        borderRadius: 10,
        ...appStyles.center,
        // marginHorizontal: width(5),
    },
    coloredButtonText: {
        fontSize: totalSize(1.7),
        fontFamily: fontFamily.appTextBold,
        fontWeight: '500',
    },
    buttonRounedIcon: {
        height: width(12),
        width: width(12),
        borderRadius: 150,
        // backgroundColor: colors.appButton1,
        // ...appStyles.shadow,
        ...appStyles.center,
    },


    btnContainer: {
        height: 35,
        borderRadius: 100,
        overflow: 'hidden',
        flexDirection: 'row',
        backgroundColor: colors.appBgColor1,
        width: '100%',
        borderWidth: 1,
        borderColor: colors.appBorder1
    },
    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animatedBtnContainer: {
        height: 33,
        flexDirection: 'row',
        position: 'absolute',
        overflow: 'hidden',
        backgroundColor: colors.appButton1,
        borderRadius: 100
    },
    animatedBtn: {
        height: 33,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTextActive: {
        color: colors.appTextColor3,
        fontFamily: fontFamily.appTextMedium
    },
    btnTextInactive: {
        color: colors.appTextColor1,
        fontFamily: fontFamily.appTextMedium
    }

})