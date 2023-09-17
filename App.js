
import { StatusBar } from "react-native";
import React from "react";
import Routes from "./router";




export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor='#000' translucent={true} />
      <Routes/>  
    </>
  );
}
