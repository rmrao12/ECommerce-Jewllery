import blogs from './BlogData';
import productDetails from './ProductData';

import { useEffect } from 'react';




localStorage.setItem('blogs', JSON.stringify(blogs));

const LocalStorageInitializer = () => {
  useEffect(() => {
    const existingData = localStorage.getItem('productDetails');
    const existingData1 = localStorage.getItem('blogs');
    const isExistingDataDifferent = existingData && JSON.stringify(productDetails) !== existingData;

    if (!existingData || isExistingDataDifferent) {
      localStorage.setItem('productDetails', JSON.stringify(productDetails));
      console.log('Product details have been updated in local storage.');
    }
    if (!existingData1 || isExistingDataDifferent) {
      localStorage.setItem('blogs', JSON.stringify(blogs));
      console.log('blogs have been updated in local storage.');
    }
  }, []);

  return null;
};

export default LocalStorageInitializer;
