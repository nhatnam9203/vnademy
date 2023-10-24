import HeadPage from '@/components/HeadPage';
import TopBar from '@/components/TopBar';
import FooterBar from "components/FoooterBar";
import Home from '@/container/Home';

export default function Index() {
    return (
        <>
            <HeadPage title='Trang chủ' />
            <main>
                <TopBar />
                <Home />
                <FooterBar />
            </main>
        </>
    )
}
