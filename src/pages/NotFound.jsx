import { Carousel } from "../components";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <Carousel />
      {/* <SliderTest/> */}
      <div className="text-9xl text-[#bd6097]">
        404 NOT FOUND
      </div>
    </main>
  );
};

export default NotFound;