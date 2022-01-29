
export default function SocialMedia() {
    return (
            <div className="grid grid-cols-1 mt-20">
                <div className="text-5xl text-white ">
                Social Media
                
                </div>
                <div className="grid sm:gap-2 sm:mr-6 sm:grid-cols-5 lg:grid-cols-11  items-center place-items-center mt-12 mb-24 ">
                <div className="lg:block sm:hidden"></div>
                <div className="lg:block sm:hidden"></div>
                <div className="lg:block sm:hidden"></div>

                <img className="" src="/images/instagram.png" alt="welcome" style={{maxWidth:70 }} />
                <img className="" src="/images/facebook.png" alt="welcome" style={{maxWidth:70}}/>
                <img className="" src="/images/twitter.png" alt="welcome" style={{maxWidth:70}}/>
                <img className="" src="/images/youtube.png" alt="welcome" style={{maxWidth:70}}/>
                <img className="" src="/images/linkedin.png" alt="welcome" style={{maxWidth:70}}/>
               
                </div>
            </div>
    ); 
}