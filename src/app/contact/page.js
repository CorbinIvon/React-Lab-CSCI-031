import Navbar from '/src/app/components/Navbar';
import Title from '/src/app/components/PageTitle';
import Footer from '/src/app/components/Footer';
import PageContent from '/src/app/components/PageContent';

export default function Contact() {
  return (
    <>
      <Navbar />
      <Title Title="Contact" />
      <section>
        <p>
          You may contact me via email at{' '}
          <a href="mailto:corbinivon@gmail.com" className="underline">
            corbinivon@gmail.com
          </a>
          .
        </p>
        <p>I currently reside in Chico California.</p>
        <p>
          [Placeholder for{' '}
          <a href="https://github.com/fullstackreact/google-maps-react" className="underline" target="_blank">
            Map Location (WIP)
          </a>
          ]
        </p>
      </section>
      <Footer />
    </>
  );
}
