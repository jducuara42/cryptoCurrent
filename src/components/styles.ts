import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    FlatListContentContainer:
    {
        paddingHorizontal:5,
        marginTop: Platform.OS === "android" ? 30 : 0,
    },
    spinner:
    {
        marginTop: 20,
        marginBottom: Platform.OS === "android" ? 90 : 80,
    },
    input:
    {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
});

export const stylesDetails = StyleSheet.create({
    card:
    {
        flex: 1,
        height: Platform.OS === "android" ? 90 : 85,
    },
    spacing:
    {
        flex: 1,
        padding: 5,
    },
    image:
    {
        position: "absolute",
        bottom: 5,
        right: 5,
        width: 60,
        height: 60,
    },
    name:
    {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
        paddingTop: 10,
    },
    number:
    {
        position: "relative",
        top: 1,
        left: 1,
        color: "#fff",
        fontSize: 11,
    },
    backgroundStyles:
    {
        flex:1,
        borderRadius: 15,
        padding: 10,
        backgroundColor: "grey",
    }
})