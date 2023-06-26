import { useEffect, useState } from 'react';
import {Category}  from '@/types/category';
import Image from 'next/image';

export default function Categories() {
 
  const [data, setData] = useState<Category[]>([]);

  useEffect(() => {
  fetch('/api/categories')
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    })
    .catch((err) => console.log(err));
  });
  return <>
    <h1>Categories</h1>
    <ul>
        {data?.map((category) => (
            <li key={category.id}>
                <h2>{category.name}</h2>
            </li>
            ))}
    </ul>
  </>;
}
