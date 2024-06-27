import Template from "../template/Template";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Anuncio from "../components/Anuncio";

function Anunciar() {
  return (
    <Template>
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <Anuncio />
      </div>
      <Footer />
    </Template>
  );
}

export default Anunciar;
