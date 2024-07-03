"use client";

import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "What is included in the tuition?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Our tuition includes online instructor-led classes on Zoom, access to our online classroom with practice quizzes and flashcards, certification exam prep, and dedicated 1:1 coaching to help you find a full-time job in Germany.
      </div>
    ),
  },
  {
    question: "What payment options are available?",
    answer: (
      <p>
        Students can pay tuition upfront or in installments. Our goal is to make getting certified in healthcare as affordable as possible.
      </p>
    ),
  },
  {
    question: "What are the requirements to enroll?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        You need a government-issued ID, a high school or GED diploma, and a stable internet connection.
      </div>
    ),
  },
  {
    question: "What certifications do you prepare me for?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Our classes prepare you for recognized healthcare certifications in Germany.
      </div>
    ),
  },
  {
    question: "Is the program online or in-person?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        The program is 100% online, followed by an in-person unpaid internship. We have partnerships with clinics across Germany.
      </div>
    ),
  },
  {
    question: "Do you help graduates find a job?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Yes! We help graduates who complete our program and pass the certification exam find healthcare jobs in their local communities.
      </div>
    ),
  },
  {
    question: "How does your money back guarantee work?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        If you don't receive a full-time healthcare job offer within six months of completing our Career Services Program, you're eligible for a full tuition refund (minus the registration fee). Conditions apply.
      </div>
    ),
  },
  {
    question: "Do you have a partnership with certification bodies?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Yes! We are partnered with recognized certification bodies in Germany. Graduates are eligible to take certification exams after completing the program.
      </div>
    ),
  },
  {
    question: "Where can I work after completing the program?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        You will be certified to work in healthcare facilities across Germany.
      </div>
    ),
  },
];


const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
