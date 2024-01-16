"use client";

import { useState } from "react";
import BaseButton from "@/components/BaseButton";
import BaseWrapper from "@/components/BaseWrapper";

type ButtonState = "idle" | "loading" | "success" | "error";

export default function Home() {
  const [buttonState, setButtonState] = useState<ButtonState>("idle");

  async function handleSubmitForm(name: string) {
    setButtonState("loading");

    try {
      // Success Logic
      // await formSubmit();
      console.log(name, "Form Successfully Submitted");

      setTimeout(() => {
        setButtonState("success");
      }, 1000);

      setTimeout(() => {
        setButtonState("idle");
      }, 2000);
    } catch (error) {
      // Failed Logic

      console.log(name, "Form unsuccessfully Submitted");

      setTimeout(() => {
        setButtonState("error");
      }, 1000);

      setTimeout(() => {
        setButtonState("idle");
      }, 2000);
    }
  }

  function handleLogin() {
    // Some login logic
    console.log("LOGGING IN");
  }

  return (
    <BaseWrapper>
      <div className="my-8">
        <h2 className="text-3xl font-bold opacity-50">
          Data-Driven Advertising
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <p>
            At our company, we believe in the power of data to enhance
            advertising effectiveness. We leverage various data sources and
            employ advanced analytics techniques to generate comprehensive data
            profiles for our users.
          </p>
        </div>

        <div className="flex mt-8 w-full justify-center items-center gap-x-2">
          <BaseButton
            loadingState={buttonState}
            onClick={() => handleSubmitForm("Pags")}
            borderRadius="full"
            text={"Submit"}
          />
          <BaseButton
            onClick={() => handleSubmitForm("Pags")}
            text={"Submit"}
            className="bg-blue-500 font-bold text-4xl"
          />
        </div>
      </div>
    </BaseWrapper>
  );
}
