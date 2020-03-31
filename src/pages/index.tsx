import { useState, FC } from 'react';
import styled from "styled-components";
import { Modal, withStyles, Fade, Backdrop } from '@material-ui/core';

const WrapperIndexPage = styled.div`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomModal = withStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})(Modal);

const Index = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <WrapperIndexPage onClick={handleOpen}>Thinking...</WrapperIndexPage>
      <CustomModal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </>
        </Fade>
      </CustomModal>
    </>
  );
}

export default Index;