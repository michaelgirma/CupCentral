export interface Cup { 
    id?: string;
    title: string;
    size_id: number;
    color_id: number;
    lid: number[];
    image: string;
}

export interface CupImage {
    lid: string;
    cup: string;
    img: string;
}