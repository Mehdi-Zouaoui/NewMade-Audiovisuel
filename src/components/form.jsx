"use client";

import { useEffect, useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";

const Form = () => {
  const [formField, setFormFields] = useState([]);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
      }
    });
  };

  return (
    <div className="w-full">
      <div className="w-full">
        <form
          className="w-full flex justify-between flex-wrap"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="my-[10px] px-[10px] text-black h-[50px] border w-full"
            {...register("name")}
            name="name"
            placeholder="Nom *"
          />
          <input
            className="my-[10px] px-[10px] text-black h-[50px] border w-1/2"
            {...register("entreprise")}
            name="entreprise"
            placeholder="Nom de l&rsquo;entreprise * "
          />
          <input
            className="my-[10px] px-[10px] text-black h-[50px] border w-1/2"
            {...register("email")}
            name="email"
            placeholder="Adresse e-mail *"
          />
          <input
            className="my-[10px] px-[10px] text-black h-[50px] border w-full"
            {...register("you")}
            name="you"
            placeholder="Vous êtes ? *"
          />
          <textarea
            className="my-[10px] px-[10px] text-black h-[50px] border w-full"
            {...register("message")}
            name="message"
            placeholder="Décrivez votre projet *"
          />

          <input
            type="submit"
            className="w-full text-white bg-nmgreen text-bold "
            value="NOUS CONTACTER"
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
