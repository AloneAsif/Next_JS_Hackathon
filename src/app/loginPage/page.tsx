import Link from "next/link";
import { SiNike } from "react-icons/si";

export default function Login() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          {/* <!-- Nike Logo --> */}
          <div className="flex justify-center mb-6 text-5xl">
            <SiNike />
          </div>

          <h2 className="text-3xl font-bold text-center text-black mb-6">YOUR ACCOUNT FOR EVERYTHING NIKE</h2>

          <form action="#" method="POST">
            {/* <!-- Email Input --> */}
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email address"
              />
            </div>

            {/* <!-- Password Input --> */}
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
              />
            </div>

            {/* <!-- Checkboxes (Horizontal) --> */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  name="remember-me"
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">Remember me</span>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="subscribe"
                  name="subscribe"
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">forgotten your password &#63;</span>
              </div>
            </div>

            {/* <!-- Checkbox Paragraph --> */}
            <div className="mb-6 text-sm text-gray-600">
              <p>By logging in, you agree to Nike&#39;s Privacy Policy and Terms of Use.</p>
            </div>

            {/* <!-- Submit Button --> */}
            <button
              type="submit"
              className="w-full py-3 px-6 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-200"
            >
              Sign In
            </button>

            {/* <!-- Additional Paragraph --> */}
            <div className="mt-6 text-center text-sm text-gray-600">
              <p>Not a member <Link href="#" className="text-blue-500 hover:underline">Join Us</Link>.</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
