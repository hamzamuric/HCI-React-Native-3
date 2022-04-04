import React, { useState } from 'react'
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, toggleTodo } from './redux/actions'

const Todos = () => {
    const todos = useSelector(state => state)
    const dispatch = useDispatch()

    const [text, setText] = useState('')

    function submitTodo() {
        dispatch(addTodo(text))
        setText('')
    }

    function pressTodo(id) {
        dispatch(toggleTodo(id))
    }

    return (
        <View style={styles.container}>
            <View style={styles.todos}>
                {todos.map(todo =>
                    <TouchableOpacity key={todo.id} onPress={() => pressTodo(todo.id)}>
                        <Text style={{ fontSize: 30, color: todo.done ? 'green' : 'red'}}>{todo.title}</Text>
                    </TouchableOpacity>
                )}
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TextInput style={styles.input} value={text} onChangeText={setText} />
                <Button style={styles.btn} title='add' onPress={submitTodo}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 40,
    },
    todos: {
        flex: 1,
    },
    input: {
        backgroundColor: 'lightgray',
        fontSize: 40,
        padding: 8,
        flex: 1,
    },
    btn: {
        padding: 16,
    },
})

export default Todos