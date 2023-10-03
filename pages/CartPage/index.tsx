import HeadPage from '@/components/HeadPage';
import TopBar from '@/components/TopBar';
import FooterBar from "components/FoooterBar";
import Cart from '@/container/Cart';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    promotion: yup.string().required("Vui lòng nhập mã giảm giá"),
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
            <HeadPage title='Giỏ hàng' />
            <main>
                <TopBar />
                <Cart
                    handleSubmit={handleSubmit}
                    errosForm={errosForm as any}
                    controlForm={control}
                />
                <FooterBar />
            </main>
        </>
    )
}
