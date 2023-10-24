import { CustomRow, CustomText, CustomButton, CustomIcon, CustomCircleBar, MenuItem} from "@/components";
import { Stack, Container } from "react-bootstrap";
import React from "react";
import styles from "./styles.module.css";
import Image, { StaticImageData } from "next/image";

import {
    teacher_example,
    ic_cart_image_example,
    ic_entrance
} from "assets";
import { menu } from "./menu";

interface IErros {
    email: object,
    password: object
}

interface IProps {
    errosForm: IErros,
    handleSubmit: any
    controlForm: any
};

export default function ({
    errosForm,
    handleSubmit,
    controlForm
}: IProps) {

    const [activeMenu, setActiveMenu] = React.useState<number>(0);
    const [translateXMenu, setTranslateXMenu] = React.useState<string>("30px");

    const onClickMenuItem = (position: number) => {
        if (activeMenu !== position) {
            setTranslateXMenu(
                `${(150 * position) + 30}px`
            );
            setActiveMenu(position);
        }
    };

    return (
        <>
            <div className={styles.cart_header}>
                <Container>
                    <CustomRow isBetween>
                        <CustomRow>
                            <Image
                                src={teacher_example}
                                width={86}
                                height={86}
                                alt="teacher"
                                style={{ borderRadius: 3000 }}
                            />
                            <div style={{ marginLeft: 16 }}>
                                <CustomText
                                    title="Xin chào Ngọc Trân"
                                    color="#ffffff"
                                    fontSize={20}
                                    fontWeight={700}
                                />
                                <CustomText
                                    title="Học viên"
                                    color="#ffffff"
                                    fontSize={14}
                                    fontWeight={600}
                                />
                            </div>
                        </CustomRow>

                        <CustomRow width={"auto"}>
                            <CustomButton
                                title="ĐĂNG XUẤT"
                                onClick={() => { }}
                                fontSize={14}
                                fontWeight={700}
                                height={42}
                                width={135}
                                style={{
                                    border: "1.3px solid #ffffff",
                                    background: "transparent",
                                    marginRight: 16
                                }}
                                className={styles.btn_hover}
                            />
                            <CustomButton
                                title="CẬP NHẬT HỒ SƠ"
                                onClick={() => { }}
                                fontSize={14}
                                fontWeight={700}
                                height={42}
                                width={161}
                                style={{
                                    border: "1.3px solid transparent",
                                    background: "#ffffff",
                                    color: "#2B5DF5",
                                }}
                                className={styles.btn_hover_2}
                            />
                        </CustomRow>
                    </CustomRow>
                </Container>
            </div>

            <div className={styles.cart_body}>
                <Container>
                    <div className={styles.containerBody}>
                        <div className={styles.menu}>
                            {
                                menu.map((it, idx) => (
                                    <MenuItem
                                        icon={it.icon}
                                        title={it.title}
                                        key={it.title}
                                        onClick={() => onClickMenuItem(idx)}
                                    />
                                ))
                            }
                            <div
                                className={styles.lineTabbar}
                                style={{
                                    left: translateXMenu
                                }}
                            />
                        </div>

                        <div className={styles.courseList}>
                            <Stack>
                                <Image
                                    src={ic_cart_image_example}
                                    width={300}
                                    height={180}
                                    alt="image_example"
                                    style={{
                                        borderTopLeftRadius: 16,
                                        borderTopRightRadius: 16
                                    }}
                                />

                                <Stack
                                    style={{
                                        border: "1px solid #dddddd",
                                        width: "100%",
                                        maxWidth: 300,
                                        padding: 16,
                                        borderBottomLeftRadius: 16,
                                        borderBottomRightRadius: 16
                                    }}
                                    gap={0}
                                >
                                    <CustomText
                                        title="Lập trình Web tốc độ cao, thời gian thực với NodeJS"
                                        color="#1D252C"
                                        fontSize={15}
                                        fontWeight={700}
                                        style={{ width: "100%", maxWidth: 300 }}
                                    />

                                    <CustomRow isBetween>
                                        <CustomIcon
                                            icon={ic_entrance}
                                            title="VÀO HỌC"
                                            titleColor="#1D252C"
                                            fontWeight={700}
                                            fontSize={15}
                                            onClick={() => { }}
                                            alt="entrance"
                                            width={18}
                                            height={16}
                                            style={{
                                                background: "#FFE000", width: 180, height: 42,
                                                justifyContent: "center",
                                                alignItems: "center",
                                                borderRadius: 3
                                            }}
                                        />
                                        <CustomCircleBar
                                            progress={60}
                                        />
                                    </CustomRow>
                                </Stack>
                            </Stack>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
};
