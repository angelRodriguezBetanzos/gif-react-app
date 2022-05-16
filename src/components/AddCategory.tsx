import { Grid, TextField} from '@mui/material'
import React from 'react'
import { useState } from 'react';

interface Props{
    setValue: (React.Dispatch<React.SetStateAction<string[]>>)
}

export const AddCategory = ({setValue}:Props) => {

    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (inputValue.trim().length > 0) {
            setValue(cats => [...cats,inputValue])
            setInputValue('')
        } else{
            alert('Ingrese un valor válido')
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid
                container
                style={{ marginTop: 20 }}
                direction='row'
            >
                <Grid item md={4} xs={12}>
                    <TextField
                        color='primary'
                        fullWidth
                        label='Ingrese una categoría'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </Grid>

            </Grid>
        </form>
    )
}
