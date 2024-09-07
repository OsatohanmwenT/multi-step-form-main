export function FormIndexButtons({ handlePrev, handleNext, totalIndex, index }) {
  return(
    <div className={`${index === totalIndex ? "hidden": "" } flex px-16 items-center justify-between p-3 bg-White`}>
        <button onClick={handlePrev} className={`font-semibold text-Cool-gray ${index === 0 ? "text-White" : ""}`} disabled={index === 0}>Go Back</button>
        <button onClick={handleNext} className='active:bg-Marine-blue active:-translate-y-1 transition bg-Purplish-blue text-White rounded-[3px] px-3 py-2'>{index === totalIndex - 1 ?"Confirm": "Next step"}</button>
    </div>
  )
}
  