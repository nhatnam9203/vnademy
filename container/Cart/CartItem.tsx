import { CustomText, CustomImage } from "@/components";
import { Stack, Container, Row, Col } from "react-bootstrap";
import React from "react";
import styles from "./styles.module.css";
import {
    ic_clock,
    ic_play,
    ic_vnd
} from "assets";

interface IProps {

};


export default function CartItem({

}: IProps) {
    return (
        <div className={styles.course_in_cart}>
            <Stack direction="horizontal">
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
                                src={ic_clock}
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


            <Stack direction="horizontal">
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
                    style={{ marginTop: -20 }}
                />
            </Stack>

            </Stack>
        </div>
    )
}
