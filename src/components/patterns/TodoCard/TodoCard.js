import React from 'react'
import { IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import { Edit, Delete, CheckBoxOutlineBlank, CheckBox } from '@material-ui/icons'
import { useGlobalContext } from '../../../context';

export const TodoCard = ({id, completed, title, todos, updateTodos, setTodoToUpdate, deleteTodo}) => {
    const {
        openEditTodoDialog,
    } = useGlobalContext();

    const handleTodoClick = () => {
        const newTodos = [...todos];
        newTodos.map(todo => {
            if(todo.id === id)
                todo.completed = !todo.completed;
            return todo;
        });

        updateTodos(newTodos);
    }

    const handleUpdateClick = () => {
        setTodoToUpdate({
            id,
            title,
            completed
        });
        openEditTodoDialog();
    }
    
    return (
        <>
            <ListItem button onClick={handleTodoClick}>
                <ListItemAvatar>
                    {completed?<CheckBox color="primary" />:<CheckBoxOutlineBlank />}
                </ListItemAvatar>
                <ListItemText primary={`${title}`} secondary="" />
                <ListItemSecondaryAction>
                    <IconButton onClick={handleUpdateClick}>
                        <Edit />
                    </IconButton>
                    <IconButton onClick={() => deleteTodo(id)}>
                        <Delete />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </>
    )
}
