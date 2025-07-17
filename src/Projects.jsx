import React from 'react';

const emptyProjects = [];

const Project = () => {
  return (
    <div className="projects-page">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Development Projects</h1>
        <p className="text-gray-600 mb-8">
          Hon. Jerusa Shikuku Aleu has initiated and supported numerous development projects across Milima Ward 
          through CDF allocations and personal initiatives. Below is a comprehensive list of completed and ongoing projects.
        </p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Education Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project cards will be added here in the future */}
            <div className="text-gray-500 italic">No projects to display yet.</div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Healthcare Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project cards will be added here in the future */}
            <div className="text-gray-500 italic">No projects to display yet.</div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Infrastructure Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project cards will be added here in the future */}
            <div className="text-gray-500 italic">No projects to display yet.</div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Agriculture Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project cards will be added here in the future */}
            <div className="text-gray-500 italic">No projects to display yet.</div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Sports and Recreation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project cards will be added here in the future */}
            <div className="text-gray-500 italic">No projects to display yet.</div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Social Support Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project cards will be added here in the future */}
            <div className="text-gray-500 italic">No projects to display yet.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;