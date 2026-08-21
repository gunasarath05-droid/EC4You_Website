import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { RotateCw, ShieldCheck, ShieldAlert } from 'lucide-react';

const Captcha = forwardRef(({ onVerify, className = '' }, ref) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState('+');
  const [userAnswer, setUserAnswer] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  // Generate new math problem
  const generateCaptcha = () => {
    setIsRotating(true);
    const ops = ['+', '+', '-', '*'];
    const chosenOp = ops[Math.floor(Math.random() * ops.length)];
    let n1, n2;

    if (chosenOp === '*') {
      n1 = Math.floor(Math.random() * 8) + 2; // 2 to 9
      n2 = Math.floor(Math.random() * 6) + 2; // 2 to 7
    } else if (chosenOp === '-') {
      n1 = Math.floor(Math.random() * 20) + 10; // 10 to 29
      n2 = Math.floor(Math.random() * (n1 - 1)) + 1; // less than n1
    } else {
      n1 = Math.floor(Math.random() * 20) + 5; // 5 to 24
      n2 = Math.floor(Math.random() * 15) + 1; // 1 to 15
    }

    setNum1(n1);
    setNum2(n2);
    setOperator(chosenOp);
    setUserAnswer('');
    setIsVerified(false);
    setHasError(false);
    if (onVerify) onVerify(false);

    setTimeout(() => setIsRotating(false), 400);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const calculateCorrect = () => {
    if (operator === '+') return num1 + num2;
    if (operator === '-') return num1 - num2;
    if (operator === '*') return num1 * num2;
    return num1 + num2;
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setUserAnswer(val);

    if (val.trim() === '') {
      setIsVerified(false);
      setHasError(false);
      if (onVerify) onVerify(false);
      return;
    }

    const parsed = parseInt(val, 10);
    const correct = calculateCorrect();

    if (!isNaN(parsed) && parsed === correct) {
      setIsVerified(true);
      setHasError(false);
      if (onVerify) onVerify(true);
    } else {
      setIsVerified(false);
      if (val.length >= String(correct).length) {
        setHasError(true);
      } else {
        setHasError(false);
      }
      if (onVerify) onVerify(false);
    }
  };

  // Expose validation methods and reset to parent via ref
  useImperativeHandle(ref, () => ({
    isValid: () => {
      const correct = calculateCorrect();
      const valid = parseInt(userAnswer, 10) === correct;
      if (!valid) {
        setHasError(true);
      }
      return valid;
    },
    reset: () => {
      generateCaptcha();
    }
  }));

  const opSymbol = operator === '*' ? '×' : operator;

  return (
    <div className={`w-full flex flex-col gap-1.5 ${className}`}>
      <div className="flex items-center justify-between gap-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
          <span>Security Verification</span>
          {isVerified ? (
            <span className="text-emerald-600 inline-flex items-center gap-1 font-bold text-[11px] normal-case">
              <ShieldCheck className="w-3.5 h-3.5" /> Verified
            </span>
          ) : hasError ? (
            <span className="text-rose-500 inline-flex items-center gap-1 font-bold text-[11px] normal-case">
              <ShieldAlert className="w-3.5 h-3.5" /> Incorrect
            </span>
          ) : (
            <span className="text-slate-400 font-normal text-[11px] normal-case">
              (Solve math puzzle)
            </span>
          )}
        </label>

        {/* Refresh button */}
        <button
          type="button"
          onClick={generateCaptcha}
          title="Get new captcha"
          className="text-slate-400 hover:text-[#509995] transition-colors p-1 rounded-lg hover:bg-slate-100 flex items-center gap-1 text-xs cursor-pointer"
        >
          <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
          <span className="hidden sm:inline">Refresh</span>
        </button>
      </div>

      <div className="flex items-stretch gap-2.5">
        {/* Math Challenge Display Badge */}
        <div className="flex-none px-4 py-2.5 bg-gradient-to-r from-[#f0f9f8] to-[#e6f4f3] border-2 border-[#509995]/30 rounded-xl flex items-center justify-center select-none shadow-inner min-w-[110px]">
          <span className="font-mono text-base sm:text-lg font-extrabold text-[#236662] tracking-wider">
            {num1} {opSymbol} {num2} = ?
          </span>
        </div>

        {/* Answer Input */}
        <div className="flex-1 relative">
          <input
            type="number"
            inputMode="numeric"
            placeholder="Enter answer"
            value={userAnswer}
            onChange={handleInputChange}
            required
            className={`w-full h-full px-4 py-2.5 text-sm sm:text-base font-semibold rounded-xl outline-none transition-all duration-200 border-2 ${
              isVerified
                ? 'border-emerald-500 bg-emerald-50/40 text-emerald-900 focus:ring-2 focus:ring-emerald-500/20'
                : hasError
                ? 'border-rose-400 bg-rose-50/40 text-rose-900 focus:ring-2 focus:ring-rose-500/20'
                : 'border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:border-[#509995] focus:ring-2 focus:ring-[#509995]/20'
            }`}
          />
          {isVerified && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600">
              <ShieldCheck className="w-5 h-5" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
});

Captcha.displayName = 'Captcha';

export default Captcha;
