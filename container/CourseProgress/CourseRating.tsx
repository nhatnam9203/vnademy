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
import { Rating } from 'react-simple-star-rating';

export default function () {
    return (
        <div className={styles.course_introduce}>
            <CustomText
                title='Đánh giá khóa học'
                color='#1D252C'
                fontWeight={700}
                fontSize={20}
            />

            <CustomButton
                title='GỬI ĐÁNH GIÁ'
                fontSize={15}
                fontWeight={600}
                width={"100%"}
                height={50}
                onClick={() => { }}
                style={{ margin: "auto", marginTop: 30, borderRadius: 3 }}
            />
        </div>
    );
} 