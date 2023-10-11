import React from 'react';
import styles from "./styles.module.css";
import {
    CustomButton,
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
} from "react-bootstrap";
import Image from 'next/image';
import ProgressBar from "@ramonak/react-progress-bar";

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
                    <Stack gap={2}>
                        <CustomRating />
                        <CustomRating />
                        <CustomRating />
                        <CustomRating />
                        <CustomRating />
                    </Stack>
                </Col>
            </Row>

            <CustomText
                title='Nhận xét của học viên'
                color='#1D252C'
                fontWeight={700}
                fontSize={16}
                style={{ marginTop: 30 }}
            />

            <div style={{ marginTop: 20 }} />
            {
                new Array(5).fill(null).map(() => (
                    <div key={Math.random()} className={styles.studenComment}>
                        <CustomRow>
                            <div className={styles.studentLetter}>
                                C
                            </div>

                            <Stack>
                                <CustomRow>
                                    <CustomText
                                        title='Đỗ Thị Cúc'
                                        color='#1D252C'
                                        fontWeight={700}
                                        fontSize={15}
                                        style={{ marginRight: 8 }}
                                    />
                                    <Image
                                        src={ic_star}
                                        width={13}
                                        height={13}
                                        alt='ic_star'
                                    />
                                    <Image
                                        src={ic_star}
                                        width={13}
                                        height={13}
                                        alt='ic_star'
                                    />
                                    <Image
                                        src={ic_star}
                                        width={13}
                                        height={13}
                                        alt='ic_star'
                                    />
                                    <Image
                                        src={ic_star}
                                        width={13}
                                        height={13}
                                        alt='ic_star'
                                    />
                                    <Image
                                        src={ic_star}
                                        width={13}
                                        height={13}
                                        alt='ic_star'
                                    />
                                </CustomRow>
                                <CustomText
                                    title='Khóa học rất tốt, giảng viên giảng bài dễ hiểu và nhiệt tình hỗ trợ học viên.'
                                    color='#1D252C'
                                    fontSize={14}
                                    fontWeight={400}
                                />
                            </Stack>
                        </CustomRow>
                    </div>
                ))
            }

            <div className={styles.viewMore}>
                <CustomButton
                    title='Xem thêm (157)'
                    fontSize={15}
                    fontWeight={600}
                    width={164}
                    height={40}
                    onClick={() => { }}
                    style={{ margin: "auto", marginTop: 30, borderRadius: 3 }}
                    isButtonTransparent={true}
                />
            </div>

        </div>
    );
}

interface ICustomRating {
    // percent: string | number,
    // star: number,
}

const CustomRating = ({ }: ICustomRating) => {
    return (
        <CustomRow>
            <Image
                src={ic_star}
                width={13}
                height={13}
                alt='ic_star'
            />
            <Image
                src={ic_star}
                width={13}
                height={13}
                alt='ic_star'
            />
            <Image
                src={ic_star}
                width={13}
                height={13}
                alt='ic_star'
            />
            <Image
                src={ic_star}
                width={13}
                height={13}
                alt='ic_star'
            />
            <Image
                src={ic_star}
                width={13}
                height={13}
                alt='ic_star'
            />
            <div style={{ width: "100%", marginLeft: 14, marginRight: 14 }}>
                <ProgressBar
                    completed={80}
                    bgColor='#16C60C'
                    labelColor='#16C60C'
                    height={"16px"}
                />
            </div>
            <CustomText
                title='80%'
                color='#2B5DF5'
                fontSize={14}
                fontWeight={600}
            />
        </CustomRow>
    );
};