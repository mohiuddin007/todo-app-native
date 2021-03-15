import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My todos</Text>
        </View>
    );
};
const styles = StyleSheet.create({
       header: {
            height: 60,
            padding: 18,
            backgroundColor: "coral"
       },
       title: {
           textAlign: "center",
           color: "white",
           fontSize: 24, 
           fontWeight: "bold"
       }
})

export default Header;