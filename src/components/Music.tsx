export function Music() {
  return (
    <div className="grid md:grid-cols-2">
      <div>
        <h2 className="text-2xl font-semibold text-white">Music</h2>

        <p className="py-8 pr-12 leading-relaxed text-lg">
          I've been a musician for most of my life and enjoy most genres of
          music. I love to sit down with FL Studio and tinker with mixing and
          music production. Here is the Synthwave project that my friend and I
          started during the Covid pandemic. Hope you enjoy 👽
        </p>
      </div>

      <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/artist/4hQYGEJn5WtC4YSl6Ey4zv?utm_source=generator&theme=0"
        width="100%"
        height="750px"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
