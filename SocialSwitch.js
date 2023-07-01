import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Tab = ({ name, onPress, isSelected }) => {

    let style = {...styles.text}
    if(isSelected) style = { ...style, ...styles.highlight}
    return (
        <TouchableOpacity style={styles.tabContainer} onPress={onPress}>
            <Text style={style}>{name}</Text>
        </TouchableOpacity>
    )
}

const SocialSwitch = ({ onPressTab, isInstagram }) => {
    return (
        <View style={styles.headerContainer}>
            <Tab
                name={"Instagram"}
                onPress={() => onPressTab(true)}
                isSelected={isInstagram}
            />
            <Tab
                name={"Facebook"}
                onPress={() => onPressTab(false)}
                isSelected={!isInstagram}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center'
    },
    tabContainer: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: "white",
        borderRadius: 4,
        marginTop: '10%',
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 2
    },
    text: {
        fontSize: 15
    },
    highlight: {
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default SocialSwitch