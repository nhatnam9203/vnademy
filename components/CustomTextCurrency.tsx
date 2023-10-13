
import styles from "./style.module.css";
import { CSSProperties } from "react";
import {
    ic_vnd,
    ic_vnd_grey
} from "assets";
import Image from "next/image";
import CustomRow from "./CustomRow";

interface IProps {
    title: string,
    fontSize?: number,
    fontWeight?: number | string,
    color?: string | "#2B5DF5",
    style?: CSSProperties,
    isHover?: boolean,
    onClick?: (e: any) => void,
    iconStyle?: CSSProperties,
    iconWidth?: number,
    iconHeight?: number
    iconGrey?: boolean
}

export default function CustomTextCurrency({
    title = "", fontSize = 14, fontWeight = 700, color = "#2B5DF5", style, isHover,
    onClick = () => { },
    iconStyle,
    iconHeight = 24,
    iconWidth = 18,
    iconGrey = false
}: IProps) {
    return (
        <CustomRow width={"auto"}>
            <p
                onClick={onClick}
                style={{ fontSize, fontWeight, color, ...(style && { ...style }) }}
                className={`${styles.custom_text} ${isHover ? styles.custom_text_hover : ''}`}>
                {title}
            </p>
            <Image
                src={iconGrey ? ic_vnd_grey : ic_vnd}
                width={iconWidth}
                height={iconHeight}
                alt="ic_vnd"
                style={{ ...(iconStyle && { ...iconStyle }) }}
            />
        </CustomRow>
    )
}