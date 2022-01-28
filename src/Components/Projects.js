
export default function Projects() {
    return (
            <div className="grid grid-cols-1 mt-20">
                <div className="text-5xl text-white ">
                Projects
                <div className="text-xl mt-4">
                Several components of metaverse technologies have already been developed modern internet-enabled video games.
                </div>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3    place-items-center p-12 gap-4">
                <img className="lg:ml-96  projectsct " src="/images/project1.png" style={{maxWidth:250}} alt="welcome" />
                <img className="projectsct " src="/images/project2.png" style={{maxWidth:250}} alt="welcome" />
                <img className="lg:mr-96 projectsct " src="/images/project3.png"  style={{maxWidth:250}}  alt="welcome" />
                <img className="lg:ml-96 projectsct" src="/images/project4.png" style={{maxWidth:250}} alt="welcome" />
                <img className=" projectsct" src="/images/project5.png" style={{maxWidth:250}} alt="welcome" />
                <img className="lg:mr-96 projectsct" src="/images/project6.png" style={{maxWidth:250}} alt="welcome"  />
                </div>

            </div>
    ); 
}