import HeadPage from '@/components/HeadPage';
import TopBar from '@/components/TopBar';
import FooterBar from "components/FoooterBar";
import Register from '@/container/Register';

export default function Index() {
    return (
        <>
            <HeadPage title='Đăng ký tài khoản' />
            <main>
                <TopBar />
                <Register />
                <FooterBar />
            </main>
        </>
    )
}
