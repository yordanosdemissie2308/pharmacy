import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white text-gray-800">
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600">PharmaCare</h1>
        <nav className="space-x-6">
          <Link href="/not-foundpage" className="hover:text-green-600">
            Home
          </Link>
          <Link href="/not-foundpage" className="hover:text-green-600">
            About
          </Link>
          <Link href="/login" className="hover:text-green-600">
            Login
          </Link>
          <Link href="/signup" className="hover:text-green-600">
            Sign Up
          </Link>
        </nav>
      </header>

      <section className="text-center py-20 px-4">
        <h2 className="text-4xl font-bold mb-4 text-green-700">
          Your Health, Our Priority
        </h2>
        <p className="text-lg max-w-xl mx-auto mb-8 text-gray-600">
          Welcome to PharmaCare – your trusted online pharmacy. Shop from a wide
          range of medicines and healthcare products with fast delivery.
        </p>
        <Link
          href="/not-foundpage"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Shop Now
        </Link>
      </section>

      <section className="py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              24/7 Service
            </h3>
            <p>
              We’re always available to take your orders and answer your
              questions.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Trusted Medicines
            </h3>
            <p>
              We only provide certified and approved pharmaceuticals from top
              brands.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Fast Delivery
            </h3>
            <p>Get your products delivered to your door in no time!</p>
          </div>
        </div>
      </section>

      <footer className="bg-green-600 text-white py-6 text-center mt-10">
        <p>&copy; 2025 PharmaCare. All rights reserved.</p>
      </footer>
    </div>
  );
}
