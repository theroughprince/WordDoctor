import 'App.css';
import React from "react";

function About(props) {
  return (
    <div className="mt-10">
      <div
        className="container my-5 text-center mb-5 pb-2 bg-light pt-5"
        id="scrollspyHeading1"
      >
        <div className="row">
          <div className="col-sm-8">
            <h2>
              <strong>What Is Words Doctor?</strong>
            </h2>
            <p className="text-start ps-4 mt-5 py-1 px-5">
              Word Doctor is a website designed specifically for writers who are
              looking for a convenient and efficient way to count their words
              and characters. Whether you're working on an essay, a novel, or a
              short story, our website makes it easy to keep track of your word
              count and character count.
            </p>
            <p className="text-start ps-4 py-1 px-5">
              One of the key features of Word Doctor is the ability to change
              the case of your text. Whether you need to convert your text to
              all uppercase, all lowercase, or title case, our website makes it
              easy to do so. This can be especially useful when you're working
              on a document that needs to adhere to specific formatting
              guidelines.
            </p>
            <p className="text-start ps-4 py-1 px-5">
              In addition to counting words and characters, Word Doctor also
              allows you to remove unnecessary whitespace from your paragraphs
              or essays. This can help to make your text more concise and easier
              to read, which can be especially beneficial when you're working on
              a longer document. And once you're happy with your text, you can
              simply copy it to use in your document.
            </p>
            <p className="text-start ps-4 py-1 px-5">
              Overall, Word Doctor is a great resource for writers of all
              levels. With its easy-to-use interface, powerful tools, and clean
              design, our website is the perfect tool for anyone who wants to
              write more efficiently and effectively. And with our commitment to
              providing plagirism free content, you can be sure that you're
              always working with original and unique material.
            </p>
          </div>
          <div className="col-sm-4 my-auto px-5">
            <img className="LogoImage pe-5" src="LOGO.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
