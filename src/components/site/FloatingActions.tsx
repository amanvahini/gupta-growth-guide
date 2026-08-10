import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, MessageCircle, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {chatOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="bg-card border-border shadow-elevated fixed right-5 bottom-28 z-50 w-[19rem] rounded-3xl border p-5 sm:right-8"
            role="dialog"
            aria-label="AI assistant"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="text-gold h-4 w-4" />
                <p className="font-display text-sm font-semibold">Ask Aman&rsquo;s AI</p>
              </div>
              <button type="button" onClick={() => setChatOpen(false)} aria-label="Close assistant">
                <X className="text-muted-foreground h-4 w-4" />
              </button>
            </div>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              The assistant is being trained on Aman&rsquo;s frameworks and session library. Until it
              is live, a real reply is faster.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="bg-gold text-ink mt-4 inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium"
            >
              Write to Aman
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="fixed right-5 bottom-6 z-50 flex flex-col items-end gap-3 sm:right-8">
        <AnimatePresence>
          {visible ? (
            <motion.a
              key="book"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              href={site.calendar}
              target="_blank"
              rel="noreferrer noopener"
              className="bg-primary text-primary-foreground shadow-elevated inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
            >
              <CalendarCheck className="h-4 w-4" /> Book Consultation
            </motion.a>
          ) : null}
        </AnimatePresence>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setChatOpen((v) => !v)}
            aria-label="Open AI assistant"
            className="border-border bg-card shadow-soft hover:border-gold inline-flex h-12 w-12 items-center justify-center rounded-full border transition-colors"
          >
            <Sparkles className="text-gold h-5 w-5" />
          </button>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Chat on WhatsApp"
            className="shadow-elevated inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>
    </>
  );
}
