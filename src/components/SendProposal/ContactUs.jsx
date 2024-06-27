import ProposalImage from "../../assets/images/Side Image.svg";
import { Button } from "../Button";

export const ContactUs = () => {
  return (
    <section className="p-8 xl:px-20 flex flex-col xl:flex-row items-center justify-between my-36 ">
      <div className="w-full xl:w-2/6 mb-8">
        <img src={ProposalImage} alt="" className="w-full" />
      </div>
      <div className="w-full xl:w-4/6 flex flex-col x">
        <h5 className="text-right text-5xl font-bold mb-12 xl:mb-12">
          We'd love to hear <br />
          from you
        </h5>
        <form action="" className="flex flex-col items-center gap-6 w-full xl:w-5/6 xl:self-end">
          <input
            type="name"
            placeholder="Name*"
            className="rounded-lg px-8 py-4 w-full border border-faint-black"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email*"
            className="rounded-lg px-8 py-4 w-full border border-faint-black"
          />
          <input
            type="url"
            name=""
            id=""
            placeholder="Website URL*"
            className="rounded-lg px-8 py-4 w-full border border-faint-black"
          />
          <input
            type="text"
            placeholder="Project Details*"
            className="rounded-lg px-8 py-4 h-36 w-full border border-faint-black"
          />
          <Button className={"h-16 p-8 w-full"} children={"Send Proposal"} />
        </form>
      </div>
    </section>
  );
};
