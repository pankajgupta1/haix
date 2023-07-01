import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Tab = ({ name, onPress, isSelected }) => {

    let style = {}
    if (isSelected) style = styles.highlight
    return (
        <TouchableOpacity style={styles.tabContainer} onPress={onPress}>
            <Text style={style}>{name}</Text>
        </TouchableOpacity>
    )
}

const Header = ({ onPressTab, showSentiments }) => {
    return (
        <View style={styles.headerContainer}>
            <Tab
                name={"Sentiments"}
                onPress={() => onPressTab(true)}
                isSelected={showSentiments}
            />
            <Tab
                name={"HashTags"}
                onPress={() => onPressTab(false)}
                isSelected={!showSentiments}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center'
    },
    tabContainer: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: "white",
        borderRadius: 4,
        marginTop: '10%',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        backgroundColor: 'white'
    },
    highlight: {
        fontWeight: 'bold',
    }
});

export default Header