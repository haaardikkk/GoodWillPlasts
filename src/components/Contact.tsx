import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

const SERVICE_ID = "service_uhl9fdm";
const USER_TEMPLATE_ID = "template_81rxop9";
const COMPANY_TEMPLATE_ID = "template_65xkusg";
const PUBLIC_KEY = "6XBnvcwhglewFavG5";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [productName, setProductName] = useState<string>("");

  const productGroups: { title: string; items: { label: string; emoji?: string }[] }[] = [
    {
      title: "Drums",
      items: [
        { label: "Open Top Drum — 50L", emoji: "🛢️" },
        { label: "Open Top Drum — 35L", emoji: "🪣" },
        { label: "Double Layered Drum — 50L", emoji: "🛡️" },
        { label: "Rocket Drum — 50L", emoji: "🚀" },
        { label: "Taper Drum — 50L", emoji: "📦" },
        { label: "Glossy Open Mouth — 35L", emoji: "✨" },
      ],
    },
    {
      title: "Jars",
      items: [
        { label: "PET Jar — 1L", emoji: "🏺" },
        { label: "PET Jar — 2L", emoji: "🏺" },
        { label: "PET Jar — 5L", emoji: "🏺" },
      ],
    },
    {
      title: "Preforms",
      items: [
        { label: "Preform — 28mm", emoji: "🔩" },
        { label: "Preform — 38mm", emoji: "🔩" },
      ],
    },
    {
      title: "Others",
      items: [
        { label: "Narrow Mouth Can — 20L", emoji: "🥤" },
        { label: "Narrow Mouth Deluxe — 35L", emoji: "✨" },
        { label: "Sauce Can — 5L", emoji: "🧴" },
        { label: "Mauser Jerry Can — 35L", emoji: "🏺" },
        { label: "Jerry Can — 35L", emoji: "⛽" },
        { label: "Custom Solutions", emoji: "🔧" },
      ],
    },
  ];

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const fd = new FormData(formRef.current);
    const user_name = String(fd.get("user_name") || "");
    const user_email = String(fd.get("user_email") || "");
    const user_phone = String(fd.get("user_phone") || "");
    const product_name = String(fd.get("product_name") || productName || "");
    const user_message = String(fd.get("user_message") || "");

    if (!product_name) {
      alert("Please select a product for your inquiry.");
      return;
    }

    setSending(true);
    try {
      // Company notification with all fields
      const companyRes = await emailjs.send(
        SERVICE_ID,
        COMPANY_TEMPLATE_ID,
        {
          user_name,
          user_email,
          user_phone,
          product_name,
          user_message,
        }
      );
      console.log("EmailJS company result:", companyRes);

      // User confirmation email (partial failure handled separately)
      try {
        const userRes = await emailjs.send(
          SERVICE_ID,
          USER_TEMPLATE_ID,
          {
            user_name,
            user_email,
            product_name,
            user_message,
            to_email: user_email,
            reply_to: user_email,
          }
        );
        console.log("EmailJS user result:", userRes);
        alert("✅ Message sent! Check your email for confirmation.");
      } catch (userErr) {
        console.error("EmailJS user send error:", userErr);
        alert(
          "⚠️ Company notified, but confirmation email failed. We'll reach out soon."
        );
      }

      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS company send error:", err);
      alert("❌ Failed to send message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-[720px] overflow-hidden rounded-2xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/20 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_0_35px_rgba(59,130,246,0.45)] focus-within:shadow-[0_0_40px_rgba(59,130,246,0.55)] transition-all">
          <div className="border-b border-border px-6 py-5">
            <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
            <p className="mt-1 text-sm text-muted-foreground">We typically reply within 24 hours.</p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2">
            <input
              name="user_name"
              placeholder="Full Name"
              required
              className="w-full h-12 rounded-xl border border-white/30 dark:border-white/20 bg-white/10 dark:bg-black/20 backdrop-blur-md px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary transition"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="w-full h-12 rounded-xl border border-white/30 dark:border-white/20 bg-white/10 dark:bg-black/20 backdrop-blur-md px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary transition"
            />

            <input
              type="tel"
              name="user_phone"
              placeholder="Phone Number (optional)"
              className="w-full h-12 rounded-xl border border-white/30 dark:border-white/20 bg-white/10 dark:bg-black/20 backdrop-blur-md px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary transition"
            />

            {/* Product selection with card-style dropdown */}
            <div className="w-full md:col-span-1">
              <label className="block text-sm font-medium text-foreground mb-2">Product *</label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className="w-full h-12 rounded-xl border border-white/30 dark:border-white/20 bg-white/10 dark:bg-black/20 backdrop-blur-md px-4 text-sm text-foreground text-left hover:border-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary transition hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]"
                  >
                    {productName || "🔍 Select a product category"}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[640px] p-4 bg-white/90 dark:bg-black/70 backdrop-blur-xl border border-white/30 dark:border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                  {productGroups.map((group) => (
                    <div key={group.title} className="mb-3 last:mb-0">
                      <div className="text-xs uppercase tracking-wide text-muted-foreground px-1 mb-2">
                        {group.title}
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {group.items.map((item) => (
                          <button
                            key={`${group.title}-${item.label}`}
                            type="button"
                            onClick={() => setProductName(item.label)}
                            className="text-left"
                          >
                            <Card className="overflow-hidden border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-md hover:border-primary transition hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]">
                              <CardContent className="p-4">
                                <div className="font-medium text-foreground flex items-center gap-2">
                                  <span>{item.emoji}</span>
                                  <span>{item.label}</span>
                                </div>
                                <div className="text-xs text-muted-foreground">Tap to select</div>
                              </CardContent>
                            </Card>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              {/* Hidden input for form submission */}
              <input type="hidden" name="product_name" value={productName} />
            </div>

            <textarea
              name="user_message"
              placeholder="Your Message"
              required
              className="min-h-28 w-full rounded-xl border border-white/30 dark:border-white/20 bg-white/10 dark:bg-black/20 backdrop-blur-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary transition md:col-span-2"
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-3 text-sm font-medium transition hover:shadow-[0_0_35px_rgba(59,130,246,0.55)] disabled:opacity-60 disabled:cursor-not-allowed md:col-span-2"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;