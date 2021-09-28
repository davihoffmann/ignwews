//import { GetServerSideProps } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

// Client-Side
// Server-Side
// Static Site Generation

// Ex.: Blog
// conteudo (ssg)
// Comentarios (client)

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👋🏼 hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // const price = await stripe.prices.retrieve('price_1JeTLGCGNaL0sZ3nslK6foSc', {
  //   expand: ['product']
  // });

  const price = await stripe.prices.retrieve('price_1JeTLGCGNaL0sZ3nslK6foSc');

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24 Horas
  }
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   // const price = await stripe.prices.retrieve('price_1JeTLGCGNaL0sZ3nslK6foSc', {
//   //   expand: ['product']
//   // });

//   const price = await stripe.prices.retrieve('price_1JeTLGCGNaL0sZ3nslK6foSc');

//   const product = {
//     priceId: price.id,
//     amount: new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//     }).format(price.unit_amount / 100),
//   };

//   return {
//     props: {
//       product
//     }
//   }
// }