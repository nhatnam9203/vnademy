import { CSSProperties } from "react";
import Image, { StaticImageData } from "next/image";

interface IProps {
    src: StaticImageData,
    width?: number | string,
    height: number | string,
    alt?: string,
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
                src={src as StaticImageData}
                width={width as any}
                height={height as any}
                alt={alt ?? String(src)}
            />
        </div>
    )
}