import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import siteHeader from '@/components/siteHeader';
import { getAllPosts } from '@/lib/posts';


export async function getStaticProps() {
    const allPosts = await getAllPosts();

    return {
        props: {
            allPosts: allPosts,
        },
        
    }

}

export default function BlogHome({ allPosts }) {
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <div className="h-[50vh] min-h-[20rem] bg-[url('/home-bg.jpg') relative]">
                <div className="absolute bg-slate-900 inset-0"></div>
            </div>
        </>
    );
}