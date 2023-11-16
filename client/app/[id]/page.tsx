import React from 'react';
import { Metadata } from 'next';
import Header from '../global/Header';
import ViewCup from './components/ViewCup';
import getCupByID  from '../../services/GET/GetCupById';
import GetAllColors from '../../services/GET/GetAllColors';
import GetAllSizes from '../../services/GET/GetAllSizes';

export const metadata: Metadata = {
  title: 'CupCentral',
  description: 'Buy Your Customized Cups Here!',
};

export default async function Cup({ params }: { params: { id: string } }) {

  const cup = await getCupByID(params.id);
  const colors = await GetAllColors();
  const sizes = await GetAllSizes();
  
  return (
    <html>
      <body>
        <Header />
        <ViewCup cup={cup} colors={colors} sizes={sizes} />
      </body>
    </html>
  )
}