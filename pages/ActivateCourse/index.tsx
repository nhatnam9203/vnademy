import HeadPage from '@/components/HeadPage';
import TopBar from '@/components/TopBar';
import FooterBar from "components/FoooterBar";
import ActivateCourse from '@/container/ActivateCourse';
import { useForm } from "react-hook-form";

export default function Index() {

  type FormValues = {
    activeCourse : string
  }

  const {
    handleSubmit,
    formState: { errors: errosForm },
    control
  } = useForm<FormValues>({
  })

  return (
    <>
      <HeadPage title='Kích hoạt khoá học' />
      <main>
        <TopBar />
        <ActivateCourse
          handleSubmit={handleSubmit}
          errosForm={errosForm}
          controlForm={control}
        />
        <FooterBar />
      </main>
    </>
  )
}
