"use client";
import React, { useState } from "react";
import Button from "./button";
import { useToast } from "@/hooks/use-toast";
import { cx } from "class-variance-authority";
interface RegisterNewLetter {
  email?: string;
}
const NewLetter = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: registerNewLetter.email,
      }),
    });
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
    <form onSubmit={handleSubmit} className="flex h-fit pt-6">
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
      <Button
        onClick={() => handleSubmit}
        className={cx("text-sm", isLoading === true && "cursor-not-allowed")}
      >
        Subcribe
      </Button>
    </form>
  );
};

export default NewLetter;
