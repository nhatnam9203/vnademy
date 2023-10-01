import styles from "./style.module.css";
import { CSSProperties, ReactNode } from "react";
import { useController } from "react-hook-form";
import { isEmpty } from "lodash";
import { ic_check_gray, ic_check } from "assets";
import CustomImage from "./CustomImage";

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
    controlForm?: any,
    name: string
}

export default function CustomFormInput({
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
    controlForm,
    name
}: IProps) {

    const { field } = useController({
        control: controlForm,
        name,
    })

    return (
        <div
            className={styles.custom_input}
            style={{
                ...(width && { width }),
                ...(height && { height }),
                ...(style && { ...style }),
            }}>
            <input
                type="text"
                style={{
                    fontSize,
                    fontWeight,
                    color,
                    ...(inputStyle && { ...inputStyle }),
                }}
                className={styles.custom_input}
                value={field.value || ""}
                placeholder={placeholder}
                onChange={(e) => { field.onChange(e.target.value) }}
            />
            {renderIcon ? renderIcon :
                <CustomImage
                    src={isEmpty(field.value) ? ic_check_gray : ic_check}
                    alt="ic_check"
                    width={21}
                    height={21}
                    style={{ marginRight: 8, marginTop: -7 }} />
            }
        </div>
    )
}