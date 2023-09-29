
import styles from "./style.module.css";
import { CSSProperties } from "react";

interface IProps {
    title: string,
    width: number | string,
    height: number | string,
    fontSize?: number,
    fontWeight?: number | string,
    onClick: () => void,
    className?: string,
    style?: CSSProperties,
    isHover?: boolean
}

export default function CustomButton({
    title = "", 
    onClick, 
    width = 50, 
    height = 100, 
    fontSize = 14, 
    fontWeight = 700, 
    className,
    style,
    isHover = true
}: IProps) {
    return (
        <div
            style={{ 
                width, height, fontSize, fontWeight,
                ...(style && { ...style })
             }}
            onClick={onClick} className={`${styles.custom_button} ${className ? className : ""} ${isHover ? styles.custom_button_hover : ""}`}>
            {title}
        </div>
    )
}