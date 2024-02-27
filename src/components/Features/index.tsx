"use client"
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import DemoPage from "./InterferenceApp"
import ModalVideo from "react-modal-video";

// ... (previous imports)

const Features = () => {
  const [isOpen, setOpen] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);

  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  const scaleThreshold = 0.5; // Adjust this threshold according to your needs
  const initialScale = 0.5;
  const fullScale = 1;

  const animationVariants = {
    hidden: { opacity: 0, scale: initialScale },
    visible: { opacity: 1, scale: fullScale, transition: { duration: 0.5 } },
  };

  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-10 overflow-hidden" ref={containerRef}>
        <div className="container" ref={skillRef}>
          <motion.div
            initial="hidden"
            animate={isSkillRefInView ? "visible" : "hidden"}
            variants={animationVariants}
          >
            <motion.div>
              <SectionTitle
                title="تطبيق الذكاء الاصطناعي"
                paragraph="يمكنك من خلال هذا التطبيق حساب مدى احتياج منزلك الى الالواح الشمسية"
                center
              />
            </motion.div>
          </motion.div>
          <div ref={experienceRef}>
            <motion.div
              className="grid grid-cols-1 gap-x-8  md:grid-cols-1 lg:grid-cols-1"
              initial={{ x: "100" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: initialScale }}
                animate={isExperienceRefInView ? { opacity: 1, scale: fullScale } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div>
                  {/* <section className="relative z-10 py-16 md:py-20 lg:py-28">
                    <div className="container flex flex-wrap items-center">
                      <div className="w-full  px-4 mb-4 md:mb-0">
                        <div
                          className="mx-auto max-w-[770px] overflow-hidden rounded-md relative"
                          data-wow-delay=".15s"
                          style={{
                            height: showFullContent ? 'auto' : '400px', // Adjusted height
                            overflow: 'hidden',
                          }}
                        >
                          <div className="aspect-[77/40] items-center justify-center">
                            <Image src="/cc.png" alt="video image" fill />
                            <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                              <button
                                aria-label="video play button"
                                onClick={() => setOpen(true)}
                                className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                              >
                                <svg
                                  width="16"
                                  height="18"
                                  viewBox="0 0 16 18"
                                  className="fill-current"
                                >
                                  <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section> */}


                  <div className="flex justify-center items-center">
                    <ModalVideo
                      channel="custom"
                      autoplay={true}
                      start={true}
                      isOpen={isOpen}
                      url={'/experiment.mp4'} // Replace with the path to your local video
                      onClose={() => setOpen(false)}
                    />
                  </div>
                </div>
                <DemoPage />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
