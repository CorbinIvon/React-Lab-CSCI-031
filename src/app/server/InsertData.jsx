'use server';
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://anidbvxhgchtptfpozmt.supabase.co';
const supabaseSecret = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseSecret);

export default async function InsertData(formData) {
  console.log('Test');
  const rawData = {
    title: formData.get('title'),
    contentShort: formData.get('contentShort'),
    contentLong: formData.get('contentLong'),
    coverImageUrl: formData.get('coverImageUrl'),
  };
  await supabase.from('Blog_Entries').insert([{ ...rawData }]);
  return 'Success!';
}
