
import React, { useState } from 'react';
import { analyzePrescription } from '../geminiService';

const UploadPrescription: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setAnalysis('');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!image) return;
    setLoading(true);
    const result = await analyzePrescription(image);
    setAnalysis(result || "Could not analyze. Please try again.");
    setLoading(false);
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-slate-200 border border-slate-100">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-[#004d5e] mb-4">Upload Prescription</h1>
            <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">Fast-track your order by uploading your prescription. Our pharmacists will review it and call you back within 15 minutes.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <label className="block p-10 border-4 border-dashed border-teal-100 rounded-[2rem] hover:border-teal-400 transition-colors cursor-pointer text-center bg-teal-50/20 group">
                <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                <span className="material-icons-outlined text-6xl text-teal-300 group-hover:text-teal-500 transition-colors">add_photo_alternate</span>
                <p className="mt-4 font-bold text-slate-700">Click to upload photo</p>
                <p className="text-xs text-slate-500 mt-2">JPG, PNG or PDF (Max 10MB)</p>
              </label>

              {image && (
                <div className="relative group">
                  <img src={image} alt="Prescription" className="w-full h-auto rounded-2xl shadow-lg border border-slate-100" />
                  <button 
                    onClick={() => setImage(null)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span className="material-icons-outlined text-sm">close</span>
                  </button>
                </div>
              )}
              
              <button 
                disabled={!image || loading}
                onClick={handleAnalyze}
                className="w-full bg-[#004d5e] text-white py-4 rounded-2xl font-bold shadow-xl shadow-teal-900/20 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
              >
                {loading ? 'Analyzing...' : (
                  <>
                    <span className="material-icons-outlined">psychology</span>
                    Analyze with AI
                  </>
                )}
              </button>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-[#004d5e]">
                <span className="material-icons-outlined">description</span>
                AI Analysis Results
              </h3>
              {loading ? (
                 <div className="flex flex-col items-center justify-center h-full gap-4 text-slate-400">
                   <div className="w-10 h-10 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
                   <p className="text-sm font-medium">Scanning prescription components...</p>
                 </div>
              ) : (
                <div className="prose prose-sm prose-teal prose-p:leading-relaxed prose-li:my-1 text-slate-600">
                  {analysis ? analysis : "Your AI analysis will appear here. Note: Always verify AI findings with our human pharmacists."}
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
             <button className="flex-1 bg-[#4ecdc4] text-[#004d5e] py-4 rounded-2xl font-bold shadow-xl shadow-teal-500/20">Submit Order & Pay</button>
             <button className="flex-1 border-2 border-[#004d5e] text-[#004d5e] py-4 rounded-2xl font-bold">Talk to Pharmacist First</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPrescription;
