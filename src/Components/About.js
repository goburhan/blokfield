export default function About() {
  return (
    <div className="grid grid-cols-1 mt-20  ">
      <div className="text-5xl text-white mb-32 ">About Us</div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10 text-2xl text-white text-left place-items-center ">
        <div>
          <img
            src="images/blokfieldlogo.png"
            className="col-span-2 place-items-start"
          />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          aliquam lacus tristique, porta urna et, venenatis odio. Nam
          scelerisque finibus urna sed elementum. Donec scelerisque luctus diam,
          quis condimentum elit maximus vel. Maecenas aliquam odio aliquet,
          consequat magna tempor, pulvinar nunc. Vestibulum elementum, leo in
          posuere laoreet, elit lacus vehicula metus, eget dignissim lacus
          tellus vitae arcu. Duis fermentum, ipsum non aliquam venenatis, dui
          risus mattis erat, quis eleifend diam purus nec mi. Vestibulum
          imperdiet lobortis placerat. Donec congue dolor non semper
          condimentum. Maecenas luctus libero et arcu fringilla fringilla.
          Curabitur nibh sapien, pharetra vel leo eu, vehicula cursus massa.
          Praesent in tincidunt purus.
        </div>

        <div >
          <img src="images/about.png"  className=" sm:hidden lg:block"/>
          
        </div>
      </div>
    </div>
  );
}
