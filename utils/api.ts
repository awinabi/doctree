import {getHTML} from './transforms'

const BASE_URL = process.env.CMS_BASE_URL
const BEARER_TOKEN = process.env.CMS_TOKEN

interface DocPageObject {
    slug: string,
    title: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string

}

interface StrapiResponseObject {
    id: number,
    attributes: DocPageObject
}

export async function getDocPages(){
    const response = await fetch(`${BASE_URL}/doc-pages`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${BEARER_TOKEN}`,
        }}).then(res => res.json());

    console.log('response doc-pages', response);

    const pageList:StrapiResponseObject[] = response.data;

    return pageList.map(item => ({ ...item.attributes, id: item.id }));
}


export async function getDocPage(id: number){
    const response = await fetch(`${BASE_URL}/doc-pages/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${BEARER_TOKEN}`,
        }}).then(res => res.json());

    console.log('response doc-page detail', response);

    const page:StrapiResponseObject = response.data;

    const pageHTML = await getHTML(page.attributes.content);
    const DEFAULT_HTML = "<span>No content</span>";

    return { ...page.attributes, id: page.id, contentHtml: pageHTML || DEFAULT_HTML };
}
