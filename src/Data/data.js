import logo from "../assets/Logo.svg"
import img1 from "../assets/image/Image-1.png"
import img2 from "../assets/image/Image-2.png"
import img3 from "../assets/image/Image-3.png"
import img4 from "../assets/image/Image-4.png"
import img5 from "../assets/image/Image-5.png"
import user from "../assets/image/user.png"
import user1 from "../assets/image/user-1.png"
import user2 from "../assets/image/user-2.png"
import Delivery from "../assets/delivery.jsx"
import Settings from "../assets/settings.jsx"
import GroupSupport from "../assets/Group-support.jsx"
import TechnicalSupport from "../assets/technical-support.jsx"
import Quote from "../assets/Quote.jsx"
import Development from "../assets/Development.jsx"
import IconOne from "../assets/icon.jsx"
import IconTwo from "../assets/icon-2.jsx"
import IconThree from "../assets/icon-3.jsx"
import IconFour from "../assets/icon-4.jsx"
import IconFive from "../assets/icon-5.jsx"
import IconSix from "../assets/icon-6.jsx"
import Icon1 from "../assets/icon1.jsx"
import Icon2 from "../assets/icon2.jsx"
import Icon3 from "../assets/icon3.jsx"
import Icon4 from "../assets/icon4.jsx"
import Icon5 from "../assets/icon5.jsx"
import Icon6 from "../assets/icon6.jsx"
import LetsTalk from "../assets/Lets-talk.jsx"
import ShapesBig from "../assets/Shapes-big.jsx"
import Shapes from "../assets/Shapes.jsx"
import ShaperTwo from "../assets/Shapes-two.jsx"

export const data = {
    navigation: [
        {
            id: 1,
            img: logo,
            link: "/"
        },
        {
            id: 2,
            label: "Home",
            link: "/",

        },
        {
            id: 3,
            label: "Service",
            link: "/service"
        },
        {
            id: 4,
            label: "Company",
            link: "/company",
        },
        {
            id: 5,
            label: "Career",
            link: "/career"
        },
        {
            id: 6,
            label: "Blog",
            link: "/blog"
        },
        {
            id: 7,
            label: "Contact us",
            link: "/contact"
        },
    ],
    aboutUs: [
        {
            id: 1,
            img: img1
        },
        {
            id: 2,
            img: img2
        },
        {
            id: 3,
            img: img3
        },
    ],
    ourExpertise: [
        {
            id: 1,
            img: Delivery,
            title: "On Time Delivery",
            description: "Through True Rich Attended does no end it his mother since real had half every him."
        },
        {
            id: 2,
            img: Settings,
            title: "Best Quality",
            description: "Through True Rich Attended does no end it his mother since real had half every him."
        },
        {
            id: 3,
            img: GroupSupport,
            title: "Support Assist",
            description: "Through True Rich Attended does no end it his mother since real had half every him."
        }
    ],
    ourService: [
        {
            id: 1,
            img: TechnicalSupport,
            title: "Technical support",
            description: "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service"

        },
        {
            id: 2,
            img: Settings,
            title: "Testing Management",
            description: "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service"

        },
        {
            id: 3,
            img: Development,
            title: "Development",
            description: "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service"

        },
    ],
    ourProcess: [
        {
            id: 1,
            img: Icon1,
            num: "01",
            title: "Discover",
            description: "We aim to attain the greatest satisfaction for our clients and be one of the prominent."
        },
        {
            id: 2,
            img: Icon2,
            num: "02",
            title: "Designing",
            description: "We aim to attain the greatest satisfaction for our clients and be one of the prominent."
        },
        {
            id: 3,
            img: Icon3,
            num: "03",
            title: "Development",
            description: "We aim to attain the greatest satisfaction for our clients and be one of the prominent."
        },
        {
            id: 4,
            img: Icon4,
            num: "04",
            title: "Testing",
            description: "We aim to attain the greatest satisfaction for our clients and be one of the prominent."
        },
        {
            id: 5,
            img: Icon5,
            num: "05",
            title: "Deployment",
            description: "We aim to attain the greatest satisfaction for our clients and be one of the prominent."
        },
        {
            id: 6,
            img: Icon6,
            num: "06",
            title: "Maintenance",
            description: "We aim to attain the greatest satisfaction for our clients and be one of the prominent."
        },
    ],
    users: [
        {
            id: 1,
            img: user,
        },
        {
            id: 2,
            img: user1,
        },
        {
            id: 3,
            img: user2
        }
    ],
    blogNews: [
        {
            id: 1,
            img: img4,
            title: "Today’s best design trends for digital products",
            calendar: new Date("Jan 19, 2021")
        },
        {
            id: 2,
            img: img5,
            title: "A practical guide to building a brand strategy",
            calendar: new Date("Jan 19, 2021")
        }
    ]
}