import React from 'react';
import { StyleSheet, Image, View, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4f565E';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/65043062?v=4';
const urlToMyGithub = 'https://github.com/Adal1942';

const App = () => {

  const handlePressGoToGithub = async ()=>{
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
       await Linking.openURL(urlToMyGithub);
    }
  }

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle= "light-content"/>
      <View style={style.content}>
        <Image 
        accessibilityLabel="Adauto no shopping segurando um milk-shake"
        style={style.avatar} 
        source={{uri: imageProfileGithub}}/>

        <Text 
        accessibilityLabel="Nome: Adauto Nascimento"
        style={[style.defaultText, style.name]}>Adauto Nascimento</Text>

        <Text 
        accessibilityLabel="Nickname: Adal1942"
        style={[style.defaultText, style.nickname]}>Adal1942</Text>

        <Text
        accessibilityLabel="Descrição: Estudando e inventando novas coisas com programação."
        style={[style.defaultText, style.description]}>Estudando e inventando novas coisas com programação.</Text>

        <View style={style.box}>
          <View> 
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
          </View>
          <View>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
          </View>
          <View>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
          </View>
          <View>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
          </View>
          <View>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
          </View>
          <View>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
          </View>
          <View>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
          </View>
          <View>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
          </View>
          <View>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
          </View>
          <View>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
          </View>
          <View>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
          </View>
          <View>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
          </View>
          <View>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
          </View>
          <View>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
          </View>
          <View>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxRed}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
          </View>
          <View>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxBlack}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
          </View>
          <View>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
            <Text style={style.boxColor}></Text>
          </View>
        </View>

        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text 
            style={[style.defaultText, style.textButton]}>Open in Github</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container:{
    backgroundColor: colorGithub,
    flex: 1,
    justifyContent: 'center',
  },
  content:{
    alignItems: 'center',
    padding: 20,
  },
  avatar:{
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText:{
    color: colorFontGithub,
  },
  name:{
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname:{
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description:{
    fontWeight: 'bold',
    fontSize: 14,
  },
  button:{
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  textButton:{
    fontWeight: 'bold',
    fontSize: 16,
  },
  box:{
    flexDirection: 'row',
    padding: 20,
  },
  boxColor:{
    width: 10,
    height: 10,
    fontSize: 10,
    color: 'white',
    backgroundColor: 'white',
    borderRadius: 4,
  },
  boxBlack: {
    width: 10,
    height: 10,
    fontSize: 10,
    backgroundColor: 'black',
    borderRadius: 2,
  },
  boxRed: {
    width: 10,
    height: 10,
    fontSize: 10,
    backgroundColor: 'red',
    borderRadius: 2,
  },
});