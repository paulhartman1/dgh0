import { Card, Col, Text, Image, Row, Button } from '@nextui-org/react';
import profilePic from '../../../public/artistProfile.png';
import { useState } from 'react';

export default function MyCard(props: any) {
  const [src, setSrc] = useState(props.src);
  const [alt, setAlt] = useState(props.alt);
  const [title, setTitle] = useState(props.title);
  return (
    <Card
      isHoverable
      css={{
        maxHeight: '200px',
        backgroundColor: 'transparent',
        border: 'none',
      }}
    >
      <Card.Body css={{ p: 0 }}>
        <Card.Image src={src} objectFit="contain" alt={alt} />
      </Card.Body>
      <Card.Footer
        isBlurred
        onClick={() => console.log({title})}
        css={{
          position: 'absolute',
          bgBlur: 'rgba(123,123,123,.55)',
          borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
          bottom: 0,
          zIndex: 1,
          color: '#000',
        }}
      >
        <Row>
          <Col
            onMouseLeave={(e) => {
              setTitle(e.target.innerText);
            }}
          >
            <Text
              color="#FFF"
              size={12}
              css={{ textAlign: 'center' }}
              contentEditable
            >
              {title}
            </Text>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}
