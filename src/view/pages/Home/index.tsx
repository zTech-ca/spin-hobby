import React from "react";
import Header, { ISlide } from "./Header";

const slides: ISlide[] = [
  {
    headline: "Paris",
    subheading: "France",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg",
  },
  {
    headline: "Singapore",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg",
  },
  {
    headline: "Prague",
    subheading: "Czech Republic",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg",
  },
  {
    headline: "Amsterdam",
    subheading: "Netherlands",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg",
  },
  {
    headline: "Moscow",
    subheading: "Russia",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg",
  },
];

export default function Home() {
  // Request api for homepage
  return (
    <>
      <Header slides={slides} />
    </>
  );
}
