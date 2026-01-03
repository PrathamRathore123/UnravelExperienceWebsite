import Navbar from "../ui/Navbar";


export default function TermsConditions() {
  return (
    <>
    <Navbar></Navbar>
    <div className="h-full w-[65%] m-auto">
         <h1 className="text-3xl font-bold mt-8 mb-4 text-center">Terms & Conditions</h1>
          <p>This page represents the legal terms and conditions of Unravel Experiences. These Terms and Conditions ("Terms") govern your use of the website, the app, or any travelling experience. By using our services, you agree to abide by these Terms.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Booking and Payments</h2>
          <ul className="list-disc list-inside text-left max-w-2xl">
            <li>All bookings are subject to availability.</li>
            <li>Full or partial payment may be required at the time of booking.</li>
            <li>Payments can be made via credit/debit cards, UPI, bank transfers, or other accepted methods.</li>
            <li>Prices are subject to change without prior notice.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Cancellation and Refund Policy</h2>
          <ul className="list-disc list-inside text-left max-w-2xl">
            <li>Full cancellations are allowed only if requested at least 30 days before departure. After this, eligible refunds may be granted based on the cancellation policies of the booked services. Our team will provide exact details at the time of booking. For more information, contact our support team.</li>
            <li>Cancellations made less than 30 days before departure may not be eligible for a refund.</li>
            <li>Refund processing time may vary based on the payment method.</li>
            <li>Unravel Experiences reserves the right to cancel trips due to unforeseen circumstances, in which case a full refund or alternative booking will be offered.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Travel Documents and Requirements</h2>
          <ul className="list-disc list-inside text-left  max-w-2xl">
            <li>Customers are responsible for ensuring they have valid passports, visas, and other crucial travel documents.</li>
            <li>Unravel Experiences is not liable for any denial of entry due to incomplete or unauthorised documents.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Health and Safety</h2>
          <ul className="list-disc list-inside text-left  max-w-2xl">
            <li>Travelers are responsible for meeting health and required medical procedures.</li>
            <li>Unravel Experiences is not liable for any health-related issues during the trip.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Itinerary Changes</h2>
          <ul className="list-disc list-inside text-left  max-w-2xl">
            <li>Unravel Experiences reserves the right to modify trip itineraries due to weather conditions, safety concerns, or any operational reasons.</li>
            <li>Alternative arrangements will be made wherever possible.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Liability and Responsibilities</h2>
          <ul className="list-disc list-inside text-left max-w-2xl">
            <li>Unravel Experiences acts as a mediator between customers and service providers (hotels, airlines, transport, etc.) and is not liable for any loss, injury, or damage caused by third parties.</li>
            <li>Customers participate in adventurous activities at their own risk.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Code of Conduct</h2>
          <ul className="list-disc list-inside text-left  max-w-2xl">
            <li>Travelers must respect local customs, laws, and fellow travelers.</li>
            <li>Any misconduct may result in removal from the trip without a refund.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Intellectual Property</h2>
          <p>All content on our website, including text, images, and logos, is the property of Unravel Experiences and may not be copied or reproduced without permission.</p>

    
    </div>
    </>
  )
}
