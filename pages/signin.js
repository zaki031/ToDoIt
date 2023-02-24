import Navbar from "../components/navbar";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseApp, auth } from "../src/config/firebase.config";
import async from "@firebase/util";
import Head from "next/head";
import Image from "next/image";
import pic from '../public/pic.png'
import { useState } from "react";

const signin = () => {
  const provider = new GoogleAuthProvider();
  const signIn =  async () => {
    await signInWithPopup(auth,provider);
  };


  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")


  
  return (
    <>
    <Head>
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
    </Head>
      <Navbar />
      <br/>
      <div className="flex p-10  max-w-[1150px] m-auto  form_contain">
        <br /><br />
        <Image src={pic} width={650} height={650} className="rounded-md mr-[100px]"></Image>

      <form className="p-4 m-auto shadow-sm " action="">
        <h1 className="w-full text-3xl text-bold">Create account : </h1>
        <br />
        <label htmlFor="email" >Enter your email :</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" name="email" className="w-full py-3 pl-3 border-2 rounded-md border-main focus:border-main focus:outline-none" />
        <br /> <br />
        <label htmlFor="pass">Enter your password :</label>

        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="pass" id="" placeholder="dont show your password to anyone" className="w-full py-3 pl-3 border-2 rounded-md border-main focus:border-main focus:outline-none" />
     <br /><br />
     <button type="submit" onClick={()=> email_sign()} className="w-full p-3 text-white rounded-md bg-main">Create your account</button>
    <br />
    <div className="w-full my-2 text-center or">
            <h5 className="m-auto text-gray-300">Or</h5>

    </div>
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
