

import "~style.css"

import React, { useState } from 'react';
const IndexPopup: React.FC = () => {


  return (
    <div className="plasmo-w-[300px] plasmo-rounded-lg plasmo-h-full plasmo-flex plasmo-flex-col plasmo-items-center plasmo-justify-center plasmo-shadow-lg ">

      <div className="plasmo-bg-[#f6f5f1] plasmo-w-full plasmo-h-full  plasmo-rounded-lg plasmo-p-4 plasmo-flex plasmo-flex-col plasmo-items-center plasmo-justify-between plasmo-shadow-lg">

        {/* Small Text */}

        <img
          src="https://media3.giphy.com/media/fkoLF0dzaiNL6a1f2s/giphy.gif?cid=6c09b9529bocknrq68ifba6hwawfagtyld7j518t8lqfp7g4&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
          alt="Digitalgarden"
          className="plasmo-h-16 plasmo-w-16 plasmo-object-contain"
        />

        {/* Large Text */}
        <div className="plasmo-text-black plasmo-text-2xl plasmo-font-bold plasmo-text-center plasmo-relative">
          Digital Garden <br />

        </div>
        <div className=" plasmo-text-xs plasmo-italic plasmo-text-green-700 plasmo-text-center">

          Presenting  <br />

        </div>
        <div className="plasmo-text-black plasmo-text-xs plasmo-mt-2 plasmo-font-bold plasmo-text-center">

          ✔️  Namaste Node JS Digital Notes
        </div>
        <div className="plasmo-text-black plasmo-text-xs plasmo-mt-1 plasmo-font-bold plasmo-text-center">

          ✔️ JavaScript Quick Snippets
        </div>
        <div className="plasmo-text-black plasmo-text-xs plasmo-mt-1 plasmo-font-bold plasmo-text-center">

          ✔️ Blogs
        </div>

        {/* GitHub and Instagram Links */}
        <div className="plasmo-flex plasmo-gap-4 plasmo-mt-4">
          <a
            href="https://github.com/ashumsd7/heyashu"
            target="_blank"
            rel="noopener noreferrer"
            className="plasmo-text-black plasmo-underline plasmo-hover:text-blue-500"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="plasmo-text-black plasmo-underline plasmo-hover:text-pink-500"
          >
            Instagram
          </a>
        </div>

        {/* Contact with Plant Emoji */}
        <div className="plasmo-text-black plasmo-mt-4 plasmo-flex plasmo-items-center gap-6">
          <div className="plasmo-text-green-600 plasmo-font-semibold plasmo-text-sm plasmo-cursor-pointer  plasmo-underline plasmo-italic " onClick={() => {
            window.open('https://heyashu.in', '_blank'); // 
          }}>
            heyashu
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPopup;
