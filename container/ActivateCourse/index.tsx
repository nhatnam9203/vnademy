import CustomText from "@/components/CustomText";
import CustomButton from "@/components/CustomButton";
import CustomIcon from "@/components/CustomIcon";
import CustomForm from "@/components/CustomForm";
import CustomFormInput from "@/components/CustomFormInput";
import { Stack } from "react-bootstrap";
import {
    ic_facebook_rounded,
    ic_google_rounded,
} from "assets";
import React from "react";
import styles from "./styles.module.css";

interface IProps {
    errosForm: object,
    handleSubmit: any
    controlForm: any
}

export default function ActivateCourse({
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
                    title="Kích hoạt khoá học"
                    fontWeight={700}
                    color="#1D252C"
                    fontSize={32}
                />
                <CustomText
                    title="Lưu ý: Mỗi khoá học chỉ kích hoạt 1 lần duy nhất."
                    fontWeight={500}
                    color="#4F4F4F"
                    fontSize={16}
                    style={{ marginTop: 8 }}
                />
                <CustomForm
                    onSubmitFom={onSubmitForm}
                    handleSubmit={handleSubmit}
                >
                    <CustomFormInput
                        name={"activeCourse"}
                        controlForm={controlForm}
                        value={value}
                        onChange={onChangeInput}
                        placeholder="Nhập mã kích hoạt. Ví dụ : 103D344556"
                        height={54}
                        style={{ marginTop: 16, borderColor: "#70757D" }}
                        inputStyle={{ padding: 8 }}
                        fontWeight={400}
                    />

                    <CustomButton
                        title="KÍCH HOẠT NGAY"
                        height={61}
                        width={"100%"}
                        isHover
                        fontSize={20}
                        fontWeight={700}
                        onClick={() => { }}
                        style={{ marginTop: 20 }}
                        type="submit"
                    />

                </CustomForm>
                <CustomText
                    title="Vui lòng đăng nhập trước khi nhập mã kích hoạt"
                    fontWeight={500}
                    color="#E81E25"
                    fontSize={15}
                    style={{
                        height: 41,
                        width: "100%",
                        display: "flex", justifyContent: "center", alignItems: "center",
                        background: "#f2e9e9",
                        padding: 8,
                        marginTop: 14
                    }}
                />

                <Stack style={{ margin: "auto", marginTop: 16 }} direction="horizontal" gap={1}>
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

                <div className={styles.orLoginWith}>
                    <div className={styles.orLoginWith_line} />
                    <CustomText
                        title="Hoặc đăng nhập bằng"
                        fontWeight={500}
                        color="#4F4F4F"
                        fontSize={16}
                        style={{ marginLeft: 16, marginRight: 16 }}
                    />
                    <div className={styles.orLoginWith_line} />
                </div>

                <div className={styles.loginSocial}>
                    <div className={styles.loginSocial_button}>
                        <CustomIcon
                            icon={ic_google_rounded}
                            width={30}
                            height={30}
                            fontWeight={700}
                            fontSize={18}
                            alt="ic_facebook_rounded"
                            title="Google"
                        />
                    </div>

                    <div className={styles.loginSocial_button}>
                        <CustomIcon
                            icon={ic_facebook_rounded}
                            width={30}
                            height={30}
                            fontWeight={700}
                            fontSize={18}
                            alt="ic_facebook_rounded"
                            title="Facebook"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
