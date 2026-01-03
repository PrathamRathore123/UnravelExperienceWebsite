import Navbar from "../ui/Navbar";


export default function Cancellation() {
  return (
     <>
        <Navbar></Navbar>
        <div className="h-full w-[65%] m-auto">
                   <h1 className="text-3xl font-bold mt-8 mb-4 text-center">Cancellation And Refund Policy</h1>
          <p>We understand the sudden shift in your trip plans; however, at Unravel Experience, we have a certain cancellation policy. Below is our cancellation and refund policy to ensure transparency and fairness.</p>
              <h2 className="text-2xl font-semibold mt-6 mb-2">Cancellation Policy</h2>
          <ul className="list-disc list-inside text-left max-w-2xl">
            <li>Cancellations must be requested in writing via email at [Email Address] or through our customer support.</li>
            <li>Cancellations made 30 days or more before the departure date are eligible for a refund as per our refund policy.</li>
            <li>Cancellations made less than 30 days before departure are non-refundable.</li>
            <li>No refunds will be provided for no-shows or last-minute cancellations.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Refund Policy</h2>
          <ul className="list-disc list-inside text-left max-w-2xl">
            <li>Refunds are only applicable for cancellations made at least 30 days before departure.</li>
            <li>The refund amount will be subject to applicable cancellation fees and deductions, which may include administrative fees, service charges, and third-party costs (hotels, airlines, etc.).</li>
            <li>Refunds will be processed within 7-14 business days after the cancellation request is approved.</li>
            <li>The refund will be issued via the original payment method.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Changes and Rescheduling</h2>
          <ul className="list-disc list-inside text-left  max-w-2xl">
            <li>If you wish to modify your booking, requests must be made at least 30 days before departure, and changes will be subject to availability and additional charges.</li>
            <li>Rescheduling within 30 days of departure may not be possible.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Trip Cancellations by Unravel Experiences</h2>
          <ul className="list-disc list-inside text-left  max-w-2xl">
            <li>In the rare event that we need to cancel a trip due to unforeseen circumstances (such as natural disasters, government restrictions, or safety concerns), we will offer you:</li>
            <li>A full refund of your trip</li>
            <li>Unravel Experiences is not responsible for additional costs incurred by travelers, such as visa fees, flight tickets, or accommodation booked separately.</li>
          </ul>
        </div>
        </>
  )
}
