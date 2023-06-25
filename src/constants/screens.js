import { Platform } from "react-native";
import { colors } from ".";
import { height } from 'react-native-dimension'
export const SCREEN = {
    // Routes
    authStack: 'authStack',
    appStack: 'appStack',
    driverStack: 'driverStack',
    driverTab: 'driverTab',

    // AuthNavigation
    splash: 'splash',
    onboarding: 'onboarding',
    accountType: 'accountType',
    questionaire: 'questionaire',
    signUp: 'signUp',
    otp: 'otp',
    signIn: 'signIn',
    forgotPassword: 'forgotPassword',
    completeProfile: 'completeProfile',
    completeDriverProfile: 'completeDriverProfile',
    driverProfileCompleted: 'driverProfileCompleted',

    // AppNavigation
    home: 'home',
    clientHome: 'clientHome',
    setting: 'setting',
    notificationSetting: 'notificationSetting',
    feedBack: 'feedBack',
    privacyPolicy: 'privacyPolicy',
    customerSupport: 'customerSupport',
    deleteAccount: 'deleteAccount',
    verifyDeleteAccount: 'verifyDeleteAccount',
    enterPickupPoint: 'enterPickupPoint',
    selectDriver: 'selectDriver',
    driverDetail: 'driverDetail',
    history: 'history',
    myBookings: 'myBookings',
    review: 'review',
    addNewCard: 'addNewCard',
    connectingWithDriver: 'connectingWithDriver',
    trackingDelivery: 'trackingDelivery',
    orderDelivered: 'orderDelivered',
    clientProfile: 'clientProfile',

    //DriverAppNavigation
    driverHome: 'driverHome',
    driverBookings: 'driverBookings',
    driverMessages: 'driverMessages',
    driverProfile: 'driverProfile',
    driverSetting: 'driverSetting',
    driverNotificationSetting: 'driverNotificationSetting',
    driverHistory: 'driverHistory',
    driverReviews: 'driverReviews',
    driverWallet: 'driverWallet',
    driverRequestDetail: 'driverRequestDetail',
    driverViewReceipt: 'driverViewReceipt',
    driverConnectingWithUser: 'driverConnectingWithUser',
    driverPickupPoint: 'driverPickupPoint',
    driverChat: 'driverChat',

}


export const tabs = {
    screenOptions: {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.appIcon7,
        tabBarInactiveTintColor: colors.appIcon6,
        tabBarStyle: {
            // position: 'absolute', borderTopWidth: 0,
            // height: Platform.OS == 'android' ? height(8.5) : height(10),s
            elevation: 15,
            backgroundColor: colors.appBgColor1
        },
    }
};