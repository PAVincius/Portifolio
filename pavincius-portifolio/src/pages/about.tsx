import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function AboutPage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-neutral-100 dark:bg-slate-800'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            
            Neutral
            
          </div>
        </section>
      </main>
    </Layout>
  );
}
