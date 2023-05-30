import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function Cards() {
  const dados = [
    {
      titulo:'Fone de ouvido (Bluetooth)',
      texto:'Proporciona uma audição privada, minimiza a interferência de outros sons presentes no mesmo espaço!',
      img:'https://images.pexels.com/photos/8380433/pexels-photo-8380433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      titulo:'Suporte para celular',
      texto:'O suporte é articulado sendo uma opção que permite manter as mãos livres durante o uso do smartphone para gravar vídeos ou assistir filmes, por exemplo. O dispositivo possui dois grampos: um deles para prender o celular e o outro para afixar o suporte na superfície!',
      img:'https://images.pexels.com/photos/12985914/pexels-photo-12985914.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      titulo:'Câmera profissional',
      texto:'A melhor câmera pra você tirar suas fotos e vídeos, proporciona a melhor qualidade para ambos!',
      img:'https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]
  return (
    <CardGroup>
      {dados.map(({titulo, texto, img}) =>(
        <Card key={titulo}>
          <Card.Img variant='top' src={img}/>
          <Card.Body>
            <Card.Title className='titulo'>{titulo}</Card.Title>
            <Card.Text>{texto}</Card.Text>
            <Button className='botao'>Ver produto</Button>
          </Card.Body>
        </Card>
    ))};
    </CardGroup>
    
    //return(
    // <CardGroup>
    //   <Card>
    //     <Card.Img variant="top" src="https://images.pexels.com/photos/5669635/pexels-photo-5669635.jpeg?auto=compress&cs=tinysrgb&w=1600" />
    //     <Card.Body>
    //       <Card.Title>Moda Outono</Card.Title>
    //       <Card.Text>
    //       Venha conhecer a nossa nova coleção de Outono!
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    //   <br/>
    //   <br/>
    //   <Card>
    //     <Card.Img variant="top" src="https://images.pexels.com/photos/9769852/pexels-photo-9769852.jpeg?auto=compress&cs=tinysrgb&w=1600" />
    //     <Card.Body>
    //       <Card.Title>Moda Verão</Card.Title>
    //       <Card.Text>
    //       Venha conhecer a nossa nova coleção de Verão!
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    //   <br/>
    //   <br/>
    //   <Card>
    //     <Card.Img variant="top" src="https://images.pexels.com/photos/6311390/pexels-photo-6311390.jpeg?auto=compress&cs=tinysrgb&w=1600" />
    //     <Card.Body>
    //       <Card.Title>Moda Inverno</Card.Title>
    //       <Card.Text>
    //         Venha conhecer a nossa nova coleção de Inverno!
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    // </CardGroup>
    //);
  );
}

export default Cards;