"use client"
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handleButtonClick = (audioFile) => {
    const audio = new Audio(`${audioFile}.mp3`);
    audio.play();
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scaleThreshold = 200;
  const scale = scrollY >= scaleThreshold ? 0.5 : 1;

  const animationVariants = {
    hidden: { opacity: 0, scale: 1, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      scale: scale,
      filter: scale === 0.5 ? "blur(4px)" : "none", // Adjust the blur amount as needed
      transition: { duration: 0.5 }
    },
  };


  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-black dark:bg-gray-dark"
      >
        <div className="flex flex-wrap items-center justify-center min-h-screen">
          <div className="w-full">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={animationVariants}
            >
              <div className="text-center">
                <div className="relative w-full overflow-hidden  rounded-xl ">
                  <motion.div className="hidden sm:block">
                    <Image
                      src="/vv.gif"
                      alt="Landing GIF"
                      layout="responsive"
                      width={100}
                      height={100}
                      quality={5}
                      loading="eager"
                    />
                  </motion.div>
                  <div className="sm:hidden">
                    <Image
                      src="/vvmob.gif"
                      alt="Mobile Landing GIF"
                      layout="responsive"
                      width={100}
                      height={100}
                      quality={5}
                      loading="eager"
                    />
                  </div>
                  <div
                    className={`absolute inset-0 bg-black opacity-50 ${scrollY > 50 ? 'filter blur-md' : ''
                      }`}
                  ></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-md p-8">
                    <h1 className="mb-8 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight mb-4">
                      التداخل الهدام والقضاء علي الضوضاء
                    </h1>
                    <div className="flex flex-row">
                      <div className="flex flex-col text-white">
                        <div
                          className="bg-gray-700 bg-opacity-75 rounded-md p-2 text-white text-center mb-2 cursor-pointer hover:bg-gray-800 transition duration-300 flex items-center justify-center"
                          onClick={() => handleButtonClick("al jazy saleh")}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            className="bi bi-play"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
                            />
                          </svg>
                          <p className="text-md font-semibold">الجازي صالح</p>
                        </div>
                        <div
                          className="bg-gray-700 bg-opacity-75 rounded-md p-2 text-white text-center mb-2 cursor-pointer hover:bg-gray-800 transition duration-300 flex items-center justify-center"
                          onClick={() => handleButtonClick("8la 7assan")}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            className="bi bi-play"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
                            />
                          </svg>
                          <p className="text-md font-semibold">غلا حسن</p>
                        </div>
                        <div
                          className="bg-gray-700 bg-opacity-75 rounded-md p-2 text-white text-center mb-2 cursor-pointer hover:bg-gray-800 transition duration-300 flex items-center justify-center"
                          onClick={() => handleButtonClick("zeina abdelaziz")}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            className="bi bi-play"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
                            />
                          </svg>
                          <p className="text-md font-semibold">زينة عبدالعزيز</p>
                        </div>
                        <div
                          className="bg-gray-700 bg-opacity-75 rounded-md p-2 text-white text-center mb-2 cursor-pointer hover:bg-gray-800 transition duration-300 flex items-center justify-center"
                          onClick={() => handleButtonClick("rafeef el 3nzy")}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            className="bi bi-play"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
                            />
                          </svg>
                          <p className="text-md font-semibold">رفيف الغنزي</p>
                        </div>
                      </div>

                      <div className="ml-2 border-2 border-gray-700 bg-opacity-75 rounded-md p-2 text-white text-center mb-2 flex justify-between items-center">
                        <p className="text-md font-bold">إعداد الطالبات</p>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="flex flex-col text-white">
                        <div
                          className="bg-gray-700 bg-opacity-75 rounded-md p-2 text-white text-center mb-2 hover:bg-gray-800 transition duration-300 flex items-center justify-center"
                        >
                          <p className="text-md font-semibold">أ.هبة عبد المجيد</p>
                        </div>
                      </div>

                      <div className="ml-2 border-2 border-gray-700 bg-opacity-75 rounded-md p-2 text-white text-center mb-2 flex justify-between items-center">
                        <p className="text-md font-bold">تحت اشراف </p>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="flex flex-col text-white">
                        <div
                          className="bg-gray-700 bg-opacity-75 rounded-md p-2 text-white text-center mb-2 hover:bg-gray-800 transition duration-300 flex items-center justify-center"
                        >
                          <p className="text-md font-semibold">أ.عواطف اِلشمري</p>
                        </div>
                      </div>

                      <div className="ml-2 border-2 border-gray-700 bg-opacity-75 rounded-md p-2 text-white text-center mb-2 flex justify-between items-center ">
                        <p className="text-md font-bold">رئيسه القسم </p>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="flex flex-col text-white">
                        <div
                          className="bg-gray-700 bg-opacity-75 rounded-md p-2 text-white text-center mb-2 hover:bg-gray-800 transition duration-300 flex items-center justify-center"
                        >
                          <p className="text-md font-semibold">أ.اعتدال المحيني</p>
                        </div>
                      </div>

                      <div className="ml-2 border-2 border-gray-700 bg-opacity-75 rounded-md p-2 text-white text-center flex justify-between items-center">
                        <p className="text-md font-bold">مديرة المدرسة </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;