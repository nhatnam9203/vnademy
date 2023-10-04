import React from "react";
import { Container, Row, Stack } from "react-bootstrap";
import {
    CustomText,
    CustomButton,
    CustomImage,
    CustomRow
} from "components";
import {
    ic_cart_image_example_2,
    ic_star,
    ic_star_half
} from "@/assets";
import styles from "./styles.module.css";
import Image from "next/image";

interface IProps {
};

export default function CartBuyWithItem({
}: IProps) {
    return (
        <div className={styles.cart_buy_with_item}>
            <Image
                src={ic_cart_image_example_2}
                height={200}
                alt="ic_cart_image_example"
                style={{ width: "100%" }}
            />
            <div className={styles.cart_buy_with_item_bottom}>
                <CustomText
                    title="Lập trình web tốc độ cao, thời gian thực với NodeJS"
                    color="#1D252C"
                    fontSize={15}
                    fontWeight={700}
                />

                <CustomRow isBetween>
                    <CustomText
                        title="Huynh Nguyen"
                        color={"#1D252C"}
                        fontSize={13}
                        fontWeight={600}
                    />
                    <CustomText
                        title="349.000"
                        color={"#1D252C"}
                        fontSize={16}
                        fontWeight={700}
                    />
                </CustomRow>

                <CustomRow isBetween>
                    <Stack direction="horizontal">
                        <Image
                            src={ic_star}
                            alt="ic_star"
                            width={13}
                            height={13}
                        />
                        <Image
                            src={ic_star}
                            alt="ic_star"
                            width={13}
                            height={13}
                        />
                        <Image
                            src={ic_star}
                            alt="ic_star"
                            width={13}
                            height={13}
                        />
                        <Image
                            src={ic_star}
                            alt="ic_star"
                            width={13}
                            height={13}
                        />
                        <Image
                            src={ic_star_half}
                            alt="ic_star"
                            width={13}
                            height={13}
                        />
                    </Stack>
                    <CustomText
                        title="990.000"
                        color={"#90959E"}
                        fontSize={14}
                        fontWeight={600}
                        style={{ textDecoration: "line-through" }}
                    />
                </CustomRow>
            </div>
        </div>
    )
}
