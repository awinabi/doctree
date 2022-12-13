import React from "react";

import { getDocPages, getDocPage } from "../../utils/api";

interface DocPage {
    id: number;
    title: string;
    slug: string;
    content: string;
    contentHtml: string;
}

interface DocPageProps {
    page: DocPage;
}

interface DocPageParams {
    params: { id: number };
}

export async function getStaticPaths() {
    const docPages = await getDocPages();

    // Get the paths we want to pre-render based on posts
    const paths = docPages.map((docPage) => ({
        params: { id: String(docPage.id) },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: "blocking" };
}

// This also gets called at build time
export async function getStaticProps({ params }: DocPageParams) {
    const page = await getDocPage(params.id);

    // Pass post data to the page via props
    return { props: { page }, revalidate: 30 };
}

export default function DocPage({ page }: DocPageProps) {
    return (
        <>
            <h1>{page.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: page.contentHtml }}></div>
        </>
    );
}
