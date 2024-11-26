// pages/about.js
import Head from "next/head";
import Footer from "../../components/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import Strip from "../../components/Strip";
import Header from "../../components/Header";
import Mission from "../../components/About/Mission";
import Team from "../../components/About/Team";
import ProductMedia from "../../components/ProductMedia";
import data from "./seed";
import Journey from "../../components/About/Journey";
import GetInTouch from "../../components/About/GetInTouch";
export default function About() {
  return (
    <>
      <ParallaxProvider>
        <Strip />
        <Header />

        <Mission />
        <ProductMedia />

        <Team data={data["teams"]} />

        {/* Company Timeline Section */}
        {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">Our Journey</h2>
            <div className="mt-8 flex items-center justify-center space-x-16">
              <div className="relative">
                <div className="absolute top-1/2 left-0 w-1/2 h-1 bg-blue-600 transform -translate-y-1/2"></div>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl">
                  2015
                </div>
                <p className="mt-2 text-lg text-gray-600">
                  Started with a vision to simplify lives through technology.
                </p>
              </div>

              <div className="relative">
                <div className="absolute top-1/2 left-0 w-1/2 h-1 bg-blue-600 transform -translate-y-1/2"></div>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl">
                  2018
                </div>
                <p className="mt-2 text-lg text-gray-600">
                  Launched our first product, revolutionizing the market.
                </p>
              </div>

              <div className="relative">
                <div className="absolute top-1/2 left-0 w-1/2 h-1 bg-blue-600 transform -translate-y-1/2"></div>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl">
                  2021
                </div>
                <p className="mt-2 text-lg text-gray-600">
                  Expanded globally with a strong user base and customer
                  loyalty.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Testimonials Section */}
        <Journey data={data["timeline"]} />

        {/* Contact Section */}
        <GetInTouch />

        <Footer />
      </ParallaxProvider>
    </>
  );
}
