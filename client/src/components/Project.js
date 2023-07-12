import { getProject } from '../sanity';

export default async function Project({ slug }) {
    
    const project = await getProject(slug);
    console.log(project);
    
    return (
        <div>
            {slug}
        </div>
    )
}