import { Grid } from '@nextui-org/react';
import MyCard from '../card';

export default function Gallary(props: any) {
   
    const list = props.images;
    const title = props.title;
    
  return (
    <>
    <div className="title">Gallary: {title}</div>
      <Grid.Container gap={4} justify="center">
        {list.map((image:any, index:any) => {
            return (
                <Grid key={index} xs={6} sm={3}>
                <MyCard src={image.src} alt={image.alt} title={image.title} />
                </Grid>
            );
        })}
      </Grid.Container>
    </>
  );
}
