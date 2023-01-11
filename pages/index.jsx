import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoAccessibilityOutline, IoLanguageOutline } from "react-icons/io5";
import { FaChevronRight, FaHandsWash } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { RiProfileLine } from "react-icons/ri";
import { TfiEmail, TfiYoutube } from "react-icons/tfi";
import { HiChevronUp, HiOutlineInformationCircle } from "react-icons/hi";
import { VscSearch, VscTwitter } from "react-icons/vsc";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsMastodon, BsLinkedin } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { BiBuildingHouse } from "react-icons/bi";
import Link from "next/link";
export default function Home() {
  const [tabValue, setTabValue] = useState(0);
  const [slide, setSlide] = useState(1);
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const changescrolled = () => {
      window.scrollY >= 10
        ? setScrolled(window.scrollY)
        : setScrolled(window.scrollY);
    };
    window.addEventListener("scroll", changescrolled);
    return () => {
      window.removeEventListener("scroll", changescrolled);
    };
  }, []);

  return (
    <>
      <Head>
        <title>For Students | University of Stuttgart</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/system/modules/de.stuttgart.uni.v3.basics/resources/favicons/favicon-32x32.png?v=eE54GpEM97"
        />
      </Head>
      <div className="bg-[#dddddd] relative">
        <div className="max-w-[1170px] mx-auto lg:relative relative">
          {/* navbar */}
          <div
            className={`bg-white pb-13 lg:fixed lg:w-full sticky top-0 z-[100000000] lg:px-12 ${
              scrolled > 19
                ? " py-[15px]"
                : "py-12  transition-all duration-150"
            } `}
          >
            <div className="grid grid-cols-12 max-w-[960px] mx-auto">
              {/* logo part */}
              <div className="col-span-6">
                <div
                  className={`relative ${tabValue === 1 ? " invisible" : ""}`}
                >
                  <img
                    className="max-w-[223px] invert-1 brightness-0 opacity-70"
                    src="https://www.student.uni-stuttgart.de/system/modules/de.stuttgart.uni.v3.basics/resources/img/svg/logo-inverted-en.svg"
                    alt=""
                  />
                  <p className="absolute -bottom-1 left-14 text-sm">
                    For students
                  </p>
                </div>
              </div>
              {/* accesibility and language part */}
              <div className="col-span-6 place-self-end h-full">
                <div className="flex gap-3">
                  <div className="group h-fit">
                    <div
                      className={`max-w-[45px] h-fit group border border-transparent rounded-full p-1  hover:border-[#333] ${
                        tabValue === 1 ? " invisible" : ""
                      }`}
                    >
                      <IoAccessibilityOutline
                        size={30}
                        className="opacity-60"
                      />
                    </div>
                    <div className="hidden group-hover:block absolute">
                      <div className=" mt-2 rounded-full bg-gray-200 p-2 text-gray-600">
                        <BiBuildingHouse size={30} />
                      </div>
                      <div className=" mt-2 rounded-full bg-gray-200 p-2 text-gray-600">
                        <FaHandsWash size={30} />
                      </div>
                    </div>
                  </div>
                  <div className="group h-fit">
                    <div
                      className={`max-w-[40px] h-fit border border-transparent rounded-full p-1  hover:border-[#333] ${
                        tabValue === 1 ? " invisible" : ""
                      }`}
                    >
                      <img src="/lang.png" alt="yes" />
                    </div>
                    <div className="hidden group-hover:block absolute">
                      <div className=" mt-2 rounded-full bg-gray-200 p-2 text-gray-600">
                        <IoLanguageOutline size={30} />
                      </div>
                    </div>
                  </div>

                  <VscSearch
                    className={`-rotate-90 opacity-60 mt-2 ml-1 ${
                      tabValue === 1 ? " invisible" : ""
                    }`}
                    size={25}
                  />
                  <div
                    onClick={() => setTabValue(1)}
                    className={`flex flex-col gap-2 mt-2 pl-2 ${
                      tabValue === 1 ? " invisible" : ""
                    }`}
                  >
                    <div className="border-b-2 border-gray-500 w-7 rounded-full"></div>
                    <div className="border-b-2 border-gray-500 w-7 rounded-full"></div>
                    <div className="border-b-2 border-gray-500 w-7 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                tabValue
                  ? "pt-6 text-white w-full h-screen left-0 top-0 absolute transition-all ease-in-out duration-300 opacity-100 z-[100000000] overflow-hidden bg-black bg-opacity-[0.85]"
                  : "transition-all absolute ease-in-out duration-300 opacity-10 w-full top-0 left-0 h-0 overflow-hidden"
              }
            >
              <div className="max-w-[960px] pl-7 mx-auto grid grid-cols-2 ">
                <div className="relative">
                  <img
                    className="max-w-[20rem]"
                    src="https://www.student.uni-stuttgart.de/system/modules/de.stuttgart.uni.v3.basics/resources/img/svg/logo-inverted-en.svg"
                    alt=""
                  />
                  <p className="absolute -bottom-1 left-20 text-base">
                    For students
                  </p>
                </div>
                <p className="flex gap-4 place-self-end pr-10">
                  <VscSearch className="-rotate-90" size={30} />
                  <RxCross1
                    size={30}
                    onClick={() => {
                      setTabValue(0), setSlide(1);
                    }}
                  />
                </p>
              </div>
              <div className="flex max-w-[960px] mx-auto pl-8 pt-24 gap-4">
                <div
                  className={`border-2 border-gray-400 w-20 rounde-full ${
                    slide === 1 ? "border-[#00beff]" : "border-gray-400"
                  }`}
                ></div>
                <div
                  className={`border-2 border-gray-400 w-20 rounde-full  ${
                    slide ? "hidden" : "block border-[#00beff]"
                  }`}
                ></div>
              </div>
              <div>
                <div className=""></div>
                <div className=" max-w-4xl mx-auto pt-32">
                  {[
                    "Examination organization",
                    "Financing & stipends",
                    "International students in Stuttgart",
                    "Diaital Services",
                    "Counseling",
                    "Examination organization",
                    "Financing & stipends",
                    "International students in Stuttgart",
                    "Diaital Services",
                    "Counseling",
                  ].map((e, i) => {
                    return (
                      <Link
                        href={`/rout/${i}`}
                        key={i}
                        onClick={() => setSlide(0)}
                        className=""
                      >
                        <div
                          key={i}
                          className="px-3 flex justify-between py-3 border-b hover:bg-[#00beff] hover:text-black font-thin border-dashed border-gray-300"
                        >
                          <p className="text-xl tracking-wide">{e}</p>
                          <FaChevronRight className="mt-3" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#00BEFF] lg:px-12 pb-12">
            <div className=" h-60 max-w-[990px] mx-auto gap-24 flex justify-between items-center ">
              <div className="space-y-6">
                <h4 className="font-bold text-3xl">Students</h4>
                <p className="text-lg">
                  Important news, links, documents and information for students
                  at the University of Stuttgart: Here you will find information
                  about your studies.
                </p>
              </div>
              <div className="p-32 relative text-white hover:text-black -mb-28 bg-[#333333] hover:bg-white duration-200 rounded-full">
                <div className="absolute top-28  left-10">
                  <p className="text-md font-bold">
                    INFORMATION FOR PROSPECTIVE STUDENTS
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* form and image text btn section */}
          <div className="max-w-[74rem] bg-white mx-auto pb-32 lg:px-12">
            <div className=" max-w-[44rem] mx-auto grid pt-16 pb-10">
              <div className=" bg-[#EEEEEE] px-10  py-6">
                <h4 className="mb-2">expression</h4>
                <div>
                  <input
                    className="border border-gray-300  py-3 px-2 w-full focus:outline-[#004191] "
                    type="text"
                    placeholder="Search for terms from the university glossary"
                  />
                  <button className="px-8 text-sm py-4 bg-[#004191] text-white mt-4 hover:bg-[#333] font-semibold">
                    SEARCH TERM
                  </button>
                </div>
              </div>
            </div>
            <div className="max-w-[960px] mx-auto">
              <div className="grid grid-cols-3 lg:grid-cols-2 lg:grid-rows-2 lg:gap-y-12 mx-auto max-w-fit lg:gap-x-32 gap-6">
                {[
                  [
                    "https://www.student.uni-stuttgart.de/img/easydb-2019_11_20_Unitag_118.jpg?__scale=w:370,h:370,cx:332,cy:0,cw:1335,ch:1335",
                    "Study programs",
                    "Masters programs",
                    "Study programs",
                    "Masters programs",
                    "Study programs",
                    "Masters programs",
                    "Study programs",
                    "Masters programs",
                    "Study programs",
                  ],
                  [
                    "https://www.student.uni-stuttgart.de/img/easydb-IMG_0423.jpg?__scale=w:370,h:370,cx:0,cy:250,cw:1500,ch:1500",
                    "Support",
                    "Living in the stuttgart",
                    "Counseling",
                    "Living in the stuttgart",
                    "Counseling",
                    "Living in the stuttgart",
                    "Counseling",
                    "Living in the stuttgart",
                    "Counseling",
                    "Living in the stuttgart",
                    "Counseling",
                  ],
                  [
                    "https://www.student.uni-stuttgart.de/img/easydb-2019_11_20_Unitag_113.jpg?__scale=w:370,h:370,cx:332,cy:0,cw:1335,ch:1335",
                    "Application",
                    "International Students (degree)",
                    "Exchange students (non degree)",
                    "Applying and enrolling",
                    "Exchange students (non degree)",
                    "Applying and enrolling",
                    "Exchange students (non degree)",
                    "Applying and enrolling",
                    "Exchange students (non degree)",
                    "Applying and enrolling",
                  ],
                ].map((item, i) => {
                  return (
                    <div key={i} className="flex flex-col gap-3">
                      <img
                        src={item[0]}
                        alt="pic"
                        className="max-w-[293px] max-h-[293px]"
                      />
                      <h1 className="font-bold text-lg">{item[1]}</h1>
                      <div className="flex flex-col gap-2">
                        {" "}
                        <Link
                          href=""
                          className="hover:underline text-[#004191] font-bold flex gap-2"
                        >
                          <span className="text-[#333] mt-1">
                            <FaChevronRight />
                          </span>
                          {item[2]}
                        </Link>
                        <Link
                          href=""
                          className="hover:underline text-[#004191] font-bold flex gap-2"
                        >
                          <span className="text-[#333] mt-1">
                            <FaChevronRight />
                          </span>
                          {item[4]}
                        </Link>
                        <Link
                          href=""
                          className="hover:underline text-[#004191] font-bold flex gap-2"
                        >
                          <span className="text-[#333] mt-1">
                            <FaChevronRight />
                          </span>
                          {item[5]}
                        </Link>{" "}
                        <Link
                          href=""
                          className="hover:underline text-[#004191] font-bold flex gap-2"
                        >
                          <span className="text-[#333] mt-1">
                            <FaChevronRight />
                          </span>
                          {item[6]}
                        </Link>{" "}
                        <Link
                          href=""
                          className="hover:underline text-[#004191] font-bold flex gap-2"
                        >
                          <span className="text-[#333] mt-1">
                            <FaChevronRight />
                          </span>
                          {item[7]}
                        </Link>{" "}
                        <Link
                          href=""
                          className="hover:underline text-[#004191] font-bold flex gap-2"
                        >
                          <span className="text-[#333] mt-1">
                            <FaChevronRight />
                          </span>
                          {item[8]}
                        </Link>{" "}
                        <Link
                          href=""
                          className="hover:underline text-[#004191] font-bold flex gap-2"
                        >
                          <span className="text-[#333] mt-1">
                            <FaChevronRight />
                          </span>
                          {item[9]}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex w-full justify-center pt-12">
                <button className="bg-[#004191] text-white py-2 px-3 whitespace-nowrap font-semibold ">
                  STUDY PROGRAMS&apos;WEBPAGES FOR STUDENTS
                </button>
              </div>
            </div>
          </div>

          <div className="relative max-w-[1170px] ">
            <div className="border bg-blue-800 fixed p-3 text-white rounded-full bottom-0">
              <HiChevronUp className="hover:-translate-y-3 mt-2" />
            </div>
            {/* Absoluted image text black-bg section */}
            <div className="max-w-[1170px] relative mx-auto bg-[#333] h-[1655px] pl-12 pt-12">
              <h1 className="text-white font-bold text-3xl pl-20 pb-6">
                News and events for students
              </h1>
              <div className="relative max-w-[960px] mx-auto">
                {/* first card */}
                <div className=" absolute p-5 hover:bg-[#00beff] flex flex-col gap-4 h-[152px] w-[284px] bg-white float-left left-0 top-0 mb-[30px]">
                  <h1 className="font-bold text-xl">
                    Newsticker: Information on the coronavirus
                  </h1>
                  <p>Article | 11/10/22</p>
                </div>
                {/* Card 2 */}
                <div className="absolute p-5 hover:bg-[#00beff] flex flex-col gap-4 h-[205px] w-[284px] bg-white float-left left-0 top-[181px] mb-[30px]">
                  <h1 className="font-bold text-xl">
                    Impressive research in the field of business administration
                  </h1>
                  <p>News | 12/21/22</p>
                </div>
                {/* Card 3 with image*/}
                <div className="absolute p-5 hover:bg-[#00beff] flex flex-col gap-4 h-[472px] w-[284px] bg-white float-left left-0 top-[416px] mb-[30px]">
                  <img
                    className="rounded-full w-[220px] h-[220px] mx-auto mt-4"
                    src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/instagram.jpg?__scale=w:220,h:220,cx:333,cy:0,cw:1333,ch:1333"
                    alt=""
                  />
                  <h1 className="font-bold text-xl">
                    The University of Stuttgart&apos;s five most beautiful
                    Instagram pictures{" "}
                  </h1>
                  <p>Article | 12/21/22</p>
                  <p className="font-thin whitespace-nowrap">
                    Photo: Addictive Stock / photocase.de
                  </p>
                </div>
                {/* 4th card with video */}
                <div className="absolute hover:bg-[#00beff] w-[284px] h-[425px] bg-white float-left left-[32.3313%] top-0 mb-[30px] p-0">
                  <img
                    className=""
                    src="https://www.uni-stuttgart.de/universitaet/aktuelles/video/img-video-vorschaubilder/24A_1280x720.jpg?__scale=w:560,h:400,cx:136,cy:0,cw:1008,ch:720"
                    alt=""
                  />
                  <h1 className="font-bold p-5 text-xl">
                    Newsticker: Information on the coronavirus
                  </h1>
                  <p className="p-4 pt-0">Article | 11/10/22</p>
                </div>
                {/* 5th card with picture */}
                <div className="absolute p-5 hover:bg-[#00beff] flex flex-col gap-4 h-[401px] w-[284px] bg-white float-left left-[32.3313%] top-[456px] mb-[30px]">
                  <img
                    className="rounded-full w-[220px] h-[220px] mx-auto mt-4"
                    src="https://www.simtech.uni-stuttgart.de/img/Sim_Tech_Folge_03_Szene_27.jpg?__scale=w:220,h:220,cx:262,cy:26,cw:1073,ch:1073"
                    alt=""
                  />
                  <h1 className="font-bold text-xl">
                    Newsticker: Information on the coronavirus
                  </h1>
                  <p>Article | 11/10/22</p>
                </div>
                {/* 6th card no picture */}
                <div className="absolute p-5 hover:bg-[#00beff] flex flex-col gap-4 h-[233px] w-[284px] bg-white float-left left-[32.3313%] top-[888px] mb-[30px]">
                  <h1 className="font-bold text-xl">
                    Newsticker: Information on the coronavirus
                  </h1>
                  <p>Article | 11/10/22</p>
                </div>
                {/* 7th card with image */}
                <div className="absolute hover:bg-[#00beff] w-[284px] h-[418px] bg-white float-left left-[64.7609%] top-0 mb-[30px]">
                  <img
                    src="https://www.usus.uni-stuttgart.de/img/2022/stressed-student.jpg?__scale=w:560,h:400,cx:67,cy:0,cw:1866,ch:1333"
                    alt=""
                  />
                  <h1 className="font-bold text-xl p-5">
                    Newsticker: Information on the coronavirus
                  </h1>
                  <p className="p-4 pt-0">Article | 11/10/22</p>
                </div>
                <div className="absolute p-5 hover:bg-[#00beff] flex flex-col gap-4 h-[426px] w-[284px] bg-white float-left left-[64.7609%] top-[448px] mb-[30px]">
                  <img
                    className="rounded-full w-[220px] h-[220px] mx-auto mt-4"
                    src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/photocase_4910444.jpg?__scale=w:220,h:220,cx:0,cy:871,cw:2000,ch:2000"
                    alt=""
                  />
                  <h1 className="font-bold text-xl">
                    Newsticker: Information on the coronavirus
                  </h1>
                  <p>Article | 11/10/22</p>
                </div>
                {/* last card with image */}
                <div className="absolute p-5 hover:bg-[#00beff] flex flex-col gap-4 h-[426px] w-[284px] bg-white float-left left-[64.7609%] top-[904px] mb-[30px]">
                  <img
                    className="rounded-full w-[220px] h-[220px] mx-auto mt-4"
                    src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/diversity-kalender.JPG?__scale=w:220,h:220,cx:170,cy:0,cw:832,ch:832"
                    alt=""
                  />
                  <h1 className="font-bold text-xl">
                    Newsticker: Information on the coronavirus
                  </h1>
                  <p>Article | 11/10/22</p>
                </div>
              </div>
              <div className="text-white absolute bottom-[5%] right-[39%] flex gap-8">
                <button className="border border-white py-3 px-6 font-semibold">
                  ALL REPORTS
                </button>
                <button className="border border-white py-3 px-6 font-semibold">
                  ALL EVENTS
                </button>
              </div>
            </div>
            {/* blank white small section */}
            <div className="h-8 bg-white"></div>
            {/* Blue bg section with cirles */}
            <div className="bg-[#004191] py-12 lg:px-12">
              <p className="text-white text-3xl font-semibold pb-12 pl-36">
                Information for students
              </p>
              <div className="grid grid-cols-2 text-white max-w-[960px] mx-auto gap-y-12 gap-x-12">
                {[
                  [
                    "All study programs",
                    "On the webpages of your degree program you will find information on the study program structure, …",
                  ],
                  [
                    "All study programs",
                    "On the webpages of your degree program you will find information on the study program structure, …",
                  ],
                  [
                    "All study programs",
                    "On the webpages of your degree program you will find information on the study program structure, …",
                  ],
                  [
                    "All study programs",
                    "On the webpages of your degree program you will find information on the study program structure, …",
                  ],
                  [
                    "All study programs",
                    "On the webpages of your degree program you will find information on the study program structure, …",
                  ],
                  [
                    "All study programs",
                    "On the webpages of your degree program you will find information on the study program structure, …",
                  ],
                  [
                    "All study programs",
                    "On the webpages of your degree program you will find information on the study program structure, …",
                  ],
                  [
                    "All study programs",
                    "On the webpages of your degree program you will find information on the study program structure, …",
                  ],
                  [
                    "All study programs",
                    "On the webpages of your degree program you will find information on the study program structure, …",
                  ],
                  [
                    "All study programs",
                    "On the webpages of your degree program you will find information on the study program structure, …",
                  ],
                  [
                    "All study programs",
                    "On the webpages of your degree program you will find information on the study program structure, …",
                  ],
                  [
                    "All study programs",
                    "On the webpages of your degree program you will find information on the study program structure, …",
                  ],
                  [
                    "All study programs",
                    "On the webpages of your degree program you will find information on the study program structure, …",
                  ],
                  [
                    "All study programs",
                    "On the webpages of your degree program you will find information on the study program structure, …",
                  ],
                  [
                    "All study programs",
                    "On the webpages of your degree program you will find information on the study program structure, …",
                  ],
                  [
                    "All study programs",
                    "On the webpages of your degree program you will find information on the study program structure, …",
                  ],
                ].map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="flex w-[466px] h-[130px] gap-6 select-none"
                    >
                      <div className="rounded-full border-2 bg-[#004191] text-white hover:text-[#004191] transition-all duration-300 hover:bg-white border-white w-[206px] h-[130px] flex justify-center items-center">
                        <FaChevronRight />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="font-semibold text-2xl w-[316px]">
                          {item[0]}
                        </p>
                        <p className="w-[316px]">{item[1]}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* white bg setion for contact */}
            <div className="py-16 flex flex-col bg-white ">
              <p className="text-2xl font-semibold pl-[105px] pb-6">Contact</p>
              <div className="max-w-[960px] mx-auto grid grid-cols-3 gap-7">
                {[
                  [
                    "https://www.beschaeftigte.uni-stuttgart.de/img-beschaeftigte/iz_mitarbeiter/Dezernat-Internationales-IZ.jpg?__scale=w:150,h:150,cx:0,cy:0,cw:2000,ch:2000",
                    "Dezernat Internationales",
                    "Profile page                ",
                    "+49 711 685 68566",
                    "Write e-mail",
                    "Office hours (online)",
                    "Mon & Wed 10 a.m. to noon; Office hours (on site): Mon & Wed, 2 p.m. to 4 p.m. , Tue & Thur, 10 a.m. to noon",
                  ],
                  [
                    "https://www.beschaeftigte.uni-stuttgart.de/img-beschaeftigte/iz_mitarbeiter/Dezernat-Internationales-IZ.jpg?__scale=w:150,h:150,cx:0,cy:0,cw:2000,ch:2000",
                    "Dezernat Internationales",
                    "Profile page                ",
                    "+49 711 685 68566",
                    "Write e-mail",
                    "Office hours (online)",
                    "Mon & Wed 10 a.m. to noon; Office hours (on site): Mon & Wed, 2 p.m. to 4 p.m. , Tue & Thur, 10 a.m. to noon",
                  ],
                  [
                    "https://www.beschaeftigte.uni-stuttgart.de/img-beschaeftigte/iz_mitarbeiter/Dezernat-Internationales-IZ.jpg?__scale=w:150,h:150,cx:0,cy:0,cw:2000,ch:2000",
                    "Dezernat Internationales",
                    "Profile page                ",
                    "+49 711 685 68566",
                    "Write e-mail",
                    "Office hours (online)",
                    "Mon & Wed 10 a.m. to noon; Office hours (on site): Mon & Wed, 2 p.m. to 4 p.m. , Tue & Thur, 10 a.m. to noon",
                  ],
                ].map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="border-2 py-6 px-8 border-black flex flex-col gap-16 w-[305px]"
                    >
                      <div className="flex justify-center w-full">
                        <img src={item[0]} alt="" className="rounded-full " />
                      </div>
                      <div className="flex flex-col gap-4">
                        <h1 className="font-semibold text-2xl">{item[1]}</h1>
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-2">
                            <RiProfileLine className="text-gray-500 mt-1" />
                            <Link
                              href={""}
                              className="underline hover:no-underline text-slate-600"
                            >
                              {item[2]}
                            </Link>
                          </div>
                          <div className="flex gap-2">
                            <FiPhone className="text-gray-500 mt-1" />
                            <Link
                              href={""}
                              className="underline hover:no-underline text-slate-600"
                            >
                              {item[3]}
                            </Link>
                          </div>
                          <div className="flex gap-2">
                            <TfiEmail className="text-gray-500 mt-1" />
                            <Link
                              href={""}
                              className="underline hover:no-underline text-slate-600"
                            >
                              {item[4]}
                            </Link>
                          </div>
                          <div className="">
                            <div className="grid grid-cols-12">
                              <HiOutlineInformationCircle className="text-gray-500 mt-1" />
                              <Link
                                href={""}
                                className=" text-slate-600 col-span-11"
                              >
                                <span className="underline hover:no-underline">
                                  {item[5]}
                                </span>
                                {item[6]}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* footer */}
            <div className="bg-[#333]"></div>
          </div>
          {/* footer */}
          <footer>
            <div className=" max-w-[1170px]  bg-[#333333] text-white pt-16 px-32 mx-auto relative">
              <div className="max-w-[960px] mx-auto grid grid-cols-3">
                <div className="col-span-1">
                  <img
                    className="max-w-[223px]"
                    src="https://www.student.uni-stuttgart.de/system/modules/de.stuttgart.uni.v3.basics/resources/img/svg/logo-inverted-en.svg"
                    alt=""
                  />
                </div>
                <div className="flex justify-around items-center col-span-2">
                  <div className="flex flex-col gap-2">
                    <Link
                      href=""
                      className="rounded-full hover:bg-[#004191] hover:border-none transition-color duration-300 bg-transparent border border-white w-fit p-4"
                    >
                      <CgFacebook size={25} />
                    </Link>
                    <p>Facebook</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Link
                      href=""
                      className="this rounded-full hover:bg-cover hover:bg-orange-500 hover:border-none transition-color duration-300 bg-transparent border border-white w-fit p-4"
                    >
                      <BsInstagram size={25} />
                    </Link>
                    <p>Instagram</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link
                      href=""
                      className="rounded-full border hover:bg-[#00beff] hover:border-none transition-color duration-300 bg-transparent  border-white w-fit p-4"
                    >
                      {" "}
                      <VscTwitter size={25} />
                    </Link>
                    <p>Twitter</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link
                      href=""
                      className="rounded-full hover:bg-[#6364FF] hover:border-none transition-color duration-300 bg-transparent border border-white w-fit p-4"
                    >
                      <BsMastodon size={25} />
                    </Link>
                    <p>Mastodon</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link
                      href=""
                      className="rounded-full hover:bg-[#FF0000] hover:border-none transition-color duration-300 bg-transparent border border-white w-fit p-4"
                    >
                      <TfiYoutube size={25} />
                    </Link>
                    <p>Youtube</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link
                      href=""
                      className="rounded-full hover:bg-[#004191] hover:border-none transition-color duration-300 bg-transparent border border-white p-4"
                    >
                      {" "}
                      <BsLinkedin size={25} />
                    </Link>
                    <p>LinkedIn</p>{" "}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 pb-20 pt-8 gap-6 mt-10">
                {[
                  {
                    title: "Formalities",
                    desc: [1, 2, 3, 4],
                  },
                  {
                    title: "Formalities",
                    desc: [1, 2, 3, 4],
                  },
                  {
                    title: "Formalities",
                    desc: [1, 2, 3, 4, 5],
                  },
                  {
                    title: "Formalities",
                    desc: [1, 2, 3],
                  },
                ].map((e, idx) => {
                  return (
                    <div key={idx} className=" flex flex-col">
                      <h4 className="text-md font-semibold">{e.title}</h4>
                      <div className="mt-7">
                        <div>
                          {e.desc.map((item, i) => {
                            return (
                              <p key={i} className="underline">
                                Students
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
