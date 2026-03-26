"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            navItems={[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Products", id: "products" },
              { name: "Contact", id: "contact" }
            ]}
            brandName="Babe"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroOverlay
            title="Flowers for Every Mood"
            description="Boutique floral design studio specializing in hand-curated arrangements, seasonal botanicals, and bespoke floral experiences."
            buttons={[{ text: "Explore Collections", href: "#products" }]}
            imageSrc="https://pixabay.com/get/g221c4f2e9c397a0b849ee0aea63535ec848f9576e67a1b2ceeb908598bc676092e5452237b3c395c99f45f071217571095dd714ca4c1911a4425c21474cecafa_1280.jpg"
          />
        </div>

        <div id="about" data-section="about">
          <TextAbout
            title="Crafted with Love"
            useInvertedBackground={false}
            buttons={[{ text: "Our Story", href: "#" }]}
          />
        </div>

        <div id="products" data-section="products">
          <ProductCardOne
            title="Signature Collections"
            description="Artisan bouquets designed to bring nature into your home."
            gridVariant="three-columns-all-equal-width"
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={true}
            products={[
              { id: "1", name: "The Classic Peony", price: "$85", imageSrc: "https://pixabay.com/get/ga854ff5379f99c5a41e0a3b1009f869048403b4209b741e657fe3af22d80a474c0736e9a5fa50e03cb5db8e957f71d1d79001edb28208012e532cb08a9377232_1280.jpg" },
              { id: "2", name: "Seasonal Wilds", price: "$65", imageSrc: "https://pixabay.com/get/g75442196096e84bcc58c25e33eb5b2d936df34aafcd665ba1dbbc4d4154adeed0040f3aeac7618b169e1f723fb33f92ae438720630f655f499842110faf575f4_1280.jpg" },
              { id: "3", name: "Eucalyptus Dream", price: "$75", imageSrc: "https://pixabay.com/get/g6d4f83adfa2f80855548d50d100ce789be290997cd6f15a24016183f7b83e04398b065d7e3390e40bde3946ad5fd685934fe150864be4621103b3c80de0e125a_1280.jpg" }
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardSix
            title="Kind Words"
            description="Loved by our floral enthusiasts."
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            testimonials={[
              { id: "1", name: "Sarah J.", handle: "@sarahfloral", testimonial: "The best floral arrangement I've ever received.", imageSrc: "https://pixabay.com/get/g8244ae2766f31dde9145369f2c528fa45c499a748b1715f03e314dce88f4241346c2bff4f4a46ccc97ad7107afcc485cdb867e539330ebdb7c3e30897ffabd0c_1280.jpg" },
              { id: "2", name: "Michael R.", handle: "@miker", testimonial: "Simply exquisite design. Will order again.", imageSrc: "https://pixabay.com/get/g1462e6495b9ca4f376e3d63556ff0a3f9501b95f822a00f93abc8590fbb147232243f3b96ee571cd92b2002348efeb014f0a4f05ac90ef0470b641f2f8dce720_1280.jpg" },
              { id: "3", name: "Emily K.", handle: "@emilyk", testimonial: "So creative and fresh. Totally worth it!", imageSrc: "https://pixabay.com/get/g64139ac4253ab9e22c415719eaf112ac726c3e4986ca94a86d4eec7cd0e268fdc979b9ab8498c3b78eb6b6b74dc3ccf07455bdb7e56bdc23a60b8d303a9938f5_1280.jpg" },
              { id: "4", name: "David W.", handle: "@dwdesign", testimonial: "Professional service and beautiful flowers.", imageSrc: "https://pixabay.com/get/g87c3f8c46d2afa9b1afec8400ab944209d8d942590509dbe6cbdd4e4621ffd36573dd1282a682c710a53b8b0cd1dfa285647df9487a4333077cf1c232c3faf79_1280.jpg" }
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            title="Visit Us"
            description="Come by our studio to smell the fresh blooms."
            useInvertedBackground={true}
            mediaAnimation="slide-up"
            inputs={[
              { name: "name", type: "text", placeholder: "Your Name", required: true },
              { name: "email", type: "email", placeholder: "Your Email", required: true }
            ]}
            textarea={{ name: "message", placeholder: "Your special requests" }}
            imageSrc="https://pixabay.com/get/g5558a261ec3b70779a5e8352bc68bea75e697a591063e159fe84f718ba53c41e33d7b2eef9cd0d2866a7f3c2f2cb9fed85254f45ccc768f0d4f8d39c6b6ab203_1280.jpg"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="Babe"
            columns={[
              { title: "Links", items: [{ label: "Home", href: "#hero" }, { label: "About", href: "#about" }] },
              { title: "Social", items: [{ label: "Instagram", href: "#" }, { label: "Pinterest", href: "#" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
