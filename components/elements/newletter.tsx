"use client";
import React, { useState } from "react";
import Button from "./button";

import { useToast } from "@/hooks/use-toast";

interface RegisterNewLetter {
  email?: string;
}

const NewLetter = () => {
  const { toast } = useToast();

  const [registerNewLetter, setRegisterNewLetter] = useState<RegisterNewLetter>(
    {
      email: "",
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setRegisterNewLetter((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "You have successfully subscribed to our newsletter.",
      duration: 3000,
    });
    setRegisterNewLetter({
      email: "",
    });
  };
  return (
    <form onSubmit={handleSubmit} className="flex w-1/2 h-fit pt-6">
      <input
        type="email"
        id="email"
        name="email"
        placeholder="nguyenvana@gmail.com"
        className="rounded-full px-4 py-4 mr-3 w-full border"
        value={registerNewLetter.email}
        onChange={handleChange}
        required
      />
      <Button onClick={() => handleSubmit}>Subcribe</Button>
    </form>
  );
};
export default NewLetter;
