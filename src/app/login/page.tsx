export default function Login() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="flex-row place-items-center">
        <h1 className="">Welcome to MTG Peddler</h1>
        <p>Email</p>
        <input
          className="border-b rounded block m-1"
          name="Email"
          key="Email"
        />
        <p>Password</p>
        <input
          className="border-b rounded block m-1"
          name="Password"
          key="Password"
        />
        <p>Confirm Password</p>
        <input
          className="border-b rounded block m-1"
          name="ConfirmedPassword"
        />

        <p>Create an account</p>
        <button type="submit">Sign up</button>
        <p>Sign in with Google</p>
        <button>TempGoogleSignIn</button>
        <p>Already have an account?</p>
        <button>Login</button>
      </div>
    </main>
  );
}
