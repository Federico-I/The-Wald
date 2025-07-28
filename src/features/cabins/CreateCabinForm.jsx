import react from "react";
import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import FormRow from "../../ui/FormRow";


function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();

  const { mutate, isPending: isCreating } = useMutation({
    mutationFn: CreateCabinForm,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate(data);
  };

  function onError(error){
    console.log(error);
  };
 
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" disabled={isCreating} error={error?.name?.message}>
        <Input type="text" id="name" {...register("name", {
          required: "This field is required",
        })}/>
      </FormRow>

      <FormRow label="Max Capacity" disabled={isCreating} error={error?.maxCapacity?.message}>
        <Input type="number" id="maxCapacity" {...register("MaxCapacity", {
          required: "This field is requierd",
          min: {
            value: 1,
            message: "Capacity should be at least 1"
          },
        })}/>
      </FormRow>

      <FormRow label="Regular Price" disabled={isCreating} error={error?.regularPrice?.message}>
        <Input type="number" id="regularPrice" {...register("regularPrice", {
          required: "This field is requierd",
        })}/>
      </FormRow>

      <FormRow label="Discount" disabled={isCreating} error={error?.discount?.message}>
        <Input type="number" id="discount" defaultValue={0} {...register("discount", {
          required: "This field is requierd",
          validate: (value) => value <= getValues().regularPrice || "Discount should be less than the regular price",
        })}/>
      </FormRow>

      <FormRow label="Description for Website" disabled={isCreating} error={error?.description?.message}>
        <Textarea type="number" id="description" defaultValue="" disabled={isCreating} />
      </FormRow>

      <FormRow label="Cabin Photo">
        <FileInput id="image" accept="image/*" type="file"{...register("image", {
          required: "This field is requierd",
        })}/>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
