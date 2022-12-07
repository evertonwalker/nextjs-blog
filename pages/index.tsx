import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  console.log(allPostsData);
  return {
    props: {
      allPostsData
    },
  };
}


export default function Home({ allPostsData }) {
  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div>
          <p>
            Hey this page is create to talk about my learning on development area.
          </p>
          <p>
            You can see more details cliking <Link href="/blog/all-posts">here</Link>
          </p>

          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
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
          </section>
        </div>
      </section>
    </Layout>
  )
}
