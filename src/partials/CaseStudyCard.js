import React from "react";

const CaseStudyCard = ({
  case_study: { title, description, tags = [], link, image, buttonLabel }
}) => (
  <div className="group w-full sm:w-1/2 m-4 mx-auto p-6 rounded-xl border-2 border-gray-300 bg-black">
    <h1 className="text-3xl text-center font-bold text-cyan-200 mb-4">{title}</h1>
    {image && (
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mx-auto mb-4"
      />
    )}
    {description && (
      <p className="text-cyan-100 mb-4">{description}</p>
    )}
    {tags.length > 0 && (
      <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
        {tags.map((tag) => (
          <div
            key={tag}
            className="px-4 py-1 border-2 rounded-full border-cyan-200 text-cyan-200"
          >
            {tag}
          </div>
        ))}
      </div>
    )}
    <div className="w-full text-center">
      {link ? (
        <a
          href={link}
          className="inline-block border-2 border-white rounded-lg px-8 py-3 text-white font-semibold text-xl hover:bg-cyan-900 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          {buttonLabel || "View Case Study"}
        </a>
      ) : (
        <button
          className="inline-block border-2 border-white rounded-lg px-8 py-3 text-white font-semibold text-xl opacity-70 cursor-not-allowed"
          disabled
        >
          {buttonLabel || "Coming Soon"}
        </button>
      )}
    </div>
  </div>
);

export default CaseStudyCard;
