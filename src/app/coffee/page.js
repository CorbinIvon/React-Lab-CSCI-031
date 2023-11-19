import Navbar from '/src/app/components/Navbar';
import Title from '/src/app/components/PageTitle';
import Footer from '/src/app/components/Footer';
import PageContent from '/src/app/components/PageContent';
import Coffee_Card from '/src/app/components/Coffee_Card';
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://anidbvxhgchtptfpozmt.supabase.co';
const supabaseSecret = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseSecret);

export default async function Home() {
  const Coffee_Cards = [
    {
      'EZ and light': {
        'Non Dairy Powder Creamer': '2 scoops',
        Sugar: '1 scoop',
        'Top with milk': 'Until Satisfied',
        Coffee: 'Until Satisfied',
      },
    },
    {
      'Duplicate for testing': {
        'Non Dairy Powder Creamer': '2 scoops',
        Sugar: '1 scoop',
        'Top with milk': 'Until Satisfied',
        Coffee: 'Until Satisfied',
      },
    },
  ];
  return (
    <>
      <Navbar />
      <Title Title="Coffee Recipes" />
      <PageContent Content="Because why not?" />
      <div className="flex flex-wrap">
        {Coffee_Cards.map((card, idx) => (
          <Coffee_Card
            key={idx}
            title={Object.keys(card)[0]}
            content={card.content}
            img={card.image_url}
            url={card.source_url}
            tags={card.tags}
            timestamp={card.publish_time}
          />
        ))}
        {/* <Card
          title="Employee Tracking System"
          content="A system designed to track when an employee is on site or not."
          img="https://i.pinimg.com/564x/fe/84/ed/fe84ed536a3f7290b237ec8dfb0a4511.jpg"
          url="/"
          tags={['Python', 'Google Spreadsheet']}
          timestamp="2019-01-01"
        />
        <Card
          title="Automated Document Uploading System"
          content="Designed to guarantee the success of uploading documents to an official source to reduce monitor time."
          img="https://www.faxburner.com/blog/wp-content/uploads/2023/07/can-you-email-fax-1024x683.jpeg"
          url="/"
          tags={['Python', 'File Management', 'Local Networking']}
          timestamp="2019-01-01"
        />
        <Card
          title="Temporarily Maintained a Network"
          content="During a moment of critical failure, I was able to temporarily maintain a network for a company."
          img="https://www.ntc.edu/sites/default/files/styles/full_width_16_9/public/2021-06/network-technician-header_0.jpg?itok=S1vB5UZR"
          url="/"
          tags={['Networking', 'File Management', 'Local Networking', 'Custom VPN']}
          timestamp="2022-10-01"
        /> */}
      </div>
      <Footer />
    </>
  );
}
