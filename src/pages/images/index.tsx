import { useEffect, useState, useMemo } from 'react';
import { Dropdown, Input, Grid } from '@nextui-org/react';
import GallaryComponent from '@/components/gallary';

import { Category } from '@prisma/client';
import prisma from '../../../lib/prisma';
import { constrainedMemory } from 'process';

export default function Upload() {
  const [imgArray, setImgArray] = useState([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selected, setSelected] = useState(new Set(['text']));
  const [selectedCategory, setSelectedCategory] = useState(
    new Set(['Select a Category'])
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Array.from(selectedCategory).join(', ').replaceAll('_', ' '),
      [selectedCategory];
  }, [selectedCategory]);

  useEffect(() => {
    setLoading(true);
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const displayImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files || [];
    const tempData = [];
    for (let i = 0; i < files.length; i++) {
      const file = files?.[i]!;
      const filename = encodeURIComponent(file.name);
      const title = file.name.substring(0, file.name.lastIndexOf('.'));
      tempData.push({
        src: URL.createObjectURL(file),
        title: title,
        alt: title,
      });
    }
    setImgArray(tempData);
  };

  const uploadImages = async () => {
   //find each image in the array and upload it to the database
   
  };
  return (
    <div>
      <Dropdown>
        <Dropdown.Button flat color="secondary" css={{ tt: 'capitalize' }}>
          {selectedCategory}
        </Dropdown.Button>
        <Dropdown.Menu
          aria-label="Single selection actions"
          color="secondary"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={(keys) => {
            const selectedCategory = categories.filter(
              (category) => category.id == keys.currentKey
            );
            setSelectedCategory(selectedCategory[0].name);
          }}
        >
          {categories.map((category) => (
            <Dropdown.Item key={category.id}>{category.name}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        hidden={typeof selectedCategory === 'string' ? false : true}
        onClick={uploadImages}
      >
        Upload
      </button>
      {imgArray && (
        <div className="flex flex-col items-center justify-between p-5">
          <GallaryComponent images={...imgArray} title={selectedCategory} />
        </div>
      )}

      {
        <>
          <Input
            onChange={displayImages}
            type="file"
            accept="image/png, image/jpeg"
            multiple
          />
        </>
      }
    </div>
  );
}
