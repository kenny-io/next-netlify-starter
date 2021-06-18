import Header from "@components/Header";
import Footer from "@components/Footer";
export default function Pokemon({ product }) {
  return (
    <div className="container">
      <Header />
      <main>
        Hello {product.title}!
        <img src={product.image} />
      </main>
      <Footer />
    </div>
  );
}
export async function getStaticPaths() {
  // Call an external API endpoint to get products
  const res = await fetch("http://test.gasport.com.ng/API/OrderList");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `http://test.gasport.com.ng/API/OrderList/${params.id}`
  );
  const product = await res.json();
  return { props: { product } };
}
