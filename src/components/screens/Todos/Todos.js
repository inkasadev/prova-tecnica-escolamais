import React, { useCallback, useEffect, useState } from 'react'
import { useGlobalContext } from '../../../context';
import { TodoList } from '../../patterns/TodoList'
import { DialogBox } from '../../patterns/DialogBox';
import { Loading } from '../../patterns/Loading';
import { useParams } from 'react-router-dom';

export const Todos = () => {
    const {userId} = useParams();
    const [loading, setLoading] = useState(false);
    const [todos, setTodos] = useState([]);
    const [todoToUpdate, setTodoToUpdate] = useState({});
    const {
        isNewTodoDialogOpen, 
        isEditTodoDialogOpen, 
        closeNewTodoDialog,
        closeEditTodoDialog,
    } = useGlobalContext();

    const createTodo = (todo) => {
        const id = Math.floor(Math.random() * 1000000);
        const newTodos = [...todos, {userId: +userId, id, ...todo, completed: false}];
        setTodos(newTodos);
    }

    const updateTodo = (todo) => {
        const newTodos = [...todos].map(item => {
            if(item.id === todo.id)
                item.title = todo.title;
            return item;
        });
        setTodos(newTodos);
    }

    const updateTodos = (todoList) => {
        const newTodos = [...todoList];
        setTodos(newTodos);
    }

    const deleteTodo = (id) => {
        const newTodos = [...todos].filter(item => item.id !== id);
        setTodos(newTodos);
    }

    const fetchTodos = useCallback(async () => {
        setLoading(true);

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
            const data =  await response.json();
            updateTodos(data);
            setLoading(false);
        } 
        catch(e) {
            console.log(e);
            setLoading(false);
        }
    }, [userId, setLoading]);

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);

    if(loading)
        return <Loading />
    
    return (
        <>
            <TodoList todos={todos} updateTodos={updateTodos} setTodoToUpdate={setTodoToUpdate} deleteTodo={deleteTodo} />
            <DialogBox title='Nova Tarefa' isDialogOpen={isNewTodoDialogOpen} closeDialog={closeNewTodoDialog} onSave={createTodo} />
            <DialogBox title='Editar Tarefa' isDialogOpen={isEditTodoDialogOpen} closeDialog={closeEditTodoDialog} todoToUpdate={todoToUpdate} onSave={updateTodo} />
        </>
    )
}
