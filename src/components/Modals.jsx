import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modals({labelButton,validation,email}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    
    if(validation(email)===true){
      setShow(true);
    }else{
      setShow(false);
    }
    
  } 

  return (
    <>
      <Button variant="primary" className="btn btn-primary modalsShow" onClick={handleShow}>
        {labelButton}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>New Latter</Modal.Title>
        </Modal.Header>
        <Modal.Body className='fs-5'>
          Merci d'avoir enregistrer votre Email, <br/>
          nous vous enverrons constamment les nouveau cours, <br/>
          à l'addresse <span className='fw-bold'> {email}</span>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modals;