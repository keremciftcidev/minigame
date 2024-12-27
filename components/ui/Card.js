import { StyleSheet ,View} from "react-native";



function Card({children}) {
    return     <View style={styles.card}>{children}</View>
    
}


const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 36,
        padding: 16,
        marginHorizontal: 24,
        backgroundColor: "#A3B899",
        borderRadius: 8,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
      }

})

export default Card;