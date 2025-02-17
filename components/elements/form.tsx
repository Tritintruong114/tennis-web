"use client";
import React, { useState } from "react";
import Button from "./button";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Form: React.FC<FormData> = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us! We will get back to you soon.",
      duration: 6000,
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-3 w-full sm:w-full"
    >
      <label
        htmlFor="firstName"
        className="text-black col-span-2 flex flex-col"
      >
        First Name
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          className="rounded-full px-4 py-4 mt-2 mb-3 border"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="lastName" className="text-black col-span-2 flex flex-col">
        Last Name
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          className="rounded-full px-4 py-4 mt-2 mb-3 border"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="email" className="text-black flex flex-col col-span-2">
        Email
        <input
          type="email"
          id="email"
          name="email"
          placeholder="nguyenvana@gmail.com"
          className="rounded-full px-4 py-4 mt-2 mb-3 border"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="phone" className="text-black flex flex-col col-span-2">
        Phone
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone Number"
          className="rounded-full px-4 py-4 mt-2 mb-3 border"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="message" className="text-black flex flex-col col-span-2">
        Message
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          className="px-4 py-4 mt-2 mb-3 border rounded-md h-[150px]"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </label>
      <Button
        onClick={() => handleSubmit}
        className="uppercase font-light col-span-2 py-4 mt-5"
      >
        Send Message
      </Button>
    </form>
  );
};

export default Form;
