import Head from "next/head";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Results from "../Components/Results";
import requests from "../Util/requests";
import Navbar from "../Components/Navbar";


export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <link rel="icon" href="/favicon.ico" style={{ objectFit: "cover" }} />
      </Head>

        <Navbar  className="w-full"/>
        <Nav />
        <Results results={results} />


     
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      results: request.results,
      
    },
  };
}

