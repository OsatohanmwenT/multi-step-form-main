import arcadeIcon from "../assets/images/icon-arcade.svg"
import advancedIcon from "../assets/images/icon-advanced.svg"
import proIcon from "../assets/images/icon-pro.svg"

export const plans =[
    {
        id: 1,
        name: "Arcade",
        amount: 9,
        image: arcadeIcon,
        alt: "arcade"
    },
    {
        id: 2,
        name: "Advanced",
        amount: 15,
        image: advancedIcon,
        alt: "advanced"
    },
    {
        id: 3,
        name: "Pro",
        amount: 15,
        image: proIcon,
        alt: "pro"
    }
]

export const addOns = [
    {
        id: 1,
        service: "Online service",
        description: "Access to mutliplayer games",
        price: 1,
    },
    {
        id: 2,
        service: "Larger storage",
        description: "Extra 1TB of cloud save",
        price: 2,
    },
    {
        id: 3,
        service: "Customizable profile",
        description: "Custom theme on your profile",
        price: 2,
    }
]