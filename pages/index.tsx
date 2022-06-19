import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Home: NextPage = () => {
    return (
        <div className="flex flex-col h-screen">
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="p-4 bg-red-500 flex flex-row justify-between">
                <div>NAME </div>
                <div>
                    <ConnectButton />
                </div>
            </header>
            <main className="flex-grow bg-green-500 p-4">Content</main>
            <footer className="p-4 bg-blue-500">Footer</footer>
        </div>
    );
};

export default Home;
