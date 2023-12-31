import Navbar from '/src/app/components/Navbar';
import Title from '/src/app/components/PageTitle';
import Footer from '/src/app/components/Footer';
import PageContent from '/src/app/components/PageContent';
import { Table, Checkbox } from '@radix-ui/themes';

export default function Directory() {
  const tableClassName = 'w-full';
  const contentWrapper = 'flex-center bg-slate-800/[.4] lg:rounded-xl lg:w-2/5 lg:p-2 lg:m-2 w-full';
  return (
    <>
      <Navbar />
      <Title
        Title="Directory"
        BannerUrl="https://images.unsplash.com/photo-1484199316358-d7acb93729f2?q=80&w=2695&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="flex justify-center place-items-center">
        <div className={contentWrapper}>
          <p className="text-center">A collection of links I use for my online presence mapped in one place.</p>
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
                  <Table.Cell>I&apos;m never online here...</Table.Cell>
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
                  <Table.Cell>I&apos;m here all the time.</Table.Cell>
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
                    <a href="https://corbinmeier.net/directory" className="underline">
                      corbinmeier.net
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
        </div>
      </div>

      <Footer />
    </>
  );
}
