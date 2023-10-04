
import styles from "./style.module.css";
import { CSSProperties, ReactNode } from "react";

interface IProps {
    children: ReactNode,
    onClick?: () => void,
    className?: string,
    style?: CSSProperties,
    width?: number | string,
    isBetween?: boolean
}

export default function CustomRow({
    children,
    onClick,
    width = "100%",
    className,
    style,
    isBetween = false
}: IProps) {
    return (
        <div
            style={{
                width,
                ...(style && { ...style }),
                ...(isBetween && { justifyContent: "space-between" })
            }}
            className={`${styles.custom_row} ${className ? className : ""}`}>
            {children}
        </div>
    )
}