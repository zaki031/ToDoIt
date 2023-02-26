import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import bg from "../public/sprinkle.svg";
import Navbar from "../components/navbar";
import pic from "../public/head.jpg";
const inter = Inter({ subsets: ["latin"] });
import { Link as LinkS } from "react-scroll";
import scnd from "../public/2ndsec.jpg"
export default function Home() {
  return (
    <div className="">
      <Navbar />

      <Head>
        <title>ToDo it</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="lg:flex h-full p-4 top bg-bg justify-evenly pb-[50px]">

    <div className="right  mt-[-50px]">
         <h1 className="text-8xl lg:ml-[100px]  font-semibold mt-[200px] ">ToDo It</h1>
         <br /><br />
      <p className=" text-3xl lg:ml-[100px] max-w-[600px]">
        Simply and smartly manage your projects and ideas at one place.
      </p>
      <br />
      <br />
      <div className="flex gap-[30px] txt">
        <a
          href="/signin"
          className="px-5  bg-main p-3 rounded-xl lg:ml-[100px] text-white"
        >
          Get started !
        </a>
       
        <LinkS
                  smooth={true}
                  to="second"
                  className="p-3 bg-white rounded-xl w-[200px] pointer text-center"
                >
                  See more <i className="uil uil-arrow-down "></i>
                </LinkS>
      </div>
      

    </div>
    <Image src={pic} height={300} width={700} className="mt-[50px] rounded-md"></Image>

      </div>



      <br /><br /><br />


      <section name='second'>
        <div className="p-4 lg:flex justify-evenly second_section">
        <Image className="rounded-md w-[700px] h-[600px] object-cover  " src={scnd} width={500} height={300}></Image>

          <div className="txt ml-[40px] mt-[150px] justify-left bg-red font-medium">
            <h1 className="text-[3.1rem] font-bold">More easy  and <span className="text-main"> Efficient</span>  insights</h1>
            <div className=" sub  font-semibold mt-[50px]">
              <h4 className="text-2xl mt-[30px]"><i class="uil uil-check-circle text-main"></i> Drag and Drop task listing</h4>
            <h4 className="text-2xl mt-[30px] "><i class="uil uil-check-circle text-main"></i> Know you work  progress</h4>
            <h4 className="text-2xl mt-[30px]"><i class="uil uil-check-circle text-main"></i> Totaly free</h4>

            <h4 className="text-2xl mt-[30px]"><i class="uil uil-check-circle text-main"></i> Easy to use</h4>

            </div>
            
          </div>
        </div>
      </section>


      
    </div>
  );
}
