import Navbar from '/src/app/components/Navbar';
import Title from '/src/app/components/PageTitle';
import Footer from '/src/app/components/Footer';
import PageContent from '/src/app/components/PageContent';
import { Table, Checkbox } from '@radix-ui/themes';

export default function Directory() {
  const tableClassName = 'lg:w-1/2 w-full mx-auto';
  return (
    <>
      <Navbar />
      <Title Title="Directory" />
      <PageContent Content="A collection of links I use for my online presence mapped in one place." />
      <h1 className="text-5xl text-center">Social</h1>
      <div className={tableClassName}>
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>URL</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Short Description</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Active</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Github</Table.Cell>
              <Table.Cell>
                <a href="https://github.com/CorbinIvon" className="underline">
                  github.com/CorbinIvon
                </a>
              </Table.Cell>
              <Table.Cell>My github account.</Table.Cell>
              <Table.Cell>
                <Checkbox defaultChecked disabled />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Facebook</Table.Cell>
              <Table.Cell>
                <a href="https://www.facebook.com/corbin.meier" className="underline">
                  facebook.com/corbin.meier
                </a>
              </Table.Cell>
              <Table.Cell>I'm never online here...</Table.Cell>
              <Table.Cell>
                <Checkbox defaultChecked disabled />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>LinkedIn</Table.Cell>
              <Table.Cell>
                <a href="https://www.linkedin.com/in/corbin-meier-a49484125/" className="underline">
                  linkedin.com/in/corbin-meier-a49484125/
                </a>
              </Table.Cell>
              <Table.Cell>I may see your message after a while...</Table.Cell>
              <Table.Cell>
                <Checkbox defaultChecked disabled />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Discord</Table.Cell>
              <Table.Cell>
                <a href="https://discord.gg/U6TpQdq9sn" className="underline">
                  discord.gg/U6TpQdq9sn
                </a>
              </Table.Cell>
              <Table.Cell>I'm here all the time.</Table.Cell>
              <Table.Cell>
                <Checkbox defaultChecked disabled />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </div>
      <h1 className="text-5xl text-center">Websites</h1>
      <div className={tableClassName}>
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>URL</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Short Description</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Active</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>This site</Table.Cell>
              <Table.Cell>
                <a href="https://react-lab-csci-031.corbinmeier.net/directory" className="underline">
                  react-lab-csci-031.corbinmeier.net
                </a>
              </Table.Cell>
              <Table.Cell>This site. It was created for my CSCI 031 - Intro into Web Dev class.</Table.Cell>
              <Table.Cell>
                <Checkbox defaultChecked disabled />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </div>
      <h1 className="text-5xl text-center">Tools</h1>
      <div className={tableClassName}>
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>URL</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Short Description</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Active</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>SSH</Table.Cell>
              <Table.Cell>ssh.corbinmeier.net</Table.Cell>
              <Table.Cell>The link to my ssh client. id_rsa key security encryption.</Table.Cell>
              <Table.Cell>
                <Checkbox defaultChecked disabled />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </div>

      <Footer />
    </>
  );
}
