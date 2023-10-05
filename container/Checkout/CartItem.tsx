import { CustomText, CustomImage } from "@/components";
import { Stack } from "react-bootstrap";
import React from "react";
import styles from "./styles.module.css";
import {
    ic_clock,
    ic_play,
    ic_vnd,
    ic_trash,
    ic_cart_image_example
} from "assets";
import Image from "next/image";

interface IProps {
    isLastItem?: boolean,
    isFirstItem?: boolean,
};

export default function CartItem({
    isLastItem = false,
    isFirstItem = false
}: IProps) {
    return (
        <div
            className={styles.course_in_cart}
            style={{ 
                borderBottom: !isLastItem ? "3px solid #F0F2F4" : "none",
                borderTopLeftRadius: isFirstItem ? 8 : 0,
                borderTopRightRadius: isFirstItem ? 8 : 0,
                borderBottomLeftRadius: isLastItem ? 8 : 0,
                borderBottomRightRadius: isLastItem ? 8 : 0
             }}
        >
            <div className={styles.course_in_cart_row}>
                <CustomImage
                    src={ic_cart_image_example}
                    alt="ic_cart_image_example"
                    height={89}
                    width={110}
                    style={{ marginRight: 16 }}
                />
                <Stack>
                    <CustomText
                        title="Thiết kế Powerpoint chuyên nghiệp"
                        color="#1D252C"
                        fontWeight={700}
                        fontSize={16}
                    />
                    <Stack direction="horizontal" gap={1}>
                        <CustomText
                            title="Giảng viên: "
                            color="#1D252C"
                            fontWeight={400}
                            fontSize={14}
                        />
                        <CustomText
                            title="Emily Phạm Nguyễn"
                            color="#1D252C"
                            fontWeight={600}
                            fontSize={14}
                        />
                    </Stack>

                    <Stack direction="horizontal" gap={4}>
                        <Stack direction="horizontal" gap={1}>
                            <CustomImage
                                src={ic_clock}
                                alt="ic_clock"
                                width={18}
                                height={18}
                            />
                            <CustomText
                                title="Thời lượng: 06 giờ 10 phút"
                                fontWeight={500}
                                fontSize={13}
                                color="#55555A"
                                style={{ marginTop: 12, marginLeft: 3 }}
                            />
                        </Stack>

                        <Stack direction="horizontal" gap={1}>
                            <CustomImage
                                src={ic_play}
                                alt="ic_clock"
                                width={18}
                                height={18}
                            />
                            <CustomText
                                title="Giáo trình: 52 bài giảng"
                                fontWeight={500}
                                fontSize={13}
                                color="#55555A"
                                style={{ marginTop: 12, marginLeft: 3 }}
                            />
                        </Stack>
                    </Stack>
                </Stack>


                <div
                    className={styles.course_in_cart_row}
                    style={{ marginRight: 60 }}
                >
                    <CustomText
                        title="900.000"
                        fontWeight={700}
                        fontSize={16}
                        color="#1D252C"
                    />
                    <CustomImage
                        src={ic_vnd}
                        alt="ic_vnd"
                        width={9}
                        height={15}
                        style={{ marginTop: -6 }}
                    />
                </div>

                <div
                    className={styles.course_in_cart_row}
                    style={{ cursor: "pointer" }}
                >
                    <Image
                        src={ic_trash}
                        height={13}
                        width={13}
                        alt="ic_trash"
                        style={{ marginRight: 5, marginTop: 5 }}
                    />
                    <CustomText
                        title="Xoá"
                        fontSize={16}
                        fontWeight={600}
                        color="#E81E25"
                        isHover
                    />
                </div>

            </div>
        </div>
    )
}
