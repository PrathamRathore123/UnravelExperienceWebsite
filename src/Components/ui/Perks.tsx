import { Link } from "react-router-dom";


export default function Perks() {
  return (
    <>
    <div className='text-center h-[20px] w-full bg-black text-white text-[13px]'>
        <p>Get perks with <Link to={'/signup'} className='underline'>Unravel Access</Link></p>
    </div>
    </>
  )
}
