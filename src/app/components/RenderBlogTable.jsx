import { createClient } from '@supabase/supabase-js';
import { Grid, Box, DecorativeBox } from '@radix-ui/themes';

const supabaseUrl = 'https://anidbvxhgchtptfpozmt.supabase.co';
const supabaseSecret = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseSecret);

export default async function RenderBlogTable() {
  const { data: Blog_Cards, error } = await supabase.from('Blog_Entries').select('*');
  if (error) console.log(error);
  return (
    <Grid columns="3" gap="3" width="auto">
      {Blog_Cards.map((card, idx) => (
        <></>
      ))}
      <Box>
        <DecorativeBox />
      </Box>
    </Grid>
  );
}
