import React, { useEffect, useRef, useState } from 'react'
import { Button, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { useGlobalContext } from '../../../context'
import { TodoCard } from '../../patterns/TodoCard';
import { ListCompleted } from '../../atoms/ListCompleted';

export const TodoList = ({todos, updateTodos, setTodoToUpdate, deleteTodo}) => {
    const {openNewTodoDialog} = useGlobalContext();
    const [showCompletedTodos, setShowCompletedTodos] = useState(true);
    const [todosToShow, setTodosToShow] = useState(todos);
    let isTodoListCompleted = useRef(true);

    const handleChangeCompletedTodosView = () => {
        setShowCompletedTodos(value => !value)
    }

    useEffect(() => {
        const newTodosToShow = todos.filter(todo => {
            return (!showCompletedTodos && todo.completed)?false:true;
        });

        isTodoListCompleted.current = !showCompletedTodos && newTodosToShow.length === 0;
        setTodosToShow(newTodosToShow);
    }, [showCompletedTodos, todos]);

    return (
        <>
            <List subheader={
                <ListItem>
                    <ListItemText primary="Tarefas" secondary="" />
                    <ListItemSecondaryAction>
                        <Button variant="outlined" color="primary" onClick={openNewTodoDialog}>Nova Tarefa</Button>
                        {' '}
                        <Button variant="outlined" color="primary" onClick={handleChangeCompletedTodosView}>{showCompletedTodos?'Ocultar':'Exibir'} Finalizadas</Button>
                    </ListItemSecondaryAction>
                </ListItem>
            }>
                {isTodoListCompleted.current && <ListCompleted text="Lista completa! Aproveite e vá descansar. :-)" />}
                {!isTodoListCompleted.current && todosToShow.map(todo => {
                    return (
                        <TodoCard key={todo.id} {...todo} todos={todos} updateTodos={updateTodos} setTodoToUpdate={setTodoToUpdate} deleteTodo={deleteTodo} />
                    )
                })}
            </List>
        </>
    )
}
