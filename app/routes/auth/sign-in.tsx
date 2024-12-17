import { SignIn } from '@clerk/react-router';

export function meta() {
  return [
    { title: 'Sign In - Hatch Creative Canvas' },
    { name: 'description', content: 'Sign in to your Hatch Creative Canvas account' },
  ];
}

export default function SignInPage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <SignIn
        routing='path'
        path='/sign-in'
        signUpUrl='/sign-up'
        appearance={{
          elements: {
            rootBox: {
              border: 'none',
              borderRadius: '0px',
              boxShadow: 'none',
            },
            cardBox: {
              border: 'none',
              borderRadius: '0px',
              boxShadow: 'none',
            },
            card: {
              border: 'none',
              borderRadius: '0px',
              boxShadow: 'none',
            },
          },
        }}
      />
    </div>
  );
}
