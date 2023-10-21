import { CustomIcon, CustomImage, CustomText } from "@/components";
import { Stack, Container, Row, Col, Image as ImageBootstrap, Card } from "react-bootstrap";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import CourseContent from "./CourseContent";
import CourseIntroduce from "./CourseIntroduce";
import TeacherInformation from "./TeacherInformation";
import ProgressBar from "@ramonak/react-progress-bar";
import { CustomRow } from "components";

import {
    ic_arrow_right_white,
    teacher_example,
    ic_star,
    ic_star_half_2,
    ic_double_person,
    ic_reward,
    ic_play,
    banner_example
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
                <Container style={{ background: "#ffffff" }}>
                    <Row>
                        <Col md={{ span: 6 }}>
                            <Card.Img
                                className="bot_features2-item--img"
                                src={require("../../assets/ic_arrow_right.png")}
                                alt="Harmony one"
                            />

                        </Col>
                        <Col md={{ span: 6 }}>
                            <CustomText
                                title="Làm chủ World 2016 từ cơ bản nâng cao"
                                fontWeight={700}
                                fontSize={30}
                                color="#1D252C"
                            />
                            <CustomText
                                title="Microsoft Word đã trở nên vô cùng quen thuộc với tất cả mọi người, đặc biệt là đối với dân văn phòng và bất cứ công việc nào cần phải soạn thảo văn bản."
                                fontWeight={400}
                                fontSize={14}
                                color="#1D252C"
                                style={{}}
                            />
                            <CustomRow style={{ marginTop: 16 }} isBetween>
                                <p style={{
                                    flex: 1,
                                    color: "#1D252C",
                                    fontWeight: 500,
                                    fontSize: 14,
                                }}>Bạn vừa hoàn thành <span style={{ fontWeight: 700 }}>15/80</span> bài giảng</p>
                                <CustomRow style={{ marginBottom: 20 }} width={"auto"}>
                                    <Image
                                        src={ic_reward}
                                        height={18}
                                        width={18}
                                        alt="ic_reward"
                                        style={{ marginRight: 8 }}
                                    />
                                    <CustomText
                                        title="Nhận chứng chỉ"
                                        fontSize={14}
                                        fontWeight={500}
                                        color="#1D252C"
                                    />
                                </CustomRow>
                            </CustomRow>
                            <ProgressBar
                                completed={80}
                                bgColor='#16C60C'
                                labelColor='white'
                                baseBgColor="#F0F2F4"
                                height={"34px"}
                            />
                            <CustomRow style={{ marginTop: 30 }} isBetween>
                                <CustomIcon
                                    icon={ic_play}
                                    width={18}
                                    height={18}
                                    alt="ic_play"
                                    title="TIẾP TỤC BÀI 15"
                                    isHover
                                    titleColor="#ffffff"
                                    fontSize={14}
                                    fontWeight={700}
                                    style={{
                                        background: "#2B5DF5",
                                        width: "47%",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: 50,
                                        borderRadius: 3,
                                        cursor: "pointer"
                                    }}
                                />
                                <CustomIcon
                                    icon={ic_reward}
                                    width={18}
                                    height={18}
                                    alt="ic_play"
                                    title="XEM TRƯỚC CHỨNG CHỈ"
                                    isHover
                                    titleColor="#2B5DF5"
                                    fontSize={14}
                                    fontWeight={700}
                                    style={{
                                        background: "transparent",
                                        width: "47%",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: 50,
                                        borderRadius: 3,
                                        border: "1px solid #2B5DF5",
                                        cursor: "pointer"
                                    }}
                                />
                            </CustomRow>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className={styles.cart_body}>
                <Container style={{ paddingTop: 16, paddingBottom: 32 }}>
                    <Row>
                        <Col md={{ span: 7 }}>
                            <CourseIntroduce />
                            <CourseContent />
                        </Col>

                        <Col md={{ span: 5 }}>
                            <TeacherInformation />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
