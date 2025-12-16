"use client";

import { Send, Lock } from "lucide-react";
import { Input, Select, Button } from "@/components/ui";
import { cn } from "@/lib/utils";

const serviceOptions = [
  { value: "automation", label: "Process Automation" },
  { value: "development", label: "System Development" },
  { value: "ai", label: "AI Integration" },
  { value: "modernization", label: "Legacy Modernization" },
  { value: "other", label: "Other / Not Sure" },
];

export function ContactForm() {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        "bg-white dark:bg-gray-800 border border-[var(--border)] rounded-[28px]",
        "p-8 md:p-10 shadow-lg",
        "before:absolute before:top-0 before:left-0 before:right-0 before:h-1",
        "before:bg-gradient-to-r before:from-brand-dark before:via-brand before:to-brand-light"
      )}
    >
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Send Us a Message
        </h3>
        <p className="text-[0.95rem] text-gray-500 dark:text-gray-400">
          Fill out the form below and we&apos;ll get back to you shortly.
        </p>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-5">
        {/* Name Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Input
            label="First Name *"
            name="firstName"
            placeholder="John"
            required
          />
          <Input
            label="Last Name *"
            name="lastName"
            placeholder="Doe"
            required
          />
        </div>

        {/* Email */}
        <Input
          label="Email Address *"
          name="email"
          type="email"
          placeholder="john@company.com"
          required
        />

        {/* Company & Service Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Input
            label="Company Name"
            name="company"
            placeholder="Your Company"
          />
          <Select
            label="Service Interested In"
            name="service"
            placeholder="Select a service"
            options={serviceOptions}
          />
        </div>

        {/* Message */}
        <div className="w-full">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            How Can We Help? *
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your project, challenges, or goals..."
            required
            className={cn(
              "w-full min-h-[130px] resize-y",
              "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl",
              "px-4 py-3 text-sm text-gray-900 dark:text-white",
              "placeholder:text-gray-400 dark:placeholder:text-gray-500",
              "transition-all duration-300",
              "focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand"
            )}
          />
        </div>

        {/* Submit */}
        <div className="mt-2">
          <Button type="submit" fullWidth size="lg">
            Send Message
            <Send className="w-5 h-5" />
          </Button>
        </div>

        {/* Privacy Note */}
        <p className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500 dark:text-gray-400">
          <Lock className="w-4 h-4 stroke-brand" />
          Your information is secure and will never be shared.
        </p>
      </form>
    </div>
  );
}
