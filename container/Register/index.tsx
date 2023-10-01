import CustomText from "@/components/CustomText";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import CustomPhoneInput from "@/components/CustomPhoneInput";
import { Stack } from "react-bootstrap";
import {
    ic_facebook_rounded,
    ic_google_rounded,
    ic_checked
} from "assets";
import React from "react";
import styles from "./styles.module.css";

export default function Login() {

    const [value, setValue] = React.useState<string>('');

    const onChangeInput = (e: any) => {
        const inputValue = e.target.value;
        setValue(inputValue);
    };

    return (
        <div className={styles.activeCourse}>
            <div className={styles.activeCourse_containier}>
                <CustomText
                    title="Đăng ký tài khoản"
                    fontWeight={700}
                    color="#1D252C"
                    fontSize={32}
                />

                <CustomInput
                    value={value}
                    onChange={onChangeInput}
                    placeholder="Họ tên"
                    height={54}
                    style={{ marginTop: 16, borderColor: "#70757D" }}
                    inputStyle={{ padding: 8 }}
                    fontWeight={400}
                />

                <CustomInput
                    value={value}
                    onChange={onChangeInput}
                    placeholder="Email"
                    height={54}
                    style={{ marginTop: 16, borderColor: "#70757D" }}
                    inputStyle={{ padding: 8 }}
                    fontWeight={400}
                />

                <CustomPhoneInput
                    value={value}
                    onChange={onChangeInput}
                    placeholder="0987 6543 321"
                    height={54}
                    style={{ marginTop: 16, borderColor: "#70757D" }}
                    inputStyle={{ padding: 8 }}
                    fontWeight={400}
                />

                <CustomInput
                    value={value}
                    onChange={onChangeInput}
                    placeholder="Mật khẩu"
                    height={54}
                    style={{ marginTop: 16, borderColor: "#70757D" }}
                    inputStyle={{ padding: 8 }}
                    fontWeight={400}
                />

                <CustomInput
                    value={value}
                    onChange={onChangeInput}
                    placeholder="Nhập lại mật khẩu"
                    height={54}
                    style={{ marginTop: 16, borderColor: "#70757D" }}
                    inputStyle={{ padding: 8 }}
                    fontWeight={400}
                />

                <CustomButton
                    title="ĐĂNG KÝ"
                    height={61}
                    width={"100%"}
                    isHover
                    fontSize={20}
                    fontWeight={700}
                    onClick={() => { }}
                    style={{ marginTop: 24 }}
                />

                <Stack style={{ margin: "auto", marginTop: 24 }} direction="horizontal" gap={1}>
                    <CustomText
                        title="Bạn đã có tài khoản?"
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
