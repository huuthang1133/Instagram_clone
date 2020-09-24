import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src:
      "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
    key: "1"
  },
  {
    src:
      "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg",
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
    key: "2"
  },
  {
    src:
      "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
    key: "3"
  },
  {
    src:
      "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
    altText: "Slide 4",
    caption: "Slide 4",
    header: "Slide 4 Header",
    key: "4"
  }
];

export default function Carousel() {
  return (
    <UncontrolledCarousel items={items} controls={false} indicators={false} />
  );
}
