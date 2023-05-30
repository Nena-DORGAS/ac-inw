import NavProjeto from '../components/NavProjeto'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import CarrosselSobre from '../components/CarrosselSobre';

function Sobre() {
  return (
    <>
      <div>
      <NavProjeto/>
      <CarrosselSobre/>
      <br/>
      <h1>Sobre Nós</h1>
      <p>Bem-vindo(a) ao nosso site de compras online de roupas! 
        Oferecemos uma experiência de compra excepcional, com uma ampla seleção de roupas de alta qualidade 
        e tendências atualizadas regularmente. Navegar pelo nosso site é fácil e intuitivo, com descrições 
        detalhadas, imagens nítidas e informações de tamanho precisas. Valorizamos a qualidade e o estilo em 
        cada peça que oferecemos, em parceria com marcas renomadas e designers talentosos. Nossa equipe de 
        atendimento ao cliente está sempre pronta para ajudar, garantindo sua satisfação. A segurança dos seus
       dados pessoais e financeiros é uma prioridade, com tecnologia de criptografia avançada. Aproveite a 
       conveniência de fazer compras online e descubra uma experiência de moda única e gratificante em nossa coleção.</p>
      <br/>
          <Footer/>
      </div>
    </>
  )
}

export default Sobre