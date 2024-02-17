// import Accordian from "./components/accordian";
// import RandomColour from "./components/random-colour";
// import StarRating from "./components/star-rating";
// import ImageSlider from "./components/image-slider";
import LoadMoreButton from "./components/load-more-button";

function App() {
  return (
    <div>
      {/* Acordian */}
      {/* <Accordian /> */}

      {/* Random colour */}
      {/* <RandomColour /> */}

      {/* Star Rating */}
      {/* <StarRating noOfStars={10} /> */}

      {/* Image slider */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} /> */}

      {/* Load more button - note this and above the number in string, forms part of a url*/}
      <LoadMoreButton url={"https://dummyjson.com/products"} limit={"10"} />
    </div>
  );
}

export default App;
