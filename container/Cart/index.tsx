import { CustomText } from "@/components";
import { Stack, Container, Row, Col } from "react-bootstrap";
import React from "react";
import styles from "./styles.module.css";
import CartItem from "./CartItem";

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
                <Container style={{ paddingTop: 16 }}>
                    <Row>
                        <Col md={{ span: 8 }}>
                            <Stack direction="horizontal" gap={1}>
                                <CustomText title="2" color="#1D252C" fontWeight={700} fontSize={16} />
                                <CustomText title="khóa học trong giỏ hàng" color="#1D252C" fontWeight={400} fontSize={16} />
                            </Stack>

                            <CartItem />
                        </Col>

                        <Col md={{ span: 4 }}>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
