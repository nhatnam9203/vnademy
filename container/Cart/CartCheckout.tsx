import { CustomText, CustomButton, CustomFormInput } from "@/components";
import { Stack } from "react-bootstrap";
import React from "react";
import styles from "./styles.module.css";
import useRouter from "@/hooks/useRouter";

interface IProps {
    errosForm: object,
    handleSubmit: any
    controlForm: any
};


export default function CartCheckout({
    errosForm,
    handleSubmit,
    controlForm
}: IProps) {

    const [routerPush] = useRouter();

    return (
        <div className={styles.cart_checkout}>
            <div className={styles.cart_checkout_wrap}>
                <CustomText
                    title="Tổng cộng"
                    color="#55555A"
                    fontWeight={600}
                    fontSize={18}
                />

                <CustomText
                    title="1.459.000 đ"
                    color="#1D252C"
                    fontWeight={700}
                    fontSize={32}
                />

                <CustomButton
                    title="THANH TOÁN"
                    height={61}
                    width={"100%"}
                    isHover
                    fontSize={20}
                    fontWeight={700}
                    onClick={() => routerPush("Checkout")}
                    style={{ marginTop: 12 }}
                />
            </div>

            <div className={styles.hr} />

            <div className={styles.cart_checkout_wrap}>
                <CustomText
                    title="Khuyến mãi"
                    color="#55555A"
                    fontWeight={600}
                    fontSize={18}
                />

                <Stack direction="horizontal" style={{ marginTop: 5 }}>
                    <CustomFormInput
                        name={"promotion"}
                        controlForm={controlForm}
                        placeholder="Nhập mã giảm giá"
                        height={54}
                        style={{ borderColor: "#70757D" }}
                        inputStyle={{ padding: 8 }}
                        fontWeight={400}
                        renderIcon={<div />}
                    />

                    <CustomButton
                        title="Áp dụng"
                        height={54}
                        style={{
                            backgroundColor: "#1D252C", borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            marginLeft: -5
                        }}
                        width={105}
                        onClick={() => { }}
                        isHover={false}
                    />

                </Stack>
            </div>

        </div>
    )
}
