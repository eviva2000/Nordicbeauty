export default function Footer() {
    return (
      <footer className="bg-black text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 md:px-16 gap-6">
          
          {/* Left column */}
          <div className="text-center md:text-left">
            <h5 className="text-2xl font-semibold">ZibaNordic</h5>
            <p className="text-sm mt-1">© {new Date().getFullYear()} ZibaNordic</p>
            <p className="text-sm">All rights reserved</p>
          </div>
          
          {/* Right column */}
          <div className="md:text-right">
            <p className="mt-1 text-xs max-w-xs md:ml-auto">
              Our team works hard and carefully with love to find the best and 
              highest quality products, test them, and then provide them to you.
            </p>
          </div>
  
        </div>
      </footer>
    );
  }
  