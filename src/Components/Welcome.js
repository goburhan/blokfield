
export default function Welcome() {
    return (
        <div>
            <div className="grid grid-cols-2 mt-20">
                <div className="grid grid-cols-1 text-white text-6xl mb-8 text-left place-content-center  gap-4">
                Welcome to our company. Are you ready for new world? 
                    <div className="text-white text-xl mb-8 text-left " >
                        
                    Several components of metaverse technologies have already been developed modern internet-enabled video games.
                </div>
                </div>
                
                <img src="/images/welcome.png" alt="welcome" />
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