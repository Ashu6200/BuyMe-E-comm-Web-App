import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      username: "Admin",
      email: "ashutoshkewat1@gmail.com",
      password: bcrypt.hashSync("admin"),
      isAdmin: true,
    },
  ],
  blogs: [
    {
      title: "Harley Finkelstein, President of Shopify",
      description:
        "In 2023, more people Googled “How to start a business” than “How to get a job”. This is not just the year of the entrepreneur - this is the start of a new era where being an entrepreneur is peoples first choice for a career.",
    },
    {
      title: "Jason Goldberg, the Founder of Simple Token",
      description:
        "In the beginning, e-commerce was really about getting commodity products online as cheaply as possible. Now, were moving into the more exciting phase of eCommerce, where its about emotional products the things people really cherish.",
    },
    {
      title: "Michelle Peluso, Nike Board of Directors Member",
      description:
        "There are so many opportunities on the horizon, from mobile exclusives to geo-located offers to better filtering and searching. Weve only scratched the surface of whats possible with personalization",
    },
    {
      title: "Harley Finkelstein, President of Shopify",
      description:
        "The opportunity in retail lies in creating a seamless experience between online and offline. Every successful retailer needs to look at these channels not as different businesses with different P&Ls, but instead as a seamless experience. Thats what consumers want.",
    },
    {
      title: "Tolman Geffs, Co-President of JEGI",
      description:
        "People dont call it e-commerce anymore. Its called Omni-commerce, and its the idea that digital permeates every step of the purchase chain, from product discovery, to trial, to pricing, to actual purchase.",
    },
    {
      title: "Anita Roddick, Founder of The Body Shop",
      description:
        "Whatever you do, be different—that was the advice my mother gave me, and I cant think of better advice for an entrepreneur. If youre different, you will stand out.",
    },
    {
      title: "Herb Kelleher, Founder of Southwest Airlines",
      description:
        "You must be very patient, very persistent. The world isnt going to shower gold coins on you just because you have a good idea. Youre going to have to work like crazy to bring that idea to the attention of people. Theyre not going to buy it unless they know about it.",
    },
    {
      title: "Steve Jobs, Co-founder and CEO of Apple.",
      description:
        "Im convinced that about half of what separates the successful entrepreneurs from the non-successful ones is pure perseverance.",
    },
  ],
  products: [
    {
      title: "T-Shirts",
      category: "Men",
      subcategory: "Shirt",
      description: "An BuyMe brand, Symbol is built on the pillars of quality, reliability and affordability to offer you lifestyle essentials that never go out of fashion. Symbol clothing and footwear is available in comfortable fits and quality materials that are perfected to your liking.An updated classic t-shirt, in quality fabric and must have colors. Our range of t-shirts are designed to make you look stylish even when you sport an everyday essential look.",
      price: 400,
      star: "4★",
      sizes: [
        {
          title: "S",
        },
        {
          title: "L",
        },
        {
          title: "XL",
        },
      ],
      colors: [
        {
          title: "Blue",
        },
        {
          title: "Silver",
        },
        {
          title: "White",
        },
      ],
      image: "https://i.postimg.cc/PfKS3L0m/pro3.jpg",
      imageOne: "https://i.postimg.cc/PfKS3L0m/pro3.jpg",
    },
    {
      title: "Cauasual Shirt",
      category: "Men",
      subcategory: "Shirt",
      description: "This Casual Solid shirt has a Slim fit, Spread collar, full button Placket, Full Sleeves, and a curved hemline Size and Fit Slim Fit The Model height 6 foot and shoulders 18 inches is wearing size 40/M Please check the size chart for more details before ordering Material & Care 100% Premium Cotton Machine Wash Regular Style Tip Enhance your look by wearing this Casual Stylish Men's shirt, Team it with a pair of Chinos or Tapered Denim and Sneakers for a fun Smart Casual look About the Brand DENNIS LINGO Finding Basic Menswear for daily use can be hard among todays Fast fashion world, where trends change daily. Thats why we started Dennis Lingo, to create a one stop shop for premium essential clothing for everyday use at lowest prices",
      price: 900,
      star: "4★",
      sizes: [
        {
          title: "S",
        },
        {
          title: "L",
        },
        {
          title: "XL",
        },
      ],
      colors: [
        {
          title: "Blue",
        },
        {
          title: "Silver",
        },
        {
          title: "White",
        },
      ],
      image: "https://i.postimg.cc/KYrP1w2n/pro4.jpg",
      imageOne: "https://i.postimg.cc/KYrP1w2n/pro4.jpg",
    },
    {
      title: "Pattern Shirt",
      category: "Men",
      subcategory: "Shirt",
      description: "Best Comfort with Every Age. One-stop solution for Men Fashion 100% Original Products Our partywear outfit collection for men includes a shirt neckline, full-sleeves, and button placket on the front. Custom fitted to a thin fit. Perfect Regular Fit with Best Look. One-stop solution for Men Fashion 100% Original Products Our partywear outfit collection for men includes a shirt neckline, full-sleeves, and button placket on the front. Custom fitted to a thin fit.",
      price: 1000,
      star: "4★",
      sizes: [
        {
          title: "S",
        },
        {
          title: "L",
        },
        {
          title: "XL",
        },
      ],
      colors: [
        {
          title: "Blue",
        },
        {
          title: "Silver",
        },
        {
          title: "White",
        },
      ],
      image: "https://i.postimg.cc/QtYW5rnW/pro6.jpg",
      imageOne: "https://i.postimg.cc/QtYW5rnW/pro6.jpg",
    },
    {
      title: "Lady Shirts",
      category: "Women",
      subcategory: "Shirt",
      description: "All Products Are UNIQUELY DESIGNED AND AUTHENTICALLY HAND CRAFTED. ORGANIC CLEANSE Products, Experience Of Comfort. Especially Designed And Crafted For Asian Women Body Type. Women`s Wardrobe Is Symbol Of Her Choice & Style. ORGANIC CLEANSE Products Are Versatile, Stylish And Compliment Your Everyday Look-office, Formal, Casual. You Can Pair This Shirt With Any Solid Colored Trousers, Skirt, Jeans Or Shorts. Shop From Wide Range Of Products From Organic Cleanse. HAPPY SHOPPING!!!!!",
      price: 600,
      star: "4★",
      sizes: [
        {
          title: "S",
        },
        {
          title: "L",
        },
        {
          title: "XL",
        },
      ],
      colors: [
        {
          title: "Blue",
        },
        {
          title: "Silver",
        },
        {
          title: "White",
        },
      ],
      image: "https://i.postimg.cc/3wJXD9JV/pro5.jpg",
      imageOne: "https://i.postimg.cc/3wJXD9JV/pro5.jpg",
    },
  ],
  category: [
    {
      value: "Men",
      label: "Men",
    },
    {
      value: "Women",
      label: "Women",
    },
    {
      value: "Kids",
      label: "Kids",
    },
    {
      value: "Electronics",
      label: "Electronics",
    },
    {
      value: "Bags",
      label: "Bags",
    },
    {
      value: "Beauty",
      label: "Beauty",
    },
  ],
  subcategory: [
    {
      checked: false,
      label: "Top",
    },
    {
      checked: false,
      label: "One Piece",
    },
    {
      checked: false,
      label: "Jeans",
    },
    {
      checked: false,
      label: "T-Shirt",
    },
    {
      checked: false,
      label: "Shirt",
    },
    {
      checked: false,
      label: "Phones",
    },
    {
      checked: false,
      label: "Laptop",
    },
  ],
  rating: [
    {
      value: "1",
      label: "1★",
    },
    {
      value: "2",
      label: "2★",
    },
    {
      value: "3",
      label: "3★",
    },
    {
      value: "4",
      label: "4★",
    },
    {
      value: "5",
      label: "5★",
    },
  ],
};
export default data;
