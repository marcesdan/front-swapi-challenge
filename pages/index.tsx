import {
  Text,
  Page,
  Button,
  Link,
} from '@vercel/examples-ui'

function Home() {
  return (
    <Page>
      <section className='text-center'>
        <Text variant="h1" className="mb-6">
          Coding Challenge
        </Text>
        <Text className="mb-4">
          Full Stack - Extending SWAPI The Star Wars API
        </Text>
      </section>
      <hr className="border-t border-accents-2 my-6" />
      <section className="flex flex-col gap-3 text-center">
        <Link href="/starships">
          <Button>Go to starships page</Button>
        </Link>
        <Link href="/vehicles">
          <Button>Go to vehicles page</Button>
        </Link>
      </section>
    </Page>
  )
}

export default Home
