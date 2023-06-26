import { Grid } from '@nextui-org/react';
import MyCard from '../card';

export default function Gallary(props: any) {
   
    const [list, title] = [...props.images];
   
    
  return (
    <>
    <div className="title">Gallary: {title}</div>
      <Grid.Container gap={4} justify="center">
        {list.map((image:any, index:number) => {
          const [src, alt, title ] = [...image];
            return (
                <Grid key={index} xs={6} sm={3}>
                <MyCard src={src} alt={alt} title={title} />
                </Grid>
            );
        })}
      </Grid.Container>
    </>
  );
}
