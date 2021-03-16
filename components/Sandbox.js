import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Sandbox = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
            <Text style={styles.boxFive}>Five</Text>
        </View>
    );
};
const styles = StyleSheet.create({
   container: {
       flex: 1,
       paddingTop: 40,
       backgroundColor: "#ddd",
       flexDirection: "row",
       justifyContent: "flex-end",
       alignItems: "flex-end"
   },
   boxOne:{
       backgroundColor: "violet",
       padding: 50,
       flex: 1,
   },
   boxTwo:{
       backgroundColor: "green",
       padding: 40,
       flex: 3,
   },
   boxThree:{
       backgroundColor: "orange",
       padding: 30,
       flex: 1,
   },
   boxFour:{
       backgroundColor: "gold",
       padding: 20,
       flex: 1,
   },
   boxFive:{
       backgroundColor: "gray",
       padding: 10,
       flex: 1,
   },
})
export default Sandbox;