import React from 'react'
import { View, Text } from 'react-native';

const GoalItem = ({ text, styles }) => {
  return (
    <View style={styles}>
       <Text style={{color: '#ffffff', width: '100%'}}>{text}</Text>
    </View>
  )
}

export default GoalItem;