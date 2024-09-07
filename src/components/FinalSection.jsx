import thanksIcon from "../assets/images/icon-thank-you.svg"

export default function FinalSection() {
    return(
        <div className="bg-White max-md:rounded-lg h-full grid place-content-center px-4 md:px-6 py-6 md:pb-10 md:py-2">
            <img className="mx-auto mb-2" src={thanksIcon} alt="thank you icon" />
            <h2 className="text-center mb-3 text-Marine-blue font-semibold text-xl">Thank you!</h2>
            <p className="max-w-[450px] text-center text-Cool-gray">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
        </div>
    )
}