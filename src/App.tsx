import {
  NavBar,
  Section,
  About,
  Engineering,
  Music,
  Contact,
} from "./components";

function App() {
  return (
    <div className="space-shell min-h-screen text-slate-100 px-4 pb-8 md:px-32 md:pb-12">
      <NavBar />

      <main className="flex flex-1 flex-col gap-16">
        <Section id="home">
          <About />
        </Section>
        <Section id="engineering">
          <Engineering />
        </Section>
        <Section id="music">
          <Music />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </main>
    </div>
  );
}

export default App;
