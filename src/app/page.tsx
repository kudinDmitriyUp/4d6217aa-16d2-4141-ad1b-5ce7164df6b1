"use client"

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplitLarge from '@/components/sections/hero/HeroSplitLarge';
import SplitAboutMetric from '@/components/sections/about/SplitAboutMetric';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactText from '@/components/sections/contact/ContactText';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="smallSizeLargeTitles"
      background="dotGrid"
      cardStyle="inset"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Altitude Capital"
          navItems={[
            { name: "About", id: "about" },
            { name: "Approach", id: "approach" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitLarge
          title="Institutional Capital for Tomorrow's Leaders"
          description="We identify and partner with transformative companies at critical growth inflection points. Altitude Capital brings deep operational expertise, strategic networks, and patient capital to fuel sustainable value creation."
          tag="San Francisco Private Equity"
          buttons={[
            { text: "Request Fund Overview", href: "contact" },
            { text: "Our Approach", href: "approach" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766148209826-t2w070ju.jpg"
          imageAlt="Investment portfolio analysis"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutMetric
          title="Investment Excellence Since 2015"
          description={[
            "Altitude Capital is a San Francisco-based private equity fund managing capital from institutional investors, family offices, and strategic partners. We specialize in acquiring and scaling mid-market companies across technology, industrials, and professional services sectors.",
            "Our conviction-driven investment philosophy emphasizes operational transformation, organic growth acceleration, and disciplined capital deployment. We partner with exceptional management teams to build enduring market leaders."
          ]}
          metrics={[
            { label: "Assets Under Management", value: "$450M+" },
            { label: "Portfolio Companies", value: "12" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="approach" data-section="approach">
        <FeatureCardThree
          title="Our Investment Approach"
          description="How we create sustainable value for investors and portfolio companies"
          features={[
            {
              id: "01",
              title: "Rigorous Selection",
              description: "We identify companies with proven business models, strong management, and clear paths to market leadership. Our deal sourcing focuses on quality over volume.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140099604-32oyqj9b.jpg",
              imageAlt: "Data analysis"
            },
            {
              id: "02",
              title: "Operational Excellence",
              description: "Post-acquisition, we work alongside management to implement operational improvements, streamline processes, and unlock organic growth opportunities.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140098536-9jc7ywck.jpg",
              imageAlt: "Team collaboration"
            },
            {
              id: "03",
              title: "Strategic Growth",
              description: "We support value-accretive acquisitions, enter new markets, and build scalable infrastructure to drive sustainable revenue expansion.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766148211196-rmvokogo.jpg",
              imageAlt: "Strategic partnership"
            },
            {
              id: "04",
              title: "Disciplined Exit",
              description: "Our exit strategy balances timing, market conditions, and value creation. We target 3-5x MOIC and consistent IRR generation for our investor base.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140099604-32oyqj9b.jpg",
              imageAlt: "Performance metrics"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Track Record"
          description="Proven performance delivering value to our investors"
          metrics={[
            {
              id: "1",
              value: "3.2x",
              description: "Average Multiple of Invested Capital"
            },
            {
              id: "2",
              value: "24%",
              description: "Gross IRR (2015-2024)"
            },
            {
              id: "3",
              value: "$8.2B",
              description: "Cumulative Exit Value"
            },
            {
              id: "4",
              value: "95%",
              description: "Fund I & II Investor Satisfaction"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardSix
          title="Investment Team"
          description="Experienced leaders with deep operational and financial expertise"
          members={[
            {
              id: "1",
              name: "Michael Chen",
              role: "Founder & Managing Partner",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140101670-ttp7xdlv.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "2",
              name: "Sarah Patterson",
              role: "Partner, Operations",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140152452-p4x3ah4p.jpg",
              imageAlt: "Sarah Patterson"
            },
            {
              id: "3",
              name: "David Rodriguez",
              role: "Principal, Technology",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766148213295-zi2vbfb7.jpg",
              imageAlt: "David Rodriguez"
            },
            {
              id: "4",
              name: "Jessica Wu",
              role: "Senior Analyst",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766148214159-nyf2zld7.jpg",
              imageAlt: "Jessica Wu"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Partner Perspectives"
          description="What our portfolio company leaders and investors say about our partnership"
          testimonials={[
            {
              id: "1",
              name: "Robert Martinez",
              role: "CEO, Advanced Manufacturing Co.",
              testimonial: "Altitude Capital brought more than capital. Their operational insights and network acceleration helped us integrate three acquisitions seamlessly and grew revenue by 180% in four years.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140101670-ttp7xdlv.jpg",
              imageAlt: "Robert Martinez"
            },
            {
              id: "2",
              name: "Emily Thompson",
              role: "Managing Director, Institutional Investor Group",
              testimonial: "Altitude's disciplined approach to value creation and transparent communication have made them a trusted partner in our portfolio. Their exits consistently exceed market benchmarks.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140152452-p4x3ah4p.jpg",
              imageAlt: "Emily Thompson"
            },
            {
              id: "3",
              name: "James Park",
              role: "Founder, Digital Solutions Platform",
              testimonial: "Working with Altitude felt like adding an experienced operating partner to our board. They understood our vision and provided the strategic support we needed to achieve a premium exit.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766148213295-zi2vbfb7.jpg",
              imageAlt: "James Park"
            },
            {
              id: "4",
              name: "Victoria Soto",
              role: "Family Office Principal",
              testimonial: "Altitude manages a meaningful portion of our family office allocation. Their commitment to governance, risk management, and investor communication sets them apart in the middle market.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766148214159-nyf2zld7.jpg",
              imageAlt: "Victoria Soto"
            },
            {
              id: "5",
              name: "Christopher Lee",
              role: "Chief Investment Officer, Pension Fund",
              testimonial: "Over two decades, Altitude has delivered consistent returns with reasonable risk profiles. Their operational focus differentiates them from financial engineering-focused competitors.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140101670-ttp7xdlv.jpg",
              imageAlt: "Christopher Lee"
            },
            {
              id: "6",
              name: "Rachel Goldman",
              role: "COO, Portfolio Company",
              testimonial: "The Altitude team became true strategic advisors during our transformation. Their financial acumen combined with genuine interest in our long-term success was invaluable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140152452-p4x3ah4p.jpg",
              imageAlt: "Rachel Goldman"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Common questions about investing with Altitude Capital"
          faqs={[
            {
              id: "1",
              title: "What is the typical check size and fund structure?",
              content: "Our current fund (Fund III) focuses on investments of $50M-$300M in enterprise value. We accept institutional investor commitments starting at $5M. Fund structure includes a 10-year investment period with 3-year committed capital deployment."
            },
            {
              id: "2",
              title: "What are your target industries and geographies?",
              content: "We invest primarily in technology-enabled services, software, industrials, and business services companies headquartered in North America. Geographic diversification across major metro areas is preferred, with operations flexibility valued."
            },
            {
              id: "3",
              title: "How long do you typically hold investments?",
              content: "Our average holding period is 4-5 years. However, we're opportunistic and will hold longer-term if market conditions or company performance warrant. We never force exits purely to meet fund timing."
            },
            {
              id: "4",
              title: "What is your approach to debt and leverage?",
              content: "We use leverage strategically, typically targeting 2.5x-3.5x EBITDA multiples. We avoid aggressive leverage and prioritize balance sheet flexibility to pursue accretive acquisitions and manage downturns."
            },
            {
              id: "5",
              title: "How do you engage with management teams?",
              content: "We retain existing management and offer equity incentives for long-term performance. We embed operational specialists and provide board-level governance. Collaborative partnership is our principle."
            },
            {
              id: "6",
              title: "What is the process for qualified investor participation?",
              content: "Interested investors complete a qualification questionnaire and review our confidential fund memorandum. We schedule calls to discuss investment thesis, fund terms, and answer detailed questions before investment decisions."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766148212222-l4kh4vin.jpg"
          imageAlt="Investment meeting"
          mediaPosition="left"
          animationType="smooth"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to discuss how Altitude Capital can work with your organization? Contact our investor relations team to schedule a conversation."
          animationType="entrance-slide"
          buttons={[
            { text: "Contact Investor Relations", href: "mailto:investors@altitudecapital.com" },
            { text: "Request Fund Materials", href: "mailto:investors@altitudecapital.com" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Altitude Capital"
          columns={[
            {
              items: [
                { label: "About", href: "about" },
                { label: "Approach", href: "approach" },
                { label: "Team", href: "team" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Careers", href: "https://altitudecapital.com/careers" },
                { label: "Resources", href: "https://altitudecapital.com/resources" }
              ]
            },
            {
              items: [
                { label: "Terms of Use", href: "https://altitudecapital.com/terms" },
                { label: "Privacy Policy", href: "https://altitudecapital.com/privacy" },
                { label: "Disclosures", href: "https://altitudecapital.com/disclosures" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}