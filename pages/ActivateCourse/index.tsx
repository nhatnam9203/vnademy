import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useAppSelector } from "state-management/hooks";
import HeadPage from '@/components/HeadPage';
import TopBar from '@/components/TopBar';
import FooterBar from "components/FoooterBar";

export default function ActivateCourse() {

  return (
    <>
      <HeadPage title='Kích hoạt khoá học' />
      <main>
        <TopBar />
        <FooterBar />
      </main>
    </>
  )
}
