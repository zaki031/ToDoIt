import Navbar from "../components/navbar";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp, auth } from "../src/config/firebase.config";
import async from "@firebase/util";
const signin = () => {
  const provider = new GoogleAuthProvider();
  const signIn =  async () => {
    await signInWithPopup(auth,provider);
  };
  return (
    <>
      <Navbar />
        <button className="p-3 text-white bg-main rounded-xl" onClick={() => signIn()}>
          Sign in with google
        </button>
    </>
  );
};

export default signin;
