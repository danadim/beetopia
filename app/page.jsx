import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='blue_gradient text-center'> Prompts</span>
    </h1>
    <p className='desc text-center'>
      Beetopia is a prompting tool for modern world to
      discover, create and share creative prompts.
    </p>

    <Feed />
  </section>
);

export default Home;