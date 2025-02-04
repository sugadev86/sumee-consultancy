import React, { useState } from 'react';
import {
  Carousel,
  Container,
  Row,
  Col,
  Card,
  Image,
} from 'react-bootstrap';
import { SLIDERS, SERVICES } from '../../content';
import { Blog4, Blog1, Blog2, Aboutusimg } from '../../images/images';

const slides = SLIDERS.map((slider) => {
  return (
    <Carousel.Item key={slider.src} variant='dark'>
      <Image fluid ={true} className='d-block w-100' src={slider.src} alt='SuMee Software Consulting LLC' />
      <Carousel.Caption>
        <h3>{slider.captionText}</h3>
        <p>{slider.captionHeader}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
});

function Home(props) {
  const [playAuto, setPlayAuto] = useState(false);
  const slideStart = () => {
    setPlayAuto(!playAuto);
  };

  const serviceClicked = (e, item) => {
    props.clickedItem(item);
  };

  return (
    <>
      <div className='carousel-div'>
        <Carousel
          autoPlay={true}
          interval={3000}
          onSlide={slideStart}
          onSlid={slideStart}
        >
          {slides}
        </Carousel>
      </div>
      <Container>
        <h3 className={'mt-5 mb-5 content-heading'}>
          <span>About Us</span>
        </h3>
        <Row>
          <Col xs={12} md={6}>
            <Image rounded ={true} className='d-block w-100' src={Aboutusimg} alt='First slide' />
          </Col>
          <Col xs={12} md={6}>
            SuMee Software Consulting LLC is the professional technology solutions
            company, We are specialized in LMS, providing a wide range of consulting, solutions & platforms
            serving enterprises of all sizes, across various industries. SuMee
            Consulting LLC was founded with the goal to ‘stand out’ for ‘premium
            quality’ technology solutions using trending digital technologies
            that would transform enterprises ‘digitally’ leading to quantum
            business growth.
            <br />
            <br />
            With strong experience & exposure to technology business, we have
            understood that well established ‘culture’ and ‘process’ are
            critical foundation for successful adoption of technology automation
            leading to ROI realization. Unique approach to Digital
            Transformation have helped our clients quickly gain competitive
            edge. We creatively deploy various digital technologies such as
            mobility, cloud, advanced analytics, distributed computing, data
            science, industry 4.0, Robotic process automation to solve various
            business challenges.
          </Col>
        </Row>
        <Row style={{ marginTop: '50px' }}>
          <h3 className={'mt-5 mb-5 content-heading'}>
            <span>Services</span>
          </h3>
          {SERVICES.map((item) => (
            <Col xs={12} md={3} style={{ padding: '0px' }}>
              <Card
                className='technology-card'
                onClick={(e) => serviceClicked(e, item)}
              >
                <Card.Body>
                  <Card.Title style={{ textAlign: 'center', height: '50px' }}>
                    {item.title}
                  </Card.Title>
                  <Card.Text>
                    <span className='tech-icon-span'>
                      <Image  rounded ={true} src={item.image} className='bnr-image'  alt="SuMee Software Consulting LLC"/>
                    </span>
                    <p className='tech-content'>{item.content}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      
        <Row>
          <h3 className={'mt-5 mb-5 content-heading'}>
            <span>Why our clients chose us?</span>
          </h3>
          <Col xs={12} md={4}>
            <Card className='client-card' >
              <div className='client-card-img'>
                <Card.Img    variant='top' src={Blog1} />
              </div>
              <Card.Body>
                <Card.Title>Young Team with Quality experience</Card.Title>
                <Card.Text>
                  Our young team is agile and well equiped with relevant
                  experience in offshore environment & understands exact
                  requirements of our clients, their business model, target
                  market that they are serving and their go-to-market schedules.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className='client-card'>
              <div className='client-card-img'>
                <Card.Img variant='top' src={Blog2} />
              </div>
              <Card.Body>
                <Card.Title>Process Culture</Card.Title>
                <Card.Text>
                  Well tuned operation powered by culture of collaboration,
                  continuous training & development, strength based alignment to
                  roles, have helped us deliver uniform client experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className='client-card'>
              <div className='client-card-img'>
                <Card.Img variant='top' src={Blog4} />
              </div>
              <Card.Body>
                <Card.Title>Tools and Automation support</Card.Title>
                <Card.Text>
                  All our operations are supported by process maturied
                  implementation of popular technology tools that help us
                  capture our KPIs, schedule compliance data, operational
                  metrics.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export { Home };
