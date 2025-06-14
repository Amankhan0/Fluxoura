import React from "react";
import VideoScrollAnimation from "./VideoScrollAnimation";
import OurWork from "../SomeWork/SomeWork";

const Home = () => {
  return (
    <div className="overflow-hidden dark:bg-black">
      <div className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold my-28 sm:my-32 md:my-44 lg:my-56 px-4">
        <div className="flex text-center flex-wrap items-center justify-center gap-2">
          <div>*</div>
          <p>
            CREATE<span className="text-[#F20574]">.</span> AMPLIFY
            <span className="text-[#FFDE00]">.</span>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center mx-4 md:mx-16 mt-10 gap-4">
          <p className="text-base sm:text-lg text-center lg:text-left">
            Fluxoura® is a bold advertising agency that specializes in igniting
            ideas, crafting compelling campaigns, and turning attention into
            action. From concept to conversion, we fuel brand impact.
          </p>
          <p>
            ENGAGE<span className="text-[#28A690]">.</span>
          </p>
        </div>
        <div className="text-center mt-10 flex justify-center">
          <p>
            MARKET<span className="text-[#F25C05]">.</span>
          </p>
        </div>
        <div className="ml-20">
          <img className="w-[50px] h-[90px]" src="https://png.pngtree.com/png-vector/20220718/ourmid/pngtree-arrow-down-flat-blue-color-icon-pictogram-vector-point-vector-png-image_19147794.png" />
        </div>
      </div>

      {/* video section */}
      <VideoScrollAnimation />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-[#F2F2F2] p-6 md:p-12 lg:p-20 dark:bg-black">
        <div className="mb-10 lg:mb-0">
          <p className="text-base sm:text-lg mb-4">Think Loud. Think Fluxoura</p>
          <video
            className="h-full sm:h-96 md:h-full rounded-lg w-full object-cover"
            src="https://www.doorsstudio.com/assets/front/videos/marketing-is-our-jam.mp4"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
        <div>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Creativity Is Our Fuel <br /> And We Set Brands on Fire
          </p>
          <p className="mt-6 text-base sm:text-lg">
            Fluxoura® is your go-to creative force for bold and boundary-breaking advertising. We specialize in building magnetic brand stories that blend insight, innovation, and strategy.
          </p>
          <p className="mt-6 text-base sm:text-lg">
            As a top-tier advertising agency, we thrive on building purpose-led ideas, launching high-impact campaigns, and delivering standout narratives that break the clutter.
          </p>
        </div>
      </div>

      {/* start there */}
      <div className="px-4 md:px-10 lg:px-20 py-16 md:py-20 space-y-24 bg-white dark:bg-black">
        {/* DIGITAL STRATEGY */}
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">DIGITAL STRATEGY</h2>
            <p className="text-lg md:text-xl mb-6">
              We architect innovative, conversion-focused strategies to turn your digital presence into an unforgettable experience.
            </p>
            <ul className="marker-blue list-disc list-inside text-base md:text-lg grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li>UI/UX & Web Flow Mapping</li>
              <li>App & Website Positioning</li>
              <li>Creative Content Direction</li>
              <li>Audience Behavior Profiling</li>
              <li>Platform Growth Blueprint</li>
              <li>Design-Led Differentiation</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <video
              src="https://www.doorsstudio.com/assets/front/videos/brand-strategy.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl w-full max-w-md"
            />
          </div>
        </div>

        {/* CREATIVE EXPRESSION */}
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">CREATIVE EXPRESSION</h2>
            <p className="text-lg md:text-xl mb-6">
              From visuals to voice, we shape every element to express your brand’s character and captivate your audience.
            </p>
            <ul className="marker-orange list-disc list-inside text-base md:text-lg grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li>Logo & Graphic Design</li>
              <li>Content Tone & Copy Framework</li>
              <li>Visual Language Systems</li>
              <li>Messaging Architecture</li>
              <li>Brand Storytelling</li>
              <li>Digital & Print Assets</li>
            </ul>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <video
              src="https://www.doorsstudio.com/assets/front/videos/brand-identity.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl w-full max-w-md"
            />
          </div>
        </div>

        {/* YOUR AMBITION */}
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">YOUR AMBITION</h2>
            <p className="text-lg md:text-xl mb-6">
              We transform your brand’s voice into scroll-stopping stories that resonate, connect, and convert.
            </p>
            <ul className="marker-yellow list-disc list-inside text-base md:text-lg grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li>Omnichannel Messaging Plans</li>
              <li>Narrative-Led Campaigning</li>
              <li>Audience-Centric Content Strategy</li>
              <li>Brand Voice & Tone Guidelines</li>
              <li>Media Engagement & Amplification</li>
              <li>Reputation & PR Frameworks</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <video
              src="https://www.doorsstudio.com/assets/front/videos/brand-communication.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl w-full max-w-md"
            />
          </div>
        </div>

        {/* OUR PORTFOLIO */}
        <div id="work">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">OUR PORTFOLIO</h2>
          <OurWork/>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <video
              src="https://www.doorsstudio.com/assets/front/videos/brand-strategy.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl w-full"
            />
            <video
              src="https://www.doorsstudio.com/assets/front/videos/brand-identity.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl w-full"
            />
            <video
              src="https://www.doorsstudio.com/assets/front/videos/brand-communication.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl w-full"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
