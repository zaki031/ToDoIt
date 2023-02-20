import Navbar from "../components/navbar";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "../src/config/firebase.config";
import async from "@firebase/util";
const signin = () => {
  const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const signIn = async () => {
    const response = await signInWithPopup(firebaseAuth, provider);
    console.log(response);
  };
  return (
    <>
      <Navbar />
      <form action="">
        <button className="p-3 text-white bg-main rounded-xl" onClick={() => signIn()}>
          Sign in with google
        </button>
      </form>
    </>
  );
};

export default signin;
