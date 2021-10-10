import Head from 'next/head'
import {GetStaticProps} from "next";
import client from "../contentful/index";
import {IHome, IHomeFields} from "../contentful";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import { Container, Row, Col } from 'reactstrap'

const Home = ({home}: {home: IHome}) => {
  return (
    <div>
      <Head>
        <title>{home.fields.title}</title>
      </Head>

      <main>
        <h1>{home.fields.title}</h1>
          <div>
              {documentToReactComponents(home.fields.description!)}
          </div>
      </main>

    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
    const home = await client.getEntries<IHomeFields>({
       content_type: 'home',
        limit: 1
    })
    
    const [homePage] = home.items
    return {
        props: {
            title: 'Мой блог',
            home: homePage,
        },
        revalidate: 3600
    }
}
