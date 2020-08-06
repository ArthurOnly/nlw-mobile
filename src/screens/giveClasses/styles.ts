import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8257e5",
    flex: 1,
    justifyContent: "center",
    padding: 40,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },
  description: {
    marginTop: 24,
    color: "#d4c2ff",
    fontSize: 16,
    lineHeight: 26,
    fontFamily: "Poppins_400Regular",
    maxWidth: 240,
  },
  button: {
    marginVertical: 40,
    backgroundColor: "#04d361",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 58,
  },
  buttonText: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 16,
  },
})

export default styles
