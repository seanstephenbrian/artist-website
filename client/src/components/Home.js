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
                {projects.map((project) => {
                    return (
                        <li>
                            <Link href={`projects/` + project.slug}>
                                {project.title}
                            </ Link>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}