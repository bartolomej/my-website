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
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col space-y-4">
            <div className="relative aspect-video w-full max-w-[600px] overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
              {project.isWip && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100 rounded-full">
                    WIP
                  </span>
                </div>
              )}
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
                  <Link
                    href={project.websiteUrl}
                    className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink size={18} />
                  </Link>
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
    </section>
  );
}
