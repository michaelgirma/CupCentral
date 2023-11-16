import React from 'react';
import { Metadata } from 'next';
import Header from './global/Header';
import Home from './components/Home';
import GetAllCups from '../services/GET/GetAllCups';

export const metadata: Metadata = {
  title: 'CupCentral',
  description: 'Buy Your Customized Cups Here!',
};

export default async function Page() {

  const cups = await GetAllCups();
  
  return (
    <html>
      <body>
        <Header />
        <Home cups={cups} />
      </body>
    </html>
  )
}