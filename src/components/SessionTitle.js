import {StyleSheet, Text } from "react-native";

export default function SessionTitle ({children}){
    return (
        <Text style={styles.title}>{children}</Text>
    )
}
const styles = StyleSheet.create({
    title: {
        color: '#D47647',
        fontSize: 16,
        borderLeftColor:'#4CB1B3',
        borderLeftWidth: 5,
        padding: 6,
        lineHeight: 16,
    }
})