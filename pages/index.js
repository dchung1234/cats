import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import ProfileSummary, { myName } from '../components/profileSummary';
import Layout, { siteTitle } from '../components/layout';
import NavMenu from '../components/navMenu';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ hideProfile, handleViewMenu }) {

  return (
    <ProfileSummary home hideProfile={hideProfile} handleViewMenu={handleViewMenu}>
      <section className={utilStyles.headingMd}>
        <p>Helloow</p>
      </section>
      <NavMenu></NavMenu>
    </ProfileSummary>
  );
}

function Tmp({ allPostsData }) {
  return (

    <Layout home>
      <Head><title>{siteTitle}</title></Head>
      <Link href='posts/first-post'>Go to first post</Link>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
      </section>

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
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData }
  };
}