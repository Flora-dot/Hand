import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProposalImage from "../../assets/images/Side Image.svg";
import { Button } from "../Button";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    url: "",
    projectDetails: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setTimeout(() => {
        localStorage.setItem("contactFormData", JSON.stringify(formData));
        console.log("Form submitted:", formData);
        setLoading(false);
        setFormData({
          name: "",
          email: "",
          url: "",
          projectDetails: "",
        });
        navigate("/form submitted");
      }, 2000);
    } else {
      console.log("Form validation failed");
    }
  };

  const validateForm = () => {
    return (
      formData.name && formData.email && formData.url && formData.projectDetails
    );
  };

  return (
    <section className="p-8 xl:px-20 flex flex-col xl:flex-row items-center justify-between my-36">
      <div className="w-full xl:w-2/6 mb-8">
        <img src={ProposalImage} alt="Proposal" className="w-full" />
      </div>
      <div className="w-full xl:w-4/6 flex flex-col">
        <h5 className="text-right text-5xl font-bold mb-12 xl:mb-12">
          We'd love to hear <br />
          from you
        </h5>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-6 w-full xl:w-5/6 xl:self-end"
        >
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            className="rounded-lg px-8 py-4 w-full border border-faint-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className="rounded-lg px-8 py-4 w-full border border-faint-black"
          />
          <input
            type="url"
            name="url"
            placeholder="Website URL*"
            value={formData.url}
            onChange={handleChange}
            className="rounded-lg px-8 py-4 w-full border border-faint-black"
          />
          <textarea
            name="projectDetails"
            placeholder="Project Details*"
            value={formData.projectDetails}
            onChange={handleChange}
            className="rounded-lg px-8 py-4 h-36 w-full border border-faint-black"
          />
          <Button
            className={`h-16 p-8 w-full ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Send Proposal"}
          </Button>
        </form>
      </div>
    </section>
  );
};
