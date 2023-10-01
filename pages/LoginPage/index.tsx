import HeadPage from '@/components/HeadPage';
import TopBar from '@/components/TopBar';
import FooterBar from "components/FoooterBar";
import Login from '@/container/Login';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().required("Yêu cầu nhập email"),
    password: yup.string().required("Yêu cầu nhập password"),
});

export default function Index() {
    type FormValues = {
        email: string,
        password: string
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
            <HeadPage title='Đăng nhập vnademy' />
            <main>
                <TopBar />
                <Login
                    handleSubmit={handleSubmit}
                    errosForm={errosForm as any}
                    controlForm={control}
                />
                <FooterBar />
            </main>
        </>
    )
}
