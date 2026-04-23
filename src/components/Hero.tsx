import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-widest mb-4 opacity-70">Spotify × AI Roast</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          ТВОЙ ВКУС<br />
          <span style={{ color: "#1DB954" }}>ПРОЖАРЕН</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-10">
          Подключи Spotify — и мы безжалостно разберём, что ты слушаешь, почему и что это говорит о тебе как о человеке.
        </p>
        <button
          id="start"
          className="px-8 py-4 text-sm uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer"
          style={{ backgroundColor: "#1DB954", color: "#000" }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#17a349")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#1DB954")}
        >
          Войти через Spotify
        </button>
      </div>
    </div>
  );
}