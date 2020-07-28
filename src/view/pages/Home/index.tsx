import React from "react";
import Header from "./Header";

const slides = [
  {
    city: "Paris",
    country: "France",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg",
  },
  {
    city: "Singapore",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg",
  },
  {
    city: "Prague",
    country: "Czech Republic",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg",
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg",
  },
  {
    city: "Moscow",
    country: "Russia",
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
