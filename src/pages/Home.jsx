import React from "react";
import '../../src/App.css'

export default function Home() {
  return (
    <section className="h-fit w-full bg-white text-black">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-2 col-span-4 flex flex-col justify-center">
          <h1 className="mx-auto">Umundu Artivism</h1>
          <h2 className=" underline my-4 text-xl font-semibold">
            Creating Awareness / Nuturing Talents. Harnessing Art for Social
            Change and Empowerment
          </h2>
          <p className=" my-3">
            <strong>Umundu</strong> is a native word originating from the Embu
            Community in Kenya. It means{" "}
            <strong>The Spirit of Togetherness</strong>
          </p>
          <p className=" my-3">
            The Umundu Artivism is a dynamic community-based organization
            committed to harnessing the power of art to inspire conversations
            and create positive change in society. Our Programs Provide
            Solutions to Social Dilemmas.
          </p>
          <p className=" my-3">
            Founded with a vision to address critical social issues, we employ
            various art forms, including film, stage plays, photography, and
            poetry, to catalyze dialogue on pressing matters such as Sexual and
            Gender-Based Violence, Menstrual Health, and Sexual and Reproductive
            Health and Rights.
          </p>

          <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 mt-4">
            <div class="-m-1 flex flex-wrap md:-m-2">
              <div class="flex w-1/2 flex-wrap">
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center inset-0 transform transition-transform duration-300 ease-in-out hover:scale-110"
                    src="https://www.theumunduartivism.org/images/1.jpg"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center inset-0 transform transition-transform duration-300 ease-in-out hover:scale-110"
                    src="https://www.theumunduartivism.org/images/2.jpg"
                  />
                </div>
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center inset-0 transform transition-transform duration-300 ease-in-out hover:scale-110"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                  />
                </div>
              </div>
              <div class="flex w-1/2 flex-wrap">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center inset-0 transform transition-transform duration-300 ease-in-out hover:scale-110"
                    src="https://www.theumunduartivism.org/images/3.jpg"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center inset-0 transform transition-transform duration-300 ease-in-out hover:scale-110"
                    src="https://www.theumunduartivism.org/images/4.jpg"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center inset-0 transform transition-transform duration-300 ease-in-out hover:scale-110"
                    src="data:image/jpeg;base64,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"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mt-8">
          <button class="cssbuttons-io-button">
  Learn More About Our Programs
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>


          </div>
          <div className="text-center my-7">
            <p><a href="">Join our Community</a> and stay in touch with what is happening around the society.</p>
            <p>Visit our <a href="">Blog</a> for more information.</p>
            <p><a href="">@against_gbv</a> is our special program dedicated towards fighting against gender based violence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
