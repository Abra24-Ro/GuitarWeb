import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { MainProduct } from "./components/main/MainProduct";
import { CartProvider } from "./context/CardProvider";



function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-zinc-100 font-sans">
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_70%)] blur-3xl"></div>

        <Header />

        {/* Contenido principal */}
        <main className="flex-grow container mx-auto px-6 md:px-10">
          <MainProduct />
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
