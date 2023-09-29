import React from "react";
import { logo_vnademy } from "assets";
import { Container } from "react-bootstrap";
import CustomImage from "./CustomImage";
import CustomButton from "./CustomButton";
import CustomText from "./CustomText";
import CustomIcon from "./CustomIcon";
import styles from './style.module.css';
import {
    ic_cart,
    ic_lock,
    ic_people,
} from "assets/index";
import SearchBar from "./SearchBar";
import Stack from "react-bootstrap/Stack";

export default function FoooterBar() {

    const register = () => {

    };

    return (
        <div className={styles.footerbar_wrap}>
                <CustomText
                    title="Trở thành Giảng viên tại VNademy ngay hôm nay!"
                    color="white"
                    fontWeight={800}
                    fontSize={32}
                />
                <CustomButton
                    title="ĐĂNG KÝ NGAY"
                    onClick={register}
                    width={168}
                    height={46}
                    style={{ marginTop: 24 }}
                    isHover={false}
                />
        </div>
    );
}
