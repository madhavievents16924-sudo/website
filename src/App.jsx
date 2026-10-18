import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import SignatureExperience from './components/SignatureExperience';
import ServicesEditorial from './components/ServicesEditorial';
import FoodTableSection from './components/FoodTableSection';
import EventExperience from './components/EventExperience';
import HowItWorks from './components/HowItWorks';
import WhyMadhavi from './components/WhyMadhavi';
import SocialProof from './components/SocialProof';
import InstagramShowcase from './components/InstagramShowcase';
import GalleryEditorial from './components/GalleryEditorial';
import ServiceArea from './components/ServiceArea';
import MainConversionBanner from './components/MainConversionBanner';
import ContactFooter from './components/ContactFooter';
import EnquiryFormModal from './components/EnquiryFormModal';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  const handleOpenEnquiry = () => setEnquiryModalOpen(true);
  const handleCloseEnquiry = () => setEnquiryModalOpen(false);

  return (
    <div className="min-h-screen bg-[#F5FAFA] text-[#06292D] font-sans antialiased selection:bg-[#0D7E73] selection:text-white">
      
      {/* 1. Navigation */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* 2. Hero & Hero Trust Strip */}
      <Hero onOpenEnquiry={handleOpenEnquiry} />

      {/* 3. Brand Story (The Madhavi Experience) */}
      <BrandStory />

      {/* 4. Signature Experience (Kerala Sadya) */}
      <SignatureExperience onOpenEnquiry={handleOpenEnquiry} />

      {/* 5. Editorial Services (What We Create) */}
      <ServicesEditorial onOpenEnquiry={handleOpenEnquiry} />

      {/* 6. Food Section (From the Kitchen to the Table) */}
      <FoodTableSection />

      {/* 7. Event Experience (An Experience for Your Guests) */}
      <EventExperience />

      {/* 8. How It Works Timeline */}
      <HowItWorks />

      {/* 9. Why Madhavi (Trust Pillars) */}
      <WhyMadhavi />

      {/* 10. Social Proof (Verified Reviews & 4.8 Rating) */}
      <SocialProof />

      {/* 11. Dedicated Instagram Social Showcase & QR Code */}
      <InstagramShowcase />

      {/* 12. Visual Portfolio & Lightbox Gallery */}
      <GalleryEditorial />

      {/* 13. Local SEO Service Area */}
      <ServiceArea />

      {/* 14. Main Conversion Banner */}
      <MainConversionBanner onOpenEnquiry={handleOpenEnquiry} />

      {/* 15. Contact & Minimal Luxury Footer */}
      <ContactFooter onOpenEnquiry={handleOpenEnquiry} />

      {/* 16. Floating Quick Contact Bar (Phone, WhatsApp, Instagram) */}
      <FloatingActions />

      {/* 17. Multi-Step Enquiry Form Modal */}
      <EnquiryFormModal
        isOpen={enquiryModalOpen}
        onClose={handleCloseEnquiry}
      />

    </div>
  );
}
