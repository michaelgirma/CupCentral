import { Metadata } from 'next';
import React from 'react';
import Cup from './components/Cup';
import getCupByID  from '../../services/GET/GetCupById';
import "./globals.css"

export const metadata: Metadata = {
  title: 'CupCentral',
  description: 'Buy Your Customized Cups Here!',
};

export default async function Location({ params }: { params: { id: string } }) {

  const cup = await getCupByID(params.id);

  return (
    <html>
      <body>
        <Cup cup={cup} />
      </body>
    </html>
  )
}