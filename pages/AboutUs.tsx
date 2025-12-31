
import React from 'react';
import Logo from '../components/Logo';

const AboutUs: React.FC = () => {
    const milestones = [
        { year: '1986', title: 'Our Beginning', description: 'Madhu Medicals was founded with a vision to provide quality healthcare products to the community of Nelamangala.' },
        { year: '1995', title: 'First Expansion', description: 'Opened our second branch in Dasarahalli, extending our reach to serve more families.' },
        { year: '2010', title: 'Modernization', description: 'Upgraded our inventory management and customer service systems to provide faster, more efficient service.' },
        { year: '2020', title: 'Digital Transformation', description: 'Launched online ordering and home delivery services to serve our customers during challenging times.' },
        { year: '2024', title: 'Community Trust', description: 'Celebrating nearly 4 decades of service, trusted by over 50,000+ families across Bangalore.' },
    ];

    const values = [
        { icon: 'verified', title: 'Authenticity', description: 'We source only genuine medicines directly from authorized distributors.' },
        { icon: 'favorite', title: 'Care', description: 'Every customer is treated like family with personalized attention and advice.' },
        { icon: 'local_pharmacy', title: 'Expertise', description: 'Our qualified pharmacists provide professional guidance for your health needs.' },
        { icon: 'handshake', title: 'Trust', description: 'Building lasting relationships through honesty and reliable service since 1986.' },
    ];

    const teamMembers = [
        { name: 'Mr. Madhu Kumar', role: 'Founder & Chief Pharmacist', description: 'With over 40 years of pharmaceutical experience, Mr. Madhu founded this pharmacy with a commitment to community health.' },
        { name: 'Dr. Priya Sharma', role: 'Senior Pharmacist', description: '15+ years of experience in clinical pharmacy and patient counseling.' },
        { name: 'Mr. Rajesh B.', role: 'Operations Manager', description: 'Ensures smooth operations across both branches with dedication and efficiency.' },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#004d5e] via-[#006d7e] to-[#004d5e] text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-[#4ecdc4] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#4ecdc4] rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <span className="inline-block px-6 py-2 bg-[#4ecdc4]/20 rounded-full text-[#4ecdc4] text-sm font-bold uppercase tracking-widest mb-6">
                            Our Story
                        </span>
                        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                            About <span className="text-[#4ecdc4]">Madhu Medicals</span>
                        </h1>
                        <p className="text-xl text-teal-100/80 max-w-3xl mx-auto leading-relaxed">
                            For nearly four decades, we've been your trusted neighborhood pharmacy,
                            providing genuine medicines and heartfelt care to families across Bangalore.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[#4ecdc4] font-bold uppercase tracking-widest text-sm">Since 1986</span>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#004d5e] mt-4 mb-6">
                                A Legacy of Trust & Care
                            </h2>
                            <div className="space-y-6 text-slate-600 leading-relaxed">
                                <p>
                                    What started as a small pharmacy in the heart of Nelamangala has grown into a
                                    trusted healthcare partner for over 50,000 families. Founded by Mr. Madhu Kumar
                                    in 1986, our pharmacy was built on a simple philosophy: treat every customer
                                    like family.
                                </p>
                                <p>
                                    Over the years, we've witnessed tremendous changes in healthcare and pharmacy
                                    services. Through it all, our commitment to providing genuine medicines,
                                    personalized service, and expert pharmaceutical guidance has remained unwavering.
                                </p>
                                <p>
                                    Today, with two branches serving the communities of Nelamangala and Dasarahalli,
                                    we continue to uphold the values that have made us your trusted health partner
                                    for nearly four decades.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-[#f0fdfa] to-[#e0f7f4] rounded-[3rem] p-8 shadow-xl">
                                <div className="flex justify-center mb-8">
                                    <Logo className="h-32" />
                                </div>
                                <div className="grid grid-cols-2 gap-6 text-center">
                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <span className="text-4xl font-display font-bold text-[#004d5e]">38+</span>
                                        <p className="text-slate-600 text-sm mt-2">Years of Service</p>
                                    </div>
                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <span className="text-4xl font-display font-bold text-[#004d5e]">50K+</span>
                                        <p className="text-slate-600 text-sm mt-2">Happy Families</p>
                                    </div>
                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <span className="text-4xl font-display font-bold text-[#004d5e]">2</span>
                                        <p className="text-slate-600 text-sm mt-2">Store Locations</p>
                                    </div>
                                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                                        <span className="text-4xl font-display font-bold text-[#004d5e]">10K+</span>
                                        <p className="text-slate-600 text-sm mt-2">Products Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-[#f0fdfa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#4ecdc4] font-bold uppercase tracking-widest text-sm">Our Journey</span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[#004d5e] mt-4">
                            Milestones Through the Years
                        </h2>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#4ecdc4]/30 hidden md:block"></div>
                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <div key={milestone.year} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className={`flex-1 ${index % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
                                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                            <span className="text-[#4ecdc4] font-display text-2xl font-bold">{milestone.year}</span>
                                            <h3 className="text-xl font-bold text-[#004d5e] mt-2 mb-3">{milestone.title}</h3>
                                            <p className="text-slate-600">{milestone.description}</p>
                                        </div>
                                    </div>
                                    <div className="w-12 h-12 bg-[#004d5e] rounded-full flex items-center justify-center shrink-0 z-10 shadow-lg">
                                        <span className="material-icons-outlined text-[#4ecdc4]">star</span>
                                    </div>
                                    <div className="flex-1 hidden md:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#4ecdc4] font-bold uppercase tracking-widest text-sm">What We Stand For</span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[#004d5e] mt-4">
                            Our Core Values
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value) => (
                            <div key={value.title} className="group bg-gradient-to-br from-[#f0fdfa] to-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-[#4ecdc4]/10">
                                <div className="w-16 h-16 bg-[#004d5e] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <span className="material-icons-outlined text-[#4ecdc4] text-2xl">{value.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#004d5e] mb-3">{value.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gradient-to-br from-[#004d5e] to-[#006d7e] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#4ecdc4] font-bold uppercase tracking-widest text-sm">The People Behind Your Health</span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">
                            Meet Our Team
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-colors">
                                <div className="w-24 h-24 bg-[#4ecdc4] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="material-icons-outlined text-[#004d5e] text-4xl">person</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                                <p className="text-[#4ecdc4] font-medium text-sm mb-4">{member.role}</p>
                                <p className="text-teal-100/70 text-sm leading-relaxed">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-[#f0fdfa]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-[#4ecdc4] font-bold uppercase tracking-widest text-sm">Our Purpose</span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-[#004d5e] mt-4 mb-8">
                        Our Mission & Vision
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#004d5e]">
                            <div className="w-12 h-12 bg-[#004d5e] rounded-xl flex items-center justify-center mx-auto mb-4">
                                <span className="material-icons-outlined text-[#4ecdc4]">flag</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#004d5e] mb-4">Our Mission</h3>
                            <p className="text-slate-600 leading-relaxed">
                                To provide accessible, affordable, and authentic healthcare products while
                                delivering exceptional customer service that prioritizes the well-being of
                                every individual we serve.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#4ecdc4]">
                            <div className="w-12 h-12 bg-[#4ecdc4] rounded-xl flex items-center justify-center mx-auto mb-4">
                                <span className="material-icons-outlined text-[#004d5e]">visibility</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#004d5e] mb-4">Our Vision</h3>
                            <p className="text-slate-600 leading-relaxed">
                                To be the most trusted community pharmacy in Bangalore, setting the standard
                                for pharmaceutical care, customer service, and community health education.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-[#004d5e] mb-4">
                        Have Questions? We're Here to Help!
                    </h2>
                    <p className="text-slate-600 mb-8">
                        Visit any of our stores or reach out to us on WhatsApp for personalized assistance.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://wa.me/919535967333"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#20bd5a] transition-colors shadow-lg"
                        >
                            <span className="material-icons-outlined">chat</span>
                            Chat on WhatsApp
                        </a>
                        <a
                            href="#/store-locator"
                            className="inline-flex items-center gap-2 bg-[#004d5e] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#003d4e] transition-colors shadow-lg"
                        >
                            <span className="material-icons-outlined">location_on</span>
                            Find Our Stores
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
