import { createClient } from '@supabase/supabase-js';
import Card from '/src/app/components/Card';

const supabaseUrl = 'https://anidbvxhgchtptfpozmt.supabase.co';
const supabaseSecret = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseSecret);

export default async function RenderBlogCards() {
  const { data: Blog_Cards, error } = await supabase.from('Blog_Entries').select('*');
  Blog_Cards.sort((a, b) => (a.id < b.id ? 1 : -1));
  if (error) console.log(error);
  return (
    <div className="flex flex-wrap justify-center">
      {Blog_Cards.map((card, idx) => (
        <Card key={idx} {...card} />
      ))}
    </div>
  );
}
