import React from 'react'
import { Image, StatusBar, StyleSheet, Linking, TouchableOpacity, View } from 'react-native';
import { Images, SideBar } from '../../assets'
import { appStyles } from '../../utilities'
import { useNavigation } from '@react-navigation/native';
import { MediumText, MediumTitle, RegularText, SmallTitle, TinyTitle } from '../text';
import { RowWrapper, RowWrapperBasic, Wrapper } from '../wrappers';
import { height, width, totalSize } from 'react-native-dimension'
import { SCREEN, colors } from '../../constants';
import { Icon } from 'react-native-elements';
import { Avatar, ButtonWithIcon, RoundImage } from '..';


export const MainHeader = ({ title, onPressDownload, right, onPressRight, rightIcon }) => {
    const navigation = useNavigation();
    return (
        <Wrapper style={styles.main_view}>
            <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
                <Icon name='chevron-back-outline' type='ionicon' size={22} color={colors.appIcon4} />
            </TouchableOpacity>
            <View style={styles.nameContainer}>
                <TinyTitle style={styles.pageName}>{title}</TinyTitle>
            </View>
            {(right || rightIcon) ?
                <TouchableOpacity style={styles.right} onPress={onPressRight}>
                    {rightIcon
                        ?? <RegularText color={colors.appTextColor2} >
                            {right}
                        </RegularText>}
                </TouchableOpacity>
                : <View style={styles.right} />}
        </Wrapper>
    );
};


export const styles = StyleSheet.create({
    main_view: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        // height: height(7),
    },
    backIcon: {
        marginRight: 10,
        flex: 1,
        alignItems: 'flex-start',
    },
    nameContainer: {
        flex: 3,
        justifyContent: 'center',
    },

    pageName: {
        color: colors.appTextColor5,
        fontSize: totalSize(2.2),
        alignSelf: 'center'

    },
    right: {
        flex: 1,
        alignItems: 'flex-end',
    },

})