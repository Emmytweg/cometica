import Marquee from "react-fast-marquee";
import { IconStarFilled } from "@tabler/icons-react";
import React from "react";

const testimonials = [
  {
    name: "Sophia",
    testimony:
      "Cosmetica is my go-to fashion store! Their collection is always on trend, and the quality is outstanding. Every time I shop here, I feel like I'm indulging in luxury without breaking the bank!",
    rating: 5,
  },
  {
    name: "Emma",
    testimony:
      "The team at Cosmetica truly cares about their customers. They helped me pick the perfect outfit for a special occasion, and I received so many compliments. The experience was amazing from start to finish!",
    rating: 5,
  },
  {
    name: "Olivia",
    testimony:
      "I love that Cosmetica offers the latest fashion trends at reasonable prices. Whether it's a casual outfit or a statement piece, they never disappoint. Plus, their online shopping experience is seamless!",
    rating: 5,
  },
  {
    name: "Rachel",
    testimony:
      "I've shopped at many fashion stores, but Cosmetica stands out for its quality and style. The fabrics feel premium, and the designs are stunning. I always feel confident wearing their pieces!",
    rating: 5,
  },
  {
    name: "Lily",
    testimony:
      "I ordered from Cosmetica online, and my package arrived so quickly! The clothes were beautifully packaged, and everything fit perfectly. I'm definitely coming back for more!",
    rating: 5,
  },
  {
    name: "Isabella",
    testimony:
      "Cosmetica is my little secret for staying fashionable year-round! Their collections are always fresh, and I love how they balance classic elegance with modern trends. Highly recommend!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className=" py-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">THE OPINION OF OUR CUSTOMERS</h1>
        <p className="text-gray-400">OVER 1,000 SATISFIED CUSTOMERS</p>
      </div>

   {/* Marquee */}
        <Marquee pauseOnHover={true} speed={50} className="mt-6">
          {testimonials.map((item, index) => (
       <div
       key={index}
       className=" overflow-hidden w-[300px] h-68 p-6 m-4 rounded-lg border shadow-lg" 
       style={{ borderColor: "rgba(229, 231, 235, 0.1)" }} // Adjust the opacity value
     >
     
            {/* Star Rating */}
            <div className="flex gap-1 items-center mb-2">
              {Array(item.rating)
                .fill()
                .map((_, i) => (
                  <IconStarFilled key={i} size={16} />
                ))}
            {item.rating}
            </div>
            <p className="">{item.testimony}</p>
            <h4 className="mt-4 font-semibold ">- {item.name}</h4>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Testimonials;
