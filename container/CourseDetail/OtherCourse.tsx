import React from 'react';
import styles from "./styles.module.css";
import {
    CustomText,
    CustomRow,
    CustomImage,
    CustomButton
} from "components";
import {
    ic_cart_image_example_2,
    ic_star,
    ic_star_half
} from "assets";
import { Stack } from 'react-bootstrap';
import Image from 'next/image';

export default function () {
    return (
        <div className={styles.course_introduce}>
            <CustomRow>
                <CustomText
                    title={`Các khóa học khác của `}
                    color='#1D252C'
                    fontWeight={700}
                    fontSize={20}
                />
                <CustomText
                    title={` Emily Pham Nguyen`}
                    color='#2B5DF5'
                    fontWeight={700}
                    fontSize={20}
                    style={{ marginLeft: 8 }}
                />
            </CustomRow>


            {
                new Array(3).fill(null).map(() => (
                    <CustomRow style={{ marginTop: 16 }}>
                        <CustomRow>
                            <CustomImage
                                src={ic_cart_image_example_2}
                                height={110}
                                width={145}
                            />
                            <Stack style={{ marginLeft: 20, marginTop: 12 }} gap={1}>
                                <CustomRow style={{ alignItems: "flex-start", width: "100%" }} isBetween>
                                    <CustomText
                                        title='Lập trình Web tốc độ cao, thời gian thực với NodeJS'
                                        color='#1D252C'
                                        fontWeight={700}
                                        fontSize={15}
                                        style={{
                                            maxWidth: 380, width: "100%",
                                        }}
                                    />
                                    <CustomText
                                        title='270.000 đ'
                                        color='#1D252C'
                                        fontWeight={700}
                                        fontSize={15}
                                    />
                                </CustomRow>
                                <CustomText
                                    title='Emily Pham Nguyen'
                                    color='#1D252C'
                                    fontWeight={600}
                                    fontSize={13}
                                />
                                <CustomRow>
                                    {
                                        new Array(4).fill(null).map(() => (
                                            <Image
                                                key={Math.random()}
                                                src={ic_star}
                                                width={13}
                                                height={13}
                                                alt='ic_star'
                                            />
                                        ))
                                    }
                                    <Image
                                        src={ic_star_half}
                                        width={13}
                                        height={13}
                                        alt='ic_star'
                                    />
                                </CustomRow>
                            </Stack>
                        </CustomRow>
                    </CustomRow>
                ))
            }

            <div className={styles.viewMore}>
                <CustomButton
                    title='Xem tất cả'
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
