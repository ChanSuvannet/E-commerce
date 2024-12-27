// src/stores/faqStore.ts
import { ref } from "@vue/runtime-dom";
import { defineStore } from "pinia";
// Define the FAQ store for an e-commerce site
export const useFaqStore = defineStore("faq", () => {
    // Store the FAQs data
    const faqs = ref([
        {
            category: "Shipping Information",
            title: "What are the shipping options?",
            content:
                "We offer standard, expedited, and overnight shipping options. Shipping costs and delivery times vary depending on your location and selected option.",
        },
        {
            category: "Shipping Information",
            title: "Do you ship internationally?",
            content:
                "Yes, we ship to most countries worldwide. International shipping fees and delivery times will apply.",
        },
        {
            category: "Returns and Refunds",
            title: "What is your return policy?",
            content:
                "We accept returns within 30 days of purchase for items in their original condition. Refunds will be processed within 5-7 business days of receiving the returned item.",
        },
        {
            category: "Returns and Refunds",
            title: "How do I initiate a return?",
            content:
                "To initiate a return, please contact our support team with your order details. They will guide you through the return process and provide a return shipping label if necessary.",
        },
        {
            category: "Product Support",
            title: "How do I find the right size?",
            content:
                "Each product page includes a size guide to help you find the best fit. If you have additional questions, feel free to contact us for assistance.",
        },
        {
            category: "Product Support",
            title: "Do your products come with a warranty?",
            content:
                "Yes, many of our products include a warranty. Please check the product description or contact us for specific warranty details.",
        },
        {
            category: "Payments and Billing",
            title: "What payment methods do you accept?",
            content:
                "We accept major credit cards, PayPal, and Apple Pay. Additional payment options may be available depending on your location.",
        },
        {
            category: "Payments and Billing",
            title: "Is my payment information secure?",
            content:
                "Yes, we use secure encryption protocols to protect your payment information. We do not store your credit card details on our servers.",
        },
    ]);

    // Return the FAQs
    return { faqs };
});
