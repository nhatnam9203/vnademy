import React from 'react';
import styles from "./styles.module.css";
import {
    CustomRow,
    CustomText,
} from "components";
import {
    ic_star,
    ic_star_half,
    ic_star_half_2,
} from "assets";
import {
    Row,
    Col,
    Stack,
    ProgressBar
} from "react-bootstrap";
import Image from 'next/image';

export default function () {
    return (
        <div className={styles.course_introduce}>
            <CustomText
                title='Đánh giá của học viên'
                color='#1D252C'
                fontWeight={700}
                fontSize={20}
            />
            <Row style={{ marginTop: 16 }}>
                <Col md={{ span: 4 }} >
                    <div className={styles.wrapRating}>
                        <CustomText
                            title='4.5'
                            color='#1D252C'
                            fontWeight={700}
                            fontSize={48}
                        />
                        <CustomRow style={{ margin: "auto", justifyContent: "center" }}>
                            <Image
                                src={ic_star}
                                width={22}
                                height={22}
                                alt='ic_star'
                            />
                            <Image
                                src={ic_star}
                                width={22}
                                height={22}
                                alt='ic_star'
                            />
                            <Image
                                src={ic_star}
                                width={22}
                                height={22}
                                alt='ic_star'
                            />
                            <Image
                                src={ic_star}
                                width={22}
                                height={22}
                                alt='ic_star'
                            />
                            <Image
                                src={ic_star_half_2}
                                width={22}
                                height={22}
                                alt='ic_star'
                            />
                        </CustomRow>

                        <CustomText 
                            title='163 đánh giá'
                            color='#2B5DF5'
                            fontWeight={600}
                            fontSize={15}
                            style={{ marginTop: 12 }}
                        /> 
                    </div>
                </Col>
                <Col md={{ span: 8 }}>
                </Col>
            </Row>

        </div>
    );
}
