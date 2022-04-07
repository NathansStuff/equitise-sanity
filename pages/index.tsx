import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className='bg-pink-700'>
      <Head>
        <title>Hello</title>
      </Head>
      <Header />
    </div>
  );
};

export default Home;
