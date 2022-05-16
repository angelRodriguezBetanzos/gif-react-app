import { CircularProgress, IconButton, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import { InfoRounded } from '@mui/icons-material'
import { useEffect, useState } from 'react';
import { GiftGridProps, ImgArr } from '../interfaces/GifGrid';
import { fetchGifs } from '../services/fetchGifs';


export const GifGrid = ({ category }: GiftGridProps) => {
    const [images, setImages] = useState<ImgArr[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchGifs({setLoading, setImages, category})
    }, [])


    return loading ? (<CircularProgress />) : images.length > 0 ? (
        <ImageList cols={2}>
            {images.map((item: ImgArr) => (
                <ImageListItem key={item.id}>
                    <img
                        src={`${item.url}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        style={{ height: 279 }}
                    />
                    <ImageListItemBar
                        title={item.title}
                        actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ${item.title}`}
                            >
                                <InfoRounded />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    ) : (
        <Typography variant='h6' style={{ fontWeight: 'bold' }}>
            Sin información para mostrar
        </Typography>)
}
