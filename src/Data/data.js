import logo from "../assets/Logo.svg"
import img1 from "../assets/image/Image-1.png"
import img2 from "../assets/image/Image-2.png"
import img3 from "../assets/image/Image-3.png"
import img4 from "../assets/image/Image-4.png"
import img5 from "../assets/image/Image-5.png"
import photo1 from "../assets/image/user.png"
import photo2 from "../assets/image/user-1.png"
import photo3 from "../assets/image/user-2.png"
import OntimeDelivery from "../assets/OntimeDelivery.svg"
import BestQualitySetting from "../assets/BestQualitySetting.svg"
import SupportAssist from "../assets/SupportAssist.svg"
import TechnicalSupport from "../assets/TechnicalSupport.svg"
import Development from "../assets/Development.svg"
import Discover from "../assets/Discover.svg"
import Designing from "../assets/Designing.svg"
import Development2 from "../assets/Development2.svg"
import Testing from "../assets/Testing.svg"
import Deployment from "../assets/Deployment.svg"
import Maintenance from "../assets/Maintenance.svg"

const data = {
    navigation: [
        {
            id: 1,
            img: logo,
            link: "/"
        },
        {
            id: 2,
            link: "/",
            label: "Home",

        },
        {
            id: 3,
            link: "/service",
            label: "Service"
        },
        {
            id: 4,
            link: "/company",
            label: "Company",
        },
        {
            id: 5,
            link: "/career",
            label: "Career",
        },
        {
            id: 6,
            link: "/blog",
            label: "Blog",
        },
        {
            id: 7,
            link: "/contact",
            label: "Contact us",
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
            img: OntimeDelivery,
            title: "On Time Delivery",
            description: "Through True Rich Attended does no end it his mother since real had half every him."
        },
        {
            id: 2,
            img: BestQualitySetting,
            title: "Best Quality",
            description: "Through True Rich Attended does no end it his mother since real had half every him."
        },
        {
            id: 3,
            img: SupportAssist,
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
            img: BestQualitySetting,
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
            img: Discover,
            num: "01",
            title: "Discover",
            description: "We aim to attain the greatest satisfaction for our clients and be one of the prominent."
        },
        {
            id: 2,
            img: Designing ,
            num: "02",
            title: "Designing",
            description: "We aim to attain the greatest satisfaction for our clients and be one of the prominent."
        },
        {
            id: 3,
            img: Development2 ,
            num: "03",
            title: "Development",
            description: "We aim to attain the greatest satisfaction for our clients and be one of the prominent."
        },
        {
            id: 4,
            img: Testing,
            num: "04",
            title: "Testing",
            description: "We aim to attain the greatest satisfaction for our clients and be one of the prominent."
        },
        {
            id: 5,
            img: Deployment,
            num: "05",
            title: "Deployment",
            description: "We aim to attain the greatest satisfaction for our clients and be one of the prominent."
        },
        {
            id: 6,
            img: Maintenance,
            num: "06",
            title: "Maintenance",
            description: "We aim to attain the greatest satisfaction for our clients and be one of the prominent."
        },
    ],
    usersPhoto: [
        {
            id: 1,
            img: photo1, 
        },
        {
            id: 2,
            img: photo2,
        },
        {
            id: 3,
            img: photo3
        }
    ],
    blogNews: [
        {
            id: 1,
            img: img4,
            title: "Today’s best design trends for digital products",
            calendarData: new Date("Jan 19, 2021")
        },
        {
            id: 2,
            img: img5,
            title: "A practical guide to building a brand strategy",
            calendarData: new Date("Jan 19, 2021")
        }
    ]
}

export default data