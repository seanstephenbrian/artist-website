import Project from '../../../components/Project';

export default function ProjectPage({ params }) {
    return <Project slug={params.slug} />;
}