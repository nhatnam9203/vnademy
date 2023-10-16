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
    ic_entrance,
    teacher_example
} from "assets/index";
import SearchBar from "./SearchBar";

export default function TopBar() {

    const register = () => {

    };

    const isLogin = true;

    return (
        <div className={styles.topbar_wrap}>
            <Container>
                <div className={styles.topbar_container}>
                    <CustomImage
                        src={logo_vnademy}
                        width={154}
                        height={48}
                        alt="logo_vnademy"
                        style={{ objectFit: "cover", cursor: "pointer" }}
                    />
                    <SearchBar />
                    <div className={styles.topbar_container_right}>
                        <CustomIcon
                            icon={ic_lock}
                            width={16}
                            height={18}
                            alt="ic_lock"
                            title="Kích hoạt khoá học"
                            isHover
                        />
                        <CustomIcon
                            icon={ic_people}
                            width={18}
                            height={16}
                            alt="ic_people"
                            title="Gói hội viên"
                            isHover
                        />
                        {/* <CustomImage
                            src={ic_cart}
                            width={23}
                            height={23}
                            alt="ic_cart"
                            style={{ objectFit: "cover", marginRight: 16, cursor: "pointer" }}
                        />
                        <CustomText
                            title="ĐĂNG NHẬP"
                            fontSize={15}
                            style={{ marginRight: 16 }}
                            isHover
                        />
                        <CustomButton
                            title="ĐĂNG KÝ"
                            onClick={register}
                            width={105}
                            height={42}
                        /> */}

                        <CustomIcon
                            icon={ic_entrance}
                            title="VÀO HỌC"
                            titleColor="#1D252C"
                            fontWeight={700}
                            fontSize={14}
                            onClick={() => { }}
                            alt="entrance"
                            width={14}
                            height={16}
                            style={{
                                background: "#FFE000", width: 120, height: 42,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 3
                            }}
                        />

                        <CustomImage
                            src={ic_cart}
                            width={23}
                            height={23}
                            alt="ic_cart"
                            style={{ objectFit: "cover", marginRight: 16, cursor: "pointer" }}
                        />

                        <CustomImage
                            src={teacher_example}
                            width={42}
                            height={42}
                            alt="teacher"
                            style={{ borderRadius: 3000, cursor: "pointer"  }}
                        />

                    </div>
                </div>
            </Container>
        </div>
    );
}
