import React from "react";
import Layout from "../layout/Layout";
import Testimonial from "../elements/Testimonial";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Poster from "../components/Poster";
import QuoteBlock from "../components/QuoteBlock";

const testimonialData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&w=1000&q=80",
    quote:
      "I love the Marvel Cinematic Universe! The characters are all so well developed and the stories are really engaging. I'm a huge fan!",
    name: "Sarah H.",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/891010944/photo/pensive-stylish-businessman-is-making-important-task.jpg?b=1&s=170667a&w=0&k=20&c=JgfbybapZLYgK11b0iCO33uuOqZDBTdUoC00MIatc5A=",
    quote:
      "The special effects in these movies are absolutely amazing. They really bring the comic book characters to life in a way I never thought possible!",
    name: "Mike W.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    quote:
      "Marvel movies are the perfect blend of action, humor, and heart. I always leave the theater feeling entertained and inspired!",
    name: "Alexis F.",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

export default function Testimonials() {
  return (
    <>
      <Layout>
        <div className="relative pb-32 overflow-hidden">
          <Poster
            image="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            title="Helping our customers"
            description="We provide the latest information and personalized guidance to
                  our viewers. Whether answering simple questions or analyzing
                  complex topics, we're here to help. We also offer
                  recommendations to navigate interests and passions, such as
                  suggesting Marvel comics, movies, and TV shows. Our ultimate
                  goal is to provide a valuable service and help viewers achieve
                  their aspirations. We take pride in making a positive impact in
                  the world by helping people learn and grow."
          />

          <div className="relative">
            <QuoteBlock
              quote="I truly believe that Marvel's success is due to
                        our passionate fans and talented creators who continue
                        to push the boundaries of storytelling. It's an honor to
                        be a part of such an iconic and beloved brand."
              image="https://variety.com/wp-content/uploads/2019/04/kevin-feige-marvel-studios-variety-cover-story.jpg"
              name="Kevin Feige"
              status="President of Marvel Studios"
            />

            <div className="lg:mx-auto lg:max-w-7xl">
              <Slider {...settings}>
                {testimonialData.map((testimonial) => (
                  <Testimonial key={testimonial.id} {...testimonial} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
