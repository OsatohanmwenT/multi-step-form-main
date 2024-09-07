

export default function PlanButton({ price, handlePlanSelection, presentPlan, ...plan }) {
  return (
  <button onClick={() => handlePlanSelection(plan.name)} className={`border-[1px] transition-all ${presentPlan === plan.name ? "bg-Magnolia border-Purplish-blue" : "" } flex-1 flex md:flex-col hover:border-Purplish-blue max-md:gap-2 gap-3 rounded-lg max-md:py-2 p-4 border-Light-gray`}>
    <img src={plan.image} alt={plan.alt} />
    <div className='flex flex-col items-start'>
      <p className='font-semibold text-Marine-blue text-lg'>{plan.name}</p>
      <p className='text-Cool-gray'>${price === "monthly" ? plan.amount * 1 : plan.amount * 10}/{price === "monthly" ? "mo" : "yr"}</p>
      <p className='text-[12px] text-Marine-blue'>{price === "monthly" ? "" : "2 months free"}</p>
    </div>
  </button>
  )
}
  
