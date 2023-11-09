import Navbar from '/src/app/components/Navbar';
import Title from '/src/app/components/PageTitle';
import Footer from '/src/app/components/Footer';
import PageContent from '/src/app/components/PageContent';

export default function Resume() {
  return (
    <>
      <Navbar />
      <Title Title="Resume" />
      <PageContent Content="Default content for my resume." />
      <Footer />
    </>
  );
}
