import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface BusinessSpecProps {
  className?: string;
}

const BusinessSpec: React.FC<BusinessSpecProps> = ({ className }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('https://api.example.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <section
      className={clsx(
        'p-4',
        isTabletOrMobile ? 'max-w-sm mx-auto' : 'max-w-2xl mx-auto',
        className
      )}
    >
      <h1 className="text-xl font-bold mb-4">Business Specification</h1>
      <ul role="list" aria-label="Product list">
        {products.map((product) => (
          <li key={product.id} className="mb-2 flex items-center border-b pb-2 last:border-none">
            <img src={product.image} alt={product.name} className="w-16 h-16 mr-4" />
            <div>
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-500">${product.price.toFixed(2)}</p>
              <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BusinessSpec;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface BusinessSpecProps {
  className?: string;
}

const BusinessSpec: React.FC<BusinessSpecProps> = ({ className }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('https://api.example.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <section
      className={clsx(
        'p-4',
        isTabletOrMobile ? 'max-w-sm mx-auto' : 'max-w-2xl mx-auto',
        className
      )}
    >
      <h1 className="text-xl font-bold mb-4">Business Specification</h1>
      <ul role="list" aria-label="Product list">
        {products.map((product) => (
          <li key={product.id} className="mb-2 flex items-center border-b pb-2 last:border-none">
            <img src={product.image} alt={product.name} className="w-16 h-16 mr-4" />
            <div>
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-500">${product.price.toFixed(2)}</p>
              <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BusinessSpec;