import { Paper, Typography, Button, Grid, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { ExpandMoreRounded } from '@mui/icons-material'
import { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpert = () => {
    const [categories, setCategories] = useState(['One Punch'])

    const handleAdd = () => {

        setCategories([...categories, 'Anime'])
    }

    return (
        <>
            <Paper
                elevation={6}
                style={{ padding: 30, marginTop: 20, backgroundColor: '#3386FF' }}
            >
                <Typography variant='h5' color='white' style={{fontWeight: 'bold'}}>
                    GifExpertApp
                </Typography>
            </Paper>

            <AddCategory setValue={setCategories} />


            {
                categories.map((c, i) => {
                    return (
                        <Paper
                            elevation={6}
                            style={{
                                marginBottom: 20,
                                marginTop: 20,
                                padding: 20,
                            }}
                            key={i}
                        >
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreRounded />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography variant='h6' style={{ marginBottom: 20 }}>
                                        {c}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <GifGrid category={c} />
                                </AccordionDetails>
                            </Accordion>
                        </Paper>

                    )
                })
            }
            <Grid
                container
                justifyContent='center'
                alignItems='center'
            >
                <Button
                    variant='contained'
                    onClick={handleAdd}
                    
                >
                    Agregar Categoría
                </Button>
            </Grid>


        </>
    )
}
