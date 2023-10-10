import { CustomText } from "@/components";
import { Stack, Container, Row, Col } from "react-bootstrap";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import WhatYouLearn from "./WhatYouLearn";
import CourseContent from "./CourseContent";
import CourseIntroduce from "./CourseIntroduce";
import TeacherInformation from "./TeacherInformation";
import StudentRating from "./StudentRating";

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
                    <Col md={{ span: 8 }}>
                        <Stack style={{ marginTop: 30 }} direction="horizontal" gap={2}>
                            <CustomText
                                title="Vnademy"
                                color="white"
                                fontWeight={500}
                                fontSize={14}
                                isHover
                            />
                            <Image
                                src={ic_arrow_right_white}
                                width={6}
                                height={8}
                                alt="ic_arrow_right_white"
                            />
                            <CustomText
                                title="Tin học văn phòng"
                                color="white"
                                fontWeight={500}
                                fontSize={14}
                                isHover
                            />
                            <Image
                                src={ic_arrow_right_white}
                                width={6}
                                height={8}
                                alt="ic_arrow_right_white"
                            />
                            <CustomText
                                title="Word"
                                color="white"
                                fontWeight={500}
                                fontSize={14}
                                isHover
                            />
                        </Stack>
                        <CustomText
                            title="Làm chủ Word 2016 từ cơ bản đến nâng cao"
                            color="white"
                            fontSize={30}
                            fontWeight={700}
                            style={{ marginTop: 20 }}
                        />
                        <CustomText
                            title="Microsoft Word đã trở nên vô cùng quen thuộc với tất cả mọi người, đặc biệt là đối với dân văn phòng và bất cứ công việc nào cần phải soạn thảo văn bản."
                            color="white"
                            fontSize={14}
                            fontWeight={500}
                            style={{ marginTop: 4 }}
                        />
                        <Stack style={{ marginTop: 20 }} direction="horizontal" gap={2}>
                            <Image
                                src={teacher_example}
                                width={30}
                                height={30}
                                alt="teacher"
                            />
                            <CustomText
                                title="Emily Pham Nguyen"
                                color="white"
                                fontWeight={600}
                                fontSize={14}
                            />
                            <div style={{ width: 1, height: 20, background: "#dddddd" }} />
                            <Stack direction="horizontal">
                                <Image
                                    src={ic_star}
                                    width={17}
                                    height={17}
                                    alt="ic_star"
                                />
                                <Image
                                    src={ic_star}
                                    width={17}
                                    height={17}
                                    alt="ic_star"
                                />
                                <Image
                                    src={ic_star}
                                    width={17}
                                    height={17}
                                    alt="ic_star"
                                />
                                <Image
                                    src={ic_star}
                                    width={17}
                                    height={17}
                                    alt="ic_star"
                                />
                                <Image
                                    src={ic_star_half_2}
                                    width={17}
                                    height={17}
                                    alt="ic_star"
                                />
                                <CustomText
                                    title="(163 Đánh giá)"
                                    color="white"
                                    fontWeight={500}
                                    fontSize={14}
                                />
                            </Stack>
                            <div style={{ width: 1, height: 20, background: "#dddddd" }} />
                            <Image
                                src={ic_double_person}
                                width={18}
                                height={16}
                                alt="ic_double_person"
                            />
                            <CustomText
                                title="427 học viên"
                                color="white"
                                fontWeight={500}
                                fontSize={14}
                            />
                        </Stack>

                        <WhatYouLearn />
                        <CourseContent />
                        <CourseIntroduce />
                        <TeacherInformation />
                        <StudentRating />
                    </Col>
                    <Col md={{ span: 4 }}>

                    </Col>
                </Container>
            </div>

            <div className={styles.cart_body}>
                <Container style={{ paddingTop: 16, paddingBottom: 32 }}>
                    <Row>
                        <Col md={{ span: 8 }}>

                        </Col>

                        <Col md={{ span: 4 }}>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
