import { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import { Dropdown, Input, Grid } from '@nextui-org/react';

import MyCard from '../../components/card';

import { Category } from '@prisma/client';
import prisma from '../../../lib/prisma';

export default function Upload() {
  const [image, setImage] = useState('');
  const [images, setImages] = useState<Map<string, File>>(new Map());
  const [cards, setCards] = useState([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selected, setSelected] = useState(new Set(['text']));
  const [selectedCategory, setSelectedCategory] = useState(
    new Set(['Select a Category'])
  );
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState('');

  useEffect(() => {
    Array.from(selectedCategory).join(', ').replaceAll('_', ' '),
      [selectedCategory];
  }, [selectedCategory]);

  useEffect(() => {
    setLoading(true);
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

   
     Array.from(images).map(([filename, file]) => (
      <MyCard
        key={filename}
        src={URL.createObjectURL(file)}
        alt={filename}
        title={title}
      />
    ));


  const uploadPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files || [];

    for (let i = 0; i < files.length; i++) {
      const file = files?.[i]!;
      const filename = encodeURIComponent(file.name);
      setImages(images.set(filename, file));
      setImage(URL.createObjectURL(file));
    }
    console.log(images);
   
  
    // const file = e.target.files?.[0]!;
    // console.log(e);
    // const filename = encodeURIComponent(file.name);
    // const fileType = encodeURIComponent(file.type);

    // setTitle(filename);
    // setImage(URL.createObjectURL(file));

    // const res = await fetch(
    //   `/api/upload-image?file=${filename}&fileType=${fileType}`
    // );

    // const { url, fields } = await res.json();
    // const formData = new FormData();

    // Object.entries({ ...fields, file }).forEach(([key, value]) => {
    //   formData.append(key, value as string);
    // });

    // const upload = await fetch(url, {
    //   method: 'POST',
    //   body: formData,
    // });

    // if (upload.ok) {
    //   console.log('Uploaded successfully!');
    // } else {
    //   console.error('Upload failed.');
    // }
  };
  return (
    <div className="p-20">
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
        hidden={
          (typeof selectedCategory === 'string' ? false : true) ||
          (image ? false : true)
        }
        onClick={uploadPhoto}
      >
        Upload
      </button>
      {images && (
        <>
          <Grid.Container gap={4} justify="center">
           
              <Grid key={'index'} xs={6} sm={3}>
                <MyCard src={image} alt={title} title={title} />
              </Grid>
         
          </Grid.Container>
        </>
      )}

      {!image && (
        <>
          <Input
            onChange={uploadPhoto}
            type="file"
            accept="image/png, image/jpeg"
            multiple
          />
        </>
      )}
    </div>
  );
}
