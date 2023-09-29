import styles from "./style.module.css";
import { CSSProperties } from "react";

interface IProps {
    value: string,
    fontSize?: number,
    fontWeight?: number | string,
    color?: string | "#2B5DF5",
    style?: CSSProperties,
    width?: number | string,
    height?: number | string,
    placeholder?: string,
}

export default function CustomInput({
    value = "",
    fontSize = 14,
    fontWeight = 700,
    color = "#2B5DF5", style,
    width,
    height,
    placeholder = ""
}: IProps) {
    return (
        <div
            className={styles.custom_input}
            style={{
                ...(width && { width }),
                ...(height && { height }),
                ...(style && { ...style }),
            }}>
            <input
                style={{
                    fontSize,
                    fontWeight,
                    color,
                }}
                className={styles.custom_input}
                value={value}
                placeholder={placeholder}
            />
        </div>
    )
}