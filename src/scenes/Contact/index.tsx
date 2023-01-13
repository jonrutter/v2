import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { ContactForm } from './ContactForm';
import { ImageBorders } from '@/components/ImageBorders';
import { m } from 'framer-motion';
import { useAnimations } from './useAnimations';

export const Contact = () => {
  const { container, slideLeft, fadeIn } = useAnimations();
  return (
    <div className="w-full h-full min-h-[calc(100vh-5rem)] py-20 md:py-36">
      <div className="w-full max-w-screen-xl mx-auto">
        <m.section
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-xl mx-auto lg:max-w-full contact-section-grid"
        >
          {/* heading */}
          <div className="lg:[grid-area:_header]">
            {/* heading */}
            <m.div variants={slideLeft} className="max-w-fit mb-6">
              <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
                Contact me
              </h2>
              {/* rainbow gradient underline */}
              <div
                className="h-[2px] bg-gradient-to-r from-neon-400 to-pink-400 w-2/3"
                aria-hidden
              />
            </m.div>
            <m.div variants={fadeIn}>
              <p className="opacity-60 max-w-[400px]">
                I'd love to hear from you! Use this form to get in touch with
                me, and I'll try my best to get back to you!
              </p>
            </m.div>
          </div>
          {/* form */}
          <div className="lg:[grid-area:_form] mb-16">
            <ContactForm />
          </div>
          {/* image */}
          <div className="lg:[grid-area:_image] lg:translate-y-7">
            <ImageBorders>
              <StaticImage
                src="../../assets/images/contact.jpg"
                alt=""
                quality={100}
                width={600}
                className="hover:filter hover:saturate-[1.3] transition-all"
              />
            </ImageBorders>
          </div>
        </m.section>
      </div>
    </div>
  );
};
