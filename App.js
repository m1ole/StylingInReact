import React from 'react';
import {ImageBackground, StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';

const Flex = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ImageBackground source={require('./assets/kisu2.jpg')} resizeMode='cover' style={styles.image} imageStyle={styles.catLogoImg}></ImageBackground>
        <Text style={styles.kitten_slogan}>Homeless Kittens</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.aa}>
            <ImageBackground source={require('./assets/kisu_300.jpeg')} resizeMode='cover' style={styles.image} imageStyle={styles.textImage}></ImageBackground>
            <ImageBackground source={require('./assets/kisu_300.jpeg')} resizeMode='cover' style={styles.image} imageStyle={styles.textImage}></ImageBackground>
            <ImageBackground source={require('./assets/kisu_300.jpeg')} resizeMode='cover' style={styles.image} imageStyle={styles.textImage}></ImageBackground>
        </View>
        <View style={styles.bb}>
            <Text style={styles.Title}>Title 1</Text>
            <Text style={styles.TextContent}>Use Flexbox for the spacing of the Views. Remember that you can make nested flex views.</Text>
            <Text style={styles.Title}>Title 2</Text>
            <Text style={styles.TextContent}>Use Flexbox for the spacing of the Views. Remember that you can make nested flex views.</Text>
            <Text style={styles.Title}>Title 3</Text>
            <Text style={styles.TextContent}>Use Flexbox for the spacing of the Views. Remember that you can make nested flex views.</Text>
        </View>
      </View>
      <View style={styles.footer}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    flex: 1,
  },
  textImage: {
    borderBottomLeftRadius: 80,
    margin: 5
  },
  catLogoImg: {
    borderBottomRightRadius: 80,
    marginBottom: 15,
  },
  header: {
    flexBasis: 300,
    backgroundColor: 'black',
    position: 'relative',
  },
  kitten_slogan: {
    width: 250,
    height: 50,
    position: 'absolute',
    bottom: 5,
    left: 0,
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  },
  main: {
    flex: 1,
    flexDirection: 'row',
  },
  aa: {
    flexBasis: 200,
    backgroundColor: '#272838',
  },
  bb: {
    flex: 1,
    backgroundColor: '#272838',
  },
  Title: {
    color: 'white',
    fontSize: 15,
    margin: 5,
  },
  TextContent: {
    color: 'gray',
    marginHorizontal: 5,
    marginBottom: 35
  },
  footer: {
    flexBasis: 50,
    backgroundColor: 'black',
  }
});

export default Flex;