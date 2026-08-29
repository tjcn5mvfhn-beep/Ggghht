"use client";

import { useEffect, useState } from "react";

function Countdown() {
  const [seconds, setSeconds] = useState(300);
  useEffect(() => {
    const id = setInterval(() => setSeconds(v => v <= 0 ? 300 : v - 1), 1000);
    return () => clearInterval(id);
  }, []);
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return <div className="font-mono text-5xl font-black tabular-nums sm:text-6xl">{String(m).padStart(2,"0")}:{String(s).padStart(2,"0")}</div>;
}

const steps = [
  ["01","Elige un juego","Selecciona la experiencia que prefieras."],
  ["02","Regístrate","Crea tu cuenta en unos segundos."],
  ["03","Juega","Entra en la experiencia y disfruta."],
  ["04","Empieza","Sigue las instrucciones del juego."]
];

function GameCard({ title, image, description }: { title:string; image:string; description:string }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[.04]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
      </div>
      <div className="p-6">
        <div className="mb-3 inline-flex rounded-full bg-yellow-400 px-3 py-1 text-[10px] font-black tracking-widest text-black">JUEGO DESTACADO</div>
        <h3 className="text-3xl font-black">{title}</h3>
        <p className="mt-2 text-sm text-white/50">{description}</p>
        <a href="#bonus" className="mt-5 block rounded-xl bg-yellow-400 px-5 py-3.5 text-center font-black uppercase text-black transition hover:scale-[1.02] hover:bg-yellow-300">Jugar</a>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <header className="border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-5 px-4 py-3 text-xs font-bold sm:text-sm">
          <span className="flex items-center gap-2"><i className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />2,847 jugando ahora</span>
          <span className="text-white/40">+124 ganaron última hora</span>
        </div>
      </header>

      <section className="relative px-4 pb-14 pt-14 sm:pt-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-yellow-400/15 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-black tracking-[.22em] text-yellow-300">▸ ELIGE TU JUEGO</div>
          <h1 className="text-6xl font-black uppercase leading-[.88] tracking-[-.07em] sm:text-8xl">PLAY<br/><span className="text-yellow-400">MORE.</span><br/>WIN.</h1>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-6 text-white/50 sm:text-base">Elige tu experiencia y descubre un landing moderno, rápido y adaptable a móvil.</p>
          <a href="#games" className="mt-8 inline-flex rounded-xl bg-yellow-400 px-8 py-4 text-lg font-black uppercase text-black shadow-[0_0_40px_rgba(250,204,21,.2)] transition hover:scale-105">Jugar ahora →</a>
        </div>
      </section>

      <section id="games" className="px-4 pb-14">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          <GameCard title="MINESLOT" image="/mineslot.svg" description="Una experiencia rápida, visual y pensada para móvil." />
          <GameCard title="RUSH HOUR" image="/rush-hour.svg" description="Adrenalina, ritmo y una interfaz optimizada para cada pantalla." />
        </div>
      </section>

      <section id="bonus" className="px-4 py-10">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-yellow-400/20 bg-yellow-400/[.06]">
          <div className="relative grid gap-8 p-7 sm:p-10 md:grid-cols-2 md:items-center md:p-14">
            <div>
              <div className="mb-3 text-3xl">🎁</div>
              <div className="text-xs font-black tracking-[.25em] text-yellow-400">BONO ESPECIAL</div>
              <h2 className="mt-2 text-6xl font-black tracking-[-.06em]">50 USD</h2>
              <p className="mt-3 text-sm text-white/50">Oferta promocional de ejemplo. Sustituye el texto y condiciones antes de publicar.</p>
            </div>
            <div className="text-center">
              <p className="mb-3 text-xs uppercase tracking-[.25em] text-white/40">Tiempo restante</p>
              <Countdown />
              <a href="#games" className="mt-6 inline-block rounded-xl bg-yellow-400 px-7 py-3.5 font-black uppercase text-black transition hover:scale-105">Elegir juego</a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center"><p className="text-xs font-black uppercase tracking-[.3em] text-yellow-400">Fácil y rápido</p><h2 className="mt-3 text-4xl font-black uppercase sm:text-5xl">¿Cómo jugar?</h2></div>
          <div className="grid overflow-hidden rounded-[28px] border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([n,t,d]) => <div key={n} className="border-b border-white/10 bg-[#0a0a0a] p-6 lg:border-b-0 lg:border-r lg:last:border-r-0"><div className="text-xs font-black text-yellow-400">{n}</div><h3 className="mt-8 font-black">{t}</h3><p className="mt-2 text-sm leading-6 text-white/45">{d}</p></div>)}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-9">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center text-xs text-white/30 sm:flex-row">
          <div><div className="text-lg font-black text-white">MINE<span className="text-yellow-400">SLOT</span></div><div>© 2026 Todos los derechos reservados.</div></div>
          <div className="flex gap-5"><a href="#" className="hover:text-white">Términos</a><a href="#" className="hover:text-white">Privacidad</a><a href="#" className="hover:text-white">Contacto</a></div>
        </div>
      </footer>
    </main>
  );
}
