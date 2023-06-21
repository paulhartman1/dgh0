import { Card, Col, Text, Image, Row, Button } from '@nextui-org/react';
import profilePic from '../../../public/artistProfile.png';

export default function MyCard(props: any) {
  const src = props.src;
  const alt = props.alt;
  const title = props.title;
  return (
    <Card isPressable isHoverable css={{  maxHeight:'200px', backgroundColor: 'transparent', border: 'none' }}>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={src}
          objectFit="contain"
          alt={alt}
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: 'absolute',
          bgBlur: 'rgba(0,0,0,0.5)',
          borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text color="#FFF" size={12} css={{ textAlign: 'center' }}>
              {title}
            </Text>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}
