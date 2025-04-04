import { Collapse } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { NavLink } from "react-router";


function Item ({item}) {
    return(   
        <Col md={6} lg= {3}> 
        <Card style={{ width: '18rem' }} key ={item.id}>
        <Card.Img variant="top" src={item.thumbnail} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.category}
          </Card.Text>
          <Button as={NavLink} to={ `/product/${item.id}`} variant="primary">Ver Más</Button>
        </Card.Body>
      </Card>
      </Col> 
 
    )
    
}

export default Item