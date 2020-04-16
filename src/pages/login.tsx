import { useRouter } from 'next/router';
import { useEffect } from 'react';
import withUser, { UserProp } from '../hocs/withUser';

type Props = { returnUrl: string } & UserProp;

const LoginPage: React.FC<any> = (props: Props) => {
  const router = useRouter();

  useEffect(() => {
    if (props.user && props.isLogin()) {
      const returnUrl = router.query.returnUrl.toString();
      console.log(returnUrl);
      debugger;
      router.replace(returnUrl);
    }
  }, [props]);

  return (
    <>
      test
    </>
  );
};

export default withUser(LoginPage);