import HeadPage from '@/components/HeadPage';
import TopBar from '@/components/TopBar';
import FooterBar from "components/FoooterBar";
import ForgotPassword from '@/container/ForgotPassword';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().required("Yêu cầu nhập email"),
});


export default function Index() {
    type FormValues = {
        email: string,
    }

    const {
        handleSubmit,
        formState: { errors: errosForm },
        control
    } = useForm<FormValues>({
        resolver: yupResolver(schema)
    })
    return (
        <>
            <HeadPage title='Quên mật khẩu' />
            <main>
                <TopBar />
                <ForgotPassword
                    handleSubmit={handleSubmit}
                    errosForm={errosForm as any}
                    controlForm={control}
                />
                <FooterBar />
            </main>
        </>
    )
}
