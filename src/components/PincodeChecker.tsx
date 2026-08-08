import React, { useState } from 'react';
import { Truck, CheckCircle2, MapPin, Sparkles } from 'lucide-react';

export const PincodeChecker: React.FC = () => {
  const [pincode, setPincode] = useState('');
  const [result, setResult] = useState<{
    checked: boolean;
    valid: boolean;
    estimatedDays?: string;
    codAvailable?: boolean;
    message?: string;
  }>({ checked: false, valid: false });

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.length === 6 && /^\d+$/.test(pincode)) {
      setResult({
        checked: true,
        valid: true,
        estimatedDays: '2 - 3 Express Delivery Days',
        codAvailable: true,
        message: `Pincode ${pincode} is eligible for Free Express Shipping & Cash on Delivery!`
      });
    } else {
      setResult({
        checked: true,
        valid: false,
        message: 'Please enter a valid 6-digit Indian Pincode.'
      });
    }
  };

  return (
    <div className="p-4 bg-zinc-900 rounded-2xl border border-white/10 text-left space-y-2">
      <div className="flex items-center gap-1.5 text-xs font-bold text-white">
        <MapPin className="w-4 h-4 text-[#FFD600]" />
        <span>Check Delivery & COD Availability</span>
      </div>

      <form onSubmit={handleCheck} className="flex gap-2">
        <input 
          type="text" 
          maxLength={6}
          placeholder="Enter 6-digit Pincode (e.g. 400001)"
          value={pincode}
          onChange={(e) => {
            setPincode(e.target.value);
            if (result.checked) setResult({ checked: false, valid: false });
          }}
          className="flex-1 px-3 py-2 bg-[#242424] border border-white/10 rounded-xl text-xs font-medium text-white placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-[#FFD600]"
        />
        <button 
          type="submit"
          className="bg-[#FFD600] hover:bg-yellow-400 text-[#3A3A3A] font-extrabold px-4 py-2 rounded-xl text-xs transition-colors shrink-0"
        >
          Check
        </button>
      </form>

      {result.checked && (
        <div className={`text-xs p-2.5 rounded-xl border font-medium ${
          result.valid 
            ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' 
            : 'bg-red-500/10 text-red-300 border-red-500/30'
        }`}>
          {result.valid ? (
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{result.estimatedDays}</span>
              </div>
              <p className="text-[11px] text-zinc-300">{result.message}</p>
            </div>
          ) : (
            <p className="text-red-300">{result.message}</p>
          )}
        </div>
      )}
    </div>
  );
};
