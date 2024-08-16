import React, { useState } from 'react';

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };

  return (
    <div className=" md:w-3/5 mx-auto text-white py-20 px-8" >
      <div className="container mx-auto text-center">
        <h2 className="mb-[-100px] text-[100px] text-[#ffffff]/[30%] prata-font">P</h2>
        <h2 className="text-[40px] mb-4 prata-font">Popular Questions</h2>
        <p className="mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
        <div className="">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4 border-b-2 border-white">
              <button
                className="w-full text-left py-4 flex gap-4 items-center"
                onClick={() => toggleQuestion(index)}
              >
                <span className='text-4xl' >{openQuestion === index ? '-' : '+'}</span>
                <h3 className="text-2xl prata-font">{faq.question}</h3>
                
              </button>
              {openQuestion === index && (
                <p className="text-white text-left ml-7 text-lg">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "When does the course start and finish?",
    answer: "Lorem ipsum dolor sit amet, vis an nihil tation doctus, mel ne iriure accumsan evertitur. Te omnes repudiare pri, dolores appetere incorrupte id nam. Mundi doctus mel ad, modo tempor iudicabit vix eu. Duo adhuc noluisse incorrupte."
  },
  {
    question: "How long do I have access to the course?",
    answer: "Lorem ipsum dolor sit amet, vis an nihil tation doctus, mel ne iriure accumsan evertitur."
  },
  {
    question: "What type of writing courses are available?",
    answer: "Lorem ipsum dolor sit amet, vis an nihil tation doctus, mel ne iriure accumsan evertitur."
  },
  {
    question: "What if I'm unhappy with the course?",
    answer: "Lorem ipsum dolor sit amet, vis an nihil tation doctus, mel ne iriure accumsan evertitur."
  },
  {
    question: "Why take an online writing course?",
    answer: "Lorem ipsum dolor sit amet, vis an nihil tation doctus, mel ne iriure accumsan evertitur."
  }
];

export default FAQSection;
