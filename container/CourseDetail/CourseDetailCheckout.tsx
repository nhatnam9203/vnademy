import React from 'react';
import styles from "./styles.module.css";
import {
    CustomText,
    CustomRow,
    CustomButton
} from "components";
import {
    ic_promotion
} from "assets";
import { Stack } from "react-bootstrap";
import Image from "next/image";
import { title } from 'process';

export default function () {
    return (
        <div className={styles.course_introduce}>
            <CustomRow isBetween>
                <CustomText
                    title='349.000 đ'
                    color='#1D252C'
                    fontWeight={700}
                    fontSize={32}
                />
                <Stack style={{
                    border: "1px solid #E81E25", borderRadius: 8, padding: 12, height: 30, marginTop: 10
                }}
                    direction='horizontal'
                >
                    <CustomText
                        title='Tiết kiệm: '
                        color='#E81E25'
                        fontWeight={600}
                        fontSize={14}
                    />
                    <CustomText
                        title='65%'
                        color='#E81E25'
                        fontWeight={700}
                        fontSize={14}
                        style={{ marginLeft: 5 }}
                    />
                </Stack>
                {/* <CustomRow>
                    <CustomText
                        title='Tiết kiệm: '
                        color='#E81E25'
                        fontWeight={600}
                        fontSize={14}
                    />
                </CustomRow> */}
            </CustomRow>

            <CustomRow isBetween >
                <CustomText
                    title='990.000 đ'
                    color='#90959E'
                    fontWeight={600}
                    fontSize={20}
                    style={{ textDecoration: "line-through" }}
                />
                <Stack direction='horizontal' gap={1}>
                    <Image
                        src={ic_promotion}
                        width={16}
                        height={16}
                        alt='ic_promotion'
                    />
                    <CustomText
                        title='Thời gian ưu đãi còn 1 ngày'
                        color='#16C60C'
                        fontWeight={600}
                        fontSize={14}
                    />
                </Stack>
            </CustomRow>

            <CustomButton
                onClick={() => { }}
                title='THÊM VÀO GIỎ'
                width={"100%"}
                height={61}
                style={{ borderRadius: 5 }}
                
            />
        </div>
    );
}
