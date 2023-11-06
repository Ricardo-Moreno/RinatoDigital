import MenImage from "../../assets/images/men.png";
import WomenImage from "../../assets/images/women.png";

const Header = () => {
  return (
    <div className="flex items-center justify-evenly ">
      <div className="p-0 m-0 flex items-center justify-evenly w-full">
        <img
          src={MenImage}
          className="h-120 w-auto mt-32 px2-0 ml-4"
          alt="Imagen Hombre"
        />
        <div className="flex flex-col items-center justify-evenly w-full m-0">
          <h1 className="text-center text-10xl p-0 m-0 text-purple-900">
            CREAMOS TU MARCA
          </h1>
          <h2 className="text-center text-10xl p-0 m-0 text-purple-900">
            DISEÑAMOS TU PÁGINA WEB
          </h2>
        </div>
        <img
          src={WomenImage}
          className="h-120 w-auto mt-32 px-2 m-0"
          alt="Imagen Mujer"
        />
      </div>
    </div>
  );
};

export default Header;
