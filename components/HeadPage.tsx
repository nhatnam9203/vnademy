import Head from 'next/head';

interface IProps{
    title: string
}

export default function HeadPage({ title = "" } : IProps) {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}