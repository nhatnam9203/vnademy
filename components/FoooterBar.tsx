import React from "react";
import CustomButton from "./CustomButton";
import CustomText from "./CustomText";
import styles from './style.module.css';

export default function FoooterBar() {

    const register = () => {

    };
""
    return (
        <div className={styles.footerbar_wrap}>
                <CustomText
                    title="TRỞ THÀNH GIẢNG VIÊN TẠI VNADEMY NGAY HÔM NAY!"
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
