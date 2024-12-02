import ListComponent from '../components/List.jsx'
import Card from 'react-bootstrap/Card';


const LandingPage = () => {

    return (<>
    <Card style={{ width: '18rem' }}>
       <Card.Body>
       <Card.Title>TO DO LIST</Card.Title>
   <ListComponent></ListComponent>
   <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
    </>)

}

export default LandingPage