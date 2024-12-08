import { Button } from "@/components/ui/button";
import { FaMobileAlt } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";

export default function HelpPage() {
  return (
    <>
      <div className=" px-4 md:px-12 mt-5">
        <div>
          <div className="flex flex-col space-y-6 items-center justify-center">
            <h1 className="text-3xl font-bold">GET HELP</h1>
            <div className="relative w-auto lg:w-[500px]">
              <input
                type="text"
                placeholder="What can we help you with?"
                className="w-full h-[56px] pl-10 pr-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 md:mt-8 px-4 md:px-12">
          <div className="md:flex md:justify-between">
            {/* Left Section */}
            <div className="space-y-4 md:w-2/3">
              <h2 className="font-semibold text-xl md:text-2xl">
                WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
              </h2>
              <p>
                We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
              </p>
              <p>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
              <p>
                If you enter your PAN information at checkout, you&#39;ll be able to pay for your order with PayTM or a local credit or debit card.
              </p>
              <p>Apple Pay</p>
              <p>
                Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you&#39;re not already a Member, join us today.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-5 mb-5">
                <Button className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-3 md:text-base md:px-8">
                  Join Us
                </Button>
                <Button className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-3 md:text-base md:px-8">
                  Shop Nike
                </Button>
              </div>

              {/* FAQ Section */}
              <div className="space-y-4">
                <h2 className="font-bold text-lg">FAQS</h2>
                <p className="font-semibold">
                  Does my card need international purchases enabled?
                </p>
                <p>
                  Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
                </p>
                <p>Please note, some banks may charge a small transaction fee for international orders.</p>

                <p className="font-semibold">Can I pay for my order with multiple methods?</p>
                <p>No, payment for Nike orders can&#39;t be split between multiple payment methods.</p>

                <p className="font-semibold">What payment method is accepted for SNKRS orders?</p>
                <p>You can use any accepted credit card to pay for your SNKRS order.</p>

                <p className="font-semibold">Why don&#39;t I see Apple Pay as an option?</p>
                <p>
                  To see Apple Pay as an option in the Nike App or on Nike.com, you&#39;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account, and have a supported card in your Wallet. Additionally, you&#39;ll need to use Safari to use Apple Pay on Nike.com.
                </p>
              </div>

              {/* Feedback Section */}
              <div>
                <p>Was this answer helpful?</p>
                <div className="flex gap-2 my-3">
                  <FaThumbsUp className="text-2xl cursor-pointer hover:text-green-500" />
                  <FaThumbsDown className="text-2xl cursor-pointer hover:text-red-500" />
                </div>

                {/* Related Links */}
                <div>
                  <p className="font-semibold">Related</p>
                  <p className="font-semibold underline cursor-pointer hover:text-blue-600">
                    WHAT ARE NIKE&#39;S DELIVERY OPTIONS?
                  </p>
                  <p className="font-semibold underline cursor-pointer hover:text-blue-600">
                    HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="mt-8 md:mt-0 md:w-1/3 text-center">
              <h1 className="text-xl font-bold mb-4">CONTACT US</h1>
              <div className="text-3xl"><FaMobileAlt /></div>
              <p>000 800 919 0566</p>
              <p>Products & Orders: 24 hours a day, 7 days a week</p>
              <p>Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
