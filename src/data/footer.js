import { FaFacebook, FaLinkedin, FaInstagramSquare, FaYoutube  } from "react-icons/fa";
export const sections = [
    {
      title:'COMPANY',
      items: [
        { name: "Blogs", link: "/blogs" },
        { name: "Contact Us", link: "/contactus" },
        { name: "FAQ", link: "/faq" },
        { name: "Privacy & Policy", link: "/privacypolicy" },
        { name: "Terms & Conditions", link: "/termsandconditions" }
      ]
    },
    {
      title:'NETWORK SITES',
      items: [
        {name: "PropExpert", link:"/"},
        {name: "PropGPT", link:"/"},
        {name: "PropEstimate", link:"/"},
        {name: "PropVerse", link:"/"}
      ]
    },
    {
      title:'SOLUTIONS',
      items: [
        {name:"i-Connect", link:"/"},
        {name:"i-Meet", link:"/"},
        {name:"i-Visit", link:"/"},
        {name:"BPS Score", link:"/"},
        {name:"NPS Score", link:"/"}
      ]
    },
  ]
  
  export const items = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      link: '#'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      link: '#'
    },
    {
      name: 'Instagram',
      icon: FaInstagramSquare,
      link: '#'
    },
    {
      name: 'Youtube',
      icon: FaYoutube,
      link: '#'
    },
  ]