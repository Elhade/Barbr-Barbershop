import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type LightboxProps = {
  src: string | null;
  onClose: () => void;
};

export function Lightbox({ src, onClose }: LightboxProps) {
  // Close on Escape and lock scroll while open.
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [src, onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
        >
          <button
            type="button"
            aria-label="Fermer"
            onClick={onClose}
            className="absolute right-6 top-6 text-white/70 transition-colors hover:text-white"
          >
            <X className="h-8 w-8" />
          </button>
          <motion.img
            key={src}
            src={src}
            alt=""
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
