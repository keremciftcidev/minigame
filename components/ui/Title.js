import { Text  ,StyleSheet} from "react-native";
import Colors from "../../constants/colors";
Colors



function Title({children}) {
    return   <Text style={styles.title}>{children}</Text>
    
}

export default Title;

const styles = StyleSheet.create({

    title:{
        fontSize:24,
        fontWeight:"bold",
        color:"white",
        textAlign:"center",
        padding:12,
        borderColor:"white",
        borderWidth:2
    }
})

   