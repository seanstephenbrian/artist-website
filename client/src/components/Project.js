import { getProject } from '../sanity';

import ImageDisplay from './ImageDisplay';

import styles from '../styles/project.module.scss';

export default async function Project({ slug }) {
    
    // retrieve single project from passed slug:
    const project = await getProject(slug);
    const projectImages = project[0].images;

    if (projectImages && projectImages.length > 0) {
        return (
            <div className={styles.project}>
                <ImageDisplay images={projectImages} />
            </div>
        )
    } else {
        return (
            <div>
                no images to display
            </div>
        )
    }
}