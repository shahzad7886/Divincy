import React, { useState } from "react";
import Card from "./Home/Card.jsx";
import { Philosophers, Religious } from "./Home/cardData.jsx";

export default function Home() {
  return (
    <>
      <header className="bg-white shadow-sm flex justify-center py-4 px-4 sm:px-10 tracking-wide relative z-50">
        <div className="max-w-7xl flex flex-wrap items-center justify-between gap-5 w-full">
          <a href="/">
            <h2 className="font-semibold">Divinc y</h2>
          </a>
          <div className="hidden lg:flex relative bg-[#F8F8F8] min-h-[40px] border-[#D6D6D9] border rounded-3xl">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="bg-transparent gradientBorder p-[10px!important] outline-none text-black placeholder-black lg:w-[400px] min-h-[40px]"
            />
            <button
              type="button"
              className="border-none bg-transparent absolute top-1/2 right-3 -translate-y-1/2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
          <div className="flex max-lg:ml-auto space-x-3">
            <button className="block px-4 md:px-6 py-2.5 text-sm font-semibold bg-custom-gradient rounded-3xl text-white transition-all ease-in-out duration-300 hover:bg-gray-100">
              Sign Up
            </button>
            <button className="block px-4 md:px-6 py-2.5 text-sm font-semibold border-gradient rounded-full bg-white text-dark transition-all ease-in-out duration-300 gradientBorder ">
              Login
            </button>
          </div>
        </div>
      </header>

      <div className="m-3 lg:hidden relative bg-[#F8F8F8] min-h-[40px] border-[#D6D6D9] border rounded-3xl">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className="bg-transparent px-5 outline-none text-black placeholder-black lg:w-[400px] min-h-[40px]"
        />
        <button
          type="button"
          className="border-none bg-transparent absolute top-1/2 right-3 -translate-y-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>

      <section className="container px-[60px] mx-auto  flex  justify-center">
        <div className="w-full p-2 md:w-1/2">
          <div className="flex relative md:items-end overflow-hidden justify-between flex-nowrap flex-row rounded-xl bg-white-along-gradient">
            <div className="p-6 pr-0 w-full sm:w-9/12">
              <h2 className="text-3xl text-start font-semibold max-w-[300px]">
                Chat with ancient Wisdom
              </h2>
              <p className="text-xs mt-3 mb-4">
                You can chat with any person from the past.
              </p>
              <button className="pl-5 pr-4 py-3 text-sm font-semibold bg-custom-gradient rounded-xl text-white transition-all ease-in-out duration-300 hover:bg-gray-100 flex items-center">
                Let's Chat
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5 ml-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <img
              src="./images/home/simon-lee.png"
              className="absolute bottom-0 right-0 ml-auto mr-0 aspect-square h-[180px] w-[180px]"
              alt=""
            />
          </div>
        </div>
        <div className="w-full p-2 md:w-1/4">
          <div className="p-3 py-4 overflow-hidden rounded-xl bg-white h-full">
            <span className="bg-theme-orange p-3 inline-block rounded-full">
              <img src="./images/home/cognition.png" className="w-7" alt="" />
            </span>
            <h4 className="text-base text-start font-semibold md:max-w-[300px]">
              Marcus
            </h4>
            <p className="text-xs mt-3 mb-0">
              Marcus Aurelius Antoninus was Roman emperor from 161 to 180 and a
              Stoic philosopher
            </p>
          </div>
        </div>
        <div className="w-full p-2 md:w-1/4">
          <div className="p-3 py-4 overflow-hidden rounded-xl bg-white h-full">
            <span className="bg-theme-sky p-3 inline-block rounded-full">
              <img src="./images/home/cognition.png" className="w-7" alt="" />
            </span>
            <h4 className="text-base text-start font-semibold md:max-w-[300px]">
              Religious Person 1
            </h4>
            <p className="text-xs mt-3 mb-0">
              Marcus Aurelius Antoninus was Roman emperor from 161 to 180 and a
              Stoic philosopher
            </p>
          </div>
        </div>
      </section>

      <section className="container px-[65px] mx-auto ">
        <h1 className="section-heading ">Philosophers</h1>
        <div className="flex flex-wrap">
          {Philosophers.map((card) => (
            <Card
              key={card.id} // Use a unique key for each card
              name={card.name}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          ))}

          <button className=" block px-3 py-2 text-sm font-semibold border-gradient rounded-full bg-white text-dark transition-all ease-in-out duration-300 gradientBorder ">
            Learn More
          </button>
        </div>
      </section>
      <section className="container px-[65px] mx-auto ">
        <h1 className="section-heading">Religious</h1>
        <div className="flex flex-wrap">
          {Religious.map((card) => (
            <Card
              key={card.id} // Use a unique key for each card
              name={card.name}
              description={card.description}
              Religious={card.r}
              imageUrl={card.imageUrl}
              isReligious={true} // Set this to true to apply religious-specific styles
            />
          ))}
          <button className="block px-3 py-2 text-sm font-semibold border-gradient rounded-full bg-white text-dark transition-all ease-in-out duration-300 gradientBorder ">
            Learn More
          </button>
        </div>
      </section>
      <section className="container px-[65px] mx-auto ">
        <h1 className="section-heading">Some Suggestions</h1>
        <div className="flex flex-wrap">
          <div className="md:w-1/3  p-2">
            <div className="p-[32px]  overflow-hidden rounded-xl bg-white h-full">
              <div className="flex items-center">
                <span className="bg-theme-orange p-3 mr-2 inline-block rounded-full">
                  <img
                    src="./images/home/cognition.png"
                    className="w-7"
                    alt=""
                  />
                </span>
                <h4 className="text-base text-start font-semibold md:max-w-[300px]">
                  Marcus
                </h4>
              </div>

              <p className="text-xs mt-3 mb-0">
                Marcus Aurelius Antoninus was Roman emperor from 161 to 180 and
                a Stoic philosopher
              </p>
            </div>
          </div>
          <div className="md:w-1/3  p-2">
            <div className="p-[32px]  overflow-hidden rounded-xl bg-white h-full">
              <div className="flex items-center">
                <span className="bg-theme-orange p-3 mr-2 inline-block rounded-full">
                  <img
                    src="./images/home/cognition.png"
                    className="w-7"
                    alt=""
                  />
                </span>
                <h4 className="text-base text-start font-semibold md:max-w-[300px]">
                  Marcus
                </h4>
              </div>

              <p className="text-xs mt-3 mb-0">
                Marcus Aurelius Antoninus was Roman emperor from 161 to 180 and
                a Stoic philosopher
              </p>
            </div>
          </div>
          <div className="md:w-1/3  p-2">
            <div className="p-[32px]  overflow-hidden rounded-xl bg-white h-full">
              <div className="flex items-center">
                <span className="bg-theme-sky p-3 mr-2 inline-block rounded-full">
                  <img
                    src="./images/home/synagogue.svg"
                    className="w-7"
                    alt=""
                  />
                </span>
                <h4 className="text-base text-start font-semibold md:max-w-[300px]">
                  Religious Person 1
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="  bg-white text-center p-5">
        <div className="container mx-auto px-[65px]">
          <div className="flex justify-between items-center">
            <img src="./images/home/Figure1.png" alt="right" />
            <div>
              <h1 className=" font-bold text-[#120039]">
                Create your own Figure
              </h1>
              <p>
                Not vibing with any Figures? Create one of your own! Customize
                things like their voice, conversation starts, their tone, and
                more!
              </p>
            </div>

            <img src="./images/home/Figure2.png" alt=" left " />
          </div>
        </div>
      </section>

      <footer className="py-5">
        <div className="container px-[65px] mx-auto flex justify-between items-center">
          <div className="flex justify-around items-center">
            <div>
              <a href="/">
                <h2 className="font-semibold text-white text-[24px]">
                  Divincy
                </h2>
              </a>
            </div>
            <ul className="flex">
              <li>About</li>
              <li>Carreer</li>
              <li>Blog</li>
              <li>Research</li>
            </ul>
          </div>
          <div>
            <ul className="flex">
              <li>
                <img src="./images/home/Socialicons.png" alt="SocialIcons" />
              </li>
              <li>
                {" "}
                <img src="./images/home/Socialicons.png" alt="SocialIcons" />
              </li>
              <li>
                {" "}
                <img src="./images/home/Socialicons.png" alt="SocialIcons" />
              </li>
              <li>
                {" "}
                <img src="./images/home/Socialicons.png" alt="SocialIcons" />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
