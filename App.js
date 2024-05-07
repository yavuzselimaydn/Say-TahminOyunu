import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import GameStartScreen from './screens/GameStartScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';


export default function App() {
  const [userNumber, setUserNumber] = useState(null)
  const [gameIsOver, setGameIsOver] = useState(true)
  const [guessCounts, setGuessCounts] = useState(0)

  function sendedNumberHandler(enteredNumber){   //gamestartscreenden gelen sayıyı bu fonkda aldım
    setUserNumber(enteredNumber)                            
    setGameIsOver(false)
  }

  function gameOverHandler(numberofGuess){    
    setGameIsOver(true);                    //oyunun bittigini degiskene uygular 
    setGuessCounts(numberofGuess)
  }

  function startNewGameHandler(){
    setUserNumber(null);  //kullanıcının girdigi deger null cektim ve oyun baslama sayfasına gitti bu sayede
    setGuessCounts(0);
  }

  let screen = <GameStartScreen onSendNumber={sendedNumberHandler}/>;  //app bu sayfadan baslar.

  if(userNumber){                      //gamestartscreenden sayı gelmis ise yanı null degilse ekran degistirir
    screen = <GameScreen               //screen degistim ve sayıyı oyun penceresine yolladim
      userNumber={userNumber} 
      onGameOver={gameOverHandler}   
    />
  }

  if(gameIsOver && userNumber){       //sayı ve gameısover true ise oyun bitti demek son sayfaya gidilri.
    screen = <GameOverScreen
        roundsNumber={guessCounts}
        userNumber={userNumber}
        onStartNewGame={startNewGameHandler}
    />;
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={['rgba(0,0,0,0.8)', 'transparent']}
    >
      <ImageBackground                         //arkaya resim koymayı saglar
        style={styles.container}
        source={require('./assets/back.jpg')}
        imageStyle={styles.backImg}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImg:{
    opacity:0.3
  }
});
