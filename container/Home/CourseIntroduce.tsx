import React from 'react';
import { CustomText } from "components";
import styles from "./styles.module.css";
import {
    Container,
    Row,
    Col
} from "react-bootstrap";
import Image from "next/image";
import { ic_people_course } from "assets";

interface IProps {

}

export default function ({

}: IProps) {
    return (
        <div className={styles.course_introduce}>
            <CustomText
                title='TẠI SAO NÊN HỌC ONLINE TẠI VNADEMY?'
                color='white'
                fontSize={26}
                fontWeight={700}
                style={{ textAlign: "center" }}
            />
            <Container style={{ marginTop: 40 }}>
                <Row>
                    <Col>
                        <div className={styles.course_introduce_item}>
                            <Image
                                src={ic_people_course}
                                width={64}
                                height={64}
                                alt='ic_people_course'
                            />
                            <CustomText
                                title='Giảng viên uy tín'
                                color='#ffffff'
                                fontSize={20}
                                fontWeight={700}
                                style={{ marginTop: 16 }}
                            />

                            <CustomText
                                title={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book`}
                                color='#ffffff'
                                fontSize={15}
                                fontWeight={400}
                                style={{ marginTop: 8, textAlign: "center" }}

                            />
                        </div>
                    </Col>

                    <Col
                        style={{
                            borderRight: "1px solid #ffffff",
                            borderLeft: "1px solid #ffffff",
                        }}
                    >
                        <div className={styles.course_introduce_item}      >
                            <Image
                                src={ic_people_course}
                                width={64}
                                height={64}
                                alt='ic_people_course'
                            />
                            <CustomText
                                title='THANH TOÁN 1 LẦN'
                                color='#ffffff'
                                fontSize={20}
                                fontWeight={700}
                                style={{ marginTop: 16 }}
                            />

                            <CustomText
                                title={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book`}
                                color='#ffffff'
                                fontSize={15}
                                fontWeight={400}
                                style={{ marginTop: 8, textAlign: "center" }}

                            />
                        </div>
                    </Col>
                    <Col>
                        <div className={styles.course_introduce_item}>
                            <Image
                                src={ic_people_course}
                                width={64}
                                height={64}
                                alt='ic_people_course'
                            />
                            <CustomText
                                title='HỌC TRỰC TUYẾN'
                                color='#ffffff'
                                fontSize={20}
                                fontWeight={700}
                                style={{ marginTop: 16 }}
                            />

                            <CustomText
                                title={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book`}
                                color='#ffffff'
                                fontSize={15}
                                fontWeight={400}
                                style={{ marginTop: 8, textAlign: "center" }}

                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};