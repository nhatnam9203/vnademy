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
import {
    ic_clock_2,
    ic_play,
    ic_hand,
    ic_reward
} from "assets";

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

            <Stack gap={3} style={{ marginTop: 20 }}>
                <CustomButton
                    onClick={() => { }}
                    title='MUA NGAY'
                    width={"100%"}
                    height={61}
                    style={{ borderRadius: 5, background: "#FFE000", color: "#1D252C" }}
                    className={styles.button_buy_now}
                />
                <CustomButton
                    onClick={() => { }}
                    title='THÊM VÀO GIỎ'
                    width={"100%"}
                    height={61}
                    style={{ borderRadius: 5 }}

                />
            </Stack>

            <hr style={{ marginLeft: -24, marginRight: -24, marginTop: 24 }} />

            <CustomText
                title='Khoá học này bao gồm:'
                color='#1D252C'
                fontWeight={700}
                fontSize={16}
                style={{ marginTop: 16 }}
            />

            <Stack style={{ marginTop: 16 }} gap={3}>
                <CustomRow>
                    <Image src={ic_clock_2} width={18} height={18} alt='ic_img' />
                    <CustomText
                        title='Thời lượng: 06 giờ 10 phút'
                        fontWeight={500}
                        fontSize={14}
                        color='#1D252C'
                        style={{ marginLeft: 8 }}
                    />
                </CustomRow>
                <CustomRow>
                    <Image src={ic_play} width={18} height={18} alt='ic_img' />
                    <CustomText
                        title='Giáo trình: 52 bài giảng'
                        fontWeight={500}
                        fontSize={14}
                        color='#1D252C'
                        style={{ marginLeft: 8 }}
                    />
                </CustomRow>
                <CustomRow>
                    <Image src={ic_hand} width={18} height={18} alt='ic_img' />
                    <CustomText
                        title='Sở hữu khóa học trọn đời'
                        fontWeight={500}
                        fontSize={14}
                        color='#1D252C'
                        style={{ marginLeft: 8 }}
                    />
                </CustomRow>
                <CustomRow>
                    <Image src={ic_reward} width={18} height={18} alt='ic_img' />
                    <CustomText
                        title='Giấy chứng nhận hoàn thành'
                        fontWeight={500}
                        fontSize={14}
                        color='#1D252C'
                        style={{ marginLeft: 8 }}
                    />
                </CustomRow>
            </Stack>

            <hr style={{ marginLeft: -24, marginRight: -24, marginTop: 24 }} />

        </div>
    );
}
