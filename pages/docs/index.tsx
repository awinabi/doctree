import React from 'react'
import Layout from '../../components/Layout'
import { getDocPages, getDocPage } from '../../utils/api'


interface DocPage {
    id: number,
    title: string,
    slug: string, 
    content: string,
    contentHtml: string
}


interface DocPageProps {
    pages: DocPage[]
}


interface DocPageParams {
  params: { id: number }
}


export async function getStaticProps({ params }: DocPageParams) {
    const pages = await getDocPages()
  
    return { props: { pages } }
  }

  
export default function DocIndex({pages} : DocPageProps) {

    return (
        <Layout>
          <>
          <h1>Available Documents</h1>
          <div className="flex-shrink-0 py-3 " >
          <ul className="nav nav-pills flex-column mb-3 pb-3 ">
            { pages && pages.length > 0 ?
                <>
                {pages.map(page => (
                <li key={page.id}>
                    <a href={`/docs/${page.id}`} className="text-primary text-underline">
                    {page.title}
                    </a>
                </li>
                ))}
                </>
                : null
            }
          </ul>
          </div>
          </>
        </Layout>
      )
}