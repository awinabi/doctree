import React from "react";
import Link from "next/link";
import Layout from "../../../components/Layout";
import { getDocPages, getDocPage } from "../../utils/api";

interface DocPage {
    id: number;
    title: string;
    slug: string;
    content: string;
    contentHtml: string;
}

interface DocPageProps {
    pages: DocPage[];
}

interface DocPageParams {
    params: { id: number };
}

export async function getStaticProps({ params }: DocPageParams) {
    const pages = await getDocPages();

    return { props: { pages }, revalidate: 30 };
}

export default function DocIndex({ pages }: DocPageProps) {
    return (
        <>
            <h1>Available Documents (with ISR)</h1>
            <div className="flex-shrink-0 py-3 ">
                <ul className="nav nav-pills flex-column mb-3 pb-3 ">
                    {pages && pages.length > 0 ? (
                        <>
                            {pages.map((page) => (
                                <li key={page.id}>
                                    <Link
                                        href={`/docs/${page.id}`}
                                        className="text-primary text-underline"
                                    >
                                        {page.title}
                                    </Link>
                                </li>
                            ))}
                        </>
                    ) : null}
                </ul>
            </div>
        </>
    );
}
