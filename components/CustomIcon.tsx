
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
    titleColor?: string,
    isHoverTransparent?: boolean
}

export default function CustomIcon({
    title,
    onClick,
    width = 50,
    height = 100,
    fontSize,
    fontWeight,
    icon,
    alt,
    style,
    isHover,
    titleColor,
    isHoverTransparent
}: IProps) {
    return (
        <div
            className={
                `${styles.custom_icon} 
                ${isHover ? styles.custom_icon_hover : ''}
                ${isHoverTransparent ? styles.custom_icon_hover_transparent : ''}
                `
            }
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
            {title && <p style={{
                ...(fontWeight && { fontWeight }),
                ...(fontSize && { fontSize }),
                ...(titleColor && { color: titleColor }),
            }}>{title}</p>}
        </div>
    )
}