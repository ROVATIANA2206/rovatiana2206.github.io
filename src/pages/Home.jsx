import { useEffect, useRef, useMemo, useState } from "react";
import { motion } from "framer-motion";
import profile from "../data/profile";

export default function Home() {
  const canvasRef = useRef(null);
  const [openCard, setOpenCard] = useState(false);

  // Animation Matrix
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const fontSize = 18;
    const characters =
      "01{}[]();<>+-=*/&%$#@!abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let cols = Math.floor(canvas.width / fontSize);
    let drops = Array(cols).fill(1);
    let lastTime = 0;

    const draw = (time) => {
      if (time - lastTime < 50) {
        requestAnimationFrame(draw);
        return;
      }
      lastTime = time;

      ctx.fillStyle = "rgba(10,10,16,0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#8B5CF6";
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const char = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(char, i * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });

      requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Stack principal
  const stack = useMemo(
    () => [
      "Django",
      "React",
      "Python",
      "IA (Ollama)",
      "Gemini API",
      "YOLOv8",
      "RNN",
      "MySQL",
      "PostgreSQL",
    ],
    []
  );

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#0A0A10] via-black to-[#0A0A10] text-[#F5F5F5]">
      {/* Canvas Matrix */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 opacity-80"
        style={{ pointerEvents: "none" }}
      />

      <div className="relative z-10">
        <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Card interactive + Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <motion.div
              layout
              onClick={() => setOpenCard(!openCard)}
              className="cursor-pointer bg-white/5 hover:bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg border border-[#4F46E5] p-6 transition-all duration-300"
            >
              <div className="chip mb-4 inline-block bg-[#4F46E5] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                🚀 Développeur Full-Stack – Disponible
              </div>

              <h1 className="mb-2 text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F5F5] drop-shadow-[0_0_12px_#8B5CF6]">
                {profile.name || "Rovatiana Niriniaina Désiré"}
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed">
                Passionné par l’innovation, l’intelligence artificielle et la création d’applications modernes.
              </p>

              {openCard && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 text-gray-300 space-y-2"
                >
                  <p>
                    « Le code n’est pas qu’une solution immédiate, c’est une décision sur l’avenir. »<br />
                    Je conçois des architectures backend et frontend avancées, intégrant l’IA de manière pertinente, afin de livrer des produits fiables, évolutifs et alignés avec les enjeux réels du terrain.
                  </p>
                  <p className="text-[#8B5CF6] font-medium">
                    Cliquez pour réduire.
                  </p>
                </motion.div>
              )}
            </motion.div>

            <div className="mt-6 text-sm text-gray-400 drop-shadow">
              Basé à {profile.location || "Antananarivo"} • {profile.school || "ESMIA – Mahamasina"}
            </div>
          </motion.div>

          {/* Photo + Stack */}
          <motion.div
            className="flex flex-col items-center md:items-end gap-6 md:gap-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Photo profil */}
            <motion.img
              src="/images/photo1.jpg"
              alt="Profile"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full object-cover border-4 border-[#8B5CF6] shadow-[0_0_25px_#8B5CF6]"
            />

            {/* Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="card bg-white/5 backdrop-blur-md shadow-[0_0_20px_#8B5CF6] rounded-2xl p-5 sm:p-6 w-full max-w-xs sm:max-w-md border border-[#4F46E5]"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#8B5CF6] drop-shadow-[0_0_8px_#8B5CF6]">🧠 Stack principale</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {stack.map((s, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-black/40 border border-[#4F46E5] text-[#8B5CF6] px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium text-center shadow-[0_0_6px_#8B5CF6]"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
