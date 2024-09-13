import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import React, { useEffect, useRef, useState } from "react"


import "./style.css"
import { NAMSTE_NODE_JS_S1_ALL_IN_ONE } from "~constants"

export const config: PlasmoCSConfig = {
  matches: ["https://namastedev.com/learn/*"],
  css: ["font.css"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const Main = () => {
  // main flag  to start the tour
  const [isTourStarted, setIsTourStarted] = useState(false)
  const [isGMCInSidebar, setIsGMCInSidebar] = useState(false)
  // current active tour name
  const [currentTourName, setCurrentTourName] = useState<string | undefined>(
    undefined
  )

  // refs for urls
  let prevUrl = useRef() as any
  let currUrl = useRef() as any
  let currTabRef = useRef(false) as any





  function appendData() {
    console.log("currTabRef", currTabRef);
    if (currTabRef.current)
      return
    // Select the collapse-content element

    const i = setInterval(() => {
      const collapseContent = document.querySelector('.collapse-content');
      console.log("checking", collapseContent);
      if (collapseContent) {
        console.log("doing");
        doTheWork(collapseContent);
        currTabRef.current = true;
        clearInterval(i);
      }

    }, 1000);


  }


  function doTheWork(collapseContent) {
    // Ensure the collapseContent exists
    if (!collapseContent) {
      console.error('Collapse content not found!');
      return;
    }

    // Iterate through all child elements
    const children = collapseContent.children as any
    Array.from(children).forEach((child: any, index: number) => {
      // Get the second div inside the child
      const secondDiv = child.querySelector('a > div:nth-of-type(2)');

      if (secondDiv) {
        // Create a new div for "Read digital notes"
        const readNotesDiv = document.createElement('div');
        readNotesDiv.textContent = "Read digital notes";
        readNotesDiv.style.cursor = 'pointer'; // Add pointer style for UX
        readNotesDiv.style.color = '#36d399'; // Add pointer style for UX
        readNotesDiv.style.marginTop = '10px'; // Add pointer style for UX
        readNotesDiv.style.fontWeight = '500'; // Add pointer style for UX
        readNotesDiv.style.fontSize = '18px'; // Add pointer style for UX

        // Add a click handler
        readNotesDiv.addEventListener('click', (event) => {
          event.stopPropagation(); // Stop event propagation
          window.open(NAMSTE_NODE_JS_S1_ALL_IN_ONE[index].noteslink, '_blank'); // 
        });

        // Append the new div to the second div
        secondDiv.appendChild(readNotesDiv);
      }
    });
  }

  // Call the function to add the "Read digital notes" div







  // Mutation observer that observers if anything changed in the website : we check URL change if url changes we trigger specific DAP
  const observer = new MutationObserver(() => {
    currUrl.current = window.location.href

    // execute checkWhichTourNeedsToRender only when the url changes nd loader shouldn't shown
    if (currUrl?.current !== prevUrl?.current) {
      prevUrl.current = window.location.href
      console.debug("Content Changed ? 🔁 , URL changed ? 🔁 ")

      // iterateEverySecond()
      // It means page URL is changed now time to wait for the page to load properly and start the guidance
      console.log('Hello')
      appendData()
    } else {
      console.debug("Content 🔁 , URL changed ? ❌ ")
    }
  })

  observer.observe(document, {
    childList: true,
    subtree: true
  })

  // Callback to execute when element is found
  function elementFoundCallback(element) {
    console.log('Element found:', element.textContent);
  }

  // Start observing for the element



  // this only runs when URL changes + there is no loader

}

export default Main
