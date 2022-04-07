import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Navbar Tutorial</title>
      </Head>{' '}
      <Header />
      <section className='absolute top-0 left-0 h-screen w-screen'>
        <img
          src='https://images.unsplash.com/photo-1587488372174-70d1b0c89bb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB0b3AlMjB2aWV3fGVufDB8fDB8fA%3D%3D&w=1000&q=80'
          alt='beach'
          className='absolute top-0 left-0 h-full w-full object-cover'
        />
      </section>
    </div>
  );
};

export default Home;
