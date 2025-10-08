import { useEffect, useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const SERVICE_ID = "service_uhl9fdm";
const USER_TEMPLATE_ID = "template_81rxop9";
const COMPANY_TEMPLATE_ID = "template_65xkusg";
const PUBLIC_KEY = "6XBnvcwhglewFavG5";
const COMPANY_EMAIL = "goodwill2015@gmail.com";
const COMPANY_NAME = "GoodWill Plast";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    { state: "idle" | "sending" | "success" | "error"; message?: string }
  >({ state: "idle" });
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  
  // Categorized products with emoji and capacity for dropdown
  const PRODUCT_GROUPS: {
    title: string;
    items: { name: string; capacity: string; emoji: string }[];
  }[] = [
    {
      title: "Drums",
      items: [
        { name: "Open Mouth Drum", capacity: "50L", emoji: "🛢️" },
        { name: "Rocket Drum", capacity: "50L", emoji: "🛢️" },
        { name: "Taper Drum", capacity: "50L", emoji: "🛢️" },
        { name: "Double Layered Drum", capacity: "50L", emoji: "🛢️" },
        { name: "Glossy Open Mouth", capacity: "35L", emoji: "✨" },
      ],
    },
    {
      title: "Cans",
      items: [
        { name: "Mauser Jerry Can", capacity: "35L", emoji: "🧴" },
        { name: "Jerry Can", capacity: "20L", emoji: "🧴" },
        { name: "Narrow Mouth Can (Edible Oil)", capacity: "5L", emoji: "🧴" },
        { name: "Deluxe Can", capacity: "35L", emoji: "🧴" },
        { name: "Sauce Can", capacity: "5L", emoji: "🧴" },
      ],
    },
    {
      title: "Other",
      items: [
        { name: "Pet Jar and Preform", capacity: "Varies (250ml–5L)", emoji: "🫙" },
      ],
    },
  ];

  useEffect(() => {
    // Initialize EmailJS with explicit object form for newer SDKs
    emailjs.init({ publicKey: PUBLIC_KEY });
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus({ state: "sending", message: "Sending your message..." });

    try {
      // Collect form values to send explicit recipients
      const fd = new FormData(formRef.current);
      const user_name = (fd.get("user_name") || "") as string;
      const user_email = (fd.get("user_email") || "") as string;
      const user_phone = (fd.get("user_phone") || "") as string;
      const user_message = (fd.get("user_message") || fd.get("message") || "") as string;
      const product_name = (fd.get("product_name") || fd.get("product") || selectedProduct || "") as string;

      if (!user_email) {
        throw new Error("Missing user email");
      }

      // Build robust params covering common recipient variable names
      const userParams = {
        // Recipient variations
        to_email: user_email,
        to: user_email,
        recipient_email: user_email,
        // Template variable explicitly mentioned
        user_mail: user_email,
        // Sender variations
        reply_to: user_email,
        from_email: user_email,
        // Names
        to_name: user_name,
        user_name,
        name: user_name,
        // Additional form data
        user_email,
        user_phone,
        user_message,
        message: user_message,
        product_name,
        product: product_name,
      };

      const companyParams = {
        // Recipient variations
        to_email: COMPANY_EMAIL,
        to: COMPANY_EMAIL,
        recipient_email: COMPANY_EMAIL,
        company_email: COMPANY_EMAIL,
        // Template variable explicitly mentioned (if template uses same var)
        user_mail: COMPANY_EMAIL,
        // Names
        to_name: COMPANY_NAME,
        company_name: COMPANY_NAME,
        // Sender variations
        reply_to: user_email,
        from_email: user_email,
        // Additional form data
        user_email,
        user_name,
        user_phone,
        user_message,
        message: user_message,
        product_name,
        product: product_name,
      };

      // Send confirmation to user and notification to company in parallel
      await Promise.all([
        emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, userParams, PUBLIC_KEY),
        emailjs.send(SERVICE_ID, COMPANY_TEMPLATE_ID, companyParams, PUBLIC_KEY),
      ]);

      // Reset form and show success
      formRef.current.reset();
      setStatus({ state: "success", message: "✅ Message sent! Check your email for confirmation." });
      setSelectedProduct("");
    } catch (err) {
      // Surface actual error details for easier troubleshooting
      console.error("EmailJS send error:", err);
      const raw =
        typeof err === "string"
          ? err
          : (err as any)?.text || (err as any)?.message || "There was an error sending your message. Please try again.";
      const hint = /recipient/i.test(String(raw))
        ? "This usually means your EmailJS template 'To email' is empty or uses a variable name not provided. Set 'To email' to a fixed address for the company template, and to the variable 'user_email' (or 'to_email') for the user template."
        : undefined;
      setStatus({ state: "error", message: `Failed to send: ${raw}${hint ? " — " + hint : ""}` });
    }
  };

  return (
    <section id="contact" className="py-24 bg-surface-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Phone: +91 9811347037, +91 7217679595</div>
                  <div>Email: goodwillplast2015@gmail.com</div>
                  <div>
                    Address: 647,Phase-2, Barhi industrial area, Sonepat, Haryana 131101
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <Input
                        name="user_name"
                        type="text"
                        placeholder="Your full name"
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        name="user_email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input
                        name="user_phone"
                        type="tel"
                        placeholder="Your phone number"
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Product (optional)</label>
                      <Select value={selectedProduct} onValueChange={(v) => setSelectedProduct(v)}>
                        <SelectTrigger aria-label="Select product" className="w-full bg-background border-border h-11 focus:ring-2 focus:ring-primary focus:border-primary">
                          <SelectValue placeholder="Select a product" />
                        </SelectTrigger>
                        <SelectContent className="bg-popover text-popover-foreground border border-border shadow-lg">
                          {PRODUCT_GROUPS.map((group) => (
                            <div key={group.title}>
                              <div className="px-2 py-1 text-xs text-muted-foreground">{group.title}</div>
                              {group.items.map((item) => {
                                const value = `${item.name} (${item.capacity})`;
                                const label = `${item.emoji} ${item.name} — ${item.capacity}`;
                                return (
                                  <SelectItem key={value} value={value}>{label}</SelectItem>
                                );
                              })}
                            </div>
                          ))}
                        </SelectContent>
                      </Select>
                      {/* Hidden input to pass value to EmailJS */}
                      <input type="hidden" name="product_name" value={selectedProduct} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      name="user_message"
                      placeholder="Tell us about your requirements, quantities, specifications, etc."
                      required
                      className="min-h-32 bg-background border-border"
                    />
                  </div>

                  {status.message && (
                    <div
                      className={`p-3 rounded-md text-sm ${
                        status.state === "error"
                          ? "bg-red-500/20 text-red-500"
                          : status.state === "success"
                          ? "bg-green-500/20 text-green-500"
                          : "bg-blue-500/20 text-blue-500"
                      }`}
                    >
                      {status.message}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-primary shadow-industrial"
                    disabled={status.state === "sending"}
                  >
                    {status.state === "sending" ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;