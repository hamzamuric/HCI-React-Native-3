import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

const Todos = () => {
    const todos = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            {todos.map(todo =>
                <View key={todo.id}>
                    <Text style={{ color: todo.done ? 'green' : 'red'}}>{todo.title}</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})

export default Todos