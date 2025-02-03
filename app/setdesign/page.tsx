import React from 'react'
import Link from 'next/link';
import SecondaryHero from '../components/SecondaryHero';

function SetDesignPage() {
    const projects = [
        { id: 'project1', title: 'Project One', description: 'A cool project about X' },
        { id: 'project2', title: 'Project Two', description: 'Another project about Y' },
    ];
    return (
        <div>
            <SecondaryHero imageUrl='/hero/pd-hero.jpg'/>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <Link href={`/setdesign/${project.id}`}>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SetDesignPage