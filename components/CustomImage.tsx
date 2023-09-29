import { CSSProperties } from "react";
import Image, { StaticImageData } from "next/image";

interface IProps {
    src: StaticImageData,
    width: number,
    height: number,
    alt: string,
    style?: CSSProperties
}

export default function CustomImage({ src, width, height, alt, style }: IProps) {
    return (
        <div style={{
            width,
            height,
            ...(style && { ...style })
        }}>
            <Image
                src={src as any}
                width={width}
                height={height}
                alt={alt}
            />
        </div>
    )
}