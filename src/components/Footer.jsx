import React from "react";
import log from "/logo.png";

export default function Footer() {
  return (
    <section className="w-screen h-1/2 bg-[#f4daa1]">
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-4">
        <div className="col-start-1 col-span-1 flex flex-col items-center justify-center p-10">
          <img src={log} alt="logo" srcSet="" />
          <div className=" flex flex-row justify-center gap-10 mt-6">
            <a href="" className="text-[#dd9445]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
            </a>
            <a href="" className="text-[#dd9445]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
            </a>
            <a href="" className="text-[#dd9445]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
            </a>
            <a href="" className="text-[#dd9445]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>
            </a>
          </div>
        </div>
        <div className="col-start-2 sm:col-start-1 sm:hidden lg:hidden col-span-1 flex md:hidden flex-col items-center justify-center">
          <h3 className="text-[#dd9445] font-semibold text-xl m-6 underline">Explore</h3>
          <ul className=" text-center gap-6 text-black text-lg ">
            <li className="hover:text-[#dd9445]">Home</li>
            <li className="hover:text-[#dd9445]">About</li>
            <li className="hover:text-[#dd9445]">Our Blog</li>
          </ul>
        </div>
        <div className="col-start-3 sm:col-start-1 md:col-start-2 lg:col-start-2  col-span-1 flex items-center p-4 justify-center">
          <div class="w-3/4 mx-auto relative overflow-hidden z-10 bg-[#dd9445] p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-white">Contact Us</h2>

            <form method="post" action="#">
              <div class="mb-4">
                <label
                  class="block text-sm font-medium text-gray-300"
                  for="name"
                >
                  Full Name
                </label>
                <input
                  class="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                  type="text"
                />
              </div>

              <div class="mb-4">
                <label
                  class="block text-sm font-medium text-gray-300"
                  for="email"
                >
                  Email Address
                </label>
                <input
                  class="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                  name="email"
                  id="email"
                  type="email"
                />
              </div>

              <div class="mb-4">
                <label
                  class="block text-sm font-medium text-gray-300"
                  for="bio"
                >
                  Message
                </label>
                <textarea
                  class="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                  rows="3"
                  name="bio"
                  id="bio"
                ></textarea>
              </div>

              <div class="flexjustify-center">
                <button
                  class=" mx-auto flex gap-4 align-baseline bg-orange-950 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
                  type="submit"
                >Send
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
</svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4">
      <div class="col-start-2 col-span-4 text-black text-center">
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"/>
        <span>All rights reserved - BRENDA W.</span>
      </div>

      </div>
    </section>
  );
}
