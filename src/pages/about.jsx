import React from "react";
import NavBar from "../components/NavBar";
import "../../src/App.css";

export default function about() {
  return (
    <>
      <section className="w-screen bg-white">
        <div className="bg-[url('/bnw.jpg')] w-full h-screen bg-contain bg-center sm:bg-cover md:bg-cover lg:bg-cover py-10">
          <div className="h-full grid grid-cols-6 gap-4 content-end">
            <div className="col-start-2 col-span-4 text-center m-4">
              <h1 className="text-[#dd9445] text-3xl font-bold p-4 decoration-wavy">
                ABOUT
              </h1>
              <p className=" font-semibold text-[#dd9445] text-lg">
                The Umundu Artivism is more than just an organization;
                <br /> it is a movement that harnesses the boundless potential
                of art to transform lives and communities. Through artivism,
                education, and empowerment, we are redefining what is possible
                and building a more inclusive and compassionate world.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-8 gap-4 sm:grid-cols-1 lg:grid-cols-2 items-center mt-32 mb-10">
          <div className="col-start-1 col-span-2 sm:col-span-1 lg:col-span-1 flex justify-center">
            <div class="card">
              <div className="p-6">
                <h1 className=" text-xl font-semibold underline hover:no-underline">
                  Mission
                </h1>
                <p className=" text-sm">
                  To Harness the power of art to create positive change in the
                  society while using art to empower women and the youth
                </p>
              </div>
            </div>
          </div>
          <div className="col-start-3 col-span-2 sm:col-span-1 lg:col-span-1 lg:col-start-2 flex justify-center">
            <div class="card">
              <div className="p-6">
                <h1 className=" text-xl font-semibold underline hover:no-underline">
                  Patnerships and Collaborations
                </h1>
                <p className=" text-sm">
                  We welcome partnerships, collaborations, and support from
                  organizations and individuals who share our vision of using
                  art for social good. Together, we can create a brighter, more
                  equitable future.
                </p>
              </div>
            </div>
          </div>
          <div className="col-start-5 col-span-2 lg:col-span-1 lg:col-start-1 flex sm:col-span-1 justify-center">
            <div class="card">
              <div className="p-6">
                <h1 className=" text-xl font-semibold underline hover:no-underline">
                  Our Impact
                </h1>
                <p className=" text-sm">
                  The Umundu Artivism has made a significant impact since its
                  inception. We have facilitated constructive dialogues in
                  communities, empowered individuals with practical skills, and
                  provided a lifeline for those affected by gender-based
                  violence. By bridging the gap between art and activism, we are
                  fostering positive change and nurturing a generation of
                  empowered and creative women and youth.
                </p>
              </div>
            </div>
          </div>
          <div className="col-start-7 col-span-2 sm:col-span-1 lg:col-span-1 lg:col-start-2 flex justify-center">
            <div class="card">
              <div className="p-6">
                <h1 className=" text-xl font-semibold underline hover:no-underline">
                  Vision
                </h1>
                <p className=" text-sm">
                  To create a society where art is not only an entertainment
                  tool but an invaluable catalyst for remarkable social change.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-white text-black w-screen py-10">
            <div className="m-10 py-20 sm:py-10 px-10">
        <h1 className=" text-3xl underline hover:no-underline p-5 text-[#dd9445]">
          FOUNDER
        </h1>
        <img
          class="float-left h-56 w-64 rounded-full mx-10 sm:mx-4 shadow-xl my-4 transform transition-transform duration-300 ease-in-out hover:scale-110"
          src="https://www.theumunduartivism.org/images/rie.jpg"
        />
        <h3 className=" text-[#dd9445] font-semibold text-xl">Lynnet Njeru</h3>
        <p className=" font-normal text-lg lg:text-base p-4">
          She is a creative who believes that art cuts across all sectors when
          it comes to delivering a message.
          <br />
          She founded The Umundu Artivism as a platform to create awareness on
          what is happening around the society we live in.
        </p>
      </div></div>
      </section>
    
    </>
  );
}
