
export default function Projects() {
    return (
            <div className="grid grid-cols-1  mt-20">
                <section id="projects" >
                <div className="text-5xl text-white mt-24 ">
                Projects
                <div className="text-xl mt-4">
                Transforming insights into opportunities that are perfected and personalized to your investing needs across blockchain and Reits markets
                </div>
                </div>
                <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3    place-items-center md:p-24 lg:p-36 gap-6">
                <img className="lg:ml-96  projectsct " src="/images/project1.png"  alt="welcome" />
                <img className="projectsct " src="/images/project2.png"  alt="welcome" />
                <img className="lg:mr-96 projectsct " src="/images/project3.png"   alt="welcome" />
                <img className="lg:ml-96 projectsct" src="/images/project4.png"  alt="welcome" />
                <img className=" projectsct" src="/images/project5.png"  alt="welcome" />
                <img className="lg:mr-96 projectsct" src="/images/project6.png" alt="welcome"  /> 
                <img className="lg:ml-96 projectsct projectsct" src="/images/project7.svg" alt="welcome"  />
                <img className=" projectsct" src="/images/logo.svg" alt="welcome"  />
                </div>
                </section>
            </div>
    ); 
}