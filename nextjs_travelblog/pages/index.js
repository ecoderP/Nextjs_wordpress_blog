import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title key="pagetitle">welcome to Paul's Blog</title>
                <meta name="description" content="Paul's adventure travel blog - Read our amazing stories of real life adventures the rain forests of china" key="metadescription" />
            </Head>
            <div className="min-h-screen bg-[url('/main-bg.jpg')] relative">

            </div>
        </>
    );
}