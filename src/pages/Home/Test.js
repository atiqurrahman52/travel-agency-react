import { useEffect, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const data = [
  {
    id: 0,
    title: "Tab-1",
    img: "https://static8.depositphotos.com/1329809/808/i/450/depositphotos_8089938-stock-photo-sunny-forest-early-in-the.jpg",
    description:
      "Custom properties not only enable us to make our code more efficient, but allow us to work some real magic with CSS too. One area where they have huge potential is theming. At Atomic Smash we use Tailwind CSS, a utility class framework, for writing our styles. In this article, we’ll look at how custom properties can be used for theming, and how we can integrate them with Tailwind to maximize the reusability of our code. We won’t cover getting up and running with Tailwind — check out the official documentation for that — but even if you’re new to it you might find some of these tips useful.",
  },
  {
    id: 1,
    title: "Tab-2",
    img: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
    description:
      "Now, if we wanted to apply a different color scheme to our component, we would need to override the color values of our original component. Without Tailwind, a common way to do that would be to append a theme class to the component itself, and redefine the color values lower down in the cascade. So for a component with a modifier class of .cta--blue (using the BEM convention) we’ll apply the CSS values for a blue color scheme:",
  },
  {
    id: 2,
    title: "Tab-3",
    img: "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=",
    description:
      "If we’re using Sass or another preprocessor, it’s likely we’ll make life easier for ourselves by using variables for those color names, and we might nest the .cta__heading and .cta__body selectors. It doesn’t exactly make our code more concise, but it does make it more manageable by having a single place to update those values.",
  },
  {
    id: 3,
    title: "Tab-4",
    img: "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?k=20&m=1322277517&s=612x612&w=0&h=ZdxT3aGDGLsOAn3mILBS6FD7ARonKRHe_EKKa-V-Hws=",
    description:
      "Now, suppose we have 10 different color schemes, as was my experience on a recent project. Our code starts to get longer, as we’re basically duplicating the above example 10 times in order to change those color values. Now imagine every component in our design system needs 10 color schemes, and many of those components are far more complex than our simple CTA. Maybe our themes need different fonts too. Suddenly we have a lot of CSS to write.",
  },
];

const Test = () => {
  const [tabActive, setTabActive] = useState(0);
  const [accordionActive, setAccordionActive] = useState(0);
  //   const [tabData, setTabData] = useState(data[tabActive]);

  //   useEffect(() => {
  //     setTabData(data[tabActive]);
  //   }, [tabActive, tabData]);

  return (
    <div className="py-40 container">
      <div className="flex items-center justify-center gap-4">
        {data.map(({ id, title }) => (
          <p
            key={id}
            onClick={() => setTabActive(id)}
            className={`${
              id === tabActive ? "bg-blue-500" : "bg-blue-300"
            } py-1.5 px-4 rounded text-white cursor-pointer`}
          >
            {title}
          </p>
        ))}
      </div>

      {/* solution 1  */}
      {/* <div className="mt-10 border p-4 bg-gray-100">
        <div className="flex gap-4">
          <img src={tabData.img} alt="" className="h-40 w-96" />
          <p className="w-full bg-white p-4">{tabData.description}</p>
        </div>
      </div> */}

      {/* solution 2  */}
      {data.map(({ id, img, description }) => {
        return (
          <>
            {id === tabActive && (
              <div key={id} className="mt-10 border p-4 bg-gray-100">
                <div className="flex gap-4">
                  <img src={img} alt="" className="h-40 w-96" />
                  <p className="w-full bg-white p-4">{description}</p>
                </div>
              </div>
            )}
          </>
        );
      })}

      {/* accordion  */}

      <div className="mt-20 space-y-2">
        {data.map(({ id, title,img,description }) => (
          <div key={id} onClick={() => setAccordionActive(id === accordionActive ? "" : id)}>
            <div
              className={`flex items-center justify-between ${
                id === accordionActive ? "bg-blue-500 rounded-b-none " : "bg-blue-300"
              } py-1.5 px-4 rounded text-white cursor-pointer`}
            >
              <p>{title}</p>
              <RiArrowDownSLine
                className={`${id === accordionActive && "rotate-180"}`}
              />
            </div>
            {id === accordionActive && (
              <div key={id} className="border p-4 bg-gray-100">
                <div className="flex gap-4">
                  <img src={img} alt="" className="h-40 w-96" />
                  <p className="w-full bg-white p-4">{description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
