import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create(
{
    title: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        //marginTop: 50,
        marginBottom: 10,
      },
      texto: {
          textAlign: "center",
          fontSize: 15,
          color: "grey",
        },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
      },
      error: {
        textAlign: "center",
        color: "#f00",
        marginTop: 20,
      },
});
    