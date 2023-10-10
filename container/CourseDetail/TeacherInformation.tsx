import React from 'react';
import styles from "./styles.module.css";
import {
    CustomRow,
    CustomText,
} from "components";
import { teacher_example } from "assets";
import { Stack, Row, Col } from 'react-bootstrap';
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
                <Col md={{ span: 9 }}>
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

                    <CustomText
                        title='Giảng viên Trường Cao đẳng Sư phạm Yên Bái, Thạc sỹ Khoa học Máy tính. Emily Pham Nguyen - Giảng viên Trường Cao đẳng Sư phạm Yên Bái Đạt giải nhì Hội thi sáng tạo kỹ thuật tỉnh Yên Bái (năm 2016). Đạt giải nhì Cuộc thi Thiết kế bài giảng e-Learning Quốc gia lần thứ 4 (2017). Nhiều năm đạt giáo viên dạy giỏi cấp tỉnh, có học sinh giỏi cấp quốc gia. Emily Pham Nguyen với kinh nghiệm 20 năm tham gia công tác giảng dạy. Tham gia nhiều dự án xây dựng website, phần mềm. Có kinh nghiệm giảng dạy Tin học Văn phòng; thiết kế đồ họa; biên tập âm thanh; biên tập videos; lập trình thiết kế, xây dựng website, xây dựng phần mềm với các ngôn ngữ C# và PHP'
                        color='#1D252C'
                        fontWeight={400}
                        fontSize={14}
                        style={{ marginTop: 20 }}
                    />
                </Col>
                <Col md={{ span: 3 }}>
                    <Image
                        src={teacher_example}
                        width={133}
                        height={133}
                        alt='teacher_example'
                    />
                </Col>
            </Row>
        </div>
    );
}