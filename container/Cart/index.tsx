import { CustomText, CustomIcon } from "@/components";
import { Stack, Container, Row, Col } from "react-bootstrap";
import React from "react";
import styles from "./styles.module.css";
import CartItem from "./CartItem";
import CartCheckout from "./CartCheckout";
import CartBuyWith from "./CartBuyWith";
import {
    ic_plus,
    ic_trash
} from "assets";

interface IErros {
    email: object,
    password: object
}

interface IProps {
    errosForm: IErros,
    handleSubmit: any
    controlForm: any
};


export default function Cart({
    errosForm,
    handleSubmit,
    controlForm
}: IProps) {

    return (
        <>
            <div className={styles.cart_header}>
                <Container>
                    <CustomText
                        title="Giỏ hàng"
                        color="white"
                        fontWeight={700}
                        fontSize={24}
                    />
                </Container>
            </div>

            <div className={styles.cart_body}>
                <Container style={{ paddingTop: 16, paddingBottom: 32 }}>
                    <Row>
                        <Col md={{ span: 8 }}>
                            <Stack direction="horizontal" gap={1}>
                                <CustomText title="2" color="#1D252C" fontWeight={700} fontSize={16} />
                                <CustomText title="khóa học trong giỏ hàng" color="#1D252C" fontWeight={400} fontSize={16} />
                            </Stack>
                            <div style={{ paddingTop: 10 }}>
                                <CartItem isFirstItem />
                                <CartItem isLastItem />

                                <div className={styles.course_in_cart_button}>
                                    <CustomIcon
                                        icon={ic_plus}
                                        alt="ic_plus"
                                        width={20}
                                        height={20}
                                        title="MUA THÊM KHOÁ HỌC"
                                        titleColor="#2B5DF5"
                                        fontWeight={600}
                                        style={{ border: "1px solid #2B5DF5", padding: "8px 16px", borderRadius: 3 }}
                                        isHoverTransparent
                                    />

                                    <CustomIcon
                                        icon={ic_trash}
                                        alt="ic_plus"
                                        width={20}
                                        height={20}
                                        title="XOÁ TẤT CẢ"
                                        titleColor="#E81E25"
                                        fontWeight={600}
                                        style={{ border: "1px solid #E81E25", padding: "8px 16px", borderRadius: 3, marginRight: 0 }}
                                        isHoverTransparent
                                    />
                                </div>
                            </div>
                        </Col>

                        <Col md={{ span: 4 }}>
                            <CartCheckout
                                errosForm={errosForm}
                                handleSubmit={handleSubmit}
                                controlForm={controlForm}
                            />
                        </Col>
                    </Row>
                </Container>

                <div className={styles.cart_buy_with}>
                    <CartBuyWith />
                </div>
            </div>
        </>
    )
}
