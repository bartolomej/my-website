import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a software engineer and founder with 6+ years of experience
          designing and shipping full-stack products, developer tools,
          blockchain systems and AI applications.
        </p>
        <p>
          I'm currently focused on building and advising ventures at the
          intersection of AI and blockchain technologies, helping
          shape products and technical foundations that push the next generation
          of internet applications and infrastructure forward.
        </p>
        <p>
          Outside of work, I enjoy traveling & photography, meeting new people, and diving into interesting books and conversations.
        </p>
      </div>
    </section>
  );
}
