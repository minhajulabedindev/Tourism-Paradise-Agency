import axios from "axios";
import React from "react";

import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://sheltered-beyond-20498.herokuapp.com/offers", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully");
          reset();
        }
      });
  };
  return (
    <div className="bgImgAdd ">
      <div className="">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex row w-50 mx-auto p-5 g-3 ">
            <h1>Please add service</h1>
            <input
              placeholder="Name"
              required
              type="text"
              {...register("name")}
            />
            <textarea placeholder="Description" {...register("discription")} />{" "}
            <input
              placeholder="Price"
              type="number"
              required
              {...register("price")}
            />{" "}
            <input
              required
              placeholder="discount"
              type="number"
              {...register("discount")}
            />{" "}
            <input placeholder="Image" required {...register("img")} />
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
