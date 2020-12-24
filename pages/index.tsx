import Head from "next/head";
import Link from "next/link";

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>TypeScript, NextJS, TailwindCSS Template/Boilerplate</title>
        <meta
          name="Description"
          content="A TypeScript, NextJS, TailwindCSS Template/Boilerplate"
        />
      </Head>
      <div className="py-20 bg-gray-900">
        <section className="container mx-auto px-6">
          <div className="sm:text-center lg:text-right">
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span className="block xl:inline">
                <span className="text-yellow-600">TypeScript</span>, NextJS,{" "}
                <span className="text-yellow-600">TailwindCSS</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mr-0">
              A TypeScript, NextJS, TailwindCSS Template/Boilerplate
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
              <div className="rounded-md shadow">
                <Link href="#buy">
                  <a className="mt-1 text-base md:text-xl sm:mt-0 sm:ml-2 block px-8 py-4 font-semibold rounded text-gray-900 bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-400">
                    Button
                  </a>
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#info"
                  className="mt-1 text-base md:text-xl sm:mt-0 sm:ml-2 block px-8 py-4 font-semibold rounded bg-gray-800 hover:bg-gray-700 focus:bg-gray-700"
                >
                  Button 2
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IndexPage;
