import React from "react";
import { Container, Row } from "react-bootstrap";
import {
    CustomText,
    CustomRow,
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

    const refSlick = React.useRef<any>(null);

    const next = () => {
        refSlick.current?.slickNext?.();
    };

    const previous = () => {
        refSlick.current?.slickPrev?.();
    };

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

                    <div style={{ marginRight: 5 }}>
                        <CustomRow>
                            <div className={styles.cart_buy_with_arrow}
                                style={{ marginRight: 5 }}
                                onClick={previous}
                            >
                                <Image
                                    width={9}
                                    height={15}
                                    src={ic_arrow_right}
                                    alt="ic_arrow_right"
                                    style={{ transform: "rotate(180deg)" }}
                                />
                            </div>

                            <div onClick={next} className={styles.cart_buy_with_arrow}>
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


                <Slider ref={refSlick} {...settings}>
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
