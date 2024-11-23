// app/edits/[projectId]/page.js

import React from 'react';

// Mock function to simulate fetching project data
async function getProjectData(projectId) {
    const projects = [
        { id: 'project1', title: 'Project One', description: 'Details of Project One' },
        { id: 'project2', title: 'Project Two', description: 'Details of Project Two' },
    ];
    return projects.find((project) => project.id === projectId);
}

export default async function ProjectPage({ params }) {
    const { projectId } = await params; // Extract the projectId from URL params
    const project = await getProjectData(projectId);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
        </div>
    );
}