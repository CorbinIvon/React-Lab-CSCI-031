import Navbar from '/src/app/components/Navbar';
import Title from '/src/app/components/PageTitle';
import Footer from '/src/app/components/Footer';
import PageContent from '/src/app/components/PageContent';

export default function Contact() {
  return (
    <>
      <Navbar />
      <Title Title="Contact" />
      <PageContent Content="Default content for contacting the page owner." />
      <Footer />
    </>
  );
}
