import Head from "next/head";

function Home() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/purecss@2.0.6/build/pure-min.css"
          integrity="sha384-Uu6IeWbM+gzNVXJcM9XV3SohHtmWE+3VGi496jvgX1jyvDTXfdK+rfZc8C1Aehk5"
          crossorigin="anonymous"
        />
      </Head>
      <div className="pure-g">
        <div className="pure-u-1-3"></div>
        <div className="pure-u-1-3">
          <h1>Hello on github pages with Next.js</h1>
          <a className="pure-button pure-button-primary" href="#">
            Navigate somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
