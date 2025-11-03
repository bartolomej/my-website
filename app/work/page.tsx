import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { projects } from "./project-data";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Projects",
  description: "Bart's Projects",
};

export default async function Projects() {
  const featured = projects.filter((project) => project.isFeatured);
  const other = projects.filter((project) => !project.isFeatured);

  return (
    <section>
      <div className="grid gap-8 md:grid-cols-2">
        {featured.map((project) => (
          <div key={project.id} className="flex flex-col space-y-4">
            <div className="relative aspect-video w-full max-w-[600px] overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
              <Image
                src={`/screenshots/${project.id}.png`}
                alt={`Screenshot of ${project.title}`}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 400px, 100vw"
                quality={85}
                priority={false}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-medium text-black dark:text-white">
                  {project.title}
                </h2>
                <div className="flex gap-2">
                  {project.websiteUrl && (
                    <Link
                      href={project.websiteUrl}
                      className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink size={18} />
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub size={18} />
                    </Link>
                  )}
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 tracking-tight">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {other.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-6 text-lg font-medium tracking-tight text-neutral-600 dark:text-neutral-400">
            Other Projects
          </h2>
          <ul className="space-y-4">
            {other.map((project) => (
              <li key={project.id}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-medium text-neutral-700 dark:text-neutral-300">
                        {project.title}
                      </h3>
                      {project.websiteUrl && (
                        <Link
                          href={project.websiteUrl}
                          className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiExternalLink size={16} />
                        </Link>
                      )}
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiGithub size={16} />
                        </Link>
                      )}
                    </div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">
                      {project.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
