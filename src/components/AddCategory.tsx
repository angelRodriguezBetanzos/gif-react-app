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
            alert('Please enter a valid text')
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
                        label='Enter a category'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </Grid>

            </Grid>
        </form>
    )
}
