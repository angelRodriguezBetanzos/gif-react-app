import { FetchGiftsProps } from "../interfaces/FetchGiftsProps"



export const fetchGifs = async ({setLoading, setImages, category}:FetchGiftsProps) => {
    setLoading(true)
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=Nddq6je4FvFUPaTM5Z8TRG21N95kQNMf`
    const resp = await fetch(url)
    const { data } = await resp.json()
    console.log(data)
    const gifs = data.map((img: any) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }

    })
    setLoading(false)
    setImages(gifs)
}