import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useAppSelector } from "state-management/hooks";
import HeadPage from '@/components/HeadPage';
import TopBar from '@/components/TopBar';

export default function ActivateCourse() {

  return (
    <>
      <HeadPage title='Kịch hoạt khoá học' />
      <main>
        <TopBar />
      </main>
    </>
  )
}
