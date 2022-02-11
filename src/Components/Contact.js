
export default function Contact() {
    return (
            <div className="grid grid-cols-1 mt-20 lg:mt-60">
                
                <section id="contact">
                <div className="text-5xl text-white ">
                Contact
                <div className="text-xl mt-4">
                We are always on the lookout for questions , buisness partnerships and offers regarding Blokfield projects.
                </div>
                </div>
                <div className="grid grid-cols-1 text-white text-xl gap-8 items-center place-items-center p-24">
{/* 
                <div className="grid sm:grid-cols-2 lg:grid-cols-3  contact sm:gap-0 lg:gap-40">
                    
                    <div className="col-span-1  ">
                        <img src="images/tel.png" style={{maxWidth:50}}/>
                    </div>
                    <div className="sm:col-span-1 lg:col-span-2  lg:col-start-2 mt-2 sm:-ml-32 lg:mr-8">
                    +90 532 218 0673
                    </div>
                </div> */}

                <div className="grid sm:grid-cols-2 lg:grid-cols-3  contact sm:gap-0 lg:gap-40 ">
                    
                    <div className="col-span-1  ">
                        <img src="images/mail.png" style={{maxWidth:47}}/>
                    </div>
                    <div className="sm:col-span-1 lg:col-span-2  lg:col-start-2 mt-2 sm:-ml-32 lg:mr-8">
                    contact@blokfield.io
                    </div>
                </div>
{/* 
                <div className="grid sm:grid-cols-2 lg:grid-cols-3  contact  ">
                    
                    <div className="col-span-1  ">
                        <img src="images/location.png" style={{maxWidth:40}}/>
                    </div>
                    <div className="sm:col-span-1 lg:col-span-2  lg:col-start-2 mt-2 sm:-ml-32 lg:-ml-20">
                    Margen Sk. No.1 Da.10 Beyoglu/Istanbul
                    </div>
                </div> */}

                
                </div>
                </section>

            </div>
    ); 
}