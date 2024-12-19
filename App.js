import { StyleSheet,View} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return(
    <LinearGradient colors={["#829e84","#213f13",]} style={styles.rootScreen}>
      <StartGameScreen/>
      </LinearGradient>
  ) 
   
  
}

const styles = StyleSheet.create({
  rootScreen:{
    backgroundColor:"#f8d3c5",
    flex:1
  }
  
});
