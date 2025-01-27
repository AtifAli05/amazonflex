import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { UserContext } from '../utils/context';
import AntDesign from '@expo/vector-icons/AntDesign';

const UserProfileScreen = ({ navigation }) => {
    const { userData } = useContext(UserContext);

    if (!userData || !userData.name || !userData.image) {
        return (
            <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
                <Text style={styles.errorText}>No user data available.</Text>
            </View>
        );
    }
    return (
        <ImageBackground
            source={require('../assets/cc.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.contentContainer}>
                <Image source={{ uri: userData?.image?.uri }} style={styles.profileImage} />
                <Text style={styles.name}>{userData?.name}</Text>
                <Text style={styles.status}>ON DUTY</Text>
                <Text style={styles.date}>{`${new Date().toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                })}, ${new Date().toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                })}`}
                </Text>
                <TouchableOpacity style={styles.itineraryButton}>
                    <Text style={styles.itineraryText}>TODAY'S ITINERARY</Text>
                    <AntDesign name="right" size={18} color="black" />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    profileImage: {
        width: 350,
        height: 350,
        borderRadius: 175,
        marginBottom: 15,
        borderWidth: 2,
        marginTop: '5%',
        borderColor: '#ff6c00',
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    status: {
        backgroundColor: '#ff6c00',
        color: '#fff',
        fontSize: 14,
        marginBottom: 8,
    },
    date: {
        fontSize: 16,
        color: '#555',
        marginBottom: 20,
    },
    itineraryButton: {
        width: '100%',
        paddingVertical: 15,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderColor: '#ddd',
        borderWidth: 1,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itineraryText: {
        fontSize: 16,
        color: '#333',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
    },
});

export default UserProfileScreen;