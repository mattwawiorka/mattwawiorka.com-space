const contacts = [
  {
    label: "Email",
    url: "mailto:mattwawiorka+website@gmail.com",
    value: "mattwawiorka@gmail.com",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/matt-wawiorka/",
    value: "matt-wawiorka",
  },
  {
    label: "GitHub",
    url: "https://github.com/mattwawiorka",
    value: "mattwawiorka",
  },
];

export function Contact() {
  return (
    <div id="contact" className="space-y-8 pb-4">
      <h2 className="text-2xl font-semibold text-white">Contact</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {contacts.map((contact) => {
          const shouldOpenNewTab = contact.url.startsWith("http");

          return (
            <div
              key={contact.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
            >
              <p className="text-md uppercase tracking-[0.28em] text-slate-400">
                {contact.label}
              </p>
              <a
                href={contact.url}
                className="text-lg"
                {...(shouldOpenNewTab
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {contact.value}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
