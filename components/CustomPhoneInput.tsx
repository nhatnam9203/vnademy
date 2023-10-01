import styles from "./style.module.css";
import { CSSProperties, ReactNode, useState, useEffect } from "react";
import {
    flag_en,
    flag_vn,
    ic_arrow_down
} from "assets";
import Stack from "react-bootstrap/Stack";
import Image from "next/image";
import OutsideClickHandler from 'react-outside-click-handler';

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
    renderLeft?: ReactNode,
    onChange?: (e: any) => void
}

export default function CustomPhoneInput({
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
    renderLeft
}: IProps) {
    return (
        <div
            className={`${styles.custom_input} ${styles.custom_phone_input}`}
            style={{
                ...(width && { width }),
                ...(height && { height }),
                ...(style && { ...style }),
            }}>
            {
                renderLeft ? renderLeft :
                    <CustomPhoneHeader />
            }
            <input
                style={{
                    fontSize,
                    fontWeight,
                    color,
                    ...(inputStyle && { ...inputStyle }),
                }}
                className={styles.custom_input}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            {renderIcon && renderIcon}
        </div>
    )
}

interface IPropsPhoneHeader {

}

const CustomPhoneHeader = (props: IPropsPhoneHeader) => {
    const { } = props;

    const [isDropDown, setDropDown] = useState<boolean>(false);
    const [visibleDropDown, setVisibleDropDown] = useState<boolean>(false);
    const [flag, setFlag] = useState<string>("vn");

    useEffect(() => {
        if (isDropDown) {
            setVisibleDropDown(true);
        } else {
            setTimeout(() => {
                setVisibleDropDown(false);
            }, 0.35);
        }
    }, [isDropDown]);

    const toggleDropDown = () => {
        setDropDown(!isDropDown);
    };

    const selectFlag = (key: string) => {
        setFlag(key);
        setDropDown(false);
    };

    return (
        <OutsideClickHandler
            onOutsideClick={() => {
                setDropDown(false);
            }}
        >
            <Stack
                style={{
                    cursor: "pointer", paddingLeft: 8, position: "relative",
                }}
                direction="horizontal"
                gap={2}
                onClick={toggleDropDown}
            >
                <Image
                    src={flag == "vn" ? flag_vn : flag_en}
                    width={30}
                    height={20}
                    alt="flag_vn"
                    style={{ objectFit: "cover" }}
                />
                <Image
                    src={ic_arrow_down}
                    width={8}
                    height={6}
                    alt="flag_vn"
                    style={{
                        objectFit: "cover",
                        transform: !isDropDown ? "rotate(0deg)" : "rotate(180deg)",
                        transition: "all 0.3s"
                    }}
                />


                <div
                    className={`${styles.phoneHeader_select}`}
                    style={{
                        opacity: isDropDown ? 1 : 0,
                        visibility: visibleDropDown ? "unset" : "hidden"
                    }}
                    onClick={e => {
                        e.stopPropagation();
                    }}
                >
                    <div onClick={() => { selectFlag("vn") }}>
                        <Image
                            src={flag_vn}
                            width={30}
                            height={20}
                            alt="flag_vn"
                            style={{ objectFit: "cover" }}
                        />
                    </div>

                    <div onClick={() => { selectFlag("en") }} style={{ marginTop: 5 }}>
                        <Image
                            src={flag_en}
                            width={30}
                            height={20}
                            alt="flag_en"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
            </Stack>
        </OutsideClickHandler>
    );

};