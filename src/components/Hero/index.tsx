"use client"
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from "../Common/SectionTitle";
const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false); // Track audio playing state

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handleButtonClick = (audioFile) => {
    const audio = new Audio(`${audioFile}.mp3`);

    if (isAudioPlaying) {
      audio.pause(); // Pause the audio if it's playing
    } else {
      audio.play(); // Play the audio if it's paused
    }

    setIsAudioPlaying(!isAudioPlaying); // Toggle the audio playing state
  };
  const summary={
    para:(<p>
      هناك مشكلة يمكن أن تواجهنا فى المستقبل وهى إنتهاء الكهرباء من العالم ، وذلك بسبب أن محطات توليد الكهرباء تعمل بالوقود ( النفط ) وهو طاقة غير متجددة وغير نظيفة ، ولكى نحل هذه المشكلة لابد من استخدام طاقة نظيفة ومتجددة مثل طاقة الشمس لتوليد الكهرباء وهذا مايعرف ب(الخلايا الشمسية ).والأساس العلمى لذلك هى ظاهرة فيزيائية تحدث تسمى ( ظاهرة التأثير الكهروضوئى ).
وعليه سوف نتكلم فى الفيديوباستخدام الذكاء الإصطناعى ، عن كيفية حدوث هذه الظاهرة  وإقتراحات علماء الفيزياء فيها ، وما المشكلات التى تواجهها وكيفية التغلب عليها والإستفادة منها لكى تكون أساس توليد الكهرباء فى المستقبل .
كذلك سوف نرفق المحتوى العلمى بباركود من خلاله نتعرف على الظاهرة بخريطة ذهنية بسيطة  وعمل فيديو لتجربة بسيطة عنها .

    </p>)
  }

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
                      كهرباء المستقبل النظيفة                    </h1>
                    <div className="flex flex-row">
                      <div className="flex flex-col text-white">
                        <div
                          className="bg-gray-700 bg-opacity-75 rounded-md p-2 text-white text-center mb-2  hover:bg-gray-800 transition duration-300 flex items-center justify-center"
                        >
                          
                          <p className="text-md font-semibold"> شيخة محمد أحمد البرجس ١١ع٢</p>
                        </div>
                        <div
                          className="bg-gray-700 bg-opacity-75 rounded-md p-2 text-white text-center mb-2  hover:bg-gray-800 transition duration-300 flex items-center justify-center"
                        >
                          
                          <p className="text-md font-semibold"> رفاع نواف الرشيدى ١٢ع٥</p>
                        </div>
                        <div
                          className="bg-gray-700 bg-opacity-75 rounded-md p-2 text-white text-center mb-2  hover:bg-gray-800 transition duration-300 flex items-center justify-center"
                        >
                          
                          <p className="text-md font-semibold">زينة فهد عبدالرزاق الفهد ١١ع١</p>
                        </div>

                      </div>

                      <div className="ml-2 border-2 border-gray-700 bg-opacity-75 rounded-md p-2 text-white text-center mb-2 flex justify-between items-center">
                        <p className="text-md font-bold">إعداد الطالبات</p>
                      </div>
                    </div>
                    {/* <div className="flex flex-row">
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
                    </div> */}
                    <div onClick={() => handleButtonClick("MOLA5AS")} className='cursor-pointer'>
                      <SectionTitle
                        title=""
                        paragraph={summary.para.props.children}
                        center
                        mb="40px"
                        white />
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