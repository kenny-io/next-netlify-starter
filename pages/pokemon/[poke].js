import Header from "@components/Header";
import Footer from "@components/Footer";
export default function Pokemon({ response }) {
  return (
    <div className="container">
      <Header />
      <main>
        Hello {response.name}!
        <img src={response.sprites.front_default} />
      </main>
      <Footer />
    </div>
  );
}
export async function getStaticPaths() {
  return {
    paths: [
      "/pokemon/charmander",
      "/pokemon/ditto",
      "/pokemon/mudkip",
      "/pokemon/eevee",
    ],
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  let response = await (
    await fetch(`https://pokeapi.co/api/v2/pokemon/${params.poke}/`)
  ).json();
  return {
    props: {
      response,
    },
  };
}
