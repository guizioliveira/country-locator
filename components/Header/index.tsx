import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="bg-secundary-dark p-4 w-full">
      <div className="container mx-auto">
        <Link href="/">
          <a className="flex max-w-xs items-center justify-start gap-4">
            <Image
              src="/favicon.svg"
              width={30}
              height={30}
              alt="Image of the world inside of a magnifying glass"
            />
            <span className="font-extrabold text-xl text-grayer">
              Country Locator
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};
