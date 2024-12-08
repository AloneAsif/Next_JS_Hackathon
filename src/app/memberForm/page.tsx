import { Button } from "@/components/ui/button";
import { SiNike } from "react-icons/si";

export default function MemberForm() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen mt-8">
        <div className="bg-white p-8 rounded-lg  max-w-sm w-full">
          {/* <!-- Nike Logo --> */}
          <div className="flex justify-center mb-6 text-5xl">
            <SiNike />
          </div>

          <div className="flex justify-center mb-6"></div>

          <h2 className="text-2xl font-bold text-center text-black">
            Become a Nike Member
          </h2>
          <p className="py-4 text-center">
            Create your Nike Member profile and get first access to the very
            best of Nike products, inspiration and community.
          </p>

          <form action="#" method="POST">
            {/* <!-- First Name Input --> */}
            <div className="mb-4">
              <input
                type="text"
                id="first-name"
                name="first-name"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="First Name"
              />
            </div>

            {/* <!-- Last Name Input --> */}
            <div className="mb-4">
              <input
                type="text"
                id="last-name"
                name="last-name"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Last Name"
              />
            </div>

            {/* <!-- Email Input --> */}
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email Address"
              />
            </div>

            {/* <!-- Password Input --> */}
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Create a Password"
              />
            </div>

            {/* <!-- Date of Birth --> */}
            <div className="mb-4">
              <input
                type="date"
                id="dob"
                name="dob"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* <!-- Location Dropdown --> */}
            <div className="mb-4">
              <select className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select your location</option>
              </select>
            </div>

            {/* <!-- Gender Selection --> */}
            <div className="mb-4">
              <span className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </span>
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">Male</span>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">Female</span>
              </div>
            </div>

            {/* <!-- Checkbox for Agreement --> */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                className="mr-2"
                required
              />
              <span className="text-sm text-gray-700">
                I agree to the{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Terms & Conditions
                </a>
              </span>
            </div>

            {/* <!-- Privacy Consent Paragraph --> */}
            <div className="mb-6 text-sm text-gray-600">
              <p>
                By signing up, you agree to receive communications from Nike.
                You can unsubscribe at any time.
              </p>
            </div>

            {/* <!-- Join Us Button --> */}
            <Button className="w-full">JOIN US</Button>

            {/* <!-- Already a member? Sign In --> */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Already a member?{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Sign In
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
