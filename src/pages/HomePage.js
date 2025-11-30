import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <section className="flex flex-col items-center 
        justify-center text-center h-screen">
        <h1 className="uppercase font-bold 
        text-4xl tracking-wild mb-5 md:text-6xl 
        lg:8XL">Example Title</h1>
      
        <button>
          <Link to="/blog" className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-500 transition-all duration-500 hover:text-black font-bold"> Read blog</Link>
        </button>
      </section>
    </div>
  );
}