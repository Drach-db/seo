import { FAQ } from "@/components/ui/faq"
import { DecorativeBackground } from "@/components/ui/decorative-background"

const operationalHubFAQ = [
  {
    id: '1',
    question: 'What is the Operational Hub and how does it work?',
    answer: 'The Operational Hub is a comprehensive facility management platform that provides real-time control and monitoring of your operations. It integrates IoT sensors, cloud computing, and AI analytics to give you complete visibility over your facilities from anywhere in the world.'
  },
  {
    id: '2',
    question: 'Can I manage multiple facilities from one dashboard?',
    answer: 'Yes! Our platform is designed to handle multiple facilities seamlessly. You can switch between locations, compare metrics across sites, and manage all your properties from a single, unified dashboard. Each facility can have its own customized settings while maintaining centralized control.'
  },
  {
    id: '3',
    question: 'What kind of training is required for my team?',
    answer: 'We provide comprehensive onboarding and training programs tailored to your team\'s needs. Most users become proficient with the system within 2-3 days. We offer video tutorials, documentation, live training sessions, and ongoing support to ensure your team is confident using all features.'
  },
  {
    id: '4',
    question: 'How quickly can I see ROI from implementing the Operational Hub?',
    answer: 'Most of our clients see measurable ROI within 3-6 months. Immediate benefits include reduced response times and improved efficiency. Long-term savings come from predictive maintenance, energy optimization, and reduced operational costs, typically resulting in 20-30% cost reduction within the first year.'
  },
  {
    id: '5',
    question: 'Is the system compatible with my existing equipment?',
    answer: 'Our platform is designed to be hardware-agnostic and works with most modern building management systems. We support standard protocols like BACnet, Modbus, and MQTT. For legacy systems, we offer retrofit solutions and adapters to ensure seamless integration without replacing existing infrastructure.'
  },
  {
    id: '6',
    question: 'What happens if there\'s an internet outage?',
    answer: 'The Operational Hub includes offline capabilities and edge computing features. Critical functions continue to operate locally during internet outages, and all data syncs automatically once connection is restored. We also offer redundant connectivity options for mission-critical operations.'
  },
  {
    id: '7',
    question: 'How do you ensure data privacy and compliance?',
    answer: 'We adhere to strict data privacy standards including GDPR, CCPA, and industry-specific regulations. Your data is encrypted at rest and in transit, stored in secure data centers, and never shared with third parties. We conduct regular audits and maintain certifications including ISO 27001 and SOC 2.'
  },
  {
    id: '8',
    question: 'Can I customize the platform for my specific needs?',
    answer: 'Absolutely! The Operational Hub is highly customizable. You can create custom dashboards, set up specific workflows, configure alerts based on your criteria, and even develop custom modules using our API. Our team can help tailor the platform to match your exact requirements.'
  }
]

export default function FAQExamplePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* FAQ Section with reusable decorative background */}
      <DecorativeBackground>
        <FAQ
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our platform"
          items={operationalHubFAQ}
          defaultOpenIndex={0}
        />
      </DecorativeBackground>
    </div>
  )
}