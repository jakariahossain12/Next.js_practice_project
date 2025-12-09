"use client";

import React from "react";

interface MyButtonInfo {
  text: string;
  onclick?: () => void;
}

export default function MyButton(props: MyButtonInfo) {
  return (
    <button onClick={props.onclick}>{props.text}</button>
  );
}