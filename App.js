import React, { useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView, Button} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log('Image Press');
  };

  const [ count, setCount ] = useState(0);
  return (
    // <View>

    //   <View style={styles.UpperContainer}>
    //     <TouchableHighlight >
    //       <Image source={require("./assets/snap.jpeg")} style={styles.photo} />
    //     </TouchableHighlight>
    //   </View>

    //   <View style={styles.LowerContainer}>
    //     <Text style={styles.textStyle}>Hello World!!!</Text>
    //   </View>

    // </View>

    // <SafeAreaView style={styles.container}>
    //   <TouchableHighlight style={styles.photoContainer} onPress={handlePress}>
    //     <Image source={require("./assets/snap.jpeg")} style={styles.photo} />
    //   </TouchableHighlight>
    //   <SafeAreaView style={styles.nameContainer}>
    //     <Text style={styles.nameAndPronouns}>Trung</Text>
    //   </SafeAreaView>
    //   <Text style={styles.textContainer}>
    //     <Text style={styles.textStyle}>Hi there, welcome to my first app! 
    //       Trung likes hiking, watching movies, and hanging out at boba shop with his friends.
    //     </Text>
    //   </Text>
    //   <View style={styles.blurbContainer} >
    //     <Text style={styles.blurb} onPress={() => Alert.alert('We are sad to see you leave us!')}>GoodBye!!!</Text>
    //   </View>

    // </SafeAreaView>


    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.upperContainer}>
          <Image style={styles.photo} source={require("./assets/snap.jpeg")}/>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Trung</Text>
        </View>
        <View style={styles.lowerContainer}>
          <Text style={styles.textStyle}>Hi there, this is Trung. At the weekend, you can find Trung at boba shop with his friends, or at the Gym

          </Text>
          <Button  onPress={() => setCount(count + 1)} 
            title = "Count with Me!!!"
            color= "red"
          />
          <Text>You clicked {count} times</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
  },
  upperContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  photo: {
    resizeMode: "center",
    width: "70%",
  },
  titleContainer: {
    backgroundColor: '#fff8dc',
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
  lowerContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fffacd",
  }, 
  textStyle: {
    fontSize: 15,
    color: "#1e90ff",
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    justifyContent: "space-around",
  },
  buttonStyle: {

  },
  // container: {
  //   flex: 1,
  // },
  // textStyle:{
  //   padding: 20,
  //   fontSize: 15,
  //   textAlign: 'center',
  //   color: '#191970'
  // },
  // photoContainer: {
  //   flex: 2,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "yellow",
  //   padding: 5,
  // },
  // nameContainer: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "#fafad2",
  // },
  // textContainer: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "#fafad2",
  // },
  // blurbContainer: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignContent: "center",
  //   backgroundColor: "#fafad2",
  // },
  // photo:{
  //   width: "80%",
  //   flex: 1,
  //   resizeMode: 'center',
  // },
  // nameAndPronouns: {
  //   fontSize: 40,
  //   justifyContent: "center",
  //   fontWeight: "bold",
  //   alignItems: "center",
  // },
  // blurb: {
  //   fontSize: 20,
  //   color: 'red',
  //   backgroundColor: 'lightblue',
  //   textAlign: 'center',
  //   borderRadius: 50,
  //   marginTop: 20,
  // },
});
