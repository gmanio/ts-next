import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Dialog, withStyles, Fade, Backdrop, DialogTitle, DialogContent, Typography, DialogActions, Button } from '@material-ui/core';
import GoogleAuth from '../utils/GoogleAuth';

const WrapperIndexPage = styled.div`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomDialog = withStyles({
  paper: {
    width: 400,
    height: 'auto'
  }
})(Dialog);

const Index = () => {
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    setInterval(() => {
      console.log('isSigned', GoogleAuth.isSignedIn())
    }, 2000);
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getProfile = async () => {
    const user = await GoogleAuth.getUser();
    console.log(user);
  };

  return (
    <>
      <WrapperIndexPage onClick={handleOpen}>Thinking...</WrapperIndexPage>
      <button onClick={getProfile}>login</button>
      <CustomDialog
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <>
            <DialogTitle>
              Now I'm thinking
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </Typography>
              <Typography gutterBottom>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                lacus vel augue laoreet rutrum faucibus dolor auctor.
              </Typography>
              <Typography gutterBottom>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                auctor fringilla.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">Done</Button>
            </DialogActions>
          </>
        </Fade>
      </CustomDialog>
    </>
  );
}

export default Index;
