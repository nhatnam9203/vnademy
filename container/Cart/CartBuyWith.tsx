import React from "react";
import { Container, Row, Stack } from "react-bootstrap";
import {
    CustomText,
    CustomButton,
    CustomRow,
    CustomIcon
} from "components";
import {
    ic_arrow_right
} from "assets";
import CartBuyWithItem from "./CartBuyWithItem";
import styles from "./styles.module.css";
import Slider from "react-slick";
import Image from "next/image";

interface IProps {
};

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2
};

export default function CartBuyWith({
}: IProps) {
    return (
        <Container>
            <Row style={{ paddingTop: 30 }}>
                <CustomRow isBetween style={{ marginBottom: 16 }}>
                    <CustomText
                        title="THƯỜNG ĐƯỢC MUA CÙNG"
                        color="#1D252C"
                        fontWeight={700}
                        fontSize={26}
                    />

                    <div>
                        <CustomRow>
                            <div>
                                <Image
                                    width={9}
                                    height={15}
                                    src={ic_arrow_right}
                                    alt="ic_arrow_right"
                                />
                            </div>

                            <div>
                                <Image
                                    width={9}
                                    height={15}
                                    src={ic_arrow_right}
                                    alt="ic_arrow_right"
                                />
                            </div>
                        </CustomRow>
                    </div>

                </CustomRow>


                <Slider {...settings}>
                    <CartBuyWithItem />
                    <CartBuyWithItem />
                    <CartBuyWithItem />
                    <CartBuyWithItem />
                    <CartBuyWithItem />
                    <CartBuyWithItem />
                    <CartBuyWithItem />
                    <CartBuyWithItem />
                </Slider>
            </Row>
        </Container>
    )
}
