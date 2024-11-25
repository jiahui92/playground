import "./style.css";
import React from "react";
import {NextUIProvider} from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <div>
        <h1>Hello World</h1>
      </div>
    </NextUIProvider>
  );
}