import Link from "next/link";

const lugares = [
  {
    nombre: "Restaurante Sabor Norteño",
    categoria: "Restaurante",
    descripcion: "Comida norteña, platos criollos y especialidades de nuestra tierra.",
    imagen:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=85",
    color: "bg-orange-500",
  },
  {
    nombre: "Clínica Salud Norte",
    categoria: "Salud",
    descripcion: "Atención médica y profesionales especializados para nuestra comunidad.",
    imagen:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=85",
    color: "bg-blue-500",
  },
  {
    nombre: "Bodega Santa Cruz",
    categoria: "Comercio",
    descripcion: "Productos de primera necesidad para las familias de nuestra comunidad.",
    imagen:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=900&q=85",
    color: "bg-emerald-500",
  },
  {
    nombre: "Institución Educativa Santa Cruz",
    categoria: "Educación",
    descripcion: "Formación y educación para los estudiantes de nuestra comunidad.",
    imagen:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
    color: "bg-purple-500",
  },
  {
    nombre: "Productores Agrícolas Santa Cruz",
    categoria: "Agricultura",
    descripcion: "Productos agrícolas locales directamente de nuestros productores.",
    imagen:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=85",
    color: "bg-lime-500",
  },
  {
    nombre: "Complejo Deportivo Santa Cruz",
    categoria: "Deporte",
    descripcion: "Espacio para actividades deportivas, recreativas y eventos.",
    imagen:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=85",
    color: "bg-red-500",
  },
];

const accesos = [
  {
    icono: "📍",
    titulo: "Directorio local",
    texto: "Negocios y servicios",
    href: "#directorio",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icono: "🤝",
    titulo: "Trabajos y oficios",
    texto: "Talento de nuestra gente",
    href: "#oportunidades",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icono: "📰",
    titulo: "Noticias y eventos",
    texto: "Mantente informado",
    href: "#noticias",
    color: "from-orange-500 to-amber-500",
  },
  {
    icono: "🌴",
    titulo: "Lugares turísticos",
    texto: "Conoce y disfruta",
    href: "#turismo",
    color: "from-purple-500 to-fuchsia-500",
  },
  {
    icono: "❤️",
    titulo: "Servicios públicos",
    texto: "Información útil",
    href: "#servicios",
    color: "from-rose-500 to-red-500",
  },
];

const noticias = [
  {
    fecha: "04 SEP 2026",
    titulo: "Gran faena de limpieza comunitaria",
    texto: "Nuestra comunidad se une para cuidar y mejorar nuestros espacios naturales.",
    imagen:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=900&q=85",
  },
  {
    fecha: "01 SEP 2026",
    titulo: "Mejoras en nuestros espacios públicos",
    texto: "Nuevas áreas verdes y espacios de recreación para nuestras familias.",
    imagen:
      "https://images.unsplash.com/photo-1588392382834-a891154bca4d?auto=format&fit=crop&w=900&q=85",
  },
  {
    fecha: "28 AGO 2026",
    titulo: "Fiesta Patronal de Santa Cruz",
    texto: "Tradición, cultura y alegría en una gran celebración de nuestra comunidad.",
    imagen:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=85",
  },
  {
    fecha: "25 AGO 2026",
    titulo: "Actividad deportiva comunal",
    texto: "Jóvenes talentos se reúnen para compartir deporte y compañerismo.",
    imagen:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=85",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* ==================== NAVEGACIÓN ==================== */}

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

          <Link href="/" className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 text-2xl shadow-md">
              🌄
            </div>

            <div className="leading-tight">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Centro Poblado de
              </p>

              <p className="text-xl font-black text-slate-950">
                Santa Cruz
              </p>

              <p className="text-xs font-bold text-emerald-600">
                Querecotillo
              </p>
            </div>

          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">

            <Link
              href="/"
              className="text-emerald-600"
            >
              Inicio
            </Link>

            <a href="#nuestro-pueblo" className="hover:text-emerald-600">
              Nuestro Pueblo
            </a>

            <a href="#directorio" className="hover:text-emerald-600">
              Directorio
            </a>

            <a href="#noticias" className="hover:text-emerald-600">
              Noticias
            </a>

            <a href="#turismo" className="hover:text-emerald-600">
              Turismo
            </a>

            <a href="#servicios" className="hover:text-emerald-600">
              Servicios
            </a>

            <a href="#contacto" className="hover:text-emerald-600">
              Contacto
            </a>

          </nav>

          <div className="flex items-center gap-3">

            <span className="hidden text-xl md:block">
              🔎
            </span>

            <a
              href="#oportunidades"
              className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3 text-sm font-extrabold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              🤝 Únete a la comunidad
            </a>

          </div>

        </div>
      </header>


      {/* ==================== HERO ==================== */}

      <section
        className="relative min-h-[650px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(3,25,43,.90) 0%, rgba(3,25,43,.72) 38%, rgba(3,25,43,.15) 75%), url('https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2000&q=90')",
        }}
      >

        <div className="mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-20 lg:px-8">

          <div className="max-w-3xl text-white">

            <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-bold backdrop-blur">
              🌿 Nuestra tierra, nuestra gente
            </span>

            <h1 className="mt-7 text-5xl font-black leading-[.95] tracking-tight md:text-7xl">

              Centro Poblado de

              <span className="block text-cyan-300">
                Santa Cruz
              </span>

              <span className="block text-3xl text-white md:text-5xl">
                Querecotillo
              </span>

            </h1>

            <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-slate-100 md:text-2xl">
              Tradición, naturaleza y gente trabajadora en un solo lugar.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
              Conoce nuestros lugares, servicios, negocios, cultura,
              actividades y todo lo que hace especial a nuestra comunidad.
            </p>


            {/* BUSCADOR */}

            <div className="mt-8 flex max-w-2xl flex-col gap-3 rounded-2xl bg-white p-2 shadow-2xl sm:flex-row">

              <div className="flex flex-1 items-center gap-3 px-4">

                <span className="text-2xl text-slate-500">
                  🔎
                </span>

                <input
                  type="text"
                  placeholder="¿Qué estás buscando? Restaurantes, servicios, lugares..."
                  className="w-full bg-transparent py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 md:text-base"
                />

              </div>

              <button
                type="button"
                className="rounded-xl bg-slate-950 px-8 py-3 font-extrabold text-white transition hover:bg-cyan-600"
              >
                Buscar
              </button>

            </div>


            {/* CATEGORÍAS RÁPIDAS */}

            <div className="mt-5 flex flex-wrap gap-2">

              {[
                "Restaurantes",
                "Salud",
                "Educación",
                "Comercio",
                "Turismo",
                "Deporte",
              ].map((categoria) => (

                <span
                  key={categoria}
                  className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
                >
                  {categoria}
                </span>

              ))}

            </div>

          </div>


          {/* PANEL DERECHO */}

          <div className="absolute bottom-10 right-6 hidden lg:block">

            <div className="rounded-3xl border border-white/20 bg-slate-950/70 p-6 text-white shadow-2xl backdrop-blur-xl">

              <div className="flex items-center gap-5">

                <div className="text-5xl">
                  ☀️
                </div>

                <div>
                  <p className="text-3xl font-black">
                    28°C
                  </p>

                  <p className="text-sm text-slate-300">
                    Clima agradable
                  </p>

                  <p className="mt-1 text-xs text-cyan-300">
                    Centro Poblado de Santa Cruz
                  </p>
                </div>

                <div className="ml-4 border-l border-white/20 pl-5">
                  <p className="max-w-[180px] text-lg font-bold italic">
                    “Un pueblo grande por su gente”
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================== ACCESOS ==================== */}

      <section className="relative z-10 -mt-8 px-5">

        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-5">

          {accesos.map((acceso) => (

            <a
              key={acceso.titulo}
              href={acceso.href}
              className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
            >

              <div className="flex items-center gap-4">

                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${acceso.color} text-2xl shadow-md`}
                >
                  {acceso.icono}
                </div>

                <div className="min-w-0">

                  <h3 className="font-extrabold text-slate-900">
                    {acceso.titulo}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {acceso.texto}
                  </p>

                </div>

                <span className="ml-auto text-lg text-slate-400 transition group-hover:translate-x-1 group-hover:text-emerald-500">
                  →
                </span>

              </div>

            </a>

          ))}

        </div>

      </section>


      {/* ==================== DIRECTORIO ==================== */}

      <section
        id="directorio"
        className="mx-auto max-w-7xl px-5 py-20 lg:px-8"
      >

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>

            <p className="font-bold uppercase tracking-[.2em] text-emerald-500">
              Lo mejor de nuestra comunidad
            </p>

            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Lugares que hacen única a Santa Cruz
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              Explora restaurantes, instituciones, comercios, servicios,
              espacios deportivos y mucho más.
            </p>

          </div>

          <a
            href="#directorio"
            className="w-fit rounded-full border-2 border-slate-900 px-6 py-3 font-bold text-slate-900 transition hover:bg-slate-950 hover:text-white"
          >
            Ver todos los lugares →
          </a>

        </div>


        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

          {lugares.map((lugar) => (

            <article
              key={lugar.nombre}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative h-48 overflow-hidden">

                <img
                  src={lugar.imagen}
                  alt={lugar.nombre}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <span
                  className={`absolute left-3 top-3 rounded-full ${lugar.color} px-3 py-1 text-xs font-bold text-white shadow-md`}
                >
                  {lugar.categoria}
                </span>

              </div>

              <div className="p-4">

                <h3 className="font-extrabold leading-5 text-slate-950">
                  {lugar.nombre}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-5 text-slate-500">
                  {lugar.descripcion}
                </p>

                <div className="mt-4 flex items-center justify-between">

                  <span className="text-xs font-semibold text-slate-400">
                    📍 Santa Cruz
                  </span>

                  <span className="font-bold text-emerald-500">
                    →
                  </span>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ==================== NUESTRA ESENCIA ==================== */}

      <section
        id="nuestro-pueblo"
        className="overflow-hidden bg-slate-950"
      >

        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">

          <div
            className="min-h-[500px] bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(2,20,35,.25), rgba(2,20,35,.45)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=90')",
            }}
          >

            <div className="flex h-full items-end p-8 md:p-12">

              <div className="text-white">

                <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">
                  🌄 Santa Cruz - Querecotillo
                </span>

                <h2 className="mt-5 text-4xl font-black md:text-5xl">
                  Conoce Santa Cruz
                </h2>

                <p className="mt-3 max-w-lg text-lg text-slate-200">
                  Un pueblo lleno de vida, cultura y oportunidades.
                </p>

              </div>

            </div>

          </div>


          <div className="flex items-center px-7 py-16 md:px-14">

            <div>

              <p className="font-bold uppercase tracking-[.2em] text-cyan-400">
                Nuestra esencia
              </p>

              <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
                Un pueblo con historia, gente y futuro
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Santa Cruz - Querecotillo es más que un lugar. Es una
                comunidad unida que trabaja cada día por un mejor mañana.
                Aquí la tradición se encuentra con nuevas oportunidades.
              </p>


              <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">

                <div>
                  <p className="text-3xl font-black text-emerald-400">
                    +1,000
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Habitantes
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-black text-purple-400">
                    +50
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Negocios locales
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-black text-cyan-400">
                    +10
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Lugares turísticos
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-black text-orange-400">
                    ∞
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Oportunidades
                  </p>
                </div>

              </div>


              <a
                href="#oportunidades"
                className="mt-10 inline-flex rounded-full bg-cyan-500 px-7 py-3 font-extrabold text-slate-950 transition hover:bg-cyan-400"
              >
                Conoce más sobre nuestra comunidad →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ==================== OPORTUNIDADES ==================== */}

      <section
        id="oportunidades"
        className="mx-auto max-w-7xl px-5 py-20 lg:px-8"
      >

        <div className="rounded-[2rem] bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-700 p-8 text-white shadow-2xl md:p-12">

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <p className="font-bold uppercase tracking-[.2em] text-cyan-300">
                Talento local
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Trabajos, oficios y oportunidades
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
                Conecta con personas de nuestra comunidad que ofrecen
                servicios, oficios y conocimientos. También podrás encontrar
                nuevas oportunidades laborales.
              </p>

            </div>

            <div className="rounded-3xl bg-white/10 p-7 text-center backdrop-blur">

              <div className="text-5xl">
                🤝
              </div>

              <p className="mt-3 text-2xl font-black">
                Talento de nuestra gente
              </p>

              <p className="mt-2 text-sm text-blue-100">
                Próximamente disponible
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ==================== NOTICIAS ==================== */}

      <section
        id="noticias"
        className="bg-slate-50 py-20"
      >

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="font-bold uppercase tracking-[.2em] text-orange-500">
                Mantente informado
              </p>

              <h2 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">
                Noticias y novedades
              </h2>

              <p className="mt-3 text-slate-600">
                Entérate de las últimas actividades, anuncios y eventos de Santa Cruz.
              </p>

            </div>

            <a
              href="#noticias"
              className="w-fit rounded-full border-2 border-blue-900 px-6 py-3 font-bold text-blue-950 hover:bg-blue-950 hover:text-white"
            >
              Ver todas las noticias →
            </a>

          </div>


          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {noticias.map((noticia) => (

              <article
                key={noticia.titulo}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="h-48 overflow-hidden">

                  <img
                    src={noticia.imagen}
                    alt={noticia.titulo}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />

                </div>

                <div className="p-5">

                  <span className="text-xs font-extrabold text-orange-500">
                    {noticia.fecha}
                  </span>

                  <h3 className="mt-3 font-extrabold text-slate-950">
                    {noticia.titulo}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {noticia.texto}
                  </p>

                  <a
                    href="#noticias"
                    className="mt-5 inline-block text-sm font-extrabold text-blue-700"
                  >
                    Leer más →
                  </a>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ==================== SERVICIOS ==================== */}

      <section
        id="servicios"
        className="mx-auto max-w-7xl px-5 py-20 lg:px-8"
      >

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">

          <div className="grid gap-10 lg:grid-cols-2">

            <div>

              <p className="font-bold uppercase tracking-[.2em] text-emerald-500">
                Información útil
              </p>

              <h2 className="mt-3 text-4xl font-black text-slate-950">
                Servicios para nuestra comunidad
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Encuentra información de interés para vecinos, familias,
                visitantes, emprendedores y organizaciones del Centro
                Poblado de Santa Cruz.
              </p>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {[
                "🏥 Salud",
                "🎓 Educación",
                "🚨 Emergencias",
                "📢 Avisos importantes",
                "🏛️ Instituciones",
                "📍 Ubicaciones",
              ].map((servicio) => (

                <a
                  key={servicio}
                  href="#directorio"
                  className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-800 transition hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {servicio}
                  <span className="float-right">→</span>
                </a>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ==================== FRASE ==================== */}

      <section className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 px-5 py-20 text-center text-white">

        <div className="mx-auto max-w-4xl">

          <div className="text-5xl">
            🌄
          </div>

          <p className="mt-7 text-3xl font-black leading-tight md:text-5xl">
            “Cuando una comunidad trabaja unida,
            cada esfuerzo se convierte en progreso.”
          </p>

          <p className="mt-6 font-bold text-cyan-100">
            — Centro Poblado de Santa Cruz
          </p>

        </div>

      </section>


      {/* ==================== FOOTER ==================== */}

      <footer
        id="contacto"
        className="bg-slate-950 text-white"
      >

        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 text-2xl">
                🌄
              </div>

              <div>
                <p className="font-black">
                  Centro Poblado de
                </p>

                <p className="text-xl font-black text-cyan-300">
                  Santa Cruz
                </p>

                <p className="text-xs font-bold text-emerald-400">
                  Querecotillo
                </p>
              </div>

            </div>

            <p className="mt-5 max-w-sm leading-7 text-slate-400">
              Nuestra tierra, nuestra gente, nuestro futuro.
            </p>

          </div>


          <div>

            <h3 className="font-extrabold">
              Enlaces rápidos
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-400">

              <a href="#directorio" className="block hover:text-cyan-300">
                Directorio
              </a>

              <a href="#noticias" className="block hover:text-cyan-300">
                Noticias
              </a>

              <a href="#oportunidades" className="block hover:text-cyan-300">
                Trabajos y oficios
              </a>

              <a href="#servicios" className="block hover:text-cyan-300">
                Servicios
              </a>

            </div>

          </div>


          <div>

            <h3 className="font-extrabold">
              Descubre
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-400">

              <a href="#nuestro-pueblo" className="block hover:text-cyan-300">
                Nuestro Pueblo
              </a>

              <a href="#turismo" className="block hover:text-cyan-300">
                Turismo
              </a>

              <a href="#directorio" className="block hover:text-cyan-300">
                Lugares
              </a>

              <a href="#contacto" className="block hover:text-cyan-300">
                Contacto
              </a>

            </div>

          </div>


          <div id="turismo">

            <h3 className="font-extrabold">
              Síguenos
            </h3>

            <div className="mt-5 flex gap-3">

              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600">
                f
              </span>

              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-600">
                ◎
              </span>

              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600">
                ▶
              </span>

              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-700">
                ♪
              </span>

            </div>

            <p className="mt-6 font-bold text-emerald-400">
              Santa Cruz siempre avanza.
            </p>

          </div>

        </div>


        <div className="border-t border-white/10">

          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-5 text-xs text-slate-500 md:flex-row lg:px-8">

            <p>
              © 2026 Centro Poblado de Santa Cruz - Querecotillo.
              Todos los derechos reservados.
            </p>

            <p>
              Nuestra tierra, nuestra gente, nuestro futuro.
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}