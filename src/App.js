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
          className="border-[1px] border-black bg-gray-200 py-2 px-1"
        >
          Verify that you're not chatGPT
        </button>
      ) : (
        <>
          <>Choose the picture that has {captcha.correct + 1} in it</>
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

// <!-- Bu soru, kullanıcıya CAPTCHA testi sormak için bir bileşen oluşturmanızı gerektiriyor. CAPTCHA, genellikle otomatik botlardan ayırt edebilmek için kullanılan görsel veya metinsel zorluklardır.

// Başlangıç kodunda altı farklı resmin URL'sini (1'den 6'ya kadar olan sayıların resimleri) bulacaksınız. Bileşen, bir buton renderlamalıdır. Bu butona tıklandığında, altı resim görüntülenmeli ve kullanıcıdan bu resimlerden birini seçmesi istenmelidir. Seçilmesi gereken sayı, her butona tıklandığında rastgele olarak belirlenmelidir.

// Eğer kullanıcı doğru resmi seçerse, bileşen başlangıç durumuna dönmelidir ve sadece bir buton ve kapalı bir modal görüntülenmelidir.

// Ancak eğer kullanıcı yanlış resmi seçerse, tarayıcıda bir uyarı mesajı görüntülenmelidir. Modal penceresi açık kalmalı ve kullanıcının tekrar denemesi için beklemelidir.

// Bu bileşeni oluştururken, kullanıcıların resmi seçmelerini ve doğru/yanlış seçimleri ele alan bir mantık eklemeyi unutmayın. Aynı zamanda, bileşenin beklenen görünümünü ve davranışını gösteren `interview3.png` adlı resme de göz atabilirsiniz.
//  -->
