import nissan from "../../src/assets/nissan.png";
import suzuki from "../../src/assets/suzuki.png";
import mitsu from "../../src/assets/mitsubishi.png";
import mazda from "../../src/assets/mazda.png";
import honda from "../../src/assets/honicon.png";
import toyota from "../../src/assets/toyoicon.png";
import isuzu from "../../src/assets/isu.png";
import daihatsu from "../../src/assets/dai.png";
import byd from "../../src/assets/byd.png";

const LogoAnimation = () => {
  const travelImages = [
      { id: 1, icon: toyota, alt: "Toyota" },
      { id: 2, icon: honda, alt: "Honda" },
      { id: 3, icon: nissan, alt: "Nissan" },
      { id: 5, icon: suzuki, alt: "Suzuki" },
      { id: 6, icon: mitsu, alt: "Mitsubishi" },
      { id: 7, icon: mazda, alt: "Mazda" },
      { id: 8, icon: daihatsu, alt: "Daihatsu" },
      { id: 9, icon: isuzu, alt: "Isuzu" },
      { id: 10, icon: byd, alt: "BYD" },

    ];
  return (
    <section className="p-6 bg-gray-100 font-sans overflow-hidden mb-4">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-red-500">
        Our Company Supported By 
      </h2>
      <div className="relative w-full h-48 overflow-hidden">
        <div className="absolute top-0 left-0 flex space-x-4 animate-scroll">
           
          {[...travelImages, ...travelImages].map((image, index) => (
            <div
            key={`${image.id}-${index}`}
            className="relative w-64 h-48 flex flex-col justify-center items-center bg-white rounded-lg shadow-md"
          >
            <img
              src={image.icon}
              alt={image.alt}
              className="w-24 h-24 object-contain mb-2"
            />
            <p className="text-center font-medium text-gray-800">{image.alt}</p>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoAnimation;

