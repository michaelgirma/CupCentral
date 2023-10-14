import { Metadata } from 'next';
import React from 'react';
import "./globals.css"
import NewForm from './components/NewForm';



export const metadata: Metadata = {
  title: 'CupCentral',
  description: 'Buy Your Customized Cups Here!',
};

export default function Home() {

 

  return (
    <html>
      <body>
        <NewForm />
      </body>
  </html>
  )
}