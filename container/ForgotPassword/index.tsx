import { CustomFormInput, CustomForm, CustomText, CustomButton } from "@/components";
import { Stack } from "react-bootstrap";
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


export default function ForgotPassword({
    errosForm,
    handleSubmit,
    controlForm
}: IProps) {

    const [value, setValue] = React.useState<string>('');

    const onChangeInput = (e: any) => {
        const inputValue = e.target.value;
        setValue(inputValue);
    };

    const onSubmitForm = (data: object) => {
        console.log('on submit form : ', data);
    };

    return (
        <div className={styles.activeCourse}>
            <div className={styles.activeCourse_containier}>
                <CustomText
                    title="Quên mật khẩu"
                    fontWeight={700}
                    color="#1D252C"
                    fontSize={32}
                />

                <CustomForm
                    onSubmitFom={onSubmitForm}
                    handleSubmit={handleSubmit}
                >
                    <CustomFormInput
                        name="email"
                        controlForm={controlForm}
                        error={errosForm?.email as any}
                        renderIcon={<div />}
                        value={value}
                        onChange={onChangeInput}
                        placeholder="Email / Số điện thoại"
                        height={54}
                        style={{ marginTop: 16, borderColor: "#70757D" }}
                        inputStyle={{ padding: 8 }}
                        fontWeight={400}
                    />

                    <CustomButton
                        title="ĐẶT LẠI MẬT KHẨU"
                        height={61}
                        width={"100%"}
                        isHover
                        fontSize={20}
                        fontWeight={700}
                        onClick={() => { }}
                        style={{ marginTop: 24 }}
                        type="submit"
                    />
                </CustomForm>

                <Stack style={{ margin: "auto", marginTop: 24 }} direction="horizontal" gap={1}>
                    <CustomText
                        title="Hoặc"
                        fontWeight={600}
                        color="#1D252C"
                        fontSize={16}
                    />
                    <CustomText
                        title="ĐĂNG NHẬP"
                        fontWeight={600}
                        color="#2B5DF5"
                        fontSize={16}
                        style={{ textDecoration: 'underline', cursor: "pointer" }}
                    />
                </Stack>
            </div>
        </div>
    )
}
