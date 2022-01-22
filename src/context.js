import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isNewTodoDialogOpen, setIsNewTodoDialogOpen] = useState(false);
  const [isEditTodoDialogOpen, setIsEditTodoDialogOpen] = useState(false);

  const openNewTodoDialog = () => {
    setIsNewTodoDialogOpen(true);
  }

  const closeNewTodoDialog = () => {
    setIsNewTodoDialogOpen(false);
  }

  const openEditTodoDialog = () => {
    setIsEditTodoDialogOpen(true);
  }

  const closeEditTodoDialog = () => {
    setIsEditTodoDialogOpen(false);
  }

  return <AppContext.Provider value={{
    isNewTodoDialogOpen,
    openNewTodoDialog,
    closeNewTodoDialog,
    isEditTodoDialogOpen,
    openEditTodoDialog,
    closeEditTodoDialog
  }}> {children} </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }