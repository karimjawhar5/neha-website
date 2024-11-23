import React from 'react'
import Link from 'next/link';

function FilmsPage() {
    const projects = [
        { id: 'project1', title: 'Project One', description: 'A cool project about X' },
        { id: 'project2', title: 'Project Two', description: 'Another project about Y' },
    ];
    return (
        <div>
            <h1>All Edits</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <Link href={`/films/${project.id}`}>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilmsPage