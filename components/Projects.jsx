import React from 'react'
import { ProjectItemsProps } from '../props/ProjectItemsProps'
import tawiImage from '../public/assets/images/tawi-dashboard.svg'

export const Projects = () => {
  return (
    <div id="projects" className='w-full'>
        <div className="max-w-[1240px] mx-auto px-2 py-16">
            <p className='capitalize text-xl tracking-widest text-[#86594c] font-bold'>Blogs</p>
            <h2 className='py-4'>Give a read... 📑</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
                <ProjectItemsProps 
                    title="Tawi Health Platform"
                    backgroundImage={tawiImage}
                    projectURL= "/projects/tawihealth"
                    stack="React"
                />
                <ProjectItemsProps 
                    title="e-Learning"
                    backgroundImage={tawiImage}
                    projectURL= "/projects/elearning"
                    stack="React"
                />
                <ProjectItemsProps 
                    title="Admin Dashboard"
                    backgroundImage={tawiImage}
                    projectURL= "/projects/admin-dashboard"
                    stack="PHP"
                />
                <ProjectItemsProps 
                    title="Cendalyne"
                    backgroundImage={tawiImage}
                    projectURL= "/projects/cendalyne"
                    stack="React,Laravel"
                />
            </div>
        </div>
    </div>
  )
}
