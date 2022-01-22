import React from 'react'
import { Avatar, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import { NavigateNext, Person } from '@material-ui/icons'
import './UserCard.css'
import { Link } from 'react-router-dom'

export const UserCard = ({id, name, email}) => {

    return (
        <>
            <ListItem button component={Link} to={`/todos/${id}`}>
                <ListItemAvatar>
                    <Avatar>
                        <Person fontSize='large' />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={name} secondary={email} />
                <ListItemSecondaryAction>
                    <NavigateNext />
                </ListItemSecondaryAction>
            </ListItem>
        </>
    )
}
