import { CustomText, CustomIcon } from "@/components";
import { Stack, Container, Row, Col } from "react-bootstrap";
import React from "react";
import styles from "./styles.module.css";
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


export default function CheckoutUserInformation({
    errosForm,
    handleSubmit,
    controlForm
}: IProps) {
    return (
        <>
            <div className={styles.checkout_header}>
                <Container>
                    <CustomText
                        title="Thanh toán"
                        color="white"
                        fontWeight={700}
                        fontSize={24}
                    />
                </Container>
            </div>

            <div className={styles.checkout_body}>
                <Container style={{ paddingTop: 16, paddingBottom: 32 }}>
                    <Row>
                        <Col md={{ span: 8 }}>
                            <CustomText
                                title="THÔNG TIN NGƯỜI MUA"
                                fontSize={17}
                                fontWeight={700}
                                color="#1D252C"
                            />
                        </Col>

                        <Col md={{ span: 4 }}>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
