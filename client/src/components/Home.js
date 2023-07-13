import Link from 'next/link';

import { getProjects } from '../sanity';

export default async function Home() {

    const projects = await getProjects();

    return (
        <section>
            <div>
                projects:
            </div>
            <ul>
                {/* iterate over fetched project list, rendering a link for each project: */}
                {projects.map((project, index) => {
                    return (
                        <li key={`project-${index}`}>
                            <Link href={project.slug}>
                                {project.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}