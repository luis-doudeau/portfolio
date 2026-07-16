import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import { useLang } from "../i18n/LangProvider";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 015.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 013.36-1.85c3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.43a2.06 2.06 0 11-.01-4.13 2.06 2.06 0 01.01 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

export function Contact() {
  const { t, d } = useLang();

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-[#0d0d0f] text-[#f4f4f5] relative overflow-hidden"
    >
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 size-[720px] rounded-full pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(circle, rgba(110,168,255,0.16) 0%, transparent 68%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 relative">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-white/60 mb-8">
              <span className="size-1.5 rounded-full bg-accent" />
              05 / {t(d.contact.label)}
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-semibold text-5xl sm:text-7xl leading-[0.95] tracking-[-0.03em]"
            >
              {t(d.contact.title)}{" "}
              <span className="text-accent">{t(d.contact.titleAccent)}</span>
              <br />
              {t(d.contact.titleSecond)}
            </motion.h2>

            <p className="mt-8 text-white/70 max-w-md text-balance">
              {t(d.contact.description)}
            </p>

            <a
              href={profile.socials.email}
              className="mt-10 inline-flex items-center gap-3 group"
            >
              <span className="font-display font-semibold text-3xl sm:text-5xl tracking-tight underline decoration-accent decoration-2 underline-offset-8 group-hover:text-accent transition-colors break-all">
                {profile.email}
              </span>
              <ArrowUpRight className="size-8 sm:size-10 group-hover:rotate-45 transition-transform shrink-0" />
            </a>
          </div>

          <div className="md:col-span-5 space-y-3 md:pl-8 md:border-l border-white/10">
            <SocialLink
              href={profile.socials.linkedin}
              icon={<LinkedinIcon className="size-5" />}
              label="LinkedIn"
              handle="luis-doudeau"
            />
            <SocialLink
              href={profile.socials.github}
              icon={<GithubIcon className="size-5" />}
              label="GitHub"
              handle="luis-doudeau"
            />
            <SocialLink
              href={profile.socials.email}
              icon={<Mail className="size-5" />}
              label="Email"
              handle={profile.email}
            />

            <div className="pt-4 mt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin className="size-4" />
                {t(d.contact.location)}
              </div>
              <div className="mt-1 text-white/50 text-xs font-mono">
                {t(d.contact.open)}
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-4 text-xs text-white/50 font-mono">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>{t(d.contact.builtWith)}</span>
          <a href="#top" className="hover:text-white transition-colors">
            {t(d.contact.backToTop)}
          </a>
        </footer>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  icon,
  label,
  handle,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  handle: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-center justify-between p-4 rounded-2xl border border-white/10 hover:border-accent/40 hover:bg-white/5 transition-colors group"
    >
      <div className="flex items-center gap-3">
        <span className="size-10 rounded-full bg-white/5 grid place-items-center group-hover:bg-accent group-hover:text-[#0a0a0e] transition-colors">
          {icon}
        </span>
        <div>
          <div className="font-medium text-white">{label}</div>
          <div className="font-mono text-xs text-white/60">{handle}</div>
        </div>
      </div>
      <ArrowUpRight className="size-4 text-white/40 group-hover:text-white group-hover:rotate-45 transition-all" />
    </a>
  );
}
