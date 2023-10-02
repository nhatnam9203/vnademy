import { CustomFormInput, CustomForm, CustomText, CustomButton } from "@/components";
import { Stack, Container } from "react-bootstrap";
import React from "react";
import styles from "./styles.module.css";

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
    )
}
