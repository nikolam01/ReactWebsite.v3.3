import React, { useRef, useEffect } from "react";
import WebViewer from "@pdftron/webviewer";
import "./App.css";

function CVPrototype() {
  const viewerDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    WebViewer(
      {
        path: "lib",
        initialDoc:
          "https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf",
      },
      viewerDiv.current as HTMLDivElement
    ).then((instance) => {});
  }, []);
  return <div className="webviewer" ref={viewerDiv}></div>;
}
export default CVPrototype;
