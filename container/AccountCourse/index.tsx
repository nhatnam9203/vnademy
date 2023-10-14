import { CustomRow, CustomText, CustomButton } from "@/components";
import { Stack, Container, Row, Col } from "react-bootstrap";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

import {
    ic_arrow_right_white,
    teacher_example,
    ic_star,
    ic_star_half_2,
    ic_double_person
} from "assets";

interface IErros {
    email: object,
    password: object
}

interface IProps {
    errosForm: IErros,
    handleSubmit: any
    controlForm: any
};

export default function Cart({
    errosForm,
    handleSubmit,
    controlForm
}: IProps) {
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

            </div>
        </>
    )
}
