import HeadPage from '@/components/HeadPage';
import TopBar from '@/components/TopBar';
import FooterBar from "components/FoooterBar";
import Checkout from '@/container/Checkout';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    promotion: yup.string().required("Vui lòng nhập mã giảm giá"),
});


export default function Index() {
    type FormValues = {
        promotion: string,
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
            <HeadPage title='Thanh toán' />
            <main>
                <TopBar />
                <Checkout
                    handleSubmit={handleSubmit}
                    errosForm={errosForm as any}
                    controlForm={control}
                />
                <FooterBar />
            </main>
        </>
    )
}
