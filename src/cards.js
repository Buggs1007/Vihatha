import { Card, Col, Row } from 'antd';
const Cards = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="Card title" bordered={false} className='firstCard'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ea a quidem aliquid eligendi quia nobis tempora debitis optio cum quas expedita minima possimus eum iusto, odio dignissimos earum ipsum?
      </Card>
    </Col>
    <Col span={8} >
      <Card title="Card title" bordered={false} className='secondCard'>
        Card content
      </Card>
    </Col>
    <Col span={8} >
      <Card title="Card title" bordered={false} className='thirdCard'>
        Card content
      </Card>
    </Col>
  </Row>
);
export default Cards;