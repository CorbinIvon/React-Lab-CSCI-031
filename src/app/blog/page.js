import Navbar from '/src/app/components/Navbar';
import Title from '/src/app/components/PageTitle';
import Footer from '/src/app/components/Footer';
import PageContent from '/src/app/components/PageContent';
import Card from '/src/app/components/Card';
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://anidbvxhgchtptfpozmt.supabase.co';
const supabaseSecret = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseSecret);

export default async function Blog() {
  const { data: Blog_Cards, error } = await supabase.from('Blog_Entries').select('*');
  if (error) console.log(error);
  console.log('Blog_Cards');
  return (
    <>
      <Navbar />
      <Title Title="Blog" />
      <PageContent Content="Default content for the Blog." />
      <div className="flex flex-wrap">
        {Blog_Cards.map((card, idx) => (
          <Card
            key={idx}
            title={card.title}
            contentShort={card.contentShort}
            contentLong={card.contentLong}
            coverImageUrl={card.coverImageUrl}
            tags={card.tags}
            publishTime={card.publishTime}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
