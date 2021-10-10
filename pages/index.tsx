import Head from 'next/head'
import {GetStaticProps} from "next";

const Home = ({title}: {title: string}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <h1>{title}</h1>
      </main>

    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            title: 'Мой блог'
        }
    }
}
