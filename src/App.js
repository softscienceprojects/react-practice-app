// import Accordian from "./components/accordian";
// import RandomColour from "./components/random-colour";
// import StarRating from "./components/star-rating";
// import ImageSlider from "./components/image-slider";
// import LoadMoreButton from "./components/load-more-button";
// import TreeView from "./components/tree-view";
// import { SideMenu as menus } from "./components/tree-view/data";
// import QRCodeGenerator from "./components/qr-code";
// import LightDarkMode from "./components/light-dark-mode";
// import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";

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
      {/* <LoadMoreButton url={"https://dummyjson.com/products"} limit={"10"} /> */}

      {/* Menu Tree View - 'recursive navigation menu' */}
      {/* <TreeView menus={menus} />*/}

      {/* QR Code Generator */}
      {/* <QRCodeGenerator /> */}

      {/* Theme switcher */}
      {/* <LightDarkMode /> */}

      {/* Scroll indicator */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* Custom tabs */}
      <TabTest />
    </div>
  );
}

export default App;
