import react from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { useCreateCabin } from "./useCreateCabin";
import { useForm } from "react-hook-form";
import { CreateEditCabinF } from "../../services/apiCabins";


function CreateCabinForm({ editCabin = {} }) {
  const { id: editId, ...editValues } = editCabin;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  const { isCreating, createCabin } = useCreateCabin();



  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession) editCabin({ newCabinData: { ...data, image }, id: editId }, {onSuccess: (data) => reset(),});
    else createCabin({ ...data, image: data.image }, {onSuccess: (data) => reset(),});
  };

  function onError(errors){
    //console.log(error);
  };
 
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" disabled={isCreating} error={error?.name?.message}>
        <Input type="text" id="name" {...register("name", {
          required: "This field is required",
        })}/>
      </FormRow>

      <FormRow label="Max Capacity" disabled={isWorking} error={error?.maxCapacity?.message}>
        <Input type="number" id="maxCapacity" {...register("MaxCapacity", {
          required: "This field is requierd",
          min: {
            value: 1,
            message: "Capacity should be at least 1"
          },
        })}/>
      </FormRow>

      <FormRow label="Regular Price" disabled={isWorking} error={error?.regularPrice?.message}>
        <Input type="number" id="regularPrice" {...register("regularPrice", {
          required: isEditSession ? false : "This field is requierd",
        })}/>
      </FormRow>

      <FormRow label="Discount" disabled={isWorking} error={error?.discount?.message}>
        <Input type="number" id="discount" defaultValue={0} {...register("discount", {
          required: "This field is requierd",
          validate: (value) => value <= getValues().regularPrice || "Discount should be less than the regular price",
        })}/>
      </FormRow>

      <FormRow label="Description for Website" disabled={isWorking} error={error?.description?.message}>
        <Textarea type="number" id="description" defaultValue="" disabled={isCreating} />
      </FormRow>

      <FormRow label="Cabin Photo">
        <FileInput id="image" accept="image/*" type="file" {...register("image", {
          required: "This field is requierd",
        })}/>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>{ isEditSession ? "Edit Cabin" : "Create New Cabin"}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
