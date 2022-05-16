import { FetchGiftsProps } from "../interfaces/FetchGiftsProps"



export const fetchGifs = async ({setLoading, setImages, category}:FetchGiftsProps) => {
    setLoading(true)
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=Nddq6je4FvFUPaTM5Z8TRG21N95kQNMf`
    fetch(url)
        .then(resp => resp.json())
        .then(dataResp => {
            const {data} = dataResp
            const gifs = data.map((img: any) => {
                return {
                    id: img.id,
                    title: img.title,
                    url: img.images.downsized_medium.url
                }
        
            })
            setLoading(false)
            setImages(gifs)
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
            setImages([])
        })
    
    
}