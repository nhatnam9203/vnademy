import { CSSProperties } from "react";
import Image, { StaticImageData } from "next/image";

interface IProps {
    src: StaticImageData,
    width?: number | string,
    height: number | string,
    alt?: string,
    style?: CSSProperties,
    onClick?: (e: any) => void,
}

export default function CustomImage({ 
    src, 
    width, 
    height, 
    alt, 
    style, 
    onClick = () =>{} 
}: IProps) {
    return (
        <div style={{
            width,
            height,
            ...(style && { ...style })
        }}>
            <Image
                onClick={onClick}
                src={src as StaticImageData}
                width={width as any}
                height={height as any}
                alt={alt ?? String(src)}
            />
        </div>
    )
}