import Head from 'next/head';
import SiteHeader from '../components/siteHeader';


export default function Home() {
    return (
        <>
            <Head>
                <title key="pagetitle">welcome to Paul's Blog</title>
                <meta name="description" content="Paul's adventure travel blog - Read our amazing stories of real life adventures the rain forests of china" key="metadescription" />
            </Head>
            <div className="min-h-screen bg-[url('/home-bg.jpg')] relative">
                <div className="absolute bg-slate-900 inset-0 z-index-0 opacity-40"></div>
                <SiteHeader className="z-10 relative" />
                <main>
                    <div className="min-h-[50vh] flex flex-col items-center justify-center z-10 relative">
                        <h1>Welcome To Paul's Travel Blog</h1>
                    </div>
                </main>
            </div>
        </>
    );
}