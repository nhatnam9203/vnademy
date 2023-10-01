import {
    CustomButton,
    CustomText,
    CustomIcon,
    CustomFormInput,
    CustomForm
} from "components";
import { Stack } from "react-bootstrap";
import {
    ic_facebook_rounded,
    ic_google_rounded,
} from "assets";
import React from "react";
import styles from "./styles.module.css";

interface IErros{
    email : object,
    password: object
}

interface IProps {
    errosForm: IErros,
    handleSubmit: any
    controlForm: any
};

export default function Login({
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
                    title="Đăng nhập vào Vnademy"
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

                    <CustomFormInput
                        name="password"
                        type="password"
                        value={value}
                        onChange={onChangeInput}
                        placeholder="Mật khẩu"
                        height={54}
                        style={{ marginTop: 16, borderColor: "#70757D" }}
                        inputStyle={{ padding: 8 }}
                        fontWeight={400}
                        controlForm={controlForm}
                        renderIcon={<div />}
                        error={errosForm?.password as any}
                    />

                    <div className={styles.forgotPass}>
                        <Stack direction="horizontal" gap={1}>
                            <input
                                type="checkbox"
                                id="isRemember"
                                name="isRemember"
                                value="isRemember"
                            />
                            <CustomText
                                title="Ghi nhớ tài khoản"
                                fontWeight={500}
                                color="#70757D"
                                fontSize={16}
                            />
                        </Stack>

                        <CustomText
                            title="Quên mật khẩu?"
                            fontWeight={700}
                            color="#2B5DF5"
                            fontSize={16}
                            isHover
                        />
                    </div>

                    <CustomButton
                        title="ĐĂNG NHẬP"
                        type="submit"
                        height={61}
                        width={"100%"}
                        isHover
                        fontSize={20}
                        fontWeight={700}
                        onClick={() => { }}
                        style={{ marginTop: 20 }}
                    />
                </CustomForm>

                <Stack style={{ margin: "auto", marginTop: 16 }} direction="horizontal" gap={1}>
                    <CustomText
                        title="Bạn chưa có tài khoản?"
                        fontWeight={600}
                        color="#1D252C"
                        fontSize={16}
                    />
                    <CustomText
                        title="ĐĂNG  KÝ NGAY"
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
