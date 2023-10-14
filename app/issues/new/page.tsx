
'use client'
import SimpleMDE from "react-simplemde-editor";
import {useForm,Controller} from 'react-hook-form'
import "easymde/dist/easymde.min.css";
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas";
import z from "zod";
import Spinner from "@/app/components/Spinner";

type IssueForm = z.infer<typeof createIssueSchema>

const NewIssuePage = () => {
  const {register,control,handleSubmit,formState:{errors}}=useForm<IssueForm>({
    resolver:zodResolver(createIssueSchema)
  });
  const router=useRouter();
  const [error,setError]=useState('');
  const [isSubmitting,setSubmitting]=useState(false);
  return (
    <div className="max-w-xl">
      {error &&<Callout.Root color="red" className="mb-5">
        <Callout.Text>
          {error}
        </Callout.Text>
        </Callout.Root>}
    <form onSubmit={handleSubmit(async(data)=>{
      try {
        setSubmitting(true);
        await axios.post('/api/issues',data);
        router.push('/issues')
      
      } catch (error) {
        setSubmitting(false)
        setError('An Unexpected error');
      }

    })} className=" space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register('title')}/>
      </TextField.Root>
      {errors.title && <Text as="p" color="red">{errors.title.message}</Text>}
      <Controller
        name="description"
        control={control}
        render={({field})=> <SimpleMDE placeholder="Description" {...field} />}
        />
        {errors.description && <Text as="p" color="red">{errors.description.message}</Text>}
      <Button disabled={isSubmitting}>Submit New Issue {isSubmitting && <Spinner/>}</Button>
     
    </form>
    </div>
  );
};

export default NewIssuePage;
