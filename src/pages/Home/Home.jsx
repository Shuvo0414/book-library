import BookCategory from "../../components/ BookCategory / BookCategory ";
import Banner from "../../components/Banner/Banner";
import OurServices from "../../components/OurServices/OurServices";
import ReadersSay from "../../components/ReadersSay/ReadersSay";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurServices></OurServices>
      <BookCategory></BookCategory>
      <ReadersSay></ReadersSay>
    </div>
  );
};

export default Home;
