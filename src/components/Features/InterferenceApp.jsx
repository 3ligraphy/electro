"use client"
import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

const InterferenceApp = () => {
  const [frequency1, setFrequency1] = useState(0);
  const [amplitude1, setAmplitude1] = useState(0);
  const [frequency2, setFrequency2] = useState(0);
  const [amplitude2, setAmplitude2] = useState(0);
  const [interferenceType, setInterferenceType] = useState('');

  useEffect(() => {
    // Update chart when component mounts and whenever inputs change
    updateChart();
    return () => destroyChart(); // Cleanup on component unmount
  }, [frequency1, amplitude1, frequency2, amplitude2]);

  const destroyChart = () => {
    // Destroy the existing Chart instance
    const existingChart = Chart.getChart('waveChart');
    existingChart && existingChart.destroy();
  };

  const updateChart = () => {
    // Calculate interference and update chart
    const canvas = document.getElementById('waveChart');
    const ctx = canvas.getContext('2d');

    const data = {
      labels: Array.from({ length: 360 }, (_, i) => i), // Assuming a range of 0 to 360 degrees
      datasets: [
        {
          label: 'الموجة 1',
          data: calculateWaveData(frequency1, amplitude1),
          borderColor: 'blue',
          fill: false,
        },
        {
          label: 'الموجة 2',
          data: calculateWaveData(frequency2, amplitude2),
          borderColor: 'red',
          fill: false,
        },
      ],
    };

    new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'الدرجات',
            },
          },
          y: {
            title: {
              display: true,
              text: 'السعة',
            },
          },
        },
      },
    });

    // Determine interference type and update state
    const interference = determineInterference();
    setInterferenceType(interference);
  };

  const calculateWaveData = (frequency, amplitude) => {
    // Calculate wave data for a given frequency and amplitude
    return Array.from({ length: 360 }, (_, i) => amplitude * Math.sin((i * frequency * Math.PI) / 180));
  };

  const determineInterference = () => {
    // Calculate the phase difference between the two waves
    const phaseDifference = Math.abs(frequency1 - frequency2);

    // Define a threshold for considering waves in-phase
    const inPhaseThreshold = 0.1;

    // Check if the phase difference is within the in-phase threshold
    if (phaseDifference < inPhaseThreshold) {
      // Check if the amplitudes have the same sign for constructive interference
      if ((amplitude1 > 0 && amplitude2 > 0) || (amplitude1 < 0 && amplitude2 < 0)) {
        return 'تداخل بناء';
      } else {
        return 'تداخل هدام';
      }
    } else {
      // Check if the waves are approximately out of phase for destructive interference
      const outOfPhaseThreshold = 180 - inPhaseThreshold;
      if (phaseDifference > outOfPhaseThreshold) {
        return 'تداخل هدام';
      } else {
        return 'لا يوجد تداخل';
      }
    }
  };


  return (
    <div className="flex items-center justify-center mt-8 gap-y-0 gap-x-0 bg-white rounded-lg shadow-lg p-6">
      <div className="container mx-auto">
        <div className="flex flex-col ">
          <div>
            <label className="block text-sm font-medium text-gray-700">تردد الموجة 1:</label>
            <input
              type="number"
              value={frequency1}
              onChange={(e) => setFrequency1(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">سعة الموجة 1</label>
            <input
              type="number"
              value={amplitude1}
              onChange={(e) => setAmplitude1(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">تردد الموجة 2:</label>
            <input
              type="number"
              value={frequency2}
              onChange={(e) => setFrequency2(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">سعة الموجة 2</label>
            <input
              type="number"
              value={amplitude2}
              onChange={(e) => setAmplitude2(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>

        <div className="flex flex-col mt-8 items-center justify-center ">
          <canvas id="waveChart" width={"100%"} height={"100%"}></canvas>
        <div className="mt-4">
          <p className="text-lg font-semibold">نوع التداخل: {interferenceType}</p>
        </div>
        </div>

      </div>
    </div>

  );
};

export default InterferenceApp;