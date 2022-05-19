import Head from "next/head"
import Link from "next/link"
import React from "react"
import { Header } from "../components"

export default function notFound() {
  return (
    <>
      <Head>
        <title>Not found | Country Locator</title>
        <meta name="description" content="Not found page" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <div className="flex flex-col h-[calc(100vh-62px)] items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="128"
          className="fill-primary"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <circle cx="128" cy="128" r="96" opacity="0.2"></circle>
          <circle
            cx="128"
            cy="128"
            r="96"
            className="stroke-primary fill-transparent"
            strokeMiterlimit="10"
            strokeWidth="16"
          ></circle>
          <line
            x1="184"
            y1="96"
            x2="152"
            y2="128"
            className="stroke-primary fill-transparent"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
          <line
            x1="184"
            y1="128"
            x2="152"
            y2="96"
            className="stroke-primary fill-transparent"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
          <line
            x1="104"
            y1="96"
            x2="72"
            y2="128"
            className="stroke-primary fill-transparent"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
          <line
            x1="104"
            y1="128"
            x2="72"
            y2="96"
            className="stroke-primary fill-transparent"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
          <circle cx="128" cy="180" r="12"></circle>
        </svg>
        <h1 className="mt-5 text-7xl font-extrabold text-primary italic">
          4<span className="text-primary-border">0</span>4
        </h1>
        <h2 className="text-shape text-3xl">Page not found</h2>
        <p className="mt-5 mb-6 text-base-text text-base">
          Looks like you&apos;re heading to a wrong planet!
        </p>
        <Link href="/">
          <a className="bg-primary py-2 px-4 min-w-max rounded-md flex items-center justify-center text-white cursor-pointer md:hover:bg-primary-hover transition-colors focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-opacity-75 focus-within:ring-offset-2 focus-within:ring-offset-primary-dark">
            Send me back to the Homepage
          </a>
        </Link>
      </div>
    </>
  )
}
