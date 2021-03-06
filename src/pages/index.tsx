import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Dialog, withStyles, Fade, Backdrop, DialogTitle, DialogContent, Typography, DialogActions, Button } from '@material-ui/core';
import withUser, { UserProp } from '../hocs/withUser';
import { useRouter } from 'next/router';

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

const Index: FC<any> = (props: UserProp) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    router.replace('/main');
    // props.signOut && props.signOut();
    // setOpen(false);
  };

  // useEffect(() => {
  //   console.log(props.user);
  //   debugger;
  // }, []);
  //
  // useEffect(() => {
  //   if (!props.isLogin()) {
  //     console.log(props.user?.getBasicProfile());
  //
  //     debugger;
  //     const pathName = router.pathname;
  //     router.replace(`/login?returnUrl=${pathName}`);
  //   }
  // }, [props]);

  return (
    <>
      <WrapperIndexPage onClick={handleOpen}>Thinking...{props.user && props.user.getBasicProfile().getName()}</WrapperIndexPage>
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

export default withUser(Index);
