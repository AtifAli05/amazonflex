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
        // <View style={styles.container}>
        <ImageBackground
            source={require('../assets/cc.png')} style={styles.background}
            resizeMode="cover"
        >
            {/* Header with Amazon logo and arrow */}
            <Image source={{ uri: userData.image }} style={styles.profileImage} />
            <Text style={styles.name}>{userData.name}</Text>
            <Text style={styles.status}>ON DUTY</Text>
            <Text style={styles.date}>
                {`${new Date().toLocaleDateString('en-US', {
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

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    header: {
        width: '100%',
        paddingTop: 10,  // Adjust as necessary for your header height
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ff6c00',
        paddingHorizontal: 20,
        paddingBottom: 10,
        marginTop: '10%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    logo: {
        width: 80,  // Adjust logo size
        height: 30,  // Adjust logo size
        resizeMode: 'contain',
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
        // paddingVertical: 4,
        // paddingHorizontal: 12,
        // borderRadius: 4,
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
        // borderRadius: 10,
        alignItems: 'left',
        borderColor: '#ddd',
        borderWidth: 1,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itineraryText: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: '#333',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
    },
});

export default UserProfileScreen;

