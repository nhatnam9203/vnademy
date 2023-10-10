import React from 'react';
import styles from "./styles.module.css";
import {
    CustomText,
    CustomRow,
    CustomImage
} from "components";
import {
    ic_play
} from "assets";
import Image from 'next/image';
import { Stack } from 'react-bootstrap';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css'

export default function () {
    return (
        <div
            className={styles.what_you_learn}
            style={{ marginTop: 16 }}
        >
            <CustomText
                title='Nội dung khóa học'
                color='#1D252C'
                fontSize={20}
                fontWeight={700}
            />

            <CustomRow style={{
                background: "#F6FAFF",
                border: "1px solid #C5CBD5"
            }}>
                <div className={styles.icon_plus}>
                    <CustomText
                        title='-'
                        color='#1D252C'
                        fontSize={36}
                        fontWeight={500}
                    />
                </div>
                <CustomText
                    title='Phần 1: Giới thiệu tổng quan và các thiết lập ban đầu'
                    fontWeight={700}
                    fontSize={14}
                    color='#1D252C'
                    style={{ marginLeft: 16 }}
                />
            </CustomRow>


        </div>
    );
}
