import Navbar from "../components/navbar";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp, auth } from "../src/config/firebase.config";
import async from "@firebase/util";
import Head from "next/head";
const signin = () => {
  const provider = new GoogleAuthProvider();
  const signIn =  async () => {
    await signInWithPopup(auth,provider);
  };
  return (
    <>
    <Head>
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
    </Head>
      <Navbar />
      <div className=" form_contain">
        <br /><br />
      <form className="p-4 m-auto border-2 border-main rounded-md  max-w-[700px] " action="">
        <label htmlFor="email">Enter your email :</label>
        <input type="email" placeholder="Enter your email" name="email" className="w-full py-3 pl-3 border-3 border-main" />
        <br />
        <br />
        <label htmlFor="pass">Enter your password :</label>

        <input type="password" name="pass" id="" placeholder="dont show your password to anyone" className="w-full py-3 pl-3 border-3 border-main" />
     <br /><br />
     <button type="submit" className="w-full p-3 text-white rounded-md bg-main">Create your account</button>
    <br /><br />
    <div className="w-full text-center or">
            <h5 className="m-auto text-gray-400">Or</h5>

    </div>
    <br />
     <button className="w-full p-3 text-white rounded-md bg-main" onClick={() => signIn()}>
     <i className=" uil uil-google"></i>
     &nbsp; &nbsp; 
          Sign in with google
        </button>
      </form>
      </div>

     
 
    </>
  );
};

export default signin;
