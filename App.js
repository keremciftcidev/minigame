import { StyleSheet, ImageBackground,SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen"



export default function App() {

  const [userNumber, setUserNumber] = useState()
  const [gameOver, setGameOver] = useState(true)

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber)
    setGameOver(false)
  }
  function gameOverHandler(){
    setGameOver(true)
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>
  if(userNumber){
    screen = <GameScreen onGameOver = {gameOverHandler}/>
  }
  if(gameOver && userNumber){
    screen = <GameOverScreen/>
  }

 


  return (
    <LinearGradient colors={["#829e84", "#213f13"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
       <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView> 
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    
    flex: 1,
  },
  backgroundImage:{
    opacity:0.15
  }
});
