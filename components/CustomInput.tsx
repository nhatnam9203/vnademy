import styles from "./style.module.css";
import { CSSProperties, ReactNode } from "react";

interface IProps {
    value: string,
    fontSize?: number,
    fontWeight?: number | string,
    color?: string | "#2B5DF5",
    style?: CSSProperties,
    inputStyle?: CSSProperties,
    width?: number | string,
    height?: number | string,
    placeholder?: string,
    renderIcon?: ReactNode,
    onChange?: (e: any) => void,
    type?: "text" | "password"
}

export default function CustomInput({
    value = "",
    fontSize = 14,
    fontWeight = 700,
    color = "#4F4F4F",
    style,
    inputStyle,
    width,
    height,
    placeholder = "",
    renderIcon,
    onChange,
    type = "text"
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
                type={type}
                style={{
                    fontSize,
                    fontWeight,
                    color,
                    background : "transparent",
                    ...(inputStyle && { ...inputStyle }),
                }}
                className={styles.custom_input}
                value={value || ""}
                placeholder={placeholder}
                onChange={onChange}
            />
            {renderIcon && renderIcon}
        </div>
    )
}