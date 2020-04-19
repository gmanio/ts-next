import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import withUser, { UserProp } from '../hocs/withUser';

type Props = { returnUrl: string } & UserProp;

const LoginPage: FC<any> = (props: Props) => {
  const router = useRouter();

  useEffect(() => {
    // if (props.user && props.isLogin()) {
    //   const returnUrl = router.query.returnUrl.toString();
    //   console.log(returnUrl);
    //   debugger;
    //   router.replace(returnUrl);
    // }
    console.log(props.user);
    console.log('login:: props changed');
  }, [props]);

  return (
    <>
      loginPage
    </>
  );
};

export default withUser(LoginPage);
