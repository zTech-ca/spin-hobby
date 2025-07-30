import { ISlide } from "../view/pages/Home/Header";
import { IMerchPreview, IGroupedMerchPreview, ICategory } from "../ts";
import { IHomeData } from "../view/pages/Home";
import { IProductData } from "../view/pages/Product";

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

const featured: IMerchPreview[] = [
  {
    title: process.env.NODE_ENV || "development",
    img: "assets/tumblr_o7z1hvG2c11vvvxguo1_400.jpg",
    price: 50,
    description: `Love Live![a] School Idol Project is a Japanese multimedia project co-developed by ASCII Media Works' Dengeki G's Magazine, music label Lantis, and animation studio Sunrise. The project revolves around a group of nine schoolgirl friends who become idols in order to save their school from shutting down. It launched in the August 2010 issue of Dengeki G's Magazine, and went on to produce music CDs, anime music videos, two manga adaptations, and video games.
    A 13-episode anime television series produced by Sunrise, directed by Takahiko Kyōgoku, and written by Jukki Hanada aired in Japan between January and March 2013, with a second season airing between April and June 2014. Both anime series and film are licensed in North America, the United Kingdom, Australia and New Zealand by NIS America, MVM Entertainment and Madman Entertainment, respectively. An animated film titled Love Live! The School Idol Movie was distributed by Shochiku and released in June 2015. A follow-up project focusing on a new set of idols, titled Love Live! Sunshine!!, launched in 2015.`,
  },
  {
    title: "eli chi",
    img: "https://yt3.ggpht.com/a/aAATXAJwDW0jDsGDf5GYQbN2rTe6aEQmcno4MD-Zkrw=s900-c-k-c0xffffffff-no-rj-mo",
    price: 50,
    description: `This is Eli chi`,
  },
  {
    title: "eli chi",
    img: "https://yt3.ggpht.com/a/AATXAJwDW0jDsGDf5GYQbN2rTe6aEQmcno4MD-Zkrw=s900-c-k-c0xffffffff-no-rj-mo",
    price: 50,
    description: `This is Eli chi`,
  },
  {
    title: "eli chi",
    img: "https://yt3.ggpht.com/a/AATXAJwDW0jDsGDf5GYQbN2rTe6aEQmcno4MD-Zkrw=s900-c-k-c0xffffffff-no-rj-mo",
    price: 50,
    description: `This is Eli chi`,
  },
  {
    title: "eli chi",
    img: "https://yt3.ggpht.com/a/AATXAJwDW0jDsGDf5GYQbN2rTe6aEQmcno4MD-Zkrw=s900-c-k-c0xffffffff-no-rj-mo",
    price: 50,
    description: `This is Eli chi`,
  },
  // {
  //   title: "eli chi",
  //   img: "https://yt3.ggpht.com/a/AATXAJwDW0jDsGDf5GYQbN2rTe6aEQmcno4MD-Zkrw=s900-c-k-c0xffffffff-no-rj-mo",
  //   price: 50,
  //   description: `This is Eli chi`,
  // },
  // {
  //   title: "eli chi",
  //   img: "https://yt3.ggpht.com/a/AATXAJwDW0jDsGDf5GYQbN2rTe6aEQmcno4MD-Zkrw=s900-c-k-c0xffffffff-no-rj-mo",
  //   price: 50,
  //   description: `This is Eli chi`,
  // },
  // {
  //   title: "eli chi",
  //   img: "https://yt3.ggpht.com/a/AATXAJwDW0jDsGDf5GYQbN2rTe6aEQmcno4MD-Zkrw=s900-c-k-c0xffffffff-no-rj-mo",
  //   price: 50,
  //   description: `This is Eli chi`,
  // },
];

const groupedSample: IGroupedMerchPreview = {
  name: "Group 1",
  merchs: [...featured, ...featured],
};

const merchs: IGroupedMerchPreview[] = [
  { ...groupedSample, subGroups: [groupedSample] },
  groupedSample,
  groupedSample,
];

const categories: ICategory[] = [
  {
    name: "a category 1 some long name",
    img: "https://yt3.ggpht.com/a/AATXAJwDW0jDsGDf5GYQbN2rTe6aEQmcno4MD-Zkrw=s900-c-k-c0xffffffff-no-rj-mo",
  },
  {
    name: "a category 1",
    img: "https://yt3.ggpht.com/a/AATXAJwDW0jDsGDf5GYQbN2rTe6aEQmcno4MD-Zkrw=s900-c-k-c0xffffffff-no-rj-mo",
  },
  {
    name: "a category 1",
    img: "https://yt3.ggpht.com/a/AATXAJwDW0jDsGDf5GYQbN2rTe6aEQmcno4MD-Zkrw=s900-c-k-c0xffffffff-no-rj-mo",
  },
  {
    name: "a category 1",
    img: "https://yt3.ggpht.com/a/AATXAJwDW0jDsGDf5GYQbN2rTe6aEQmcno4MD-Zkrw=s900-c-k-c0xffffffff-no-rj-mo",
  },
  {
    name: "a category 1",
    img: "https://yt3.ggpht.com/a/AATXAJwDW0jDsGDf5GYQbN2rTe6aEQmcno4MD-Zkrw=s900-c-k-c0xffffffff-no-rj-mo",
  },
  {
    name: "a category 1",
    img: "https://yt3.ggpht.com/a/AATXAJwDW0jDsGDf5GYQbN2rTe6aEQmcno4MD-Zkrw=s900-c-k-c0xffffffff-no-rj-mo",
  },
  {
    name: "a category 1",
    img: "https://yt3.ggpht.com/a/AATXAJwDW0jDsGDf5GYQbN2rTe6aEQmcno4MD-Zkrw=s900-c-k-c0xffffffff-no-rj-mo",
  },
];

export const homeData: IHomeData = {
  header: slides,
  featured,
  merchs,
  categories,
};

export const productData: IProductData = {};
