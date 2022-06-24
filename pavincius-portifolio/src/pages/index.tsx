import * as React from 'react';
import Blob from '../components/blob/Blob'

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { Canvas } from "@react-three/fiber";
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'


export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      
      <main className='relative bg-slate-100 dark:bg-gray-800'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center '>
          <Canvas>
            <ambientLight intensity={0.4} />
            <spotLight position={[0, 15, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Blob position={[0, 0, 0]} />
          </Canvas>
        </div>
{/*
          <section className=''>
            <div className='layout flex min-h-screen flex-col items-center justify-center text-center '>
              <p> ------- PAV -------</p>
              <h1 className='text-transparent text-8xl bg-clip-text bg-gradient-to-r from-emerald-400 to-pink-600'>PORTIFOLIO</h1>
              <p> ------- WELCOME -------</p>
            </div>
          </section>
        <section className=''>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center '>
            <p> ------- PAV -------</p>
            <h1 className='text-transparent text-8xl bg-clip-text bg-gradient-to-r from-emerald-400 to-pink-600'>PORTIFOLIO</h1>
            <p> ------- WELCOME -------</p>
          </div>
        </section>
  */}
      </main>
      
    </Layout>
  );
}
