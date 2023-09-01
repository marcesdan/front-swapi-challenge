import type { AppProps } from "next/app";
import "@vercel/examples-ui/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto h-screen flex flex-col">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default App;
