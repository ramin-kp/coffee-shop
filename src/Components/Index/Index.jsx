import React from "react";
import Header from "../Header/Header";

export default function Index({ toggleDarkMode }) {
  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} />
    </>
  );
}
