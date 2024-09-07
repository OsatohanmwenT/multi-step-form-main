export function ToggleBtn({ price, togglePrice }) {
  return (  
      <div className="bg-Magnolia flex items-center justify-center gap-4 p-4 rounded-lg">
        <span className={`font-semibold max-md:text-sm  ${price === "monthly" ? "text-Marine-blue" : "text-Cool-gray"} `}>Monthly</span>
        <button onClick={() => togglePrice()} aria-label="price toggle button" className={`grid p-1 w-[40px] rounded-2xl bg-Marine-blue`}>
          <div className={`bg-White w-3 h-3 rounded-full transition-all duration-200 ${price === "monthly" ? "translate-x-[0%]" : "translate-x-[160%]"}`}></div>
        </button>
        <span className={`font-semibold max-md:text-sm text-Cool-gray ${price === "monthly" ? "text-Cool-gray" : "text-Marine-blue"}`}>Yearly</span>
      </div>
  )
}
  