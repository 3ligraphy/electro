"use client"
import { AnimatePresence, motion } from "framer-motion";
import { RadioGroup } from "@headlessui/react";
import Link from "next/link";
import { useRef, useState, useEffect, useCallback, use } from "react";

import Image from 'next/image';
const questions = [
  {
    id: 1,
    name: "وحدة سكنية",
    description: "منزل،قصر او فيلا"
  },
  {
    id: 2,
    name: "الاستخدام صناعي",
    description: "مساحات واسعة وللاستخدامات الثقيلة",
  },

];




export default function DemoPage() {
  const [selected, setSelected] = useState(questions[0]);


  const [step, setStep] = useState(1);

  const [area, setArea] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [devices, setDevices] = useState(0);
  const [showError, setShowError] = useState(false);


  const [totalEnergyConsumption, settotalEnergyConsumption] = useState(0);
  const [solarPanelEfficiency, setsolarPanelEfficiency] = useState(0);
  const [requiredSolarPanelWatts, setrequiredSolarPanelWatts] = useState(0);
  const [panelType, setpanelType] = useState('')
  const [avgSolarPanelWatts, setAvgSolarPanelWatts] = useState(0);

  // Example calculation logic
  const avgEnergyPerArea = 10; // Example value in watts per square meter/month
  const avgEnergyPerRoom = 500; // Example value in watts/month
  const avgEnergyPerDevice = 1000; // Example value in watt/month

  const avgDailySunlightHours = 12; // Example value
  const [panelWidth, setPanelWidthh] = useState(0);
  const [panelHeight, setPanelHeightt] = useState(0);
  const [gridWidth, setPanelWidth] = useState(0);
  const [gridHeight, setPanelHeight] = useState(0);
  const [DailycoveragePercentage, setDailycoveragePercentage] = useState(0);

  const avgEnergyPerIndustrialArea = 20;
  const avgEnergyPerIndustrialMachine = 2000;
  const [machines, setMachines] = useState(0);
  const [activeHrs, setActiveHrs] = useState(0);
  const [industrialArea, setIndrustialArea] = useState(0);
  const [panelSize, setpanelSize] = useState('');
  const [NumofPanels, setNumofPanels] = useState(0);

  // Example value in watts per square meter/month


  //  step === 2 ? (
  //   step === 2 && selected.name==="Home" ? (
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }


  return (
    <>

      <AnimatePresence>
        {step === 3 ? (



          <div className="w-full  md:flex md:flex-col md:w-1/2  flex flex-col px-4 pt-2 pb-8  bg-[#FCFCFC] justify-center md:m-auto md:rounded-lg rounded-lg" >
            <div >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                key="step-3"
                transition={{
                  duration: 0.95,
                  ease: [0.165, 0.84, 0.44, 1],
                }}
                className="w-full flex flex-col md:w-full md:flex md:flex-col  bg-[#FCFCFC] justify-center"
              >
                <div >
                  <div className="max-w-lg mx-auto px-4 lg:px-0 mt-16 lg:mt-16">
                    <h2 className="text-4xl font-bold text-[#1E2B3A]">حاسبة الطاقة الشمسية</h2>
                    <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal my-4">
                      تقدير احتياجات الألواح الشمسية
                    </p>
                    <div className="space-y-4">
                      {selected.name === "وحدة سكنية" && (
                        <Image src="/home.jpeg" alt="Home Image" className="max-w-full h-auto" width={800} height={600} />
                      )}

                      {selected.name === "الاستخدام صناعي" && (
                        <Image src="/factory.jpg" alt="Industrial Image" className="max-w-full h-auto" width={800} height={600} />
                      )}
                      <div>
                        <label className="text-gray-900 font-medium block">استهلاك الطاقة المقدر للمنشأة</label>
                        <p className="text-[#1a2b3b] font-normal">{(totalEnergyConsumption)} كيلووات في الشهر</p>
                      </div>
                      <div>
                        <label className="text-gray-900 font-medium block">قدرة الوحدة الفردية للوحة الشمسية</label>
                        <p className="text-[#1a2b3b] font-normal">{avgSolarPanelWatts} </p>
                      </div>
                      <div>
                        <label className="text-gray-900 font-medium block">الإنتاج الشهري للوحة الشمسية بالكيلوواط ساعة</label>
                        <p className="text-[#1a2b3b] font-normal">{(requiredSolarPanelWatts) / 1000} </p>
                      </div>
                      <div>
                        <label className="text-gray-900 font-medium block">نوع الوحة الشمسية</label>
                        <p className="text-[#1a2b3b] font-normal">{panelType}</p>
                      </div>
                      <div>
                        <label className="text-gray-900 font-medium block">تغطية يومية</label>
                        <p className="text-[#1a2b3b] font-normal">{(DailycoveragePercentage).toFixed(2)}%</p>
                      </div>
                      <div>
                        <label className="text-gray-900 font-medium block">أبعاد الوحة الشمسية</label>
                        <p className="text-[#1a2b3b] font-normal">{gridWidth} x {gridHeight} شبكة بمقاس , {panelWidth} بوصة  x {panelHeight} بوصة  </p>
                      </div>
                      <div>
                        <label className="text-gray-900 font-medium block">كفاءة الوحة الشمسية</label>
                        <p className="text-[#1a2b3b] font-normal">{(solarPanelEfficiency * 100).toFixed(2)}%</p>
                      </div>
                      {NumofPanels !== 0 && (
                        <div>
                          <label className="text-gray-900 font-medium block">مقاس الوحة</label>
                          <p className="text-[#1a2b3b] font-normal">{NumofPanels}</p>
                        </div>
                      )}




                    </div>
                    <div className="flex gap-[15px] justify-end mt-8 mb-8">
                      <div>
                        <button
                          onClick={() => {
                            settotalEnergyConsumption(0);
                            setAvgSolarPanelWatts(0);
                            setrequiredSolarPanelWatts(0);
                            setpanelType("");
                            setDailycoveragePercentage(0);
                            setPanelHeight(0)
                            setPanelHeightt(0);
                            setPanelWidthh(0);
                            setsolarPanelEfficiency(0);
                            settotalEnergyConsumption(0);
                            setsolarPanelEfficiency(0);
                            setpanelType("");
                            setPanelWidth(0);
                            setPanelHeight(0);
                            setPanelWidthh(0);
                            setPanelHeightt(0);
                            setpanelSize("");
                            setNumofPanels(0);

                            setStep(2)

                          }}
                          className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 duration-75"
                          style={{ boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724" }}
                        >
                          الرجوع للخطوة السابقة
                        </button>
                      </div>

                      <div>
                        <button
                          onClick={() => {
                            settotalEnergyConsumption(0);
                            setAvgSolarPanelWatts(0);
                            setrequiredSolarPanelWatts(0);
                            setpanelType("");
                            setDailycoveragePercentage(0);
                            setPanelHeight(0)
                            setPanelHeightt(0);
                            setPanelWidthh(0);
                            setsolarPanelEfficiency(0);
                            settotalEnergyConsumption(0);
                            setsolarPanelEfficiency(0);
                            setpanelType("");
                            setPanelWidth(0);
                            setPanelHeight(0);
                            setPanelWidthh(0);
                            setPanelHeightt(0);
                            setpanelSize("");
                            setNumofPanels(0);

                            setStep(1)
                          }}
                          className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2 active:scale-95 scale-100 duration-75"
                          style={{ boxShadow: "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)" }}
                        >
                          <span>ابدأ من جديد</span>

                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        ) : (
          <div className="flex flex-col md:flex-row w-full md:overflow-hidden mt-16">
            <div className="flex md:max-w-xl md:rounded-lg md:shadow-lg md:w-3/4 bg-[#FCFCFC] justify-center md:m-auto p-8 md:min-h-xl min-h-xl">
              <div className="h-full w-full flex items-center justify-center flex-col">

                {step === 1 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    key="step-1"
                    transition={{
                      duration: 0.95,
                      ease: [0.165, 0.84, 0.44, 1],
                    }}
                    className="max-w-lg mx-auto px-4 lg:px-0 mt-16 lg:mt-0"
                  >
                    <h2 className="text-4xl font-bold text-[#1E2B3A]">
                      اختيار المنشأة
                    </h2>
                    <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal my-4">
                      اختر نوع المنشأة لزراعة خلية شمسية مناسبة
                    </p>
                    <div>
                      <RadioGroup value={selected} onChange={setSelected}>
                        <RadioGroup.Label className="sr-only">
                          Server size
                        </RadioGroup.Label>
                        <div className="space-y-4">
                          {questions.map((question) => (
                            <RadioGroup.Option
                              key={question.name}
                              value={question}
                              className={({ checked, active }) =>
                                classNames(
                                  checked
                                    ? "border-transparent"
                                    : "border-gray-300",
                                  active
                                    ? "border-blue-500 ring-2 ring-blue-200"
                                    : "",
                                  "relative cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none flex justify-between"
                                )
                              }
                            >
                              {({ active, checked }) => (
                                <>
                                  <span className="flex items-center">
                                    <span className="flex flex-col text-sm">
                                      <RadioGroup.Label
                                        as="span"
                                        className="font-medium text-gray-900"
                                      >
                                        {question.name}
                                      </RadioGroup.Label>
                                      <RadioGroup.Description
                                        as="span"
                                        className="text-gray-500"
                                      >
                                        <span className="block">
                                          {question.description}
                                        </span>
                                      </RadioGroup.Description>
                                    </span>
                                  </span>
                                  <RadioGroup.Description
                                    as="span"
                                    className="flex text-sm ml-4 mt-0 flex-col text-right items-center justify-center"
                                  >
                                    <span className=" text-gray-500">
                                      {question.id === 1 ? (
                                        <svg
                                          className="h-full w-[27px]"
                                          viewBox="0 0 495.398 495.398"
                                          fill="#000000"
                                          xmlns="http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"
                                        >
                                          <g>
                                            <g>
                                              <g>
                                                <path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391
                                                    v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158
                                                    c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747
                                                    c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"/>
                                                <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401
                                                    c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79
                                                    c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"/>
                                              </g>
                                            </g>
                                          </g>
                                        </svg>
                                      ) : (
                                        <svg
                                          className="h-full w-[30px]"
                                          viewBox="0 0 419.891 419.891"
                                          fill="#000000"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g>
                                            <path d="M90.214,105.033c5.514,0,10.699-2.147,14.598-6.047c1.916-1.915,3.416-4.155,4.443-6.61
                                                  c7.85-0.185,15.2-3.326,20.765-8.893c4.397-4.396,7.29-9.935,8.396-15.95c8.382-0.414,16.205-3.876,22.182-9.854
                                                  c13.173-13.173,13.173-34.608,0-47.783C154.217,3.515,145.732,0,136.707,0s-17.51,3.515-23.892,9.896
                                                  c-5.98,5.98-9.442,13.867-9.855,22.183c-6.015,1.105-11.552,3.999-15.948,8.396c-7.131,7.131-10.191,17.121-8.434,26.855
                                                  c-1.055,0.722-2.044,1.543-2.962,2.46c-3.899,3.899-6.047,9.084-6.047,14.599s2.147,10.699,6.047,14.599
                                                  C79.515,102.886,84.699,105.033,90.214,105.033z"/>
                                            <path d="M365.948,156.804c-1.278,0-3.212,0.409-5.161,2.358l-71.623,71.622v-66.915c0-4.639-3.12-7.065-6.202-7.065
                                                  c-1.278,0-3.212,0.409-5.161,2.358l-70.703,70.702v-65.995c0-4.639-3.12-7.065-6.202-7.065c-1.279,0-3.212,0.409-5.162,2.358
                                                  l-62.785,62.784V130.39c0-5.514-4.486-10-10-10H57.74c-5.514,0-10,4.486-10,10v279.501c0,5.514,4.486,10,10,10h304.412
                                                  c5.514,0,10-4.486,10-10V163.869C372.151,159.23,369.031,156.804,365.948,156.804z M147.244,353.862H86.008v-54.318h61.237V353.862
                                                  z M240.563,353.862h-61.237v-54.318h61.237V353.862z M333.883,353.862h-61.237v-54.318h61.237V353.862z"/>
                                          </g>
                                        </svg>
                                      )}
                                    </span>

                                  </RadioGroup.Description>
                                  <span
                                    className={classNames(
                                      active ? "border" : "border-2",
                                      checked
                                        ? "border-blue-500"
                                        : "border-transparent",
                                      "pointer-events-none absolute -inset-px rounded-lg"
                                    )}
                                    aria-hidden="true"
                                  />
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex gap-[15px] justify-end mt-8">
                      <div>
                        <Link
                          href="/"
                          className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 duration-75"
                          style={{
                            boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",
                          }}
                        >
                          الرجوع للصفحة الرئيسية
                        </Link>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            setStep(2);
                            console.log("selection:", selected.name);

                          }}
                          className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
                          style={{
                            boxShadow:
                              "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          <span> تقدم </span>
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.75 6.75L19.25 12L13.75 17.25"
                              stroke="#FFF"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M19 12H4.75"
                              stroke="#FFF"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : step === 2 ? (
                  step === 2 && selected.id === 1 ? (
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -40 }}
                      key="step-2"
                      transition={{
                        duration: 0.95,
                        ease: [0.165, 0.84, 0.44, 1],
                      }}
                      className="max-w-lg mx-auto px-4 lg:px-0 mt-16 lg:mt-0"
                    >
                      <h2 className="text-4xl font-bold text-[#1E2B3A]">
                        ادخل التفاصيل الوحدة
                      </h2>
                      <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal my-4">
                        ادخل البيانات التالية لمعرفة الوحدة الشمسية المناسبة:
                      </p>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="area" className="text-gray-900 font-medium block ">مساحة المنزل</label>
                          <input
                            type="number"
                            id="area"
                            name="area"
                            placeholder="Enter area in square meter"
                            className="border-gray-300 rounded-lg border px-4 py-2 focus:outline-none focus:border-blue-500 w-full"

                            value={area}
                            onChange={(e) => setArea(parseInt(e.target.value))}
                          />

                        </div>
                        <div>
                          <label htmlFor="rooms" className="text-gray-900 font-medium block">عدد الغرف</label>
                          <input
                            type="number"
                            id="rooms"
                            name="rooms"
                            placeholder="Enter number of rooms"
                            className="border-gray-300 rounded-lg border px-4 py-2 focus:outline-none focus:border-blue-500 w-full"

                            value={rooms}
                            onChange={(e) => setRooms(parseInt(e.target.value))}

                          />
                        </div>
                        <div>
                          <label htmlFor="devices" className="text-gray-900 font-medium block">عدد الجهزة المستهلكة للطاقة</label>
                          <input
                            type="number"
                            id="devices"
                            name="devices"
                            placeholder="Enter number of heavy devices"
                            className="border-gray-300 rounded-lg border px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
                            value={devices}
                            onChange={(e) => setDevices(parseInt(e.target.value))}
                          />
                        </div>
                      </div>

                      <div className="flex gap-[15px] justify-end mt-8">
                        <div>
                          <button
                            onClick={() => setStep(1)}
                            className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 duration-75"
                            style={{
                              boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",
                            }}
                          >
                            الرجوع للخطوة السابقة
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() => {
                              if (area !== 0 && rooms !== 0) {
                                // Calculate total energy consumption
                                const totalEnergyConsumption = (area * avgEnergyPerArea + rooms * avgEnergyPerRoom + devices * avgEnergyPerDevice) / 10;

                                // Calculate solar panel efficiency based on the number of rooms and devices
                                let solarPanelEfficiency = 0;
                                if (rooms <= 2 && devices <= 3) {
                                  solarPanelEfficiency = 0.18; // Example value for low energy consumption
                                } else if (rooms <= 4 && devices <= 7) {
                                  solarPanelEfficiency = 0.20; // Example value for moderate energy consumption
                                } else {
                                  solarPanelEfficiency = 0.22; // Example value for high energy consumption
                                }


                                // Assume average wattage per solar panel
                                let panelType = "";
                                if (totalEnergyConsumption <= 500) {
                                  panelType = "60-cell";
                                } else if (totalEnergyConsumption <= 1000) {
                                  panelType = "72-cell";

                                } else {
                                  panelType = "96-cell";
                                }

                                // Determine the panel dimensions and grid size based on the panel type
                                let panelWidth = 0;
                                let panelHeight = 0;
                                let gridWidth = 0;
                                let gridHeight = 0;
                                if (panelType === "60-cell") {
                                  panelWidth = 39; // Convert feet to inches
                                  panelHeight = 66; // Convert feet to inches
                                  gridWidth = 6;
                                  gridHeight = 10;
                                } else if (panelType === "72-cell") {
                                  panelWidth = 39; // Convert feet to inches
                                  panelHeight = 77; // Convert feet to inches
                                  gridWidth = 6;
                                  gridHeight = 12;
                                } else {
                                  panelWidth = 41.5; // inches
                                  panelHeight = 62.6; // inches
                                  gridWidth = 8;
                                  gridHeight = 12;
                                }

                                // Update state variables
                                settotalEnergyConsumption(totalEnergyConsumption);
                                setsolarPanelEfficiency(solarPanelEfficiency);
                                setpanelType(panelType);
                                setPanelWidth(gridWidth);
                                setPanelHeight(gridHeight);
                                setPanelWidthh(panelWidth);
                                setPanelHeightt(panelHeight);


                                // Calculate average solar panel watts based on total energy consumption
                                let avgSolarPanelWatts = 0;
                                if (totalEnergyConsumption < 500) {
                                  avgSolarPanelWatts = 250; // Example value
                                } else if (totalEnergyConsumption < 1000) {
                                  avgSolarPanelWatts = 300; // Example value
                                } else if (totalEnergyConsumption < 1500) {
                                  avgSolarPanelWatts = 400; // Example value
                                } else {
                                  avgSolarPanelWatts = 500; // Example value
                                }
                                setAvgSolarPanelWatts(avgSolarPanelWatts);

                                const avgDailySunlightHours = 12; // Example value
                                const requiredSolarPanelWatts = avgSolarPanelWatts * avgDailySunlightHours;
                                setrequiredSolarPanelWatts(requiredSolarPanelWatts);

                                const DailycoveragePercentage = (requiredSolarPanelWatts / 1000) / (totalEnergyConsumption / 30) * 100;
                                setDailycoveragePercentage(DailycoveragePercentage);


                                setStep(3);
                              } else {
                                alert('Please fill in all the fields.'); // Alert if any of the fields are empty

                              }

                            }}
                            className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
                            style={{
                              boxShadow:
                                "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
                            }}
                          >
                            <span> تقدم </span>
                            <svg
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.75 6.75L19.25 12L13.75 17.25"
                                stroke="#FFF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M19 12H4.75"
                                stroke="#FFF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </motion.div>) : (
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -40 }}
                      key="step-2"
                      transition={{
                        duration: 0.95,
                        ease: [0.165, 0.84, 0.44, 1],
                      }}
                      className="max-w-lg mx-auto px-4 lg:px-0 mt-16 lg:mt-0"
                    >
                      <h2 className="text-4xl font-bold text-[#1E2B3A]">
                        ادخل التفاصيل الوحدة

                      </h2>
                      <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal my-4">
                        ادخل البيانات التالية لمعرفة الوحدة الشمسية المناسبة:

                      </p>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="area" className="text-gray-900 font-medium block ">المساحة </label>
                          <input
                            type="number"
                            id="industrialArea"
                            name="industrialArea"
                            placeholder="Enter area in square meter"
                            className="border-gray-300 rounded-lg border px-4 py-2 focus:outline-none focus:border-blue-500 w-full"

                            value={industrialArea}
                            onChange={(e) => setIndrustialArea(parseInt(e.target.value))}
                          />

                        </div>
                        <div>
                          <label htmlFor="machines" className="text-gray-900 font-medium block">عدد المكنات الثقيلة /الاجهزة الكهربية</label>
                          <input
                            type="number"
                            id="machines"
                            name="machines"
                            placeholder="Enter number of machines"
                            className="border-gray-300 rounded-lg border px-4 py-2 focus:outline-none focus:border-blue-500 w-full"

                            value={machines}
                            onChange={(e) => setMachines(parseInt(e.target.value))}

                          />
                        </div>
                        <div>
                          <label htmlFor="ActiveHours" className="text-gray-900 font-medium block">عدد ساعات العمل</label>
                          <input
                            type="number"
                            id="ActiveHours"
                            name="ActiveHours"
                            placeholder="Enter number of Active Hours"
                            className="border-gray-300 rounded-lg border px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
                            value={activeHrs}
                            onChange={(e) => setActiveHrs(parseInt(e.target.value))}
                          />
                        </div>
                      </div>

                      <div className="flex gap-[15px] justify-end mt-8">
                        <div>
                          <button
                            onClick={() => setStep(1)}
                            className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 duration-75"
                            style={{
                              boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",
                            }}
                          >
                            الرجوع للخطوة السابقة
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() => {
                              if (industrialArea !== 0 && machines !== 0 && activeHrs !== 0) {
                                // Calculate total energy consumption
                                const totalEnergyConsumption = industrialArea * avgEnergyPerIndustrialArea + machines * avgEnergyPerRoom * activeHrs;

                                // Calculate solar panel efficiency based on the number of rooms and devices

                                let panelType = "";
                                let solarPanelEfficiency = 0;


                                if (totalEnergyConsumption <= 15000) {
                                  panelType = "Thin-Film";
                                  solarPanelEfficiency = 0.12; // Example efficiency for Thin-Film panels
                                } else if (totalEnergyConsumption <= 25000) {
                                  panelType = "Polycrystalline Silicon";
                                  solarPanelEfficiency = 0.17; // Example efficiency for Polycrystalline Silicon panels
                                } else if (totalEnergyConsumption <= 35000) {
                                  panelType = "Monocrystalline Silicon";
                                  solarPanelEfficiency = 0.22; // Example efficiency for Monocrystalline Silicon panels
                                } else {
                                  panelType = "Perovskite";
                                  solarPanelEfficiency = 0.25; // Example efficiency for Perovskite panels
                                }

                                let panelSize = '';
                                let NumofPanels = 0;
                                // Determine the panel dimensions and grid size based on the panel type
                                let panelWidth = 0;
                                let panelHeight = 0;
                                let gridWidth = 0;
                                let gridHeight = 0;
                                if (totalEnergyConsumption <= 16000) {
                                  panelWidth = 39; // Convert feet to inches
                                  panelHeight = 66; // Convert feet to inches
                                  gridWidth = 8;
                                  gridHeight = 10;
                                  panelSize = '72-cell';
                                } else if (totalEnergyConsumption <= 25000) {
                                  panelWidth = 41.5; // inches
                                  panelHeight = 62.6; // inches
                                  gridWidth = 8;
                                  gridHeight = 12;
                                  panelSize = '96-cell ';

                                } else {
                                  panelWidth = 41.5; // inches
                                  panelHeight = 62.6; // inches
                                  gridWidth = 12;
                                  gridHeight = 16;
                                  panelSize = '144-cell ';

                                }

                                // Update state variables
                                settotalEnergyConsumption(totalEnergyConsumption);
                                setsolarPanelEfficiency(solarPanelEfficiency);
                                setpanelType(panelType);
                                setPanelWidth(gridWidth);
                                setPanelHeight(gridHeight);
                                setPanelWidthh(panelWidth);
                                setPanelHeightt(panelHeight);
                                setpanelSize(panelSize);


                                // Calculate average solar panel watts based on total energy consumption
                                let avgSolarPanelWatts = 0;
                                if (totalEnergyConsumption < 15000) {
                                  avgSolarPanelWatts = 300; // Example value
                                } else if (totalEnergyConsumption < 25000) {
                                  avgSolarPanelWatts = 450; // Example value
                                } else if (totalEnergyConsumption < 35000) {
                                  avgSolarPanelWatts = 400; // Example value
                                } else {
                                  avgSolarPanelWatts = 500; // Example value
                                }
                                setAvgSolarPanelWatts(avgSolarPanelWatts);

                                if (totalEnergyConsumption > avgSolarPanelWatts) {
                                  NumofPanels++;
                                  setAvgSolarPanelWatts(avgSolarPanelWatts * NumofPanels);
                                }

                                setNumofPanels(NumofPanels);

                                const avgDailySunlightHours = 12; // Example value
                                const requiredSolarPanelWatts = avgSolarPanelWatts * avgDailySunlightHours;
                                setrequiredSolarPanelWatts(requiredSolarPanelWatts);

                                const DailycoveragePercentage = (requiredSolarPanelWatts / 1000) / (totalEnergyConsumption / 30) * 100;
                                setDailycoveragePercentage(DailycoveragePercentage);


                                setStep(3);
                              } else {
                                alert('Please fill in all the fields.'); // Alert if any of the fields are empty

                              }

                            }}
                            className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
                            style={{
                              boxShadow:
                                "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
                            }}
                          >
                            <span> تقدم </span>
                            <svg
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.75 6.75L19.25 12L13.75 17.25"
                                stroke="#FFF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M19 12H4.75"
                                stroke="#FFF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </motion.div>

                  )

                ) : (
                  <div>Error</div>

                )}
              </div>
            </div>

          </div>
        )}
      </AnimatePresence>
    </>
  );
}
