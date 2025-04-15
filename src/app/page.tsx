import Link from "next/link";
import Image from "next/image";
import { FaClock, FaCapsules, FaShippingFast } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white text-gray-800">
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-3xl font-extrabold text-green-600 tracking-tight">
          PharmaCare
        </h1>
        <nav className="space-x-6 text-base font-medium">
          <Link href="/" className="hover:text-green-600 transition-colors">
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-green-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="/login"
            className="hover:text-green-600 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="hover:text-green-600 transition-colors"
          >
            Sign Up
          </Link>
        </nav>
      </header>
      <section className="text-center py-20 px-4">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <Image
            className="rounded-lg shadow-md"
            src="/final.png"
            height={500}
            width={500}
            alt="Healthcare"
          />
          <div className="max-w-xl text-left">
            <h2 className="text-5xl font-extrabold text-green-700 mb-4 leading-tight">
              Your Health, <br /> Our Priority
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Welcome to <strong>PharmaCare</strong> – your trusted online
              pharmacy. Discover a wide range of healthcare products with
              lightning-fast delivery and expert service.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition shadow-md"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="text-green-600 text-4xl mb-3">
              <FaClock />
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              24/7 Service
            </h3>
            <p className="text-gray-600">
              We’re always here to take your orders and assist you anytime you
              need.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="text-green-600 text-4xl mb-3">
              <FaCapsules />
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Trusted Medicines
            </h3>
            <p className="text-gray-600">
              Certified and approved pharmaceuticals from top brands you trust.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="text-green-600 text-4xl mb-3">
              <FaShippingFast />
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Get your healthcare essentials delivered right to your door — fast
              & safe.
            </p>
          </div>
        </div>
      </section>
      <footer className="bg-green-600 text-white py-6 mt-10">
        <p className="text-center">
          &copy; 2025 PharmaCare. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
