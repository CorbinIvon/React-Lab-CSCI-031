'use client';
import Image from 'next/image';
import Navbar from '/src/app/components/Navbar';
import Title from '/src/app/components/PageTitle';
import Footer from '/src/app/components/Footer';
import React from 'react';
import GithubActivityCalendar from '/src/app/components/GitActivity';
import Spotify from '/src/app/components/Spotify';

export default function About() {
  const pageHeaderStyle = 'text-2xl text-center p-2 italic';
  const pageParagraphStyle = 'text-center p-4';
  const contentWrapper = 'flex-center bg-slate-800/[.4] lg:rounded-xl lg:w-2/5 lg:p-2 lg:m-2 w-full';
  return (
    <>
      <Navbar />
      <Title
        Title="About"
        BannerUrl="https://images.unsplash.com/photo-1594729095022-e2f6d2eece9c?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="flex items-center justify-center">
        <div className={contentWrapper}>
          <p className="text-center text-xl">
            <a href="https://github.com/CorbinIvon" target="_blank" className="underline">
              github.com/CorbinIvon
            </a>
          </p>
          <div className="flex justify-center">
            <GithubActivityCalendar username="CorbinIvon" />
          </div>
          <br />
          <div className="flex items-center justify-center flex-col">
            <hr className="w-5/6 " />
          </div>
          <section className="flex flex-col items-center">
            <div className="flex justify-center">
              <Image src="/corbin.jpg" alt="Image of Corbin Meier" width={150} height={150} className="m-2 rounded" />
            </div>
            <h1 className={pageHeaderStyle}>Who am I?</h1>
            <p className={pageParagraphStyle}>
              My name is Corbin Meier. I am a motivated individual that loves putting the hours in. I have a strong work
              ethic, and an even stronger desire to learn. I am a full stack developer, and I am always looking for new
              ways to improve my skills. I pick up complex topics quickly and have a fundamental understanding of how
              tech works. I strive for performance and efficiency in my code and day to day life. I am a team player and
              I enjoy working with others. I am a problem solver and I love a good challenge. I am a fast learner and I
              love to learn new things. I am a hard worker and I am always looking for ways to improve myself.
            </p>
          </section>
          <div className="flex items-center justify-center flex-col">
            <hr className="w-5/6 " />
          </div>
          <section className="flex flex-col items-center">
            <h1 className={pageHeaderStyle}>What do I do?</h1>
            <p className={pageParagraphStyle}>
              I am a full stack developer. I have experience with HTML, CSS, JavaScript, React, Node.js, SQL, Python,
              C++, and C# just to name a few. I have learned C++, HTML, CSS, REACT, Node.js, and JavaScript in school.
              Through work experience, I have learned all about DNS queries and how to use them to get a site online.
            </p>
          </section>
          <div className="flex items-center justify-center flex-col">
            <hr className="w-5/6 " />
          </div>

          <section className="flex flex-col items-center">
            <h1 className={pageHeaderStyle}>Education</h1>
            <p className={pageParagraphStyle}>
              I am currently enrolled at Butte College in Oroville, California. I am pursuing my associates degree in
              Computer Programming. I have also studied 3 years under Computer Science and Game Design at Chico State
              University. Unfortunately, due to the pandemic, I was unable to finish my degree at Chico State, but found
              a more affordable option at Butte College.
            </p>
          </section>
          <div className="flex items-center justify-center flex-col">
            <hr className="w-5/6 " />
          </div>

          <section className="flex flex-col items-center">
            <h1 className={pageHeaderStyle}>Graduation</h1>
            <p className={pageParagraphStyle}>
              I am expected to graduate from Butte College in the Fall of 2024 and am on track to graduate with an
              associates in Computer Programming. More information can be found{' '}
              <a className="underline" href="https://programs.butte.edu/ProgramInfo/10/2084" target="_blank">
                here
              </a>
              .
            </p>
          </section>
          <div className="flex items-center justify-center flex-col">
            <hr className="w-5/6 " />
          </div>

          <section className="flex flex-col items-center">
            <h1 className={pageHeaderStyle}>Favorite Clip</h1>
            <p className={pageParagraphStyle}>
              Here are a few things I&apos;d like to share. Chances are that if you also like these, then we will get
              along well.
            </p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/lOVpQeB07DQ?si=nOx_8FwYDxjX0a2O"
              title="Ixion, first jump"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <p className={pageParagraphStyle + ' pb-0'}>Ixion - First Jump.</p>
            <p className={pageParagraphStyle}>
              In this clip, I really like how the developers encapsulated the warping of space and time. The soundtrack
              also adds to the experience pushing this scene above and beyond! Watch the intro scenes on{' '}
              <a href="https://www.youtube.com/watch?v=PC5zT_NR7o4" target="_blank" className="underline">
                YouTube
              </a>
              . It paints a really good picture of what the game is about!
            </p>
          </section>
          <div className="flex items-center justify-center flex-col">
            <hr className="w-5/6 " />
          </div>

          <section className="flex flex-col items-center">
            <h1 className={pageHeaderStyle}>Favorite Movie</h1>
            <p className={pageParagraphStyle}>Hands down, it&apos;s got to be Treasure Planet.</p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Kp3PEn772a4?si=YI7jLYjwEVKM4zt7"
              title="Treasure Planet, the movie"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <p className={pageParagraphStyle}>
              When I saw this movie when I was younger, I believe it set me on the path of Sci-Fi and the like. This
              movie is so unique and has such a good story. I just wish there was more content similar to this show.
            </p>
          </section>
          <div className="flex items-center justify-center flex-col">
            <hr className="w-5/6 " />
          </div>

          <section className="flex flex-col items-center">
            <h1 className={pageHeaderStyle}>Favorite Music</h1>
            <p className={pageParagraphStyle}>
              I don&apos;t have a particular favorite song, but here&apos;s a few from my favorites. <br />
              Thanks, and enjoy!
            </p>
            <Spotify src="0eCyLXuQvl6P09iymEGTXS" />
            <Spotify src="5jqCYVWYZ1B21VesZgvi6T" />
            <Spotify src="3spdoTYpuCpmq19tuD0bOe" />
            <Spotify src="6YffUZJ2R06kyxyK6onezL" />
            <Spotify src="1Pwh4vY5YfOc4tWYzUdOYK" />
            <Spotify src="09tYMZ38sfZRZmrN0basVJ" />
            <Spotify src="6W9o5DzZtPIyoJe6Jnaowf" />
            <Spotify src="5xLoX9ayGLlGfA7y32wfO9" />
            <Spotify src="4lz6RS1fxcfNBG8QYzE2ty" />
          </section>
        </div>
        <hr />
      </div>
      <Footer />
    </>
  );
}
