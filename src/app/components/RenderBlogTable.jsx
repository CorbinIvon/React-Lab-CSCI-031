import { createClient } from '@supabase/supabase-js';
import { Table } from '@radix-ui/themes';

const supabaseUrl = 'https://anidbvxhgchtptfpozmt.supabase.co';
const supabaseSecret = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseSecret);

export default async function RenderBlogTable() {
  const { data: Blog_Cards, error } = await supabase.from('Blog_Entries').select('*');
  const Table_Keys = Object.keys(Blog_Cards[0]);
  Table_Keys.splice(Table_Keys.indexOf('id'), 1);
  Table_Keys.splice(Table_Keys.indexOf('created_at'), 1);
  Table_Keys.splice(Table_Keys.indexOf('tags'), 1);
  Table_Keys.splice(Table_Keys.indexOf('publishTime'), 1);
  if (error) console.log(error);
  return (
    <div className="p-4">
      <Table.Root variant="background">
        <Table.Header>
          <Table.Row>
            {Table_Keys.map((key_name, idx) => (
              <Table.ColumnHeaderCell key={idx}>{key_name}</Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Blog_Cards.map((card, idx) => (
            <Table.Row key={idx}>
              {/* Temp: Manually setting the rows rather than dynamically */}
              <Table.Cell>{card.title}</Table.Cell>
              <Table.Cell>{card.contentShort}</Table.Cell>
              <Table.Cell>{card.contentLong}</Table.Cell>
              <Table.Cell>
                <a href={card.coverImageUrl} target="_blank" className="underline text-orange-500">
                  {card.coverImageUrl.substring(0, 30)}
                </a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
