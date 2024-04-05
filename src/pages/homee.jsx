import React from "react";
import Carousel from "../components/courasel";
import care from "/dare.jpg";

export default function homee() {
  return (
    <section className="w-screen h-full bg-white text-black">
      <div className="w-full flex justify-center sm:hidden xs:hidden">
        <h1 className=" text-2xl">UMUNDU ARTIVISM</h1>
      </div>

      <div className=" w-full p-7 flex justify-center">
        <Carousel />
      </div>
      <div className="grid grid-cols-6 gap-4 mt-4">
        <div className="col-start-2 col-span-4">
          <div className=" grid grid-cols-2 py-7">
            <div className=" flex justify-center">
              <h2 className="text-3xl sm:text-2xl text-[#dd9445]">Our Impact</h2>
            </div>
            <div className=" text-start sm:text-sm sm:text-center text-base">
              <p>
                At Umundu Artivism, we firmly believe in the transformative
                potential of art to touch hearts, change minds, and spur action.
                Our multifaceted approach involves the following key components:
              </p>
            </div>
          </div>
          <hr className="h-px my-10 bg-gray-200 border-0 w-3/4 mx-auto dark:bg-gray-700" />
          <div className=" grid grid-cols-2 py-7">
            <div className=" text-start text-base sm:text-sm sm:text-center">
              <p>
                We actively engage with communities and schools through
                awareness campaigns, focusing on crucial topics like Sexual and
                Gender-based Violence, Menstrual Hygiene, and Sexual and
                Reproductive Health and Rights. Through interactive sessions, we
                provide education and resources to empower individuals and
                promote healthier practices.
              </p>
            </div>
            <div className=" flex justify-center">
              <h2 className="text-3xl text-[#dd9445] sm:text-2xl sm:ml-6">Community Engagement</h2>
            </div>
          </div>
          <hr className="h-px my-10 bg-gray-200 border-0 w-3/4 mx-auto dark:bg-gray-700" />
          <div className=" grid grid-cols-2">
            <div className=" flex justify-center">
              <h2 className="text-3xl text-[#dd9445] sm:text-2xl">Safe Haven</h2>
            </div>
            <div className=" text-start text-base sm:text-sm sm:text-center">
              <p>
                In cases of extreme gender-based violence, we offer a secure and
                supportive environment at our center. Victims can reside with us
                for up to six months while receiving counseling and vocational
                training, ensuring they gain the tools needed for
                self-sufficiency. Art Awareness: Art as a Catalyst We use
                compelling artistic creations, such as skits and performances,
                to spark conversations within communities. These
                thought-provoking pieces serve as a springboard for discussions
                on important social issues.
              </p>
            </div>
          </div>
          <hr className="h-px my-10 bg-gray-200 border-0 w-3/4 mx-auto dark:bg-gray-700" />
          <br />

          <div className=" w-full text-center py-7">
            <h2 className="text-3xl text-[#dd9445] font-bold mx-auto">
              TALENT SEARCH: Nurturing Talent
            </h2>
            <p className=" text-start py-6">
              We are passionate about nurturing the creative talents of the
              individuals we work with. Our programs provide opportunities for
              artists and creatives to hone their skills and gain exposure in
              the broader creative world.
            </p>
            <ul className="list-outside list-disc text-start ml-4">
              <li>
                We are looking for persons who believe that they can act, sing,
                paint, do make-up, play an instrument, or can dance. If you fall
                under any if these, feel free to contact us by visiting the
                contact section.
              </li>
              <li>
                Our talents on board are from the following areas:
                <ul className="text-center list-inside list-decimal">
                  <li>The University of Embu</li>
                  <li>
                    Colleges and tertiary institutions within Embu county.
                  </li>
                  <li>Community members.</li>
                  <li>Family and Friends.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className=" w-full h-screen my-10">
        <div className="grid grid-cols-6 gap-4 justify-items-center h-2/3">
          <div class="col-start-2 col-span-2 flex justify-center">
            <img src={care} className="w-full h-full" />
          </div>
          <div class="col-start-4 col-span-2 h-full flex justify-center content-center">
            <h1>Help build a future for children in need</h1>
          </div>
        </div>
      </div> */}
    </section>
  );
}
