import { StyleSheet, Text, TouchableOpacity, View, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import RBSheet from "react-native-raw-bottom-sheet";
import { height, totalSize, width } from 'react-native-dimension';
import { ButtonColored, ButtonWithIcon, Icons, MediumText, MediumTitle, PrimaryImage, RegularText, RowWrapper, RowWrapperBasic, SmallTitle, Spacer, Spacers, Texts, Wrapper, Wrappers } from '..';
import { colors, fontFamily } from '../../constants';
import { Icon } from 'react-native-elements';


export const BottomSheet = ({ navigation, innerRef, heights, onCameraPress, onGalleryPress, onClosePress }) => {
    const RBSheet1 = useRef();

    return (
        <RBSheet
            ref={innerRef}
            closeOnDragDown={true}
            closeOnPressMask={true}
            height={heights}
            customStyles={{

                draggableIcon: {
                    backgroundColor: colors.appButton1
                },
                container: {
                    backgroundColor: '#fff',
                    borderTopLeftRadius: totalSize(2.5),
                    borderTopRightRadius: totalSize(2.5),
                }
            }}
        >
            <View style={{ marginHorizontal: width(5), }}>
                <Wrapper style={{ alignItems: 'flex-end', }}>
                    <ButtonWithIcon
                        iconName={'close'}
                        iconType={'antdesign'}
                        iconColor={colors.appBgColor1}
                        buttonColor={colors.appButton1}
                        buttonStyle={{ height: height(4), width: height(4), borderRadius: height(2) }}
                        iconSize={totalSize(2.4)}
                        onPress={onClosePress}
                    />
                </Wrapper>
                <Spacer isBasic />
                <RowWrapperBasic>
                    <Wrapper style={{ marginRight: width(4) }}>
                        <ButtonWithIcon
                            iconName={'camera'}
                            iconType={'feather'}
                            iconColor={colors.appIcon5}
                            buttonColor={colors.appButton1}
                            buttonStyle={{ height: height(5), width: height(5), borderRadius: height(2.5) }}
                            iconSize={totalSize(2.1)}
                        />
                    </Wrapper>
                    <Wrapper>
                        <TouchableOpacity onPress={onCameraPress}>
                            <MediumText style={{ color: colors.darkBlue }}>Open Camera</MediumText>
                        </TouchableOpacity>

                    </Wrapper>

                </RowWrapperBasic>
                <Spacer isBasic />

                <RowWrapperBasic>
                    <Wrapper style={{ marginRight: width(4) }}>
                        <ButtonWithIcon
                            iconName={'photo'}
                            iconType={'font-awesome'}
                            iconColor={colors.appIcon5}
                            buttonColor={colors.appButton1}
                            buttonStyle={{ height: height(5), width: height(5), borderRadius: height(2.5) }}
                            iconSize={totalSize(2.1)}
                        />
                    </Wrapper>
                    <Wrapper>
                        <TouchableOpacity onPress={onGalleryPress}>
                            <MediumText style={{ color: colors.darkBlue }}>Select from gallery</MediumText>
                        </TouchableOpacity>
                    </Wrapper>


                </RowWrapperBasic>
                <Spacer isBasic />


            </View>
        </RBSheet >
    )
}



const styles = StyleSheet.create({
    paymentWrapper: {
        backgroundColor: colors.appBgColor1,
        padding: 10,
        borderRadius: totalSize(2),
        elevation: 5,
        marginHorizontal: width(5)
    },
    paymentTitle: {
        marginLeft: width(2),
        color: colors.appTextColor2,
        fontSize: totalSize(1.6)
    },
    title: {
        color: colors.appTextColor2,
        alignSelf: 'center',
        fontFamily: fontFamily.appTextBold,
        fontSize: totalSize(2.3)
    },
    description: {
        color: colors.appTextColor17,
        alignSelf: 'center',
        textAlign: 'center'
    },
    //REASONS OF CANCEL DELIVERY LIST
    reasonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.appBgColor16,
        borderRadius: totalSize(2),
        padding: 10,
        marginHorizontal: width(5)
    },
    reasonText: {
        color: colors.appTextColor2,
        fontSize: totalSize(1.6)
    },
    cancelText: {
        alignSelf: 'center',
        color: colors.appTextColor2,
        fontSize: totalSize(1.9),
    },


    dateTitleWrapper: {
        backgroundColor: colors.appBgColor19,
        padding: totalSize(1.7),
        marginHorizontal: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backIcon: {
        alignSelf: 'flex-start',
        marginRight: 5
    },
    titleText: {
        flex: 1,
        textAlign: 'center',
        color: colors.appTextColor2,
        fontSize: totalSize(1.7)
    }


})