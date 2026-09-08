"use server"

export interface ContactFormData {
  name: string
  company: string
  email: string
  category: string
  message: string
}

export interface ContactFormResponse {
  success: boolean
  message: string
}

export async function submitContactForm(formData: FormData): Promise<ContactFormResponse> {
  const name = formData.get("name") as string
  const company = formData.get("company") as string
  const email = formData.get("email") as string
  const category = formData.get("category") as string
  const message = formData.get("message") as string

  // Validation
  if (!name || name.trim().length < 2) {
    return { success: false, message: "Please enter your full name" }
  }

  if (!email || !email.includes("@")) {
    return { success: false, message: "Please enter a valid email address" }
  }

  if (!message || message.trim().length < 10) {
    return { success: false, message: "Please enter a message (at least 10 characters)" }
  }

  // In a production environment, you would:
  // 1. Save to database
  // 2. Send email notification
  // 3. Integrate with CRM
  
  // For now, we'll simulate a successful submission
  // You can later integrate with services like:
  // - Resend for email
  // - Supabase for database storage
  // - Notion for CRM-like functionality

  console.log("Contact Form Submission:", {
    name,
    company,
    email,
    category,
    message,
    timestamp: new Date().toISOString(),
  })

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    success: true,
    message: "Thank you for your inquiry! We will get back to you within 24-48 hours.",
  }
}
