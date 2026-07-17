"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const text = `
👋 Hello Prince,

Name: ${name}

Email: ${email}

Message:
${message}
`;

    window.open(
      `https://wa.me/917000782975?text=${encodeURIComponent(
        text
      )}`,
      "_blank"
    );
  }

  return (
    <Section id="contact">
      <Container>
        <SectionHeading
          subtitle="Contact"
          title="Let's Build Something Amazing"
          description="Have an idea, freelance project or internship opportunity? Let's connect."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6">

              <ContactItem
                icon={<Mail size={22} />}
                title="Email"
                value="kushwahaprince43668@gmail.com"
              />

              <ContactItem
                icon={<MapPin size={22} />}
                title="Location"
                value="Madhya Pradesh, India"
              />

              <a
                href="https://wa.me/917000782975"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-green-500/30
                bg-green-500/10
                p-5
                transition
                hover:bg-green-500/20
                "
              >
                <FaWhatsapp
                  className="text-green-400"
                  size={24}
                />

                <div>
                  <h3 className="font-semibold">
                    WhatsApp
                  </h3>

                  <p className="text-slate-400">
                    Chat with me
                  </p>
                </div>
              </a>

              <div className="flex gap-5 pt-6">

                <SocialButton
                  href="https://github.com/princekushwaha542"
                  icon={<FaGithub size={22} />}
                />

                <SocialButton
                  href="https://instagram.com/theprince.exe16"
                  icon={<FaInstagram size={22} />}
                />

                <SocialButton
                  href="https://www.linkedin.com/in/prince-kushwaha-692462301/"
                  icon={<FaLinkedin size={22} />}
                />

              </div>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
            space-y-5
            "
          >
                        <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-black/20
                px-5
                py-4
                text-white
                placeholder:text-slate-500
                outline-none
                transition
                focus:border-cyan-400
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-black/20
                px-5
                py-4
                text-white
                placeholder:text-slate-500
                outline-none
                transition
                focus:border-cyan-400
              "
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="
                w-full
                resize-none
                rounded-xl
                border
                border-white/10
                bg-black/20
                px-5
                py-4
                text-white
                placeholder:text-slate-500
                outline-none
                transition
                focus:border-cyan-400
              "
            />

            <button
              type="submit"
              className="
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-green-600
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-green-500
              "
            >
              <FaWhatsapp size={20} />
              Send on WhatsApp
            </button>

          </motion.form>
        </div>
      </Container>
    </Section>
  );
}

function ContactItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-5
        backdrop-blur-md
      "
    >
      <div className="text-cyan-400">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-white">
          {title}
        </h3>

        <p className="text-slate-400">
          {value}
        </p>
      </div>
    </div>
  );
}

function SocialButton({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Social Link"
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/5
        text-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400
        hover:text-cyan-400
      "
    >
      {icon}
    </a>
  );
}