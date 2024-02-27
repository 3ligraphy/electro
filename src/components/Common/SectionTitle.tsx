"use client"
import Image from "next/image";
import ModalVideo from "react-modal-video";
import { useState } from "react";
const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  sub,
  vid,
  img,

}: {
  title: string;
  paragraph: React.ReactNode;
  width?: string;
  center?: boolean;
  mb?: string;
  sub?: boolean;
  img?: string;
  vid?: string;
},

) => {
  const [isOpen, setOpen] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        {sub ? (<div>
          <h2 className="mb-4 text-xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-[30px] text-right"
          >
            {title}
          </h2>
        </div>
        ) : (
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            {title}
          </h2>
        )}
        <p className="text-base !leading-relaxed text-body-color md:text-lg dark:text-white">
          {paragraph}
        </p>
        {img && (
          <div className="flex justify-center items-center">
            <Image
              src={img}
              width={400}
              height={200}
              alt="img1"
              className="border-2 border-black shadow-sm mt-4"
            />
          </div>
        )
        }
        {vid && (
          <div>
            <div
              className="mx-auto w-full sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px] overflow-hidden rounded-md relative"
              data-wow-delay=".15s"
              style={{
                height: showFullContent ? 'auto' : '400px', // Adjusted height
                overflow: 'hidden',
              }}
            >
              <div className="aspect-w-16 aspect-h-9">
                {/* Replace Image component with next/image */}
                <Image
                  src="/coverWavesDoc.jpg"
                  alt="video image"
                  layout="fill"
                  objectFit="contain" 
                />
                <div className  ="absolute right-0 top-0 flex h-full w-full items-center justify-center">
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


            <div className="flex justify-center items-center">
              <ModalVideo
                channel="custom"
                autoplay={true}
                start={true}
                isOpen={isOpen}
                url={vid} // Replace with the path to your local video
                onClose={() => setOpen(false)}
              />
            </div>
          </div>
        )
        }
      </div>
    </>
  );
};

export default SectionTitle;
