import HeadPage from '@/components/HeadPage';
import TopBar from '@/components/TopBar';
import FooterBar from "components/FoooterBar";
import ActivateCourse from '@/container/ActivateCourse';

export default function Index() {

  return (
    <>
      <HeadPage title='Kích hoạt khoá học' />
      <main>
        <TopBar />
        <ActivateCourse />
        <FooterBar />
      </main>
    </>
  )
}
