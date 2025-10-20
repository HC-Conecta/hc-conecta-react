import Footer from "@/components/section/Footer";
import Header from "@/components/section/Header";
import { ZoomIn, ZoomOut } from "lucide-react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {

  const [fontSize, setFontSize] = useState<number>(16);

  const increaseFont = () => {
    setFontSize(prev => Math.min(prev + 2, 22));
  };

  const decreaseFont = () => {
    setFontSize(prev => Math.max(prev - 2, 14));
  };

  useEffect(() => {
    localStorage.setItem("fontSize", document.documentElement.style.fontSize = `${fontSize}px`)
  }, [fontSize])

  return (
    <div >
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
        <div id="letter" className="fixed right-0 m-10 lg:mx-[15%] lg:my-14 bottom-0 py-3 px-6 bg-gradient-to-br from-blue-500 to-blue-700 flex gap-4 rounded-full shadow-md ">
          <button onClick={increaseFont} className="flex relative  font-semibold">
          <ZoomIn size={28} className="text-white/80"/>
          </button>
          <button onClick={decreaseFont} className="flex relative font-semibold">
            <ZoomOut size={28} className="text-white/80" />
          </button>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
