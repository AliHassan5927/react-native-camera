import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ActivityIndicator, SafeAreaView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { SCREEN, colors, fontSize, } from '../../../constants';
import { cameraPermission } from '../../../utilities';
import Carousel from 'react-native-reanimated-carousel';
import * as RNFS from 'react-native-fs';
import { totalSize, height } from 'react-native-dimension'
import { Icon } from 'react-native-elements';
import { AbsoluteWrapper, MediumText, RoundBgIcon, Wrapper } from '../../../components';
import { styles } from './styles';
const width = Dimensions.get('window').width;

const Home = ({ navigation }) => {
    const { navigate } = navigation

    const [lastCapturedPhoto, setLastCapturedPhoto] = useState(null);
    const [permissionEnabled, setPermissionEnabled] = useState(false);
    const [photos, setPhotos] = useState([]);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(-1);
    const [torchOn, setTorchOn] = useState(false);
    const [frontCamera, setFrontCamera] = useState(false);

    const devices = useCameraDevices();
    const device = frontCamera ? devices.front : devices.back;
    const cameraRef = useRef();
    const carouselRef = useRef();

    useEffect(() => {
        cameraPermission().then(() => {
            setPermissionEnabled(true);
        });
    }, []);

    const handleCapturePhoto = async () => {
        if (cameraRef?.current) {
            const photo = await cameraRef.current.takePhoto({ quality: 'high' });
            const savedPhotoPath = await handleSavePhoto(photo.path);
            setLastCapturedPhoto(savedPhotoPath);
            setCurrentPhotoIndex(-1);
            setPhotos(prevPhotos => [...prevPhotos, savedPhotoPath]);
        }
    };

    const handleSavePhoto = async (photoPath) => {
        const folderPath = `${RNFS.DocumentDirectoryPath}/NewCapturedPhotos`;
        await RNFS.mkdir(folderPath);
        const fileName = `${Date.now()}.jpg`;
        const destPath = `${folderPath}/${fileName}`;
        await RNFS.copyFile(photoPath, destPath);
        return destPath;
    };


    if (!permissionEnabled) {
        return (
            <Wrapper style={{}}>
                <MediumText style={[fontSize.h3, { color: colors.primary }]}>Camer Permission Denied</MediumText>
            </Wrapper>
        );
    }

    if (device == null) return <ActivityIndicator color={colors.primary} size={'large'} />;

    return (

        <SafeAreaView style={{ flex: 1 }}>
            {currentPhotoIndex === -1 ? (
                <>
                    <Camera style={{ flex: 1 }} torch={torchOn ? 'on' : 'off'} ref={cameraRef} device={device} photo={true} isActive={true} />
                    <Wrapper style={styles.captureButton}>
                        <Icon size={totalSize(7)} color={'white'} name='circle' type='feather' onPress={handleCapturePhoto} style={styles.captureButton} />
                    </Wrapper>

                    <AbsoluteWrapper style={styles.torchButton}>
                        <RoundBgIcon iconName={torchOn ? 'flash' : 'flash-off'} iconType={'ionicon'} onPress={() => setTorchOn(!torchOn)} />
                    </AbsoluteWrapper>
                    <AbsoluteWrapper style={styles.toggleCamera}>
                        <RoundBgIcon iconName={'flip-camera-android'} iconType={'material-icon'} onPress={() => setFrontCamera(!frontCamera)} />
                    </AbsoluteWrapper>
                    {lastCapturedPhoto && (
                        <TouchableOpacity activeOpacity={0.8} onPress={() => setCurrentPhotoIndex(0)}
                            style={styles.lastCapturedPhotoWrapper}
                        >
                            <Image style={styles.lastCapturedPhoto} source={{ uri: `file://${lastCapturedPhoto}` }} />
                        </TouchableOpacity>
                    )}
                </>
            ) : (
                <>
                    <Wrapper style={{ flex: 1, }}>
                        <Carousel
                            ref={carouselRef}
                            data={photos}
                            width={width}
                            // height={width / 2}
                            initialIndex={currentPhotoIndex}
                            keyExtractor={item => item}
                            loop={false}
                            renderItem={({ item }) => {
                                const imageUri = `file://${item}`;
                                return (
                                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigate(SCREEN.previewImg, { uri: imageUri })}>
                                        <Image resizeMode='contain' style={styles.carouselImg} source={{ uri: imageUri }} />
                                    </TouchableOpacity>
                                );
                            }}

                        />
                    </Wrapper>
                </>
            )}
        </SafeAreaView>
    );




}

export default Home;
