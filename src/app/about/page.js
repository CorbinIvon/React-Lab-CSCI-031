import Navbar from '/src/app/components/Navbar';
import Title from '/src/app/components/PageTitle';
import Footer from '/src/app/components/Footer';
import PageContent from '/src/app/components/PageContent';

export default function About() {
  return (
    <>
      <Navbar />
      <Title Title="About" />
      <PageContent Content="Default content for about." />
      <p>
        [Placeholder for{' '}
        <a href="https://github.com/fullstackreact/google-maps-react" className="underline" target="_blank">
          Map Location (WIP)
        </a>
        ]
      </p>
      <Footer />
    </>
  );
}
