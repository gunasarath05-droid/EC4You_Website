import { useState, useRef } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';
import Captcha from '../../../components/Common/Captcha';
import { submitFormData } from '../../../services/formService';
import form_img from '../../../Image/careers/form.png';

function CustomSelect({ placeholder, options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative border-b border-[#669999]/30 pb-1">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center bg-transparent py-1.5 text-sm md:text-md text-[#509995] outline-none text-left cursor-pointer"
      >
        <span className={value ? 'text-[#509995] font-medium' : 'text-[#509995]/70'}>
          {value || placeholder}
        </span>
        <svg 
          className={`w-4 h-4 text-[#509995] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop to close on outside click */}
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />

          {/* Styled Dropdown Menu */}
          <div className="absolute left-0 right-0 top-full mt-1 z-20 bg-white border border-gray-400 shadow-xl overflow-hidden rounded-sm">
            {/* Blue Banner Header — matches screenshot */}
            <div className="bg-[#669999] text-white px-4 py-2.5 text-sm md:text-md font-semibold">
              {placeholder}
            </div>

            {/* Options */}
            <div className="py-1">
              {options.map((opt) => (
                <div
                  key={opt}
                  onClick={() => {
                    onChange(opt);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-2.5 text-sm md:text-md cursor-pointer transition-colors ${
                    value === opt 
                      ? 'bg-[#509995]/90 font-semibold text-white' 
                      : 'text-gray-800 hover:bg-[#509995]/20'
                  }`}
                >
                  {opt}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function Form() {
  const [fileObj, setFileObj] = useState(null);
  const [fileName, setFileName] = useState('No file chosen');
  const [jobType, setJobType] = useState('');
  const [jobIntern, setJobIntern] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
  });
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const captchaRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Max 10MB check
      if (file.size > 10 * 1024 * 1024) {
        alert('File size exceeds 10MB limit. Please upload a smaller file.');
        e.target.value = '';
        setFileObj(null);
        setFileName('No file chosen');
        return;
      }
      setFileObj(file);
      setFileName(file.name);
    } else {
      setFileObj(null);
      setFileName('No file chosen');
    }
  };

  const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (captchaRef.current && !captchaRef.current.isValid()) {
      alert('Please solve the security verification puzzle correctly.');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    let fileData = null;
    let uploadedFileName = null;
    let mimeType = null;

    if (fileObj) {
      try {
        fileData = await readFileAsBase64(fileObj);
        uploadedFileName = fileObj.name;
        mimeType = fileObj.type;
      } catch (err) {
        console.error('Error reading file:', err);
      }
    }

    const result = await submitFormData({
      formType: 'Career Application',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      jobType: jobType || 'Not Specified',
      jobIntern: jobIntern || 'Job',
      fileData: fileData,
      fileName: uploadedFileName,
      mimeType: mimeType,
      message: formData.description,
    });

    setIsSubmitting(false);

    if (result.success) {
      setStatusMessage({
        type: 'success',
        text: 'Thank you! Your career application & resume have been uploaded successfully.',
      });
      setFormData({ name: '', email: '', phone: '', description: '' });
      setJobType('');
      setJobIntern('');
      setFileObj(null);
      setFileName('No file chosen');
      if (captchaRef.current) captchaRef.current.reset();
      setIsCaptchaValid(false);
      setTimeout(() => setStatusMessage(null), 5000);
    } else {
      setStatusMessage({
        type: 'error',
        text: result.message || 'Failed to submit application. Please try again.',
      });

    }
  };

  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto bg-[#e0f5f5] rounded-[1.5rem] md:rounded-[2.5rem] p-4 sm:p-8 md:p-14 relative overflow-hidden">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* Left: Illustration */}
          <div className="md:block hidden flex justify-center items-center">
            <img 
              src={form_img} 
              alt="Apply for job illustration" 
              className="w-full max-w-lg lg:max-w-xl object-contain drop-shadow-md" 
            />
          </div>

          {/* Right: Form Container */}
          <div className="flex flex-col items-center w-full">

            {/* "Apply For Job" pill badge */}
            <span className="inline-block bg-[#669999] text-white text-base md:text-xl font-semibold tracking-wide px-8 py-2 rounded-md mb-8 shadow-sm mt-2 md:mt-0">
              Apply For Job
            </span>

            {/* White Form Card */}
            <div className="w-full bg-white rounded-3xl shadow-xl shadow-slate-200/60 p-8 md:p-10 border border-slate-50">
              
              {statusMessage && (
                <div
                  className={`mb-6 p-4 rounded-xl text-sm font-medium flex items-center gap-2.5 ${
                    statusMessage.type === 'success'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-rose-50 text-rose-800 border border-rose-200'
                  }`}
                >
                  {statusMessage.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />}
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <form className="flex flex-col gap-6 md:gap-8" onSubmit={handleSubmit}>

                {/* Name */}
                <div className="border-b border-[#669999]/30 pb-1 focus-within:border-[#509995] transition-colors">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full bg-transparent outline-none py-1.5 text-sm md:text-md text-[#509995] placeholder-[#509995]/70"
                    required
                  />
                </div>

                {/* E-mail */}
                <div className="border-b border-[#669999]/30 pb-1 focus-within:border-[#509995] transition-colors">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-mail"
                    className="w-full bg-transparent outline-none py-1.5 text-sm md:text-md text-[#509995] placeholder-[#509995]/70"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="border-b border-[#669999]/30 pb-1 focus-within:border-[#509995] transition-colors">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full bg-transparent outline-none py-1.5 text-sm md:text-md text-[#509995] placeholder-[#509995]/70"
                    required
                  />
                </div>

                {/* Job Type Custom Dropdown */}
                <CustomSelect
                  placeholder="Job Type"
                  options={['Digital Marketing', 'Graphic Designer', 'web Developer', 'content writer', 'video editor', 'App Developer']}
                  value={jobType}
                  onChange={setJobType}
                />

                {/* Job/Intern Custom Dropdown */}
                <CustomSelect
                  placeholder="Job/Intern"
                  options={['Job', 'Intern']}
                  value={jobIntern}
                  onChange={setJobIntern}
                />

                {/* Choose File */}
                <div className="border-b border-[#669999]/30 pb-2 flex items-center gap-3">
                  <label
                    htmlFor="resume-upload"
                    className="bg-[#509995] text-white text-sm md:text-md font-medium px-4 py-1.5 rounded-lg cursor-pointer hover:bg-[#3f7c79] transition-colors whitespace-nowrap shadow-sm"
                  >
                    Choose File
                  </label>
                  <span className="text-sm text-[#509995]/80 truncate">
                    {fileName}
                  </span>
                  <input
                    id="resume-upload"
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                  />
                </div>

                {/* Description about project */}
                <div className="border-b border-[#669999]/30 pb-1 focus-within:border-[#509995] transition-colors">
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tell us about yourself / experience"
                    rows={2}
                    className="w-full bg-transparent outline-none py-1.5 text-sm md:text-md text-[#509995] placeholder-[#509995]/70 resize-none"
                    required
                  />
                </div>

                {/* Captcha Security Check */}
                <Captcha
                  ref={captchaRef}
                  onVerify={setIsCaptchaValid}
                />

                {/* Submit Button */}
                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#509995] text-white text-base md:text-lg font-medium px-8 py-3 rounded-lg hover:bg-[#3f7c79] transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <span>Submit</span>
                    )}
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}