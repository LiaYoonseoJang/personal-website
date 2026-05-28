import React from "react";
import profile from "../images/profile.jpg";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

function Card({ name, title, subtitle, social }) {
  const { LinkedIn, email, github } = social || {};
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
        <img
          className="w-28 h-28 mx-auto rounded-full border-4 border-gray-100 shadow-md object-cover object-top"
          src={profile}
          alt="Lia Jang profile"
        />
        <div className="text-center mt-5">
          <p className="text-2xl font-bold text-gray-900">{name}</p>
          <p className="text-base font-semibold text-indigo-600 mt-1">{title}</p>
          <p className="text-sm text-gray-500 mt-1 pb-4 border-b border-gray-100">{subtitle}</p>
          <div className="flex items-center justify-center gap-3 mt-5">
            {linkedin_url(LinkedIn)}
            {github_url(github)}
            {email_url(email)}
          </div>
        </div>
      </div>
    </div>
  );
}

function linkedin_url(url) {
  if (!url) return null;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
    >
      <FaLinkedin />
      LinkedIn
    </a>
  );
}

function github_url(url) {
  if (!url) return null;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors"
    >
      <FaGithub />
      GitHub
    </a>
  );
}

function email_url(email) {
  if (!email) return null;
  return (
    <a
      href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + email}
      className="flex items-center gap-2 px-3 py-2 border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors"
    >
      <FaRegEnvelope />
    </a>
  );
}

export default Card;
