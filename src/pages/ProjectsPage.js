import React from 'react';
import { motion } from 'framer-motion';
import './ProjectsPage.css';

const projectsData = [
  { id: 'proj-1', title: 'The Zenith Tower', category: 'Commercial', imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop' },
  { id: 'proj-2', title: 'Orion Data Center', category: 'Technology', imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop' },
  { id: 'proj-3', title: 'Helios Residential', category: 'Residential', imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop' },
  { id: 'proj-4', title: 'Nova Research Lab', category: 'Institutional', imageUrl: 'https://images.unsplash.com/photo-1579165466949-3180a3d056d5?q=80&w=1974&auto=format&fit=crop' },
  { id: 'proj-5', title: 'Aetherium Complex', category: 'Mixed-Use', imageUrl: 'https://images.unsplash.com/photo-1519922639102-a74cf2ab3864?q=80&w=1974&auto=format&fit=crop' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 15,
    },
  },
};

const ProjectsPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={{ initial: { opacity: 0 }, in: { opacity: 1 }, out: { opacity: 0 } }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="projects-page-wrapper">
        <motion.h1
          className="projects-page-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Featured Projects
        </motion.h1>
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projectsData.map(project => (
            <motion.div key={project.id} className={`project-item ${project.id}`} variants={itemVariants}>
              <div className="project-image" style={{ backgroundImage: `url(${project.imageUrl})` }} />
              <div className="project-overlay">
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                  <span className="project-arrow">&rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
