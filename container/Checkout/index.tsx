import {
    CustomText,
    CustomIcon,
    CustomFormInput,
    CustomForm,
    CustomPhoneInput,
    CustomRow,
    CustomInput
} from "@/components";
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


export default function Checkout({
    errosForm,
    handleSubmit,
    controlForm
}: IProps) {

    const onSubmitForm = (data: object) => {
        console.log('on submit form : ', data);
    };

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
                            <div className={styles.checkout_user_information}>
                                <CustomText
                                    title="THÔNG TIN NGƯỜI MUA"
                                    fontSize={17}
             r                       fontWeight={700}
                                    color="#1D252C"
                                />

                                <hr style={{ 
                                    marginBottom: 24, marginLeft: -20, marginRight: -20 ,
                                    borderColor: "#E0E6EF", opacity: 1
                                    }} 
                                    />

                                <CustomInput
                                    value={"Nam Phan"}
                                    onChange={() => { }}
                                    placeholder="Họ tên"
                                    height={54}
                                    style={{ marginTop: 16, borderColor: "#70757D" }}
                                    inputStyle={{ padding: 8 }}
                                    fontWeight={400}
                                />

                                <CustomRow isBetween>

                                    <CustomPhoneInput
                                        value={"0987 654 321"}
                                        onChange={() => { }}
                                        placeholder="0987 6543 321"
                                        height={54}
                                        style={{ marginTop: 16, borderColor: "#70757D", width: "49%" }}
                                        inputStyle={{ padding: 8 }}
                                        fontWeight={400}
                                    />

                                    <CustomInput
                                        value={"nhatnam9203@gmail.com"}
                                        onChange={() => { }}
                                        placeholder="Email"
                                        height={54}
                                        style={{ marginTop: 16, borderColor: "#70757D", width: "49%" }}
                                        inputStyle={{ padding: 8 }}
                                        fontWeight={400}
                                    />
                                </CustomRow>
                            </div>

                            <div
                                className={styles.checkout_user_information}
                                style={{ marginTop: 16 }}
                            >
                                <CustomText
                                    title="CHỌN PHƯƠNG THỨC THANH TOÁN"
                                    fontSize={17}
                                    fontWeight={700}
                                    color="#1D252C"
                                />

<hr style={{ 
                                    marginBottom: 24, marginLeft: -20, marginRight: -20 ,
                                    borderColor: "#E0E6EF", opacity: 1
                                    }} 
                                    />
                            </div>
                        </Col>

                        <Col md={{ span: 4 }}>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
