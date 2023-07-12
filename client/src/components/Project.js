import { getProject, urlFor } from '../sanity';

export default async function Project({ slug }) {
    
    const project = await getProject(slug);
    const projectImages = project[0].images;

    if (projectImages.length > 0) {
        return (
            <div>
                {projectImages.map((image, index) => {
                    return (
                        <img
                            src={urlFor(image).width(300).url()}
                            alt=''
                            key={'image-' + index}
                        />
                    )
                })
                }
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