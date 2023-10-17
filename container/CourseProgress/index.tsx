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
import OtherCourse from "./OtherCourse";
import CourseDetailCheckout from "./CourseDetailCheckout";

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
                    <Row>
                        <Col md={{ span: 8 }}>
                            
                        </Col>
                        <Col md={{ span: 4 }}>
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
