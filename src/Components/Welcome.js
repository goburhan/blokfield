
export default function Welcome() {
    return (
        <div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 ">
                <div className="md:hidden sm:block try sm:mt-36  sm:mb-12">
                    <img src="images/Group 243.svg" />
                </div>
                <div className="grid grid-cols-1 text-white lg:text-6xl  md:mt-36 sm:text-3xl mb-8 text-left place-content-center  gap-4">
                Blokfield 
                The Next Generation Wealth Management
                    <div className="text-white text-xl  text-left " >
                        
                   Our clients always come first. We serve them trough a global network powered by partnership , integrity , and a shared purpose of advancing sustainable financial growth and opportunity. 
                </div>
                </div>
                
                <img src="/images/welcome.png" alt="welcome" className=" sm:hidden lg:block"/>
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