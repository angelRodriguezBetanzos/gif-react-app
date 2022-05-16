import { ImgArr } from "./GifGrid";

export interface FetchGiftsProps{
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    category: string,
    setImages: React.Dispatch<React.SetStateAction<ImgArr[]>>
}