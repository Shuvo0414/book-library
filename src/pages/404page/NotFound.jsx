import bg404 from "../../assets/bg-404.jpg";

const NotFound = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${bg404})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };
  return (
    <div className="text-center" style={backgroundImageStyle}>
      <h1 className="text-[400px] font-bold text-[#1A1E4A]">404</h1>

      <h2 className="text-5xl font-bold  text-[#1A1E4A]">
        This is not the web page you are looking for.
      </h2>
    </div>
  );
};

export default NotFound;
