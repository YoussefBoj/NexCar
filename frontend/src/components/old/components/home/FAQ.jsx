import React, { useState, useRef } from "react";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState(0);

  const accordionData = [
    {
      id: 1,
      question: "What is x-data?",
      answer: "Declare a new Alpine component and its data for a block of HTML.",
    },
    {
      id: 2,
      question: "What is x-bind?",
      answer: "Dynamically set HTML attributes on an element.",
    },
    {
      id: 3,
      question: "What is $store?",
      answer: "Access a global store registered using Alpine.store(...).",
    },
    {
      id: 4,
      question: "What is x-on?",
      answer: "Listen for browser events on an element.",
    },
  ];

  const handleClick = (id) => {
    setActiveTab((prevTab) => (prevTab === id ? 0 : id));
  };

  return (
    <div className="h-screen max-w-5xl px-2 py-3 mx-auto mt-32 tracking-wide md:px-4 md:mt-44">
      {/* Title */}
      <div className="flex justify-center text-3xl">Frequently Asked Questions</div>

      {/* Accordion */}
      <div className="grid gap-3 py-8 text-lg leading-6 text-white-800 md:gap-8 md:grid-cols-2">
        {accordionData.map(({ id, question, answer }) => (
          <Accordion
            key={id}
            id={id}
            question={question}
            answer={answer}
            isActive={activeTab === id}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

const Accordion = ({ id, question, answer, isActive, handleClick }) => {
  const contentRef = useRef(null);

  return (
    <div
      className={`relative transition-all duration-700 border rounded-xl hover:shadow-2xl ${
        isActive ? "shadow-xl" : ""
      }`}
    >
      <div
        onClick={() => handleClick(id)}
        className="w-full p-4 text-left cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <span className="tracking-wide">{question}</span>
          <span
            className={`transition-transform duration-500 transform ${
              isActive ? "-rotate-180" : ""
            }`}
          >
            <svg
              className="w-5 h-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </div>
      </div>

      <div
        ref={contentRef}
        style={{
          maxHeight: isActive
            ? `${contentRef.current?.scrollHeight}px`
            : "0px",
        }}
        className="relative overflow-hidden transition-all duration-700"
      >
        <div className="px-6 pb-4 text-white-600">{answer}</div>
      </div>
    </div>
  );
};

export default FAQ;
