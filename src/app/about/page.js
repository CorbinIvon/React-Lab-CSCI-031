'use client';
import Image from 'next/image';
import Navbar from '/src/app/components/Navbar';
import Title from '/src/app/components/PageTitle';
import Footer from '/src/app/components/Footer';
import React from 'react';
import GithubActivityCalendar from '/src/app/components/GitActivity';

export default function About() {
  const pageHeaderStyle = 'text-2xl text-center p-2 italic';
  const pageParagraphStyle = 'text-center p-4';

  return (
    <>
      <Navbar />
      <Title Title="About" BannerUrl="https://i.pinimg.com/originals/92/c1/2a/92c12ad4c4f3be78da8ccaa1d1481eda.png" />
      <div className="flex justify-center">
        <GithubActivityCalendar username="CorbinIvon" />
      </div>
      <div className="flex justify-center place-items-center">
        <div className="flex-center sm:px-6 lg:px-16">
          <section>
            <div className="flex justify-center">
              <Image src="/corbin.jpg" alt="Image of Corbin Meier" width={150} height={150} className="m-2" />
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
          <section>
            <h1 className={pageHeaderStyle}>What do I do?</h1>
            <p className={pageParagraphStyle}>
              I am a full stack developer. I have experience with HTML, CSS, JavaScript, React, Node.js, SQL, Python,
              C++, and C# just to name a few. I have learned C++, HTML, CSS, REACT, Node.js, and JavaScript in school.
              Through work experience, I have learned all about DNS queries and how to use them to get a site online.
            </p>
          </section>
          <section>
            <h1 className={pageHeaderStyle}>Education</h1>
            <p className={pageParagraphStyle}>
              I am currently enrolled at Butte College in Oroville, California. I am pursuing my associates degree in
              Computer Programming. I have also studied 3 years under Computer Science and Game Design at Chico State
              University. Unfortunately, due to the pandemic, I was unable to finish my degree at Chico State, but found
              a more affordable option at Butte College.
            </p>
          </section>
          <section>
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
        </div>
        <hr />
      </div>
      <Footer />
    </>
  );
}
