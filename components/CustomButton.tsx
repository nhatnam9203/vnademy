
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
    isHover?: boolean,
    type?: "button" | "reset" | "submit",
    isButtonTransparent? : boolean,
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
    isHover = true,
    type = "button",
    isButtonTransparent = false
}: IProps) {

    const _className = isButtonTransparent ? `${styles.custom_button_transparent} ${className ? className : ""} ${isHover ? styles.custom_button_transparent_hover : ""}` : 
    
    `${styles.custom_button} ${className ? className : ""} ${isHover ? styles.custom_button_hover : ""}` 

    return (
        <button
            type={type}
            style={{ 
                width, height, fontSize, fontWeight,
                ...(style && { ...style })
             }}
            onClick={onClick} 
            className={_className}>
            {title}
        </button>
    )
}