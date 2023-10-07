
import styles from "./style.module.css";
import { CSSProperties } from "react";

interface IProps {
    title: string,
    fontSize?: number,
    fontWeight?: number | string,
    color?: string | "#2B5DF5",
    style? : CSSProperties,
    isHover?: boolean,
    onClick?: (e:any) => void,
}

export default function CustomText({
    title = "", fontSize = 14, fontWeight = 700, color = "#2B5DF5", style, isHover,
    onClick =  () =>{}
}: IProps) {
    return (
        <p
            onClick={onClick}
            style={{ fontSize, fontWeight, color, ...(style && {...style}) }}
            className={`${styles.custom_text} ${isHover ? styles.custom_text_hover : ''}`}>
            {title}
        </p>
    )
}