import React, { useState } from "react";

const ONE =
  "https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const TWO =
  "https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const THREE =
  "https://images.pexels.com/photos/2249530/pexels-photo-2249530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FOUR =
  "https://images.pexels.com/photos/1061139/pexels-photo-1061139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const FIVE =
  "https://images.pexels.com/photos/1010973/pexels-photo-1010973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const SIX =
  "https://images.pexels.com/photos/4772874/pexels-photo-4772874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

function App() {
  return <Captcha />;
}

const Captcha = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [captcha, setCaptcha] = useState(generateCaptcha);

  function generateCaptcha() {
    const options = [ONE, TWO, THREE, FOUR, FIVE, SIX];
    const rando = Math.floor(Math.random() * options.length);

    return { options, correct: rando };
  }

  function closeModal() {
    setIsOpen(false);
    setCaptcha(generateCaptcha());
  }

  return (
    <>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="border-[1px] border-black bg-gray-200 py-2 px-1 rounded-xl shadow-[0_0_6px_rgba(0,0,0,0.5)]"
        >
          Verify that you're not chatGPT
        </button>
      ) : (
        <>
          <p className="text-center mb-2">
            Choose the picture that has {captcha.correct + 1} in it
          </p>
          <Modal captcha={captcha} closeModal={closeModal} />
        </>
      )}
    </>
  );
};

const Modal = ({ captcha, closeModal }) => {
  function handleClick(index) {
    if (index === captcha.correct) {
      closeModal();
    } else if (typeof window !== "undefined") {
      window.alert("Skynet detected 🚨");
    }
  }
  return (
    <>
      <div className="flex flex-wrap max-w-[600px]">
        {captcha.options.map((item, index) => (
          <img
            src={item}
            key={index}
            onClick={() => handleClick(index)}
            alt=""
          />
        ))}
      </div>
    </>
  );
};
export default App;
