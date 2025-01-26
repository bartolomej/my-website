import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
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
          Senior Software Engineer with 5+ years of experience building full-stack projects, developer tools and blockchain applications, specializing in JavaScript and Golang ecosystem.
        </p>
        <p>
          I'm passionate about blockchains, developer tools and distributed systems.
        </p>
        <p>
          In my free time I like to travel, drive cars, meet people, take cool pictures and more.
        </p>
      </div>
    </section>
  );
}
