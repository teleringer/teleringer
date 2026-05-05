"use client";

import { useState } from "react";

export default function RevenueCalculator() {
  const [missedCalls, setMissedCalls] = useState(3);
  const [jobValue, setJobValue] = useState(300);
  const [closeRate, setCloseRate] = useState(50);

  const monthlyLoss = Math.round(missedCalls * 4.33 * jobValue * (closeRate / 100));
  const annualLoss = monthlyLoss * 12;

  const fmt = (n: number) =>
    n >= 1000 ? `$${(n / 1000).toFixed(1)}K` : `$${n}`;

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Revenue Recovery Calculator
          </h2>
          <p className="text-lg text-gray-600">
            Estimate how much revenue you could be losing from missed calls.
          </p>
        </div>

        <div className="rounded-xl bg-gray-50 p-6 sm:p-10">
          <div className="space-y-8">
            <div>
              <div className="mb-2 flex justify-between">
                <label className="font-semibold text-gray-700">
                  Missed calls per week
                </label>
                <span className="font-bold text-blue-600">{missedCalls}</span>
              </div>
              <input
                type="range"
                min={1}
                max={20}
                value={missedCalls}
                onChange={(e) => setMissedCalls(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
              <div className="mt-1 flex justify-between text-sm text-gray-400">
                <span>1</span><span>20</span>
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between">
                <label className="font-semibold text-gray-700">
                  Average job value
                </label>
                <span className="font-bold text-blue-600">${jobValue}</span>
              </div>
              <input
                type="range"
                min={50}
                max={5000}
                step={50}
                value={jobValue}
                onChange={(e) => setJobValue(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
              <div className="mt-1 flex justify-between text-sm text-gray-400">
                <span>$50</span><span>$5,000</span>
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between">
                <label className="font-semibold text-gray-700">
                  Close rate
                </label>
                <span className="font-bold text-blue-600">{closeRate}%</span>
              </div>
              <input
                type="range"
                min={10}
                max={100}
                step={5}
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
              <div className="mt-1 flex justify-between text-sm text-gray-400">
                <span>10%</span><span>100%</span>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-white p-6 text-center shadow-sm">
              <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-gray-500">
                Monthly Loss
              </p>
              <p className="text-4xl font-bold text-red-500">
                {fmt(monthlyLoss)}
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 text-center shadow-sm">
              <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-gray-500">
                Annual Loss
              </p>
              <p className="text-4xl font-bold text-red-600">
                {fmt(annualLoss)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
