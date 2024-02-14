// import Accordian from "./components/accordian";
// import RandomColour from "./components/random-colour";
// import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider/image";

function App() {
  return (
    <div className="App">
      {/* Acordian */}
      {/* <Accordian /> */}

      {/* Random colour */}
      {/* <RandomColour /> */}

      {/* Star Rating */}
      {/* <StarRating noOfStars={10} /> */}

      {/* Image slider */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} />
    </div>
  );
}

export default App;
