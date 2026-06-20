const Footer = () => {
  return (
    <footer className="w-full bg-[#2c2c2c] text-white mt-20">
      <div className="w-full px-6 md:px-12 lg:px-20 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left */}
        <div>
          <h1 className="text-3xl font-bold text-orange-500">
            Tomato.
          </h1>

          <p className="text-gray-300 mt-4 text-sm leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident aperiam recusandae consequuntur cumque.
          </p>

          <div className="flex gap-4 mt-6 text-white">
            <span className="border p-2 rounded-full">f</span>
            <span className="border p-2 rounded-full">t</span>
            <span className="border p-2 rounded-full">in</span>
          </div>
        </div>

        {/* Company */}
        <div>
          <h2 className="font-semibold text-lg mb-4">COMPANY</h2>

          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-semibold text-lg mb-4">GET IN TOUCH</h2>

          <p className="text-gray-300">+1-212-456-7890</p>
          <p className="text-gray-300">contact@tomato.com</p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="w-full text-center text-gray-400 py-4 border-t border-gray-700">
        © 2026 Tomato. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;