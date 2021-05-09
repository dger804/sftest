import { useEffect, useState } from "react"
import { Container, Row, Card, CardDeck, small, Carousel} from "react-bootstrap"

export function Home(){
  const [state, setState] = useState([])
  useEffect(() => {
    async function datos(){
      const data = await fetch('https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json')
      setState( await data.json()) 
    }
    datos()
  },[])

  const styles = {
    card: {
      
      borderRadius: 10,
      padding: '0.25rem',
      width: '20vw',
      height: '50vh'
    },
    cardImage: {
      objectFit: 'cover',
      borderRadius: 0,
      width: '10vw',
      height: '10vh',
      
    }
  }

  return(    
    <Container fluid>      
      <Row>
        
        { 
         state.map((producto) => {
            return(
              <Carousel>
                <Carousel.Item>

                
              
              <CardDeck>
                <Card key={producto.id} style={styles.card}>
                  <Card.Img variant="top" src={producto.thumbnail} style={styles.cardImage}/>
                  <Card.Body>
                    <Card.Title>{producto.title}</Card.Title>
                    {producto.supplier}
                    <br></br>
                    ${producto.price_real+" "}
                    x{" "+producto.units_sf} Unids
                  </Card.Body>
                  <Card.Footer className="addcarbttn">
                    <small >Agregar al carrito</small>                    
                  </Card.Footer>
                </Card>
              </CardDeck>
                </Carousel.Item>
              </Carousel>
            )
          })
        }        
      </Row>
    </Container>
  )
}