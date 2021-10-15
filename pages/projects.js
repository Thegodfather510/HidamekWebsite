import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";
import DotItem from "../components/DotItem";

const handleDragStart = (e) => e.preventDefault();
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <Image
    src="/static/images/primages/img1.jpg"
    objectFit="cover"
    width="365"
    height="362"
    onDragStart={handleDragStart}
    className="mx-auto rounded"
  />,
  <Image
    src="/static/images/primages/img2.jpg"
    objectFit="cover"
    height="362"
    width="365"
    onDragStart={handleDragStart}
    className="mx-auto rounded"
  />,
  <Image
    src="/static/images/primages/img3.jpg"
    objectFit="cover"
    height="362"
    width="365"
    onDragStart={handleDragStart}
    className="mx-auto rounded"
  />,
  <Image
    src="/static/images/primages/img4.jpg"
    objectFit="cover"
    height="362"
    width="365"
    onDragStart={handleDragStart}
    className="mx-auto rounded"
  />,
  <Image
    src="/static/images/primages/img5.jpg"
    objectFit="cover"
    height="362"
    width="365"
    onDragStart={handleDragStart}
    className="mx-auto rounded"
  />,
  <Image
    src="/static/images/primages/img6.jpg"
    objectFit="cover"
    height="362"
    width="365"
    onDragStart={handleDragStart}
    className="mx-auto rounded"
  />,
  <Image
    src="/static/images/primages/img7.jpg"
    objectFit="cover"
    height="362"
    width="365"
    onDragStart={handleDragStart}
    className="mx-auto rounded"
  />,
  <Image
    src="/static/images/primages/img8.jpg"
    objectFit="cover"
    height="362"
    width="365"
    onDragStart={handleDragStart}
    className="mx-auto rounded"
  />,
  <Image
    src="/static/images/primages/img9.jpg"
    objectFit="cover"
    height="362"
    width="365"
    onDragStart={handleDragStart}
    className="mx-auto rounded"
  />,
];

const Projects = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="relative z-50">
        <Navbar page="projects" />
      </div>
      <div className="w-full h-auto py-16 bg-gray-100">
        <div className="relative h-2/3 lg:h-4/5">
          <div className="absolute inset-x-0 z-20 w-full text-6xl font-extrabold text-center text-white top-1/4">
            <p className="pt-16 text-7xl">Projects</p>
            <p className="max-w-md pt-4 mx-auto text-lg subpixel-antialiased font-medium text-center">
              Notre société est une entreprise mondiale et nos projets sont
              répartis dans le monde entier, de l'ingénierie et la construction
              de maisons aux centres commerciaux, aux autoroutes et métros.
            </p>
          </div>
          <img
            src="/static/images/projpage/pr1.jpg"
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
        <div className="py-10">
          <h1 className="pt-2 pb-6 text-2xl font-bold text-center lg:pt-9 lg:font-extrabold lg:text-4xl">
            Projects
          </h1>
        </div>
        <div className="w-full bg-gray-100">
          <div className="flex items-center justify-center w-9/12 mx-auto bg-gray-100">
            <AliceCarousel
              mouseTracking
              items={items}
              responsive={responsive}
              renderNextButton={() => true}
              renderPrevButton={() => true}
              renderDotsItem={({ isActive }) => <DotItem isActive={isActive} />}
            />
          </div>
        </div>
        <div className="pt-8 bg-gray-100">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Projects;
