import {StatusBar} from 'expo-status-bar';
import { useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
// import Goal from 'components/Goal';

export default function App() {
    const [courseGoal, setCourseGoal] = useState("");
    const [allGoals, setAllGoals] = useState([]);

    const goalTextOnChange = (enteredText) => {
        setCourseGoal(enteredText);
    };
    
    const handleAddGoal = () => {
        if (!!courseGoal && courseGoal!== "") {
            setAllGoals([...allGoals, courseGoal]);
        }
    };

    return (
        // For Practise code =======>
        // <View style={styles.container}>
        //   <Text style={{color: "red"}}>Open up App.js to start working on your app!</Text>
        //   <Text>Open up App.js to start working on your app!</Text>

        //   <View>
        //     <Text style={styles.text}>Hello World..!</Text>
        //   </View>

        //   <Button style={{backgroundColor: 'red'}} title='Click Me' />
        // </View>

        //----------------------------------------------------

        // For Goals react-native app =======>
        <View style={styles.appContainer}>
            <View style={{
                width: "100%",
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                paddingHorizontal: 50
            }}>
                <TextInput value={courseGoal} onChangeText={goalTextOnChange} style={{
                    borderColor: '#cccccc',
                    borderWidth: 1,
                    width: '80%',
                    marginRight: 35,
                    paddingHorizontal: 11
                }} placeholder='Your Course Goal'/>
                <Button title='ADD GOAL' onPress={handleAddGoal}/>
            </View>

            <View>
                <Text>List of Goals</Text>
            </View>

            <View style={{width: '100%', display: 'flex', alignItems: 'center'}}>
                {allGoals.map((goal, index) => (
                    <View key={index} style={styles.option}>
                        <Text style={{color: '#ffffff'}}>{goal}</Text>
                    </View>
                ))}
            </View>
        </View>

        //----------------------------------------------------

        // <View style={styles.container}>
        //   {/* 1 */}
        //   <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
        //     <Text style={styles.Text}>1</Text>
        //   </View>

        //   {/* 2 */}
        //   <View style={{flex: 2, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
        //   <Text style={styles.Text}>2</Text>
        //   </View>

        //   {/* 3 */}
        //   <View style={{flex: 1, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center'}}>
        //   <Text style={styles.Text}>3</Text>
        //   </View>
        // </View>
    );
}

const styles = StyleSheet.create({
    // Literal based js Object ekak
    container: {
        flexDirection: "row",
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: 'blue',
        margin: 30,
        width: "80%",
        height: 300
    },

    Text: {
        fontSize: 35,
        color: 'white'
    },

    appContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 100,
        gap: 20,
    },

    button: {
        borderWidth: 2,
        backgroundColor: 'red'
    },

    text: {
        margin: 16,
        borderWidth: 2, // 2px
        borderColor: 'red',
        fontSize: 20
    },

    option: {
        backgroundColor: '#1976D2',
        padding: 10,
        width: '70%',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
    }
});