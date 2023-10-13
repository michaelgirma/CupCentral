import { Metadata } from 'next';
import React from 'react';
import "./globals.css"
import  GetAllCups from '../services/GET/GetAllCups';
import Home from './components/Home';

export const metadata: Metadata = {
  title: 'CupCentral',
  description: 'Buy Your Customized Cups Here!',
};

export default async function Page() {

  const cups = await GetAllCups();

  return (
    <html>
      <body>
        <Home cups={cups}/>
      </body>
  </html>
  )
}