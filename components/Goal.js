import React from 'react'
import {Button, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

const Goal = (props) => {
  return (
    <>
    <View style={{
                width: "100%",
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                paddingHorizontal: 50
            }}>
                <TextInput value={props.courseGoal} onChangeText={props.goalTextOnChange} style={{
                    borderColor: '#cccccc',
                    borderWidth: 1,
                    width: '80%',
                    marginRight: 35,
                    paddingHorizontal: 11
                }} placeholder='Your Course Goal'/>

                <Button color="green" title='ADD GOAL' onPress={props.handleAddGoal}/>
            </View>

            <View>
                <Text>List of Goals</Text>
            </View>

            <ScrollView contentContainerStyle={{alignItems: 'center'}} style={{width: '80%', display: 'flex'}}>
            {props.allGoals.map((goal, index) => (
                <View key={index} style={props.stylesOption}>
                    <Text style={{color: '#ffffff'}}>{goal}</Text>
                </View>
            ))}
            </ScrollView>
    </>
  )
}

export default Goal;