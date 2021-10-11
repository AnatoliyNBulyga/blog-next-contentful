import React from 'react'
import {IArticle, IArticleFields} from "../../contentful"
import client from "../../contentful/index"
import {Container} from "reactstrap"
import Head from "next/head"
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {GetStaticPaths, GetStaticProps} from "next";


const Article= ({article}: {article: IArticle})=> {
    return (
        <>
            <Head>
                <title>
                    {article.fields.title}
                </title>
            </Head>
            <Container>
                <h1 className="py-3">
                    {article.fields.title}
                </h1>
                <div className="py-2">
                    {documentToReactComponents(article.fields.content!)}
                </div>
            </Container>
        </>
    )
}

export default Article

export const getStaticPaths: GetStaticPaths = async () => {
    const articleEtries = await client.getEntries<IArticleFields>({
       content_type: 'article',
       select: 'fields.slug'
    })

    return {
        paths: articleEtries.items.map(item => ({
            params: {
                article: item.fields.slug
            }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const slug = params!.article

    const articleEtries = await client.getEntries<IArticleFields>({
        content_type: 'article',
        limit: 1,
        'fields.slug': slug
    })

    const [article] = articleEtries.items

    return {
        props: {
            article
        }
    }
}