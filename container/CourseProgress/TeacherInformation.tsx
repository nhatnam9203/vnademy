import React from 'react';
import styles from "./styles.module.css";
import {
    CustomRow,
    CustomText,
    CustomButton
} from "components";
import { teacher_example } from "assets";
import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';

export default function () {
    return (
        <div className={styles.course_introduce}>
            <CustomText
                title='Thông tin giảng viên'
                color='#1D252C'
                fontWeight={700}
                fontSize={20}
            />

            <Row>
                <Col md={{ span: 8 }}>
                    <CustomText
                        title='Emily Pham Nguyen'
                        color='#1D252C'
                        fontWeight={700}
                        fontSize={16}
                        style={{ marginTop: 12 }}
                    />
                    <CustomText
                        title='Giảng viên Trường Cao đẳng Sư phạm Yên Bái, Thạc sỹ Khoa học Máy tính'
                        color='#1D252C'
                        fontWeight={400}
                        fontSize={14}
                        style={{ marginTop: 5 }}
                    />

                    <CustomRow style={{ marginTop: 5 }}>
                        <CustomRow>
                            <div>
                                <CustomText
                                    title='125'
                                    fontWeight={700}
                                    fontSize={24}
                                    color='#2B5DF5'
                                />
                                <CustomText
                                    title='Khóa học'
                                    fontWeight={500}
                                    fontSize={14}
                                    color='#55555A'
                                />
                            </div>
                            <div style={{ marginLeft: 40, marginRight: 40 }}>
                                <CustomText
                                    title='3.492'
                                    fontWeight={700}
                                    fontSize={24}
                                    color='#2B5DF5'
                                />
                                <CustomText
                                    title='Học viên'
                                    fontWeight={500}
                                    fontSize={14}
                                    color='#55555A'
                                />
                            </div>
                            <div>
                                <CustomText
                                    title='4.5'
                                    fontWeight={700}
                                    fontSize={24}
                                    color='#2B5DF5'
                                />
                                <CustomText
                                    title='Đánh giá'
                                    fontWeight={500}
                                    fontSize={14}
                                    color='#55555A'
                                />
                            </div>
                        </CustomRow>
                    </CustomRow>
                </Col>
                <Col md={{ span: 4 }}>
                    <Image
                        src={teacher_example}
                        width={133}
                        height={133}
                        alt='teacher_example'
                    />
                </Col>
            </Row>

            <CustomText
                title='Giảng viên Trường Cao đẳng Sư phạm Yên Bái, Thạc sỹ Khoa học Máy tính. Emily Pham Nguyen - Giảng viên Trường Cao đẳng Sư phạm Yên Bái Đạt giải nhì Hội thi sáng tạo kỹ thuật tỉnh Yên Bái (năm 2016).'
                color='#1D252C'
                fontWeight={400}
                fontSize={14}
                style={{ marginTop: 20 }}
            />

            <CustomButton
                title='XEM CHI TIẾT'
                fontSize={15}
                fontWeight={600}
                width={"100%"}
                height={50}
                onClick={() => { }}
                style={{ margin: "auto", marginTop: 30, borderRadius: 3 }}
                isButtonTransparent={true}
            />
        </div>
    );
}