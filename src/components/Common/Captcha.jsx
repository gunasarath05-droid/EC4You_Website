import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { RotateCw, ShieldCheck, ShieldAlert } from 'lucide-react';

// Mixed uppercase, lowercase and distinct numeric characters (excluding ambiguous: 0, O, 1, l, I)
const UPPER_POOL = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
const LOWER_POOL = 'abcdefghjkmnpqrstuvwxyz';
const NUM_POOL = '23456789';

// Diverse fonts for genuine collage aesthetic
const FONT_FAMILIES = [
  "'Georgia', serif",
  "'Courier New', monospace",
  "'Trebuchet MS', 'Lucida Sans Unicode', sans-serif",
  "'Arial Black', Gadget, sans-serif",
  "'Verdana', Geneva, sans-serif",
  "'Impact', Charcoal, sans-serif",
  "'Times New Roman', Times, serif",
];

// Vibrant Google / Security style color palette
const GOOGLE_COLORS = [
  '#4285F4', // Google Blue
  '#EA4335', // Google Red
  '#34A853', // Google Green
  '#D97706', // Amber
  '#0D9488', // Teal
  '#7C3AED', // Violet
  '#E11D48', // Crimson
  '#2563EB', // Royal Blue
  '#059669', // Emerald
  '#C2410C', // Orange
];

const Captcha = forwardRef(({ onVerify, className = '' }, ref) => {
  const [captchaCode, setCaptchaCode] = useState('');
  const [collageLetters, setCollageLetters] = useState([]);
  const [wavyPath, setWavyPath] = useState('');
  const [wavyPath2, setWavyPath2] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  // Generate Google-style collage captcha
  const generateCaptcha = () => {
    setIsRotating(true);
    let code = '';
    const items = [];
    const length = 5;

    for (let i = 0; i < length; i++) {
      // Pick random pool: mix uppercase, lowercase and numbers for rich collage look
      const poolChoice = Math.random();
      let char = '';
      if (poolChoice < 0.45) {
        char = UPPER_POOL.charAt(Math.floor(Math.random() * UPPER_POOL.length));
      } else if (poolChoice < 0.85) {
        char = LOWER_POOL.charAt(Math.floor(Math.random() * LOWER_POOL.length));
      } else {
        char = NUM_POOL.charAt(Math.floor(Math.random() * NUM_POOL.length));
      }
      code += char;

      items.push({
        char,
        fontFamily: FONT_FAMILIES[Math.floor(Math.random() * FONT_FAMILIES.length)],
        fontSize: Math.floor(Math.random() * 8) + 19, // 19px - 26px
        fontWeight: [600, 700, 800, 900][Math.floor(Math.random() * 4)],
        fontStyle: Math.random() > 0.6 ? 'italic' : 'normal',
        rot: Math.floor(Math.random() * 44) - 22, // -22deg to +22deg
        skew: Math.floor(Math.random() * 16) - 8, // -8deg to +8deg
        yOffset: Math.floor(Math.random() * 8) - 4, // -4px to +4px
        color: GOOGLE_COLORS[Math.floor(Math.random() * GOOGLE_COLORS.length)],
      });
    }

    // Dynamic wavy distortion lines
    const y1 = Math.floor(Math.random() * 20) + 12;
    const y2 = Math.floor(Math.random() * 20) + 14;
    const y3 = Math.floor(Math.random() * 20) + 10;
    const y4 = Math.floor(Math.random() * 20) + 16;
    setWavyPath(`M 0 ${y1} Q 40 ${y2} 85 ${y3} T 170 ${y4}`);
    setWavyPath2(`M 0 ${y4} Q 50 ${y1} 100 ${y2} T 170 ${y3}`);

    setCaptchaCode(code);
    setCollageLetters(items);
    setUserAnswer('');
    setIsVerified(false);
    setHasError(false);
    if (onVerify) onVerify(false);

    setTimeout(() => setIsRotating(false), 400);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setUserAnswer(val);

    const cleanInput = val.trim().toLowerCase();
    const cleanCode = captchaCode.toLowerCase();

    if (cleanInput === '') {
      setIsVerified(false);
      setHasError(false);
      if (onVerify) onVerify(false);
      return;
    }

    // Case-insensitive matching for smooth user UX
    if (cleanInput === cleanCode) {
      setIsVerified(true);
      setHasError(false);
      if (onVerify) onVerify(true);
    } else {
      setIsVerified(false);
      if (cleanInput.length >= cleanCode.length) {
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
      const valid = userAnswer.trim().toLowerCase() === captchaCode.toLowerCase();
      if (!valid) {
        setHasError(true);
      }
      return valid;
    },
    reset: () => {
      generateCaptcha();
    },
  }));

  return (
    <div className={`w-full flex flex-col gap-1.5 ${className}`}>
      <div className="flex items-center justify-between gap-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
          <span>Verification</span>
          {isVerified ? (
            <span className="text-emerald-600 inline-flex items-center gap-1 font-bold text-[11px] normal-case">
              <ShieldCheck className="w-3.5 h-3.5" /> Verified
            </span>
          ) : hasError ? (
            <span className="text-rose-500 inline-flex items-center gap-1 font-bold text-[11px] normal-case">
              <ShieldAlert className="w-3.5 h-3.5" /> Incorrect code
            </span>
          ) : (
           null
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
        {/* Google / Collage Style Challenge Display Badge */}
        <div className="flex-none px-3 sm:px-4 py-2 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] border-2 border-slate-300/80 rounded-xl flex items-center justify-center select-none shadow-inner relative overflow-hidden min-w-[140px] sm:min-w-[160px] h-[48px]">
          {/* Subtle Security Noise Pattern Background */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(#475569 1px, transparent 1px), radial-gradient(#64748b 1px, transparent 1px)',
              backgroundSize: '8px 8px',
              backgroundPosition: '0 0, 4px 4px',
            }}
          />

          {/* Curved Distortion Waves (Google / reCAPTCHA Style) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible" xmlns="http://www.w3.org/2000/svg">
            <path
              d={wavyPath}
              fill="none"
              stroke="#64748b"
              strokeWidth="1.6"
              strokeOpacity="0.45"
              strokeLinecap="round"
            />
            <path
              d={wavyPath2}
              fill="none"
              stroke="#4285F4"
              strokeWidth="1.2"
              strokeDasharray="4 3"
              strokeOpacity="0.5"
            />
          </svg>

          {/* Render Collage Styled Characters */}
          <div className="flex items-center gap-1.5 sm:gap-2 relative z-10 select-none">
            {collageLetters.map((item, idx) => (
              <span
                key={idx}
                style={{
                  fontFamily: item.fontFamily,
                  fontSize: `${item.fontSize}px`,
                  fontWeight: item.fontWeight,
                  fontStyle: item.fontStyle,
                  color: item.color,
                  transform: `translateY(${item.yOffset}px) rotate(${item.rot}deg) skewX(${item.skew}deg)`,
                  display: 'inline-block',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.12)',
                  lineHeight: '1',
                }}
              >
                {item.char}
              </span>
            ))}
          </div>
        </div>

        {/* Answer Input */}
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Enter code"
            value={userAnswer}
            onChange={handleInputChange}
            maxLength={6}
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
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


