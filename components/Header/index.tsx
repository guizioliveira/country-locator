import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="w-full bg-secundary-dark p-4">
      <div className="container mx-auto">
        <Link href="/">
          <a className="flex max-w-xs items-center justify-start gap-4">
            <Image
              src="/favicon.svg"
              width={30}
              height={30}
              alt="Image of the world inside of a magnifying glass"
            />
            <span className="text-xl font-extrabold text-grayer">
              Country Locator
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};
