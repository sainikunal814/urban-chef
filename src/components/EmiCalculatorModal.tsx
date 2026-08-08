import React, { useState } from 'react';
import { X, Calculator, CheckCircle2, ShieldCheck } from 'lucide-react';

interface EmiCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  productPrice: number;
  productName: string;
}

export const EmiCalculatorModal: React.FC<EmiCalculatorModalProps> = ({
  isOpen,
  onClose,
  productPrice,
  productName,
}) => {
  if (!isOpen) return null;

  const [tenureMonths, setTenureMonths] = useState<number>(3);

  // EMI formula with ~14% annual interest rate
  const monthlyInterestRate = 0.14 / 12;
  const emi = Math.round(
    (productPrice * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureMonths)) /
    (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1)
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 font-sans">
      <div className="bg-[#242424] text-white rounded-3xl max-w-md w-full p-6 text-left shadow-2xl relative border border-white/10">
        
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[#FFD600]" />
            <h3 className="font-extrabold text-white text-base">No-Cost & Standard EMI Options</h3>
          </div>
          <button onClick={onClose} className="p-1 text-zinc-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-zinc-400 mb-3 line-clamp-1 font-medium">Item: {productName}</p>

        <div className="p-3 bg-zinc-900 rounded-2xl border border-white/10 mb-4 flex justify-between items-center">
          <span className="text-xs text-zinc-300 font-medium">Item Total Price:</span>
          <span className="text-lg font-black text-[#FFD600]">₹{productPrice.toLocaleString('en-IN')}</span>
        </div>

        <div className="space-y-3 text-xs">
          <label className="block font-bold text-zinc-200">Select Installment Tenure:</label>
          
          <div className="grid grid-cols-4 gap-2">
            {[3, 6, 9, 12].map((m) => (
              <button
                key={m}
                onClick={() => setTenureMonths(m)}
                className={`py-2 px-3 rounded-xl font-bold border transition-all text-center ${
                  tenureMonths === m 
                    ? 'bg-[#FFD600] text-[#3A3A3A] border-[#FFD600] font-extrabold shadow' 
                    : 'bg-zinc-900 text-zinc-300 border-white/10 hover:bg-zinc-800'
                }`}
              >
                {m} Months
              </button>
            ))}
          </div>

          <div className="p-4 bg-[#3A3A3A] rounded-2xl border border-white/10 text-center space-y-1">
            <div className="text-xs text-zinc-300 font-semibold">Monthly EMI Amount</div>
            <div className="text-3xl font-black text-[#FFD600]">₹{emi.toLocaleString('en-IN')} <span className="text-xs font-normal text-zinc-400">/ mo</span></div>
            <div className="text-[10px] text-emerald-400 font-bold">Zero Processing Fee on HDFC, ICICI, Axis & SBI Cards</div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-5 bg-[#FFD600] hover:bg-yellow-400 text-[#3A3A3A] font-extrabold py-3 rounded-xl text-xs shadow"
        >
          Got It, Back To Product &rarr;
        </button>

      </div>
    </div>
  );
};
