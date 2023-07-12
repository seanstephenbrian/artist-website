import { getProjects } from '../sanity';

export default function Home() {
    const projects = getProjects();
    
    return (
        <section>
            <div>
                projects:
            </div>
            <div>

            </div>
        </section>
    )
}