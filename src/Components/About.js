export default function About() {
  return (
    <div className="grid grid-cols-1 mt-20  ">
      <section id="about">
      <div className="text-5xl text-white mb-32 mt-12">About Us</div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10 text-2xl text-white text-left place-items-center ">
        <div>
          <img
            src="images/bflogo.svg"
            className="col-span-2 mb-8 place-items-start"
          />
          Blokfield, a company specializing in blockchain technology, is taking the lead in continuous innovation in the fields of DeFi, Game and Reits after a long business preparation period.
          We provide customers with a more efficient crypto asset management service with unprecedented attempts and technologies. 
          We are growing into a company that pursues safe and continuous service trough more  communication and gradual service improvement than any other company.
        </div>

        <div >
          <img src="images/bfmain.png"  className=" sm:hidden lg:block"/>
          
        </div>
      </div>
      </section>
    </div>
  );
}
