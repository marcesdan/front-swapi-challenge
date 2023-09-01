import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 py-5 relative z-20 bg-background shadow-[0_0_15px_0_rgb(0,0,0,0.1)]">
      <div className="flex items-center lg:px-6 px-8 mx-auto max-w-7xl px-14">
        <div className="flex flex-row items-center justify-center">
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/vehicles"
              >
                Vehicles
              </Link>
            </li>
            <li>
              <Link href="/starships">
                Starships
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
