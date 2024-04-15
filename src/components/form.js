import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useState, useEffect } from "react";

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
    <div className="container">
      <div className="formContainer">
        <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="singleField"
            {...register("name")}
            name="name"
            placeholder="Nom *"
          />
          <input
            className="doubleField"
            {...register("entreprise")}
            name="entreprise"
            placeholder="Nom de l&rsquo;entreprise * "
          />
          <input
            className="doubleField"
            {...register("email")}
            name="email"
            placeholder="Adresse e-mail *"
          />
          <input
            className="singleField"
            {...register("you")}
            name="you"
            placeholder="Vous êtes ? *"
          />
          <textarea
            className="textField"
            {...register("message")}
            name="message"
            placeholder="Décrivez votre projet *"
          />

          <input type="submit" className="submit" value="NOUS CONTACTER" />
        </form>
      </div>
    </div>
  );
};

export default Form;
