import HeadPage from '@/components/HeadPage';
import TopBar from '@/components/TopBar';
import FooterBar from "components/FoooterBar";
import Login from '@/container/Login';

export default function Index() {
    return (
        <>
            <HeadPage title='Đăng nhập vnademy' />
            <main>
                <TopBar />
                <Login />
                <FooterBar />
            </main>
        </>
    )
}
