import {
  AWSIcon,
  CSSIcon,
  ReactIcon,
  TypeScriptIcon,
  GitIcon,
  JavaIcon,
  TailwindIcon,
  ReduxIcon,
  WebpackIcon,
} from "../icons";

export function Engineering() {
  return (
    <>
      <h2 className="text-2xl font-semibold">Engineering</h2>

      <div className="grid md:grid-cols-2">
        <div className="py-6 leading-relaxed">
          <p>
            I’ve worked across a wide range of technical roles, from factory
            work and hardware QA to customer support, electrical engineering,
            and eventually software engineering. Each step required learning new
            systems quickly and adapting to unfamiliar problems, which has
            shaped the way I approach engineering today. My mix of technical
            problem solving ability, communication skills, and conscientiousness
            has helped me succeed across different environments.
          </p>
          <p className="py-4">
            As a software engineer, I have focused on building and improving
            systems for scalability, reliability, and maintainability. My work
            has centered on modern frontend applications and infrastructure,
            particularly within React and TypeScript ecosystems. I have built
            and maintained applications used by thousands of users, such as an
            internal HR tool at Meta Reality Labs, as well as products used by
            hundreds of thousands of users like the AWS Config console. On the
            frontend, I enjoy meticulously simplifying the user experience and
            bug bashing it to build the most robust version possible. On the
            platform side, I strive to enable automation, reduce operational
            burden, and improve the developer experience.
          </p>
          <p>
            My current work spans frontend, platform, and architecture. I have
            experience working with modern frontend frameworks, distributed
            architectures, cloud environments, observability, and CI/CD
            pipelines. This allows me to approach problems with a systems
            mindset rather than focusing on a single layer of the stack. I value
            writing clean, well-structured code and contributing to technical
            direction through design discussions and collaborative problem
            solving.
          </p>
        </div>

        <Skills />
      </div>
    </>
  );
}

const skills = [
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "React", Icon: ReactIcon },
  { name: "Redux", Icon: ReduxIcon },
  { name: "CSS", Icon: CSSIcon },
  { name: "Tailwind", Icon: TailwindIcon },
  { name: "Webpack", Icon: WebpackIcon },
  { name: "Java", Icon: JavaIcon },
  { name: "Git", Icon: GitIcon },
  { name: "AWS", Icon: AWSIcon },
];

function Skills() {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-6">
      {skills.map((skill) => (
        <div key={skill.name} className="group flex flex-col items-center">
          <skill.Icon className="h-32 w-32 text-slate-300 transition group-hover:text-white" />
          <div className="text-sm font-medium text-slate-200">{skill.name}</div>
        </div>
      ))}
    </div>
  );
}
