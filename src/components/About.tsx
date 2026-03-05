import mattPhoto from "../assets/profilepic.jpg";

export function About() {
  return (
    <div id="home" className="flex flex-col justify-evenly md:flex-row gap-6">
      <div className="flex items-center justify-center md:shrink-0">
        <div className="h-90 w-90 rounded-full bg-linear-to-br from-indigo-400/60 via-slate-500/30 to-slate-900/80 p-1">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_25%,#a5b4fc_0%,#6b9be0_40%,#1f2937_80%)]">
            <div className="flex h-85 w-85 items-center justify-center rounded-full bg-[#1f2430] text-4xl font-semibold text-cyan-100 shadow-inner">
              <img
                src={mattPhoto}
                alt="Matt Wawiorka"
                className="block h-full w-full rounded-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6 text-center md:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
          Hi, I am
        </p>
        <h1 className="typing text-4xl font-semibold tracking-tight text-cyan-200 sm:text-5xl lg:text-6xl">
          Matt Wawiorka
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-slate-300">
          Welcome to my website. I am a passionate software engineer and
          lifelong learner. I studied physics and electrical engineering in
          college and discovered a love for computer science along the way. I
          moved to Seattle to pursue a career in software in 2019 and built an
          app to learn React. That landed me a job at Meta Reality Labs making
          apps for the virtual reality researchers. Since then I've become a
          fullstack engineer and have done a good deal of devops along the way.
          Outside of engineering, I love to play music. I've been a musician
          since I was in 5th grade and taking piano lessons. Guitar and piano
          are my main instruments and I use Fruity Loops for music production. I
          play with a funk band, produce synthwave with my friend, and try to
          write slowcore songs on my own time. Thanks for stopping by!
        </p>
        <div className="mt-12">
          <a
            href="/resume.pdf"
            target="_blank"
            className="text-lg rounded-full border border-white/20 px-6 py-4  font-semibold text-slate-100 transition hover:border-cyan-200 hover:text-cyan-200"
          >
            Open Resume
          </a>
        </div>
      </div>
    </div>
  );
}
