import Head from "next/head";
import siteHeader from "@/components/siteHeader";
import SiteFooter from "@/components/SiteFooter";
import { getPostSlugs, getSinglePost } from "@/lib/posts";

export async function getStaticProps({ params }) {
    const postData = getSinglePost(params.postSlug);

    return {
        props: {
            postData
        }
    };
}

export async function getStaticPaths() {
    const postSlugs = await getPostSlugs();
    
    return {
        paths: postSlugs.map((s) => (
            {   
                params: {
                postSlug: s.slug
                }
            }
        )),
        fallback: false
    }
}


export default function Post({ postData }) {
    return (
        <>
        </>
    );
}