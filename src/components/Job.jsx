import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

const Job = ({ data }) => {
  const favourites = useSelector((state) => state.favourite.list)
  const dispatch = useDispatch()

 

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={7}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={2}>
       
          <Button  size={16}
          className="mr-2 my-auto"
          onClick={() =>
            dispatch({
              type: 'ADD_TO_FAVOURITE',
              payload: data.company_name,
            })
          }>
       
           
        FAVOURITES  </Button>
        
       
      </Col>
    </Row>
  )
}

export default Job