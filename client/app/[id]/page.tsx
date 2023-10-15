import React, { useState } from 'react';
import "./globals.css"
import { Metadata } from 'next';
import Cup from './components/Cup';
import getCupByID  from '../../services/GET/GetCupById';
import GetAllColors from '../../services/GET/GetAllColors';
import GetAllSizes from '../../services/GET/GetAllSizes';

export const metadata: Metadata = {
  title: 'CupCentral',
  description: 'Buy Your Customized Cups Here!',
};

export default async function Location({ params }: { params: { id: string } }) {

  const cup = await getCupByID(params.id);
  const colors = await GetAllColors();
  const sizes = await GetAllSizes();
  
  return (
    <html>
      <body>
        <Cup cup={cup} colors={colors} sizes={sizes} />
      </body>
    </html>
  )
}