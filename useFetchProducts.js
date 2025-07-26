import { useEffect, useState } from 'react';

export default function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(() => setError(true));
  }, []);

  return { products, error };
}
