import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';
import Banner from '../components/Banner';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          Welcome to QuillDAO! Here, we like to empower writers by giving them a
          support system of likeminded individuals who are passionate about
          writing literary works.
        </p>
        <br></br>

        <p>
          This site is currently under construction. It will likely see a lot of
          updates over the next few hours! (Last edited on April 9th at 9:04pm
          CDT)
        </p>
        <br></br>

        <Banner />
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  );
}
