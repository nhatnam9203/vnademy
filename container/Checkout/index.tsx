import {
    CustomText,
    CustomIcon,
    CustomFormInput,
    CustomForm,
    CustomPhoneInput,
    CustomRow,
    CustomInput,
    CustomImage
} from "@/components";
import { Stack, Container, Row, Col } from "react-bootstrap";
import React from "react";
import styles from "./styles.module.css";
import {
    ic_plus,
    ic_radio_on,
    ic_trash,
    ic_bank,
    ic_viettel_pay,
    ic_visa,
    ic_momo,
} from "assets";
import Image from "next/image";

interface IErros {
    email: object,
    password: object
}

interface IProps {
    errosForm: IErros,
    handleSubmit: any
    controlForm: any
};

const listItemPay = [
    {
        title: "Chuyển khoản ngân hàng",
        content: "Ngay sau khi nhận được thanh toán, Vnademy sẽ gửi mã kích hoạt vào email và SMS của bạn.",
        icon: ic_bank,
        ic_size_width: 58,
        ic_size_height: 40,
    },
    {
        title: "Thanh toán bằng thẻ quốc tế Visa/ Master",
        content: "Hỗ trợ Credit và Debit. Bạn sẽ được chuyển đến cổng OnePay để thanh toán.",
        icon: ic_visa,
        ic_size_width: 58,
        ic_size_height: 40,
    },
    {
        title: "Thanh toán bằng ví điện tử MoMo",
        content: "Vui lòng cài App MoMo trước khi chọn hình thức này.",
        icon: ic_momo,
        ic_size_width: 45,
        ic_size_height: 45,
    },
    {
        title: "Thanh toán bằng cổng Viettel Money",
        content: "Bạn sẽ được chuyển đến cổng Viettel Money để thanh toán",
        icon: ic_viettel_pay,
        ic_size_width: 45,
        ic_size_height: 45,
    }
];

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
                                    fontWeight={700}
                                    color="#1D252C"
                                />

                                <hr style={{
                                    marginBottom: 24, marginLeft: -20, marginRight: -20,
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
                                    marginBottom: 24, marginLeft: -20, marginRight: -20,
                                    borderColor: "#E0E6EF", opacity: 1
                                }}
                                />

                                {
                                    listItemPay.map(item =>
                                        <ItemPay
                                            title={item.title}
                                            ic_size_height={item.ic_size_height}
                                            ic_size_width={item.ic_size_width}
                                            icon={item.icon}
                                            content={item.content}
                                            key={item.title}
                                        />
                                    )
                                }

                            </div>
                        </Col>

                        <Col md={{ span: 4 }}>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
};

interface IItemPay {
    title: string,
    content: string,
    icon: any
    ic_size_width: number
    ic_size_height: number
};

const ItemPay = ({
    title,
    content,
    icon,
    ic_size_width,
    ic_size_height,
}: IItemPay) => {
    return (
        <>
            <CustomRow isBetween>
                <CustomRow>
                    <CustomImage
                        src={ic_radio_on}
                        width={24}
                        height={24}
                        alt="ic_radio_on"
                        style={{ marginRight: 10, marginTop: -16 }}
                    />
                    <div>
                        <CustomText
                            title={title}
                            color="#1D252C"
                            fontSize={14}
                            fontWeight={700}
                        />
                        <CustomText
                            title={content}
                            color="#1D252C"
                            fontSize={14}
                            fontWeight={400}
                        />
                    </div>
                </CustomRow>

                <CustomImage
                    src={icon}
                    width={ic_size_width}
                    height={ic_size_height}
                    style={{ marginRight: 10, marginTop: -16 }}
                />

            </CustomRow>
            <hr style={{ borderColor: "#E0E6EF", opacity: 1, marginBottom: 24 }} />
        </>
    );
};
