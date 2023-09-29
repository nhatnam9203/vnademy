
import styles from "./style.module.css";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { CSSProperties } from "react";

interface IProps {
    icon: StaticImageData,
    title?: string,
    width: number,
    height: number,
    fontSize?: number,
    fontWeight?: number | string,
    onClick?: () => void,
    alt: string,
    style?: CSSProperties,
    isHover?: boolean
}

export default function CustomIcon({
    title,
    onClick,
    width = 50,
    height = 100,
    fontSize = 14,
    fontWeight = 700,
    icon,
    alt,
    style,
    isHover
}: IProps) {
    return (
        <div
            className={`${styles.custom_icon} ${isHover ? styles.custom_icon_hover : ''}`}
            onClick={onClick}
            style={{
                ...(style && { ...style }),
            }}
        >
            <Image
                src={icon as any}
                width={width}
                height={height}
                alt={alt}
            />
            {title && <p>{title}</p>}
        </div>
    )
}