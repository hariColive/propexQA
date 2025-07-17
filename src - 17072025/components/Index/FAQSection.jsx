
import React, { useState } from 'react';
import { FaMinus, FaPlus  } from 'react-icons/fa';
import {faqData} from '../../data/faqHome';

function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);
    const [viewAll, setViewAll] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    //setViewAll(!viewAll);
    //{index === 0 || openIndex === index ? ( ... ) : null}
  };
  const toggleView = () => {
    setViewAll(!viewAll);
  };

  const visibleFAQs = viewAll ? faqData : faqData.slice(0, 5);

  return (
    <div className='FAQWrap bg-[#F3F3F3] '>
        <div className='faqtitle flex mx-auto'><h1 className='flex mx-auto text-3xl font-semibold mt-8'>Frequently Asked Questions (FAQ)</h1></div>
        <div className='body-container py-8'>
        <div className="mx-auto p-4">
      {visibleFAQs.map((faq, index) => (
        <div key={faq.id} className="border-b border-solid mb-3">
          <div
            className="flex justify-between items-center bg-gray-100 p-3 cursor-pointer"
            onClick={() => toggleFAQ(index)}>
            <span className="font-semibold">{faq.question}</span>
            {openIndex === index ? <FaMinus /> : <FaPlus />}
          </div>
          {openIndex === index && (
            <div className="p-3">
               {Array.isArray(faq.answer) ? (
            <ul className="list-disc ml-5 text-gray-700">
              {faq.answer.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700">{faq.answer}</p>
          )}
            </div>
          )}
        </div>
      ))}
       <button
        onClick={toggleView}
        className="text-[#EF1284] flex mx-auto text-center text-lg font-semibold mt-2 cursor-pointer"
      >
        {viewAll ? 'View Less' : 'View More'}
      </button>
    </div>
        </div>
    </div>
  )
}

export default FAQSection
