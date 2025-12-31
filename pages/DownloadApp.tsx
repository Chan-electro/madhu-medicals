
import React from 'react';
import Logo from '../components/Logo';

const DownloadApp: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f0fdfa] via-white to-[#f0fdfa]">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#4ecdc4] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#004d5e] rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="text-center lg:text-left">
                            <span className="inline-block px-6 py-2 bg-[#004d5e]/10 rounded-full text-[#004d5e] text-sm font-bold uppercase tracking-widest mb-6">
                                Now Available
                            </span>
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#004d5e] mb-6 leading-tight">
                                Download the <span className="text-[#4ecdc4]">Madhu Medicals</span> App
                            </h1>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                Get your medicines delivered to your doorstep with just a few taps.
                                Order prescriptions, track deliveries, and access exclusive offers - all from your phone.
                            </p>

                            {/* Download Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.patient.madhumedical"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 bg-black text-white px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                                >
                                    <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
                                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                                    </svg>
                                    <div className="text-left">
                                        <span className="text-xs text-gray-400 uppercase tracking-wide">Get it on</span>
                                        <span className="block text-xl font-bold">Google Play</span>
                                    </div>
                                </a>

                                <a
                                    href="https://apps.apple.com/in/app/madhu-medicals/id6502280927"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 bg-black text-white px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                                >
                                    <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                    <div className="text-left">
                                        <span className="text-xs text-gray-400 uppercase tracking-wide">Download on the</span>
                                        <span className="block text-xl font-bold">App Store</span>
                                    </div>
                                </a>
                            </div>

                            {/* Stats */}
                            <div className="flex gap-8 mt-12 justify-center lg:justify-start">
                                <div className="text-center">
                                    <span className="block text-3xl font-display font-bold text-[#004d5e]">10K+</span>
                                    <span className="text-sm text-slate-500">Downloads</span>
                                </div>
                                <div className="text-center">
                                    <span className="block text-3xl font-display font-bold text-[#004d5e]">4.8</span>
                                    <span className="text-sm text-slate-500">App Rating</span>
                                </div>
                                <div className="text-center">
                                    <span className="block text-3xl font-display font-bold text-[#004d5e]">24/7</span>
                                    <span className="text-sm text-slate-500">Support</span>
                                </div>
                            </div>
                        </div>

                        {/* Right - Phone Mockup */}
                        <div className="relative flex justify-center lg:justify-end">
                            <div className="relative">
                                {/* Phone Frame */}
                                <div className="w-72 h-[580px] bg-gradient-to-b from-slate-900 to-slate-800 rounded-[3rem] p-3 shadow-2xl">
                                    <div className="w-full h-full bg-gradient-to-br from-[#004d5e] to-[#006d7e] rounded-[2.5rem] overflow-hidden relative">
                                        {/* Notch */}
                                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-2xl"></div>

                                        {/* App Content Preview */}
                                        <div className="pt-12 px-6 h-full flex flex-col">
                                            {/* Header */}
                                            <div className="flex items-center justify-center mb-8">
                                                <Logo className="h-16" />
                                            </div>

                                            {/* Cards */}
                                            <div className="space-y-4">
                                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 bg-[#4ecdc4] rounded-xl flex items-center justify-center">
                                                            <span className="material-icons-outlined text-[#004d5e]">medication</span>
                                                        </div>
                                                        <div>
                                                            <span className="block text-white font-bold text-sm">Order Medicines</span>
                                                            <span className="text-teal-100/70 text-xs">Upload prescription</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 bg-[#4ecdc4] rounded-xl flex items-center justify-center">
                                                            <span className="material-icons-outlined text-[#004d5e]">local_shipping</span>
                                                        </div>
                                                        <div>
                                                            <span className="block text-white font-bold text-sm">Track Delivery</span>
                                                            <span className="text-teal-100/70 text-xs">Real-time updates</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 bg-[#4ecdc4] rounded-xl flex items-center justify-center">
                                                            <span className="material-icons-outlined text-[#004d5e]">loyalty</span>
                                                        </div>
                                                        <div>
                                                            <span className="block text-white font-bold text-sm">Earn Rewards</span>
                                                            <span className="text-teal-100/70 text-xs">Exclusive offers</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Bottom Button */}
                                            <div className="mt-auto mb-8">
                                                <div className="bg-[#4ecdc4] text-[#004d5e] py-4 rounded-2xl text-center font-bold shadow-lg">
                                                    Get Started
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute -top-4 -left-8 bg-white rounded-2xl p-4 shadow-xl animate-float">
                                    <div className="flex items-center gap-2">
                                        <span className="material-icons-outlined text-[#4ecdc4]">verified</span>
                                        <span className="font-bold text-[#004d5e] text-sm">100% Genuine</span>
                                    </div>
                                </div>

                                <div className="absolute -bottom-4 -right-8 bg-white rounded-2xl p-4 shadow-xl animate-float-delayed">
                                    <div className="flex items-center gap-2">
                                        <span className="material-icons-outlined text-[#4ecdc4]">speed</span>
                                        <span className="font-bold text-[#004d5e] text-sm">30 Min Delivery</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#4ecdc4] font-bold uppercase tracking-widest text-sm">App Features</span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[#004d5e] mt-4">
                            Everything You Need in One App
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: 'qr_code_scanner', title: 'Easy Prescription Upload', description: 'Scan or upload your prescription directly from your phone' },
                            { icon: 'notifications_active', title: 'Medicine Reminders', description: 'Never miss a dose with smart medication reminders' },
                            { icon: 'history', title: 'Order History', description: 'Easily reorder from your previous purchases' },
                            { icon: 'local_offer', title: 'Exclusive Discounts', description: 'App-only offers and loyalty rewards' },
                        ].map((feature) => (
                            <div key={feature.title} className="group bg-gradient-to-br from-[#f0fdfa] to-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-[#4ecdc4]/10">
                                <div className="w-16 h-16 bg-[#004d5e] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <span className="material-icons-outlined text-[#4ecdc4] text-2xl">{feature.icon}</span>
                                </div>
                                <h3 className="text-lg font-bold text-[#004d5e] mb-3">{feature.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#004d5e] to-[#006d7e] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-teal-100/80 text-lg mb-10 max-w-2xl mx-auto">
                        Download the Madhu Medicals app today and experience hassle-free medicine ordering and delivery.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.patient.madhumedical"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-white text-[#004d5e] px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl"
                        >
                            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                            </svg>
                            Google Play
                        </a>

                        <a
                            href="https://apps.apple.com/in/app/madhu-medicals/id6502280927"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-white text-[#004d5e] px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl"
                        >
                            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            App Store
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DownloadApp;
