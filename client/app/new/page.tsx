import { Metadata } from 'next';
import React from 'react';
import Header from '../global/Header';
import NewForm from './components/NewForm';
import GetAllSizes from '../../services/GET/GetAllSizes';
import GetAllColors from '../../services/GET/GetAllColors';

export const metadata: Metadata = {
  title: 'MealMaster | New Post',
  description: 'Post your meals here!',
};

export default async function Page() {

  const sizes = await GetAllSizes();
  const colors = await GetAllColors();

  return (
    <html>
      <body>
        <Header />
        <NewForm sizes={sizes} colors={colors} />
      </body>
  </html>
  )
}