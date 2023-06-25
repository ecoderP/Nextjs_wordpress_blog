import Head from 'next/head';
import Link from 'next/link';
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
                        <h1 className="text-6xl text-center text-slate-100">Welcome To <span className="text-yellow-400">Paul's</span> Travel Blog</h1>
                        <div className="mt-20">
                            <Link href="/blog" 
                                className="text-2xl text-slate-100 border-slate-100 border-2 rounded-md py-3 px-4 hover:bg-yellow-300 hover:text-slate-800 transition"
                                >Read Blog</Link>
                        </div>
                    </div>
                    
                </main>
            </div>
        </>
    );
}