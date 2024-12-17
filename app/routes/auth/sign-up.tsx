import { SignUp } from '@clerk/react-router';

export function meta() {
  return [
    { title: 'Sign Up - Hatch Creative Canvas' },
    { name: 'description', content: 'Create your Hatch Creative Canvas account' },
  ];
}

export default function SignUpPage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <SignUp
        routing='hash'
        signInUrl='/sign-in'
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
