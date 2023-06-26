import { useRouter } from 'next/router'
import { useState } from 'react';
import {Category} from '@/types/category';
import Image from 'next/image';
export default function Gallery(props: any) {
    const router = useRouter();
    const [categories, setCategories] = useState<Category[]>([]);
    const [display, setDisplay] = useState(false);

    const [imageId, setImageId] = useState('a46999be-14d3-44a1-9a96-f38a08d46272');
    const [imgUrl, setImgUrl] = useState(`https://dgh-storage-6e8b5fbb153419-staging.s3.amazonaws.com/${imageId}`);
    const pageName = router.query.index;
    fetch('/api/categories')
    .then((res) => res.json())
    .then((data) => {
        setCategories(data);
        categories?.map((category) => {
            if(category.name.replace(' ','') === pageName){
                setDisplay(true);
            }
        });
    })
    .catch((err) => console.log(err));
    return (
        <>
            <h1>{`Gallery: ${router.query.index}`}</h1>
            {display ? <p>Displaying images for {router.query.index}</p> : <p>Category not found</p>}
            <Image src={imgUrl} alt='banner' height={500} width={500} />

        </>
    );
}