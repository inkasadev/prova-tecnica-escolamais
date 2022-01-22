import { List } from '@material-ui/core'
import React, { useCallback, useEffect, useState } from 'react'
import { UserCard } from '../../patterns/UserCard'
import { Loading } from '../../patterns/Loading';
import './UserList.css'

export const UserList = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const fetchUsers = useCallback(async () => {
      setLoading(true);
  
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
  
        if(!data){
          setUsers([]);
          return;
        }
  
        const newUsers = data.map((user) => {
          const {id, name, email} = user;
          return {id, name, email};
        });

        setUsers(newUsers);
        setLoading(false);
      }
      catch(e) {
        console.log(e);
        setLoading(false);
      }
    }, [setLoading]);
  
    useEffect(() => {
      fetchUsers();
    }, [fetchUsers]);

    if(loading)
      return <Loading />
    
    return (
        <>
            <List>
                {users.map(user => {
                    return <UserCard key={user.id} {...user} />
                })}
            </List>
        </>
    )
}
