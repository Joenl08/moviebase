import { Container } from 'react-bootstrap';

const Header = ({ head, description, child = '' }) => {

  return (
    <Container fluid>
      <div className='text-center pt-4 mb-2'>
        <h1>{head}</h1>
        <p className='lead'>{description}</p>
        { child }
      </div>
    </Container>
  )
}

export default Header
