
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { FileText, Scale, Shield } from 'lucide-react';

const TermsConditions = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-saikou-background">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-saikou-border shadow-sm z-50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center gap-4 hover-scale">
                <div className="flex flex-col items-center">
                  <img 
                    src="/lovable-uploads/3e213b54-d1c4-457a-8f53-e7fa0d65b186.png" 
                    alt="Saikou Logo" 
                    className="h-16 w-auto"
                  />
                  <span className="text-xs text-saikou-text font-darker-grotesque font-medium -mt-1">Made in India</span>
                </div>
              </Link>
              <div className="hidden md:flex items-center gap-8">
                <Link to="/" className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors">
                  Home
                </Link>
                <Link to="/products" className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors">
                  Products
                </Link>
                <Link to="/about-us" className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors">
                  About Us
                </Link>
                <Link to="/contact-us" className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors">
                  Contact Us
                </Link>
                <Link to="/my-account" className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors">
                  My Account
                </Link>
                <Link to="/cart" className="bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-6 py-2.5 rounded-full flex items-center gap-2 font-darker-grotesque font-semibold hover-lift">
                  <span>🛒</span>
                  <span className="bg-saikou-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">0</span>
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Content */}
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <FileText className="w-8 h-8 text-saikou-accent" />
                <h1 className="text-4xl font-space-grotesk font-bold text-saikou-secondary">Terms & Conditions</h1>
              </div>
              
              <div className="bg-saikou-accent-light p-4 rounded-lg mb-8">
                <p className="text-sm font-darker-grotesque text-saikou-text">
                  <strong>Last Updated:</strong> [Insert Date]
                </p>
              </div>

              <div className="prose prose-lg max-w-none font-darker-grotesque text-saikou-text space-y-6">
                <p className="text-lg leading-relaxed">
                  These Terms and Conditions ("Terms") govern the use of SAIKOU, the domain holder of www.saikoushop.com (interchangeably referred to as 'We', 'Website', 'Us', Our') and the User of this website (referred to as 'You', 'Your'). We duly comply with the Information Technology Act, 2000 (as amended by Information Technology (Amendment) Act, 2008 and the rules made thereunder, including the Information Technology (Reasonable security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 and/or SPDI Rules, 2011. By using Our Website or providing information, You accept and agree to be legally bound by the following Terms and Conditions.
                </p>

                <p>
                  We recommend that You review these Terms and Conditions carefully before accessing or using the Website. Any new features or tools added to the Website will also be subject to these Terms. The current version of the Terms and Conditions can be reviewed at any time on this page. We reserve the right to update, modify, or replace any part of these Terms by posting changes to Our Website. Your continued use of the site following such updates constitutes acceptance of those changes.
                </p>

                <p>
                  Our e-commerce Website is a custom built, which provides us with digital infrastructure to offer Our products and services online in a secure and reliable environment. Kindly refer the Cookie Policy here.
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">DEFINITIONS:</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-saikou-accent pl-4">
                    <h4 className="font-space-grotesk font-semibold text-saikou-secondary">"Agreement"</h4>
                    <p className="text-sm">refers to their Terms and Conditions, including any amendments, modifications or supplements hereto, along with any other policies and guidelines incorporated herein by reference.</p>
                  </div>
                  
                  <div className="border-l-4 border-saikou-accent pl-4">
                    <h4 className="font-space-grotesk font-semibold text-saikou-secondary">"Applicable Laws"</h4>
                    <p className="text-sm">means all statutes, enactments, acts of legislature, laws, ordinances, rules, by-laws, regulations, notifications, guidelines, policies, directions, directives, circulars, and orders of any governmental authority, tribunal or court relating to data privacy, data protection and electronic transactions.</p>
                  </div>
                  
                  <div className="border-l-4 border-saikou-accent pl-4">
                    <h4 className="font-space-grotesk font-semibold text-saikou-secondary">"Content"</h4>
                    <p className="text-sm">includes, without limitation, all information, data, text, images, graphics, videos, audio, photographs, messages, reviews or other materials posted, displayed, transmitted or otherwise made available through the Website.</p>
                  </div>
                  
                  <div className="border-l-4 border-saikou-accent pl-4">
                    <h4 className="font-space-grotesk font-semibold text-saikou-secondary">"Custom Orders"</h4>
                    <p className="text-sm">means Products created or procured by Us based on specific requests or customization inputs provided by the User.</p>
                  </div>
                  
                  <div className="border-l-4 border-saikou-accent pl-4">
                    <h4 className="font-space-grotesk font-semibold text-saikou-secondary">"Force Majeure Event"</h4>
                    <p className="text-sm">means any event beyond the reasonable control of the Saikou, including but not limited to natural disasters, pandemic, acts of God, war, riots, strikes, lockouts, cyber-attacks, power failures, internet outages, or government restrictions.</p>
                  </div>
                  
                  <div className="border-l-4 border-saikou-accent pl-4">
                    <h4 className="font-space-grotesk font-semibold text-saikou-secondary">"Grievance Officer"</h4>
                    <p className="text-sm">means the person designated by Saikou to address grievances in relation to this Privacy Policy or the User's Personal Data, as required under the Applicable Laws.</p>
                  </div>
                  
                  <div className="border-l-4 border-saikou-accent pl-4">
                    <h4 className="font-space-grotesk font-semibold text-saikou-secondary">"Limited Edition"</h4>
                    <p className="text-sm">refers to Products manufactured or procured in restricted quantities and clearly marked as such on the Website, which may not be restocked once sold out.</p>
                  </div>
                  
                  <div className="border-l-4 border-saikou-accent pl-4">
                    <h4 className="font-space-grotesk font-semibold text-saikou-secondary">"Personal Information"</h4>
                    <p className="text-sm">means any data relating to an identified natural person, either directly or indirectly, including name, contact number, email address, postal address, payment details, order history.</p>
                  </div>
                  
                  <div className="border-l-4 border-saikou-accent pl-4">
                    <h4 className="font-space-grotesk font-semibold text-saikou-secondary">"Pre-Order"</h4>
                    <p className="text-sm">refers to the facility offered by Us allowing Users to reserve and pay for eligible Products prior to their official release or availability.</p>
                  </div>
                  
                  <div className="border-l-4 border-saikou-accent pl-4">
                    <h4 className="font-space-grotesk font-semibold text-saikou-secondary">"Products"</h4>
                    <p className="text-sm">shall mean collectibles consisting of anime figures, comic and gaming characters, as well as religious icons, listings of which shall be updated on the Website from time to time.</p>
                  </div>
                  
                  <div className="border-l-4 border-saikou-accent pl-4">
                    <h4 className="font-space-grotesk font-semibold text-saikou-secondary">"Third Party"</h4>
                    <p className="text-sm">refers to any individual, company, service provider other than the User and Saikou, with whom personal data may be shared for legitimate purposes, such as logistics partners, payment gateways, analytics provider or legal authorities.</p>
                  </div>
                  
                  <div className="border-l-4 border-saikou-accent pl-4">
                    <h4 className="font-space-grotesk font-semibold text-saikou-secondary">"User", "You" or "Your"</h4>
                    <p className="text-sm">refers to any natural or legal person who accesses, registers, or otherwise uses the Website or submits any information, whether as a guest or a vendor-partner or consumer.</p>
                  </div>
                  
                  <div className="border-l-4 border-saikou-accent pl-4">
                    <h4 className="font-space-grotesk font-semibold text-saikou-secondary">"Website"</h4>
                    <p className="text-sm">refers to the domain name "SHOPSAIKOU.IN" and all sub-domains, if any, at any point in time, webpages and other digital interfaces operated by or on behalf of Saikou.</p>
                  </div>
                  
                  <div className="border-l-4 border-saikou-accent pl-4">
                    <h4 className="font-space-grotesk font-semibold text-saikou-secondary">"We", "Us" or "Our"</h4>
                    <p className="text-sm">refers to Saikou, a business entity operating under the Indian Partnership Act, 1932, engaged in the designing, manufacturing, marketing and sale of collectibles and/or action figurine.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">BUSINESS INFORMATION:</h2>
                <div className="bg-saikou-accent-light p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-saikou-accent" />
                    <h3 className="font-space-grotesk font-semibold text-saikou-secondary">About Saikou</h3>
                  </div>
                  <p>
                    We are an India-origin entity specializing in the crafting, design, manufacture and sale of high-quality collectible figurines. All our products are proudly made in India, with a deep appreciation for detail and a passion for bringing culturally meaningful characters to life. Our collection includes anime figures, comic and gaming characters as well as religious icons. We are committed to delivering exclusive, well-researched and affordably priced collectibles to enthusiasts across the country.
                  </p>
                </div>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">ACCEPTANCE OF TERMS:</h2>
                <p>
                  By accessing, browsing, registering on, or otherwise using the Website, You acknowledge that You have read, understood and agreed to be bound by these Terms, Our Privacy Policy and any other policies or guidelines made available through Website from time to time.
                </p>
                
                <p>In addition, by accessing and using this Website, You agree to the following:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You will not use the product purchased through Us for any illegal or unauthorized purpose.</li>
                  <li>You must not transmit any worms, viruses or any code of a destructive nature through Our product.</li>
                  <li>You agree to provide current, complete and accurate purchase and account information for all purchases made at our e-marketplace.</li>
                  <li>We reserve the right to refuse service to anyone for any reason at any time.</li>
                  <li>We may, at our discretion, limit or cancel quantities purchased per person, per household or per order.</li>
                  <li>You are responsible for maintaining the confidentiality of Your account and password and for restricting access to Your computer or device.</li>
                  <li>Any misuse of the website, including fraudulent transactions, abuse of offers, or actions that interfere with the proper functioning of our services, may result in suspension of activities from Your IP Address or restrain of access to Our services, as well as potential legal action</li>
                </ul>
                
                <p>Your continued use of the Website shall be deemed to be conclusive evidence of Your acceptance of these Terms, as amended from time to time.</p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">ELIGIBILITY:</h2>
                <p>
                  By accessing or using the Website, You represent and warrant that You are at least 18 years of age and have the legal capacity to enter into a binding contract under applicable laws.
                </p>
                
                <p>
                  If You are accessing the Website or placing an order on behalf of a Private Limited Company, a partnership or any other legal entity, You represent that You are duly authorized to bind such entity to these Terms and Conditions.
                </p>
                
                <p>
                  The Website and its services are intended solely for Users who are legally permitted to purchase collectible items under the laws of their respective jurisdictions. We do not knowingly collect personal information from individuals under eighteen (18) years of age. If You are under 18, You may use the Website only with the involvement of a parent or legal guardian.
                </p>
                
                <p>
                  By using this Website, You confirm that Your use of Our products or services does not violate any applicable law or regulations. Saikou reserves the right to refuse access to or terminate the account of any User found to be in breach of this clause or found providing false or misleading information during registration or order placement.
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">PRODUCTS AND AVAILABILITY:</h2>
                <p>
                  All Products are crafted and manufactured in India. As these are artisan-made collectibles, We reserve the right to modify, discontinue or limit product quantities at any time without prior notice. Please note that colors and designs may appear slightly different depending on light conditions or Your screen display.
                </p>
                
                <p>
                  Some products may be offered in limited quantities. Such items are subject to availability and can be returned/replaced/ exchanged only in accordance with Our Refund Policy (Hyperlink Daalo).
                </p>
                
                <p>
                  We do our best to showcase Our products as accurately as possible, including their color, detailing and form. However, we do not guarantee that Your device/ computer system will accurately reflect the product's true color or details.
                </p>
                
                <p>
                  We also reserve the right, though we are not obligated, to limit the sale of Our products to specific people, regions or jurisdictions. Similarly, we may adjust pricing, product descriptions, or discontinue a product at any time, with and/or without prior notice.
                </p>
                
                <p>
                  While We strive to meet Your expectations with every order, we cannot promise that every product or service will be flawless or that all errors will be rectified immediately.
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">PRICING AND PAYMENT:</h2>
                <p>
                  All prices are listed in Indian Rupees (INR) and are exclusive of applicable taxes unless otherwise stated.
                </p>
                
                <p>
                  We accept payment through secure third-party payment gateways integrated into Our Website.
                </p>
                
                <p>
                  While We strive to provide the most accurate and updated information on Our Website, there may occasionally be instances where content contains typographical errors, inaccuracies or unintentional omissions, such as in product descriptions, prices, offers, shipping details or availability. We reserve the right to correct any such errors and to update or cancel orders if We find that any information listed on Our Website or related platforms is incorrect, even after You have placed Your order. These corrections may happen without prior notice.
                </p>
                
                <p>
                  All orders are subject to verification and acceptance. Confirmation of an order does not constitute a binding contract unless accepted and dispatched by Us.
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">ORDER AND SHIPPING:</h2>
                <p>
                  Orders are processed or dispatched within seven (7) business days, subject to order complexity and availability. Since all orders are hand crafted and hand-painted, the time required to prepare an order varies depending on the design and product selection. Additionally, the dispatch time may also vary in certain circumstances where the ordered product is high-detailed, complex or limited edition or custom made. Our team will convey an approximation of dispatch time to the Purchaser.
                </p>
                
                <p>
                  Delivery times vary based on location and Our logistic partner's schedule. We may or may not guarantee exact delivery dates, but We will make reasonable efforts to ensure timely delivery.
                </p>
                
                <p>
                  It is important to reiterate that Product/s listed on the Website are made with too much love and the same are hand crafted, therefore, shipping timelines may vary. We make no binding commitments regarding delivery time until dispatch is completed.
                </p>
                
                <p>
                  Once Your order is ready for dispatch, you will be notified via email, text message, and/or WhatsApp with tracking details and an estimated delivery date.
                </p>
                
                <p>
                  We do not commit to specific delivery dates until the order is packed and handed over to the shipping partner.
                </p>
                
                <p>
                  We ship across India through reliable and reputed logistics partners.
                </p>
                
                <p>
                  Shipping fees are calculated and displayed at checkout based on the delivery location and order size.
                </p>
                
                <p>
                  Saikou is not responsible for delays or loss caused by the courier or unforeseen circumstances once the item has been dispatched. If You experience delivery issues, please contact Us promptly.
                </p>
                
                <p>
                  Customers must provide accurate and complete shipping details. We are not liable for orders lost or delayed due to incorrect or incomplete address information.
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">ORDER ACCURACY AND CUSTOMER DETAILS:</h2>
                <p>
                  To help Us serve You better, We kindly ask that all order details You provide are accurate, complete and kept up to date. This includes Your billing and shipping information, contact number and email address. It ensures that Your order is processed without delay and helps us reach out if We need to clarify anything.
                </p>
                
                <p>
                  If any changes or cancellations occur, we'll do our best to inform You using the contact details shared at the time of Your order.
                </p>
                
                <p>
                  We also reserve the right to restrict orders that appear to be placed by resellers or distributors. Our goal is to maintain fairness and ensure a smooth experience for all genuine customers.
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">INTELLECTUAL PROPERTY RIGHTS:</h2>
                <p>
                  All content available on the Website, including but not limited to product designs, logos, images, graphics, illustrations, text, audio clips, video clips, data compilations, page Layout, code and software (collectively "Content") is the exclusive property of Saikou or its licensors, affiliates or content suppliers and is protected by applicable intellectual property laws, including trademark, copyrights, designs among others.
                </p>
                
                <p>
                  The trade marks "SAIKOU", "IKON" our trade marks and any other marks used on the Website are proprietary trademarks or service marks pending/registered and owned by Us. You may not use these marks without prior written permission from SAIKOU who will hold an exclusive right over the Intellectual Property asset at every point in time.
                </p>
                
                <p>All products displayed or sold on the Website are either:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>original works created by Saikou or its channel partners;</li>
                  <li>created under license from intellectual property rights holders; or</li>
                  <li>inspired by well known characters and presented as fan art intended for artistic appreciation, not mass commercial exploitation.</li>
                </ul>
                
                <p>
                  Saikou respects the rights of original creators and intellectual property owners. Where Our figurines constitute fan art, they are produced in limited quantities and not intended to compete with or substitute official merchandise. If You believe any item infringes upon Your rights, please Contact Us through details mentioned under Clause 25 and We will promptly address Your concerns.
                </p>
                
                <p>
                  Subject to Your compliance with these Terms and Conditions, Saikou grants You a limited, non-exclusive, non-transferable, and revocable license to access and use the Website and its content for Your personal use only. This license does not include any resale or commercial use of any product, design or Contents (images, blogs, videos, graphics, UI/UX).
                </p>
                
                <p>
                  You shall not modify, copy, reproduce, republish, upload, post, transmit, distribute, or otherwise exploit any part of the Website or Content for commercial purposes without our prior written authorization.
                </p>
                
                <p>
                  All rights not expressly granted to You in these Terms and Conditions are reserved by Saikou.
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">USE OF THE WEBSITE:</h2>
                <p>We want everyone to have smooth and respectful experience while using Our website. To help maintain a safe environment, We ask all users to follow a few basic instructions.</p>
                
                <h3 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mt-6 mb-3">Permitted Use:</h3>
                <p>You may access and use the Website solely for Your personal or internal business purposes to view, browse, purchase or inquire about collectible figurines and related products offered by Saikou. All use must be lawful and in compliance with these Terms and applicable laws.</p>
                
                <h3 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mt-6 mb-3">User Account Responsibilities:</h3>
                <p>To access certain features, such as placing orders or tracking shipments, You may be required to register an account. You agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information during account registration and keep it updated.</li>
                  <li>Maintain the confidentiality of Your login credentials and restrict access to Your account.</li>
                  <li>Accept responsibility for all activities that occur under Your account.</li>
                  <li>Notify Us immediately if You suspect unauthorized use of Your account or any other breach of security.</li>
                </ul>
                
                <h3 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mt-6 mb-3">Prohibited Activities:</h3>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the site for anything illegal or against the law.</li>
                  <li>Encourage others to do anything unlawful or unethical.</li>
                  <li>Break any rules or regulations under Indian or international law.</li>
                  <li>Violate or misuse Our content or any intellectual property or belonging to others.</li>
                  <li>Post or share anything that can be considered offensive, threatening, disrespectful, hateful or discriminatory towards anyone based on gender, religion, caste, age, race, or background.</li>
                  <li>Share false, misleading, or manipulated information of and/or about Saikou</li>
                  <li>Upload harmful software like viruses or malware that could damage the Website, user experience, or any systems.</li>
                  <li>Attempt to collect personal information of other users or misuse their data .</li>
                  <li>Use bots, crawlers, scrapers, Ai tools or other automated means to access or copy content without Our prior written consent.</li>
                  <li>Spam, hack or interfere with the normal functioning of the website.</li>
                  <li>Post or share content that is obscene, immoral, or abusive in nature.</li>
                  <li>Tamper with the site's security or try to bypass any safety measures, impersonate another individual or falsely represent Your association with any person or entity.</li>
                </ul>
                
                <h3 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mt-6 mb-3">Right to Review User Interactions:</h3>
                <p>We reserve the right, but not the obligations, to monitor and review all user interactions and communications conducted through the Website. Saikou may, at its sole discretion remove or restrict access to any content that violates these Terms and/ or any applicable laws of India.</p>
                
                <h3 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mt-6 mb-3">Availability and Modifications:</h3>
                <p>We strive to maintain the availability and performance of the Website but do not guarantee uninterrupted or error-free access. We may, at our discretion:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify, Replace, suspend, or discontinue any part of the Website, including landing pages, product listings, offers, coupon codes, features or services in its entirety.</li>
                  <li>Revise prices, discontinue products or introduce new offerings.</li>
                  <li>Make such changes without prior notice to You, although We may notify Users via email or Website announcements where feasible.</li>
                </ul>
                
                <p>Your continued use of the Website after such modifications constitutes Your acceptance of the changes.</p>
                
                <p>If we find any behavior or activity that goes against these principles, We reserve the right to suspend or block Your access to Our services, and if needed, take appropriate legal steps.</p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">SUGGESTIONS, REVIEWS AND COMMUNITY CONTRIBUTIONS:</h2>
                <p>
                  We truly appreciate it when Our customers share their thoughts, feedback, or creative ideas with us. Whether You're submitting suggestions, participating in a contest or sending us a message by email, WhatsApp, (social media posts) post or directly through our website, You agree that we may use Your submissions in ways that help us improve Our Website, Product Listings and/or Product itself without any obligation or restriction.
                </p>
                
                <p>Please understand:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We may/ may not publish any suggestions, reviews and community contributions.</li>
                  <li>We are not obliged to compensate You for any suggestions, reviews and community contributions.</li>
                  <li>Considering a large number of queries and wide operations of the Website, it may not be possible for the Website Administrator to respond to each of them individually.</li>
                  <li>We do Our best to maintain free speech, respectful and safe space but We are not obliged to monitor all user-generated content. We do, however, reserve the right to remove anything We find inappropriate, offensive or against the law including anything that violates someone's rights or these Terms.</li>
                  <li>When You share something with Us, You promise that it doesn't infringe on anyone's rights (like copyrights or privacy) and that it doesn't contain anything abusive, harmful or malicious (like viruses or misleading information).</li>
                  <li>Please avoid using false contact details or pretending to be someone else. You're solely responsible for the messages and materials You share with Us and We trust that You'll help Us keep the "SAIKOU" community positive and respectful.</li>
                </ul>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">OUR REPRESENTATIONS & WARRANTIES:</h2>
                <p>We represent and warrant that,</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We are a legally established and duly operating business in accordance with applicable laws of India.</li>
                  <li>We make reasonable efforts to ensure that the products displayed on the Website, including descriptions, images and prices are accurate and updated. However, We do not warrant that all product descriptions, images, pricing, or other content on the Website are complete, current or error-free. Minor variations in color, size, or design may occur due to photography or manufacturing processes.</li>
                  <li>All designs of figurines, collectibles and related materials (as mentioned in product description) mentioned on the Website are either original products or sourced through authorized suppliers to the best of our knowledge. If any product is fan made or inspired design, it may not be disclosed separately.</li>
                  <li>We will deliver products ordered by You in accordance with the details provided during checkout, subject to availability and receipt of payment.</li>
                  <li>We shall provide reasonable customer support through the communication channels mentioned on the Website, including for queries related to product quality, shipment, and return/exchange.</li>
                </ul>
                
                <p>Except as expressly stated in these Terms, We disclaim all other warranties, express or implied, including any implied warranties of merchantability, fitness for a particular purpose, non-infringement, or availability.</p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">YOUR REPRESENTATIONS & WARRANTIES:</h2>
                <p>By accessing or using the Website, You represent and warrant that:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You are of legal age (18 years or above) and have the full legal capacity to enter into a binding agreement in accordance with the laws of India.</li>
                  <li>You are using the Website for personal and lawful purposes only and not for any commercial exploitation unless expressly authorized by Us.</li>
                  <li>The information You provide to Us during registration, checkout or through any interaction on the Website is true, complete, and accurate and You will promptly update such information in case of any changes.</li>
                  <li>You shall not use the Website to upload, share or transmit any material that is unlawful, offensive, defamatory, fraudulent, infringing, or otherwise objectionable or that violates the rights of any third party including intellectual property rights.</li>
                  <li>You will not engage in any activity that disrupts, interferes with or harms the security or functioning of the Website, servers or associated networks.</li>
                  <li>You understand and agree that placing an order on the Website constitutes a legally binding offer to purchase products and that such orders are subject to availability and confirmation by Us.</li>
                  <li>If You are using the Website on behalf of any artificial legal entity, You represent and warrant that You are authorized to bind such entity to these Terms. In such cases, the term "YOU" shall include the entity You represent.</li>
                  <li>You acknowledge that any breach of Your representations or warranties under these Terms may result in the suspension or termination of Your access to the Website and may give rise to civil and/or criminal liability under applicable law.</li>
                </ul>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">PRIVACY POLICY:</h2>
                <p>
                  Your privacy is important to us. Please refer to our Privacy Policy (Hypelink Daal Do) for detailed information on how We collect, use, store, disclose, and protect Your personal data.
                </p>
                
                <p>
                  By accessing or using the Website, You agree to the terms of our Privacy Policy and expressly consent to the collection and use of Your information in accordance with it.
                </p>
                
                <p>
                  We collect information such as Your name, email address, phone number, shipping address, billing information, and order history when You use or register on our Website, make a purchase, or contact Us.
                </p>
                
                <p>
                  We use this information to fulfill Your orders, improve Our products and services, communicate with You and personalize Your experience on the Website.
                </p>
                
                <p>
                  We do not sell, rent or share Your personal data with third parties except as required to fulfill orders, comply with legal obligations or operate the Website effectively (e.g., with logistics partners, payment gateways or service providers).
                </p>
                
                <p>
                  You have the right to access, update or delete Your personal information by contacting Us at the details forming part of these Terms and Conditions.
                </p>
                
                <p>
                  We take reasonable precautions to protect Your data. However, We cannot guarantee absolute security and disclaim liability for any unauthorized access beyond Our control.
                </p>
                
                <p>
                  By using the Website, You consent to the collection, use, disclosure and storage of Your information in accordance with Our Privacy Policy (hyperlink) which is incorporated herein by reference.
                </p>
                
                <p>
                  If You believe Your information has been misused or compromised, please contact Us promptly through the details provided in Contact us page on the website or at care@saikoushop.com.
                </p>
                
                <p>
                  If You do not agree with our Privacy Policy, You must refrain from using the Website.
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">RETURN & REFUND POLICY</h2>
                <h3 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mt-6 mb-3">General Policy:</h3>
                <p>
                  If You have come across damaged packaging of Your purchase at the time of delivery in which case it is advised not to receive the delivery. "Damaged Packaging" shall be construed as torn or crumbled outer packaging, no 'Saikou' branded taps found on the outer packaging, open outer box or appearing to be opened at the time of delivery. All sales of collectible consisting of figurines on the "SAIKOU" website are final. We do not provide refunds except under the specific circumstances outlined below.
                </p>
                
                <p>
                  If in case, You have received the damaged package consisting of Your ordered items, create an unboxing video of the same for a successful return.
                </p>
                
                <h3 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mt-6 mb-3">Damaged or Defective Packaging:</h3>
                <p>
                  If Your Outer Package arrives damaged, You must notify us within 24 hours of delivery by contacting our customer service at care@saikoushop.com with clear unboxing video evidence of the issue. During that time, the Recipient is expected to not open the package.
                </p>
                
                <p>
                  All products listed on the Website not limited to Limited edition or custom-made figurines and fan art pieces are strictly non-refundable.
                </p>

                <h3 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mt-6 mb-3">RETURN PROCESS:</h3>
                <p>Upon verifying the said damage, We may offer, at our sole discretion a replacement of the items.</p>
                
                <h4 className="text-lg font-space-grotesk font-medium text-saikou-secondary mt-4 mb-2">Eligibility for Returns:</h4>
                <p>Returns are only accepted for items in the case where the Outer Packaging of the product is tampered/ damaged. We do not accept returns for reasons such as change of mind, customer error or dissatisfaction with fan art interpretations.</p>
                
                <h4 className="text-lg font-space-grotesk font-medium text-saikou-secondary mt-4 mb-2">Initiaition of Return:</h4>
                <p>To initiate a return, You must contact us at care@saikoushop.com within 24 hours of receiving the item. Your request must include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Order ID</li>
                  <li>Clear Photographs of video evidence of the Outer Packaging of the Shipped Items</li>
                  <li>A brief description of the Problem</li>
                </ul>
                
                <h4 className="text-lg font-space-grotesk font-medium text-saikou-secondary mt-4 mb-2">Authorization of Return:</h4>
                <p>If Your request qualifies, we will authorize the return of the product along with instructions on how and where to send the item. Items sent without prior authorization will not be accepted and will be returned.</p>
                
                <h4 className="text-lg font-space-grotesk font-medium text-saikou-secondary mt-4 mb-2">Return Shipping:</h4>
                <p>Unless otherwise agreed, the customer is responsible for the cost of return shipping.</p>
                
                <h4 className="text-lg font-space-grotesk font-medium text-saikou-secondary mt-4 mb-2">Inspection of Return Shipped Product:</h4>
                <p>Once the returned item is received and inspected, we will notify You of the Outcome. If approved, we will send a replacement.</p>
                
                <p>Please check Our separate (Refund and Return Policy) (Hyperlink Daal Do) here.</p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">INDEMNITY:</h2>
                <p>
                  You agree to indemnify, defend and hold harmless Saikou, its founders, partners and representatives (collectively, the "Indemnified Parties") from and against any and all claims, demands, damages, liabilities, losses, costs and expenses, including reasonable attorney's fee, arising out of or related to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your use of or access to the Website, including any content, services or products.</li>
                  <li>Your breach or alleged breach of these Terms and Conditions, any applicable law, or any third-party rights.</li>
                  <li>Your violation of any intellectual property, privacy, publicity, proprietary or other rights of any third party.</li>
                  <li>Any content or information submitted, posted or otherwise transmitted by You through the Website.</li>
                  <li>Your misuse or unauthorized use of the Website, any products purchased therefrom, or any associated services.</li>
                </ul>
                
                <p>
                  We reserve the right at Your expense to assume the exclusive defence and control of any matter subject to indemnification by You. You agree to cooperate fully in asserting any available defences and in settling any claim, provided that no settlement requiring any admission of fault or payment by Us shall be made without our prior written consent.
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">DISCLAIMER AND LIMITATION OF LIABILITY:</h2>
                <p>
                  To the fullest extent permitted by applicable laws, SAIKOU, its affiliates (if any), officers, employees, agents, licensors, partners and raw material suppliers etc. shall not be liable for any indirect, incidental, special, consequential, punitive or exemplary damages, including but not limited to damages for loss of profits, goodwill, data or other intangible losses, resulting from the circumstances mentioned below. We aim to provide the best possible service, We cannot guarantee that Your use of Our Website will always be smooth, uninterrupted, timely, secure, or error-free. We do not make any promises with regard to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your use or inability to use/ reliance on the Website, its content or any products and services offered.</li>
                  <li>Any unauthorized access to or alteration of Your data or data transmissions.</li>
                  <li>Any conduct or content of any third party on the Website, including any offense, defamation or illegal conduct</li>
                  <li>Any errors, mistakes, omissions, interruptions, defects, delay in operation or transmission or any failure of performance of the Website or any of Our Services or products.</li>
                  <li>Any bugs, viruses, trojan horses or related viruses that may be transmitted to or through Our Website by any Third-party. (However, we assure You to pursue best security practices to keep viruses away from Website)</li>
                </ul>
                
                <p>
                  Due to unforeseen circumstances such as that of considerations under the Force Majeure Clause or unavailability of the Product, Our services may or may not be temporarily unavailable or discontinued, with or without notice. The same shall remain contingent on the circumstances beyond Our control. Your use of Our Website and services is entirely at Your own risk. Unless specifically mentioned, everything We offer is provided "as is" and "as available" without any specific warranties including, but not limited to, warranties of merchantability, fitness for a specific purpose, durability, title or non-infringement.
                </p>
                
                <p>
                  This also covers any issues related to content errors, delays or technical failures even if we were informed of the possibility.
                </p>
                
                <p>
                  Failure on our part to enforce or act on any provision within these Terms and Conditions does not mean We've waived Our right to do so in the future. These Terms and Conditions, together with any policies or guidelines posted on Our Website, Represent the full understanding and agreement between You and Saikou. They replace any previous communications or agreements (whether verbal or written).
                </p>
                
                <p>
                  If any part of these Terms seems unclear or open to multiple interpretations, it shall not automatically be interpreted against Us as the drafting party.
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">TERMINATION & SUSPENSION:</h2>
                <p>We reserve the right to suspend or terminate Your access to the Website and any related services with or without prior notice, under the circumstances outlined below:</p>
                
                <h3 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mt-6 mb-3">Termination by Us:</h3>
                <p>We may terminate or suspend Your access immediately without prior notice or liability if we determine that You have i) violated these Terms and Conditions, ii) engaged in conduct that harms our business or reputation, infringed intellectual property rights, or iii) acted in any way that is unlawful or inconsistent with the intended use of our Website.</p>
                
                <h3 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mt-6 mb-3">Termination by User:</h3>
                <p>You may terminate Your relationship with us by ceasing all access and use of the Website. Termination shall be effective upon Your cessation of using Our Website.</p>
                
                <h3 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mt-6 mb-3">Termination Required by Law:</h3>
                <p>We may suspend or terminate access to the Website if required to do so by law, legal process or a government authority, without liability.</p>
                
                <h3 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mt-6 mb-3">Effect of Termination:</h3>
                <p>Upon termination, Your right to access and use the Website and any content therein shall immediately cease. All provisions of these Terms that, by their nature, should survive termination (such as ownership provisions, indemnities, warranties, disclaimers and limitations of liability) shall remain in full force and effect.</p>
                
                <h3 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mt-6 mb-3">Suspension of Services:</h3>
                <p>We may temporarily suspend Your access to all or part of the Website and/or services for maintenance, system updates, technical issues or any reason deemed necessary by Us for ensuring sustainable business practices and/or operations at Saikou. We will responsibly make reasonable efforts to notify You of any prolonged or material suspension, if any.</p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">COMPLIANCE WITH LOCAL LAWS</h2>
                <p>
                  We make no representation (on perpetual basis) that the content, products, or services offered on or through this Website are appropriate, available or permitted for use outside the Republic of India. If You access the Website from a location outside India, You do so at Your own initiative and risk and You are responsible for compliance with any applicable local laws in Your jurisdiction.
                </p>
                
                <p>
                  You agree that You will not use the Website or purchase or import any products from it, in any country or jurisdiction where doing so would violate any applicable law or regulation, including but not limited to laws related to intellectual property, consumer protection, import restrictions, or cultural sensitivities.
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">DISPUTE RESOLUTION:</h2>
                <p>
                  In the event of any dispute, controversy, or claim arising out of or relating to these Terms and Conditions or the breach of any terms, termination thereof ("Dispute"), the Parties shall first attempt to resolve such Dispute amicably through good-faith negotiations within thirty (30) days from the date one Party notifies the other in writing of the existence of a Dispute.
                </p>
                
                <p>
                  If the Dispute is not resolved through amicable negotiations, it shall be finally resolved by arbitration in accordance with the Arbitration and Conciliation Act, 1996, as amended from time to time. The Arbitration shall be conducted by a sole arbitrator mutually appointed by the Parties. If the Parties fail to mutually agree upon an arbitrator within fifteen (15) days of the failure of mutual discussions and negotiations, the arbitrator shall be appointed in accordance with the rules of the Indian Council of Arbitration.
                </p>
                
                <p>
                  The seat and venue of arbitration shall be Ahmedabad, Gujarat, India. The arbitration proceedings shall be conducted in English.
                </p>
                
                <p>
                  Nothing in this Clause shall preclude either Party from seeking interim or injunctive relief before any court of competent jurisdiction, pending the arbitration proceedings.
                </p>
                
                <p>
                  The costs of arbitration shall be borne equally by the Parties unless the arbitral tribunal decides otherwise in its award.
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">GOVERNING LAW:</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>
                
                <p>
                  Subject to Clause 21, the courts at Ahmedabad, Gujarat, India shall have exclusive jurisdiction over any disputes arising out of or in connection with these Terms and Conditions, including any question regarding their existence, validity or termination. The formal legal proceedings shall be pursued in case the dispute resolution mechanism mentioned (under Clause 21) in the Terms and Conditions fails to address and resolve the dispute successfully.
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">MODIFICATIONS:</h2>
                <p>
                  We reserve the right, at its sole discretion, to modify, amend, revise, or update these Terms and Conditions at any time, with or without prior notice to the User. Such modifications shall be effective immediately upon being posted on Website unless otherwise specified. It is Your responsibility to check this page periodically for any changes.
                </p>
                
                <p>
                  We may also revise the prices of our products and/or services, discontinue specific product offerings or make functional or aesthetic changes to parts of our Website as required for business or operational reasons. These changes may be implemented with or without any direct notification to You.
                </p>
                
                <p>
                  Although, we may notify Users of material modifications through notices on the Website, email communications (if applicable), or other means. It is Your responsibility to review these Terms periodically. Your continued use of the Website following any modifications shall constitute Your acceptance of the revised terms.
                </p>
                
                <p>
                  If You do not agree with the updated Terms or any part thereof, You must immediately discontinue Your use of the Website. We shall not be held responsible to You or to any third party for any price changes, temporary suspension, or discontinuation of any product, service, or section of the Website. By continuing to use the Website after changes are made, You agree to be bound by the updated terms from time to time
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">GENERAL CLAUSES:</h2>
                <h3 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mt-6 mb-3">Relationship of Parties:</h3>
                <p>Nothing in these Terms and Conditions shall be construed to create a partnership, joint venture, agency, or employment relationship between You and Saikou. Neither Party has the authority to bind the other in said manners.</p>
                
                <h3 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mt-6 mb-3">Severability:</h3>
                <p>If any provision of these Terms and Conditions is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall remain in full force and effect.</p>
                
                <h3 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mt-6 mb-3">Entire Terms and Conditions:</h3>
                <p>These Terms and Conditions, including the Privacy Policy and any other legal notices published by Saikou, constitute the entire agreement between You and Saikou regarding Your use of the website and services, superseding any prior agreements.</p>
                
                <h3 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mt-6 mb-3">Assignment:</h3>
                <p>You may not assign or transfer any rights or obligations under these Terms and Conditions without the prior written consent of Saikou. Saikou may assign or transfer its rights and obligations without restriction.</p>
                
                <h3 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mt-6 mb-3">Notices:</h3>
                <p>Any notice, request, or communication under these Terms and Conditions must be in writing and shall be deemed duly given if delivered personally, sent by email address specified herein or such other address as either Party may designate in writing from time to time. Notices shall be deemed effective upon receipt or, if mailed, three (5) business days after the date of mailing.</p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">CONTACT US:</h2>
                <p>For any questions, concerns or grievances regarding these Terms and conditions, the use of the Saikou Website or any products or services offered, please contact Our designated Grievance Officer at:</p>
                
                <div className="bg-saikou-accent-light p-6 rounded-lg mt-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Scale className="w-6 h-6 text-saikou-accent" />
                    <h3 className="text-lg font-space-grotesk font-semibold text-saikou-secondary">SAIKOU CUSTOMER SUPPORT:</h3>
                  </div>
                  <div className="space-y-2">
                    <p><strong>Name:</strong> Darshna P</p>
                    <p><strong>Email Address:</strong> info@saikoushop.com</p>
                    <p><strong>Contact Number:</strong> +91 9274238391</p>
                  </div>
                </div>
                
                <p className="mt-6">
                  We strive to respond to all inquiries and resolve any issues promptly and fairly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-saikou-secondary text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-space-grotesk font-semibold mb-4">Explore</h4>
                <ul className="space-y-2 font-darker-grotesque">
                  <li><Link to="/" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Home</Link></li>
                  <li><Link to="/products" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Shop Saikou</Link></li>
                  <li><Link to="/products" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Shop Ikon</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-space-grotesk font-semibold mb-4">Saikou</h4>
                <ul className="space-y-2 font-darker-grotesque">
                  <li><Link to="/about-us" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">About Us</Link></li>
                  <li><Link to="/contact-us" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Contact Us</Link></li>
                  <li><Link to="/shipping-policy" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Shipping Policy</Link></li>
                  <li><Link to="/returns-refunds" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Returns & FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-space-grotesk font-semibold mb-4">Community</h4>
                <ul className="space-y-2 font-darker-grotesque">
                  <li><a href="https://chat.whatsapp.com/LdEzPs02oZ2LcMy5fhnH5T" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Join WhatsApp Group</a></li>
                  <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Instagram</a></li>
                  <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">YouTube</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-space-grotesk font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 font-darker-grotesque">
                  <li><Link to="/cookie-policy" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Cookie Policy</Link></li>
                  <li><Link to="/privacy-policy" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Privacy Policy</Link></li>
                  <li><Link to="/terms-conditions" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>
            <div className="text-center pt-8 border-t border-gray-600">
              <p className="font-darker-grotesque opacity-60">&copy; 2024 Saikou Figures. Made with ✨ in India.</p>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default TermsConditions;
