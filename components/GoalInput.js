import React from 'react'
import { TextInput } from 'react-native';

const GoalInput = ({ courseGoal, goalTextOnChange }) => {
  return (
    <TextInput value={courseGoal} onChangeText={goalTextOnChange} style={{
        borderColor: '#cccccc',
        borderWidth: 1,
        width: '80%',
        marginRight: 35,
        paddingHorizontal: 11
    }} placeholder='Your Course Goal'/>
  )
}

export default GoalInput;