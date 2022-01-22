import React, { useRef } from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, FormControl } from '@material-ui/core';

export const DialogBox = ({title, isDialogOpen, closeDialog, todoToUpdate, onSave}) => {
    const todoTitle = useRef('');

    const saveDialogContent = () => {
        onSave({
            ...todoToUpdate,
            title: todoTitle.current.value
        });
        closeDialog();
    }

    return (
        <>
            <Dialog open={isDialogOpen}>
                <DialogTitle>
                    {title}
                </DialogTitle>
                <DialogContent>
                    <FormControl fullWidth>
                        <TextField inputRef={todoTitle} id="outlined-basic" label="Digite a Tarefa" variant="outlined" defaultValue={todoToUpdate?.title} />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog}>
                        Cancelar
                    </Button>
                    <Button onClick={saveDialogContent} variant="outlined" color="primary">
                        Salvar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
