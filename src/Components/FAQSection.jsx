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
    <div className="container mx-auto text-center md:w-3/5 mx-auto text-white py-20 px-8" >
        <div className="mb-8 mx-auto text-center"> 
          <h2 className="title-letter text-[#ffffff]/[30%] font-prata">P</h2>
          <h2 className="font-semibold mb-4 font-prata text-white">Popular Questions</h2>
          <p className="text-white mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        </div>
       
        <div className="">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4 border-b-2 border-white">
              <button
                className="w-full text-left py-4 flex gap-4 items-center"
                onClick={() => toggleQuestion(index)}
              >
                <span className='text-4xl' >{openQuestion === index ? '-' : '+'}</span>
                <h3 className="text-2xl font-prata">{faq.question}</h3>
                
              </button>
              {openQuestion === index && (
                <p className="text-white text-left text-lg mb-3">{faq.answer}</p>
              )}
            </div>
          ))}
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
