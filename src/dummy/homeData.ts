import { ISlide } from "../view/pages/Home/Header";
import {
  IMerchPreview,
  IGroupedMerchPreview,
  ICategory,
  IAnimeSeries,
} from "../ts";
import { IHomeData } from "../view/pages/Home";

// Header slides for the home page carousel
const slides: ISlide[] = [
  {
    headline: "New Hololive Figures",
    subheading: "Limited Edition Collection",
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    headline: "Genshin Impact",
    subheading: "Premium Scale Figures",
    img: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    headline: "Demon Slayer",
    subheading: "Collectible Merchandise",
    img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
  },
  {
    headline: "Attack on Titan",
    subheading: "Final Season Collection",
    img: "https://images.unsplash.com/photo-1606115915090-be18fea23ec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80",
  },
  {
    headline: "Studio Ghibli",
    subheading: "Classic Collection",
    img: "https://images.unsplash.com/photo-1578632749014-ca4762ec6567?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
];

// Featured merchandise with high-quality anime figures and collectibles
const featured: IMerchPreview[] = [
  {
    title: "Miku Hatsune Racing Ver. 1/7 Scale Figure",
    img: "https://images.goodsmile.info/cgm/images/product/20210325/11035/85445/large/6925b1b9d5e61d0ba0d1c5f5797d6b21.jpg",
    price: 189.99,
    description:
      "Premium 1/7 scale figure of Hatsune Miku in her iconic racing outfit. Manufactured by Good Smile Company with incredible attention to detail.",
    series: "Vocaloid",
    character: "Hatsune Miku",
    productType: "Figure",
    manufacturer: "Good Smile Company",
    scale: "1/7",
    material: "PVC, ABS",
    preorder: false,
    tags: ["popular", "premium"],
  },
  {
    title: "Nezuko Kamado Sleeping Ver. Figure",
    img: "https://images.goodsmile.info/cgm/images/product/20210826/11506/87893/large/b8c8e4b9c82c5d5f1e8b7c4f8a8d5e2a.jpg",
    price: 159.99,
    description:
      "Adorable sleeping version of Nezuko Kamado from Demon Slayer. Perfect for any anime collection.",
    series: "Demon Slayer",
    character: "Nezuko Kamado",
    productType: "Figure",
    manufacturer: "Aniplex+",
    scale: "1/8",
    material: "PVC",
    preorder: false,
    tags: ["new", "popular"],
  },
  {
    title: "Ganyu Qingxin Ver. 1/7 Scale Figure",
    img: "https://images.goodsmile.info/cgm/images/product/20220222/12169/94673/large/e5a8f3c2d6b4f7e1a9c8b5d2f4e6a7b3.jpg",
    price: 249.99,
    description:
      "Stunning Ganyu figure from Genshin Impact, featuring her elegant Qingxin flower theme.",
    series: "Genshin Impact",
    character: "Ganyu",
    productType: "Figure",
    manufacturer: "miHoYo",
    scale: "1/7",
    material: "PVC, ABS",
    preorder: true,
    exclusive: true,
    tags: ["limited", "premium", "preorder"],
  },
  {
    title: "Totoro Plushie - Large Size",
    img: "https://m.media-amazon.com/images/I/71KLcaB5URL._AC_SL1500_.jpg",
    price: 45.99,
    description:
      "Soft and cuddly large Totoro plushie from Studio Ghibli's My Neighbor Totoro.",
    series: "Studio Ghibli",
    character: "Totoro",
    productType: "Plushie",
    manufacturer: "Studio Ghibli",
    material: "Cotton, Polyester",
    preorder: false,
    tags: ["classic", "soft"],
  },
  {
    title: "Levi Ackerman Nendoroid",
    img: "https://images.goodsmile.info/cgm/images/product/20200521/9748/75324/large/c8f5e9a2b6d4f8e1a7c3b9d5f2e8a4b6.jpg",
    price: 65.99,
    description:
      "Captain Levi Nendoroid from Attack on Titan with multiple face plates and accessories.",
    series: "Attack on Titan",
    character: "Levi Ackerman",
    productType: "Nendoroid",
    manufacturer: "Good Smile Company",
    material: "ABS, PVC",
    preorder: false,
    tags: ["articulated", "popular"],
  },
  {
    title: "Rem & Ram Twin Pack Figures",
    img: "https://images.goodsmile.info/cgm/images/product/20210616/11236/83672/large/f4e7a8b2c5d9f1e3a6b8c4d7f2e5a9b3.jpg",
    price: 299.99,
    description:
      "Beautiful twin pack featuring Rem and Ram from Re:Zero in matching outfits.",
    series: "Re:Zero",
    character: "Rem & Ram",
    productType: "Figure",
    manufacturer: "Kadokawa",
    scale: "1/7",
    material: "PVC, ABS",
    preorder: false,
    exclusive: true,
    tags: ["twin-pack", "premium", "limited"],
  },
];

// Anime series data
const animeSeries: IAnimeSeries[] = [
  {
    id: "demon-slayer",
    name: "Demon Slayer",
    englishName: "Demon Slayer: Kimetsu no Yaiba",
    japanName: "鬼滅の刃",
    img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "A young boy becomes a demon slayer to save his sister and avenge his family.",
    studio: "Ufotable",
    year: 2019,
    status: "ongoing",
    genres: ["action", "supernatural", "historical"],
    popularity: 95,
  },
  {
    id: "attack-on-titan",
    name: "Attack on Titan",
    englishName: "Attack on Titan",
    japanName: "進撃の巨人",
    img: "https://images.unsplash.com/photo-1606115915090-be18fea23ec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Humanity fights for survival against giant humanoid Titans.",
    studio: "Mappa",
    year: 2013,
    status: "completed",
    genres: ["action", "drama", "fantasy"],
    popularity: 92,
  },
  {
    id: "genshin-impact",
    name: "Genshin Impact",
    englishName: "Genshin Impact",
    japanName: "原神",
    img: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "An action RPG game featuring an anime-style open world.",
    studio: "miHoYo",
    year: 2020,
    status: "ongoing",
    genres: ["adventure", "fantasy", "action"],
    popularity: 88,
  },
];

// Categories for browsing
const categories: ICategory[] = [
  {
    name: "Scale Figures",
    img: "https://images.goodsmile.info/cgm/images/product/20210325/11035/85445/large/6925b1b9d5e61d0ba0d1c5f5797d6b21.jpg",
    productCount: 150,
    featured: true,
  },
  {
    name: "Nendoroids",
    img: "https://images.goodsmile.info/cgm/images/product/20200521/9748/75324/large/c8f5e9a2b6d4f8e1a7c3b9d5f2e8a4b6.jpg",
    productCount: 89,
    featured: true,
  },
  {
    name: "Plushies",
    img: "https://m.media-amazon.com/images/I/71KLcaB5URL._AC_SL1500_.jpg",
    productCount: 67,
    featured: false,
  },
  {
    name: "Keychains",
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    productCount: 234,
    featured: false,
  },
  {
    name: "Posters & Art",
    img: "https://images.unsplash.com/photo-1578632749014-ca4762ec6567?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    productCount: 156,
    featured: false,
  },
  {
    name: "Clothing",
    img: "https://images.unsplash.com/photo-1586401100295-7a8096fd231a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    productCount: 78,
    featured: false,
  },
  {
    name: "Accessories",
    img: "https://images.unsplash.com/photo-1611042553484-d61f84d22784?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    productCount: 123,
    featured: false,
  },
];

// Grouped merchandise by series and type
const popularDemonSlayer: IGroupedMerchPreview = {
  name: "Demon Slayer Collection",
  series: "Demon Slayer",
  merchs: [
    featured[1], // Nezuko figure
    {
      title: "Tanjiro Kamado DX Figure",
      img: "https://images.goodsmile.info/cgm/images/product/20210420/11089/84732/large/a9b8c5e2f4d7a1b6c9e3f8a2d5b7c4e1.jpg",
      price: 174.99,
      description: "Deluxe Tanjiro figure with water breathing effects.",
      series: "Demon Slayer",
      character: "Tanjiro Kamado",
      productType: "Figure",
      manufacturer: "Aniplex+",
      scale: "1/8",
      material: "PVC, ABS",
      preorder: false,
      tags: ["new", "effects"],
    },
    {
      title: "Inosuke Hashibira Nendoroid",
      img: "https://images.goodsmile.info/cgm/images/product/20210826/11507/87894/large/d3e6a9c2f5b8e1a4d7c3f6a9b2e5c8d1.jpg",
      price: 65.99,
      description: "Wild boar-headed demon slayer in adorable Nendoroid form.",
      series: "Demon Slayer",
      character: "Inosuke Hashibira",
      productType: "Nendoroid",
      manufacturer: "Good Smile Company",
      material: "ABS, PVC",
      preorder: false,
      tags: ["articulated", "cute"],
    },
  ],
};

const attackOnTitanCollection: IGroupedMerchPreview = {
  name: "Attack on Titan Final Season",
  series: "Attack on Titan",
  merchs: [
    featured[4], // Levi Nendoroid
    {
      title: "Eren Yeager Final Season Figure",
      img: "https://images.goodsmile.info/cgm/images/product/20220315/12203/95124/large/f8e1a4b7c2d5f9e3a6b8c1d4f7e2a5b9.jpg",
      price: 199.99,
      description: "Eren in his final form from the last season.",
      series: "Attack on Titan",
      character: "Eren Yeager",
      productType: "Figure",
      manufacturer: "Kotobukiya",
      scale: "1/7",
      material: "PVC, ABS",
      preorder: true,
      tags: ["final-season", "preorder"],
    },
    {
      title: "Mikasa Ackerman Combat Ver.",
      img: "https://images.goodsmile.info/cgm/images/product/20210912/11584/89237/large/b5c8e1a4d7f2a9c6e3b8d1f4a7c2e5b8.jpg",
      price: 184.99,
      description: "Mikasa in full combat gear with ODM equipment.",
      series: "Attack on Titan",
      character: "Mikasa Ackerman",
      productType: "Figure",
      manufacturer: "Kotobukiya",
      scale: "1/8",
      material: "PVC, ABS",
      preorder: false,
      tags: ["combat", "detailed"],
    },
  ],
};

const genshinCollection: IGroupedMerchPreview = {
  name: "Genshin Impact Premium Collection",
  series: "Genshin Impact",
  merchs: [
    featured[2], // Ganyu figure
    {
      title: "Raiden Shogun Electro Ver. 1/7",
      img: "https://images.goodsmile.info/cgm/images/product/20220425/12267/96573/large/a7c4e1b8d2f5a9c3e6b7d4f1a8c5e2b9.jpg",
      price: 279.99,
      description: "The Electro Archon in all her divine glory.",
      series: "Genshin Impact",
      character: "Raiden Shogun",
      productType: "Figure",
      manufacturer: "miHoYo",
      scale: "1/7",
      material: "PVC, ABS",
      preorder: true,
      exclusive: true,
      tags: ["archon", "premium", "preorder"],
    },
    {
      title: "Zhongli Geo Archon Figure",
      img: "https://images.goodsmile.info/cgm/images/product/20220108/12065/92847/large/c9e2a5b8d1f4a7c3e6b9d2f5a8c1e4b7.jpg",
      price: 264.99,
      description: "The Geo Archon Rex Lapis in his human form.",
      series: "Genshin Impact",
      character: "Zhongli",
      productType: "Figure",
      manufacturer: "miHoYo",
      scale: "1/7",
      material: "PVC, ABS",
      preorder: false,
      tags: ["archon", "premium"],
    },
  ],
};

const merchs: IGroupedMerchPreview[] = [
  popularDemonSlayer,
  attackOnTitanCollection,
  genshinCollection,
  {
    name: "Studio Ghibli Classics",
    series: "Studio Ghibli",
    merchs: [
      featured[3], // Totoro plushie
      {
        title: "No-Face Spirited Away Figure",
        img: "https://m.media-amazon.com/images/I/61xGJC7RTOL._AC_SL1000_.jpg",
        price: 89.99,
        description:
          "Mysterious No-Face from Spirited Away in premium quality.",
        series: "Studio Ghibli",
        character: "No-Face",
        productType: "Figure",
        manufacturer: "Studio Ghibli",
        material: "PVC",
        preorder: false,
        tags: ["classic", "mysterious"],
      },
    ],
  },
];

export const homeData: IHomeData = {
  header: slides,
  featured,
  merchs,
  categories,
};

// Additional exports for specific API endpoints
export const featuredMerchandise = featured;
export const animeSeriesData = animeSeries;
export const categoriesData = categories;
export const popularBySeriesData = merchs;
