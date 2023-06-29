import { Grid } from '@nextui-org/react';
import MyCard from '../card';

export default function Gallary(props: any) {
   
    const list = props.images;
    const title = props.title;
    console.log('Gallery  ',list);
    
  return (
    <>
    <div className="title">Gallary: {title}</div>
      <Grid.Container gap={4} justify="center">
        {list.map((image:any, index:number) => {
            return (
                <Grid key={index} xs={6} sm={3}>
                <MyCard src={image.src} alt={image.alt} title={image.title} onClick={() => console.log('onMouseLeave')} 
                
                 />
                </Grid>
            );
        })}
      </Grid.Container>
    </>
  );
}
