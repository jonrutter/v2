import React from 'react';
import { ContactForm } from './ContactForm';
import { ImageBorders } from '@/components/ImageBorders';
import Image from 'next/image';
import ContactImage from '@/assets/images/contact.jpg';

export const Contact = () => {
  return (
    <div className="w-full h-full min-h-[calc(100vh-5rem)] py-20 md:py-36">
      <div className="w-full max-w-screen-xl mx-auto">
        <section className="max-w-xl mx-auto lg:max-w-full contact-section-grid">
          {/* heading */}
          <div className="lg:[grid-area:_header]">
            {/* heading */}
            <div className="max-w-fit mb-6">
              <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-grey-800 dark:text-white transition-colors">
                Contact me
              </h2>
              {/* rainbow gradient underline */}
              <div
                className="h-[2px] bg-gradient-to-r from-neon-400 to-pink-400 w-2/3"
                aria-hidden
              />
            </div>
            <div>
              <p className="max-w-[400px] text-lg">
                I'd love to hear from you! Use this form to get in touch with
                me, and I'll try to get back to you as soon as I can.
              </p>
            </div>
          </div>
          {/* form */}
          <div className="lg:[grid-area:_form] mb-16">
            <ContactForm />
          </div>
          {/* image */}
          <div className="lg:[grid-area:_image] lg:translate-y-7">
            <ImageBorders>
              <Image
                src={ContactImage}
                alt=""
                placeholder="blur"
                quality={100}
                width={600}
                className="hover:filter hover:saturate-[1.3] transition-all"
              />
            </ImageBorders>
          </div>
        </section>
      </div>
    </div>
  );
};
