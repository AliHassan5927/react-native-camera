import React, { useRef, useState } from 'react';
import { View, Image, TouchableWithoutFeedback, TouchableOpacity, TextInput } from 'react-native';
import { MediumText, Wrapper } from '../../../components';
import { styles } from './styles';

const PreviewImg = ({ navigation, route }) => {
    const { uri } = route.params;
    const [hotspots, setHotspots] = useState([]);

    const handleImagePress = (event) => {
        const { locationX, locationY } = event.nativeEvent;
        setHotspots((prevHotspots) => [
            ...prevHotspots,
            {
                x: locationX - 10,
                y: locationY - 10,
                description: '',
            },
        ]);
    };

    const handleHotspotPress = (index) => {
        console.log('Hotspot index:', index);
    };

    const handleDescriptionChange = (index, description) => {
        setHotspots((prevHotspots) =>
            prevHotspots.map((hotspot, hotspotIndex) =>
                hotspotIndex === index ? { ...hotspot, description } : hotspot
            )
        );
    };

    const removeHotspot = (index) => {
        setHotspots((prevHotspots) => {
            const updatedHotspots = [...prevHotspots];
            updatedHotspots.splice(index, 1);
            return updatedHotspots;
        });
    };

    const renderHotspots = () => {
        return hotspots.map((hotspot, index) => (
            <Wrapper key={index} style={{ position: 'absolute', left: hotspot.x, top: hotspot.y }}>
                <TouchableOpacity
                    style={styles.hotspotIndicator}
                    onPress={() => handleHotspotPress(index)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter description"
                    value={hotspot.description}
                    onChangeText={(text) => handleDescriptionChange(index, text)}
                />
                <TouchableOpacity style={styles.removeHotspotButton} onPress={() => removeHotspot(index)} >
                    <MediumText style={styles.removeText}>x</MediumText>
                </TouchableOpacity>
            </Wrapper>
        ));
    };

    return (
        <Wrapper style={styles.container}>
            <TouchableWithoutFeedback onPress={handleImagePress}>
                <Image resizeMode='contain' style={styles.image} source={{ uri: uri }} />
            </TouchableWithoutFeedback>
            {renderHotspots()}
        </Wrapper>
    );
};





export default PreviewImg;
