
export default function Welcome() {
    return (
        <div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 ">
                <div className="md:hidden sm:block try sm:mt-36  sm:mb-12">
                    <img src="images/Group 243.svg" />
                </div>
                <div className="grid grid-cols-1 text-white lg:text-6xl sm:text-3xl mb-8 text-left place-content-center  gap-4">
                Welcome to our company. Are you ready for new world? 
                    <div className="text-white text-xl  text-left " >
                        
                    Several components of metaverse technologies have already been developed modern internet-enabled video games.
                </div>
                </div>
                
                <img src="/images/welcome.png" alt="welcome" className=" sm:hidden md:block"/>
            </div>
          
            <button
                  type="button"
                  className=" btn  text-white px-4 "
                  
                >
                  <div>Read About Us</div>
                </button>
        </div>
    ); 
}