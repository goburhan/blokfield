
export default function Members() {
    return (
            <div className="grid grid-cols-1 mt-20">
                <section id="members">
                <div className="text-5xl text-white mt-12">
                Co-Members
               
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-8 sm:p-0 lg:p-48 ">
               <div>
                <img className="sm:mt-12 lg:mt-0" src="/images/member1.png" style={{minWidth:200}} alt="welcome" />
                <div className="text-white mt-6">
                    Bomi Yoon <br/> CEO
                </div>
                </div>
                <div>
                <img className="sm:mt-12 lg:mt-0" src="/images/member2.png" style={{minWidth:200}} alt="welcome" />
                <div className="text-white mt-6">
                    Nia Yoon <br/> Co-Founder
                </div>
                </div>
                <div>
                <img className="" src="/images/member3.png" style={{minWidth:200}} alt="welcome" />
                <div className="text-white mt-6">
                    Pars <br/> Software Developer
                </div>
                </div>
                <div>
                <img className="" src="/images/member4.png" style={{minWidth:200}} alt="welcome" />
                <div className="text-white mt-6">
                    Hyper <br/> Business Manager
                </div>
                </div>
               
                
                
                
                
                </div>
                </section>
            </div>
    ); 
}