import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function Email() {
  return (
    <>
    <h1> Entre em contato com o nosso time de suporte:</h1>
    <br/>
    <p>Preencha os campos abaixo com seu Nome e seu Email para que a nossa equipe possa entrar em contato com você!</p>
     <br/>
     <FloatingLabel controlId="floatingPassword" label="Nome Completo">
        <Form.Control type="text" placeholder="text" />
      </FloatingLabel>
    <br/>
      <FloatingLabel
        controlId="floatingInput"
        label="Email"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <br/>
      <Button variant="primary">Primary</Button>{' '}
      <br/>
    </>
  );
}

export default Email;