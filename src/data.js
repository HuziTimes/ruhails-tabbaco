// Images are served from the current sultanhouse.co site.
// To self-host, copy them into /public/images and change IMG to '/images/'.
const IMG = 'https://sultanhouse.co/assets/images/'
export const img = (name) => IMG + encodeURIComponent(name)

export const company = {
  name: 'Sultan House (Private) Limited',
  address: ['F-10/3, Street 1', 'Islamabad 44000, Pakistan'],
  phone: '+92 317 0333084',
  phoneHref: 'tel:+923170333084',
  emails: [
    { label: 'General Info', value: 'info@sultanhouse.co' },
    { label: 'Exports', value: 'ruhail@sultanhouse.co' },
    { label: 'Operations', value: 'zeeshan@sultanhouse.co' },
    { label: 'Logistics', value: 'logistics@sultanhouse.co' },
  ],
  facebook: 'https://www.facebook.com/profile.php?id=61584136835557',
  linkedin: 'https://www.linkedin.com/in/sultan-house-tobacco-company-2a356439a/',
}

export const products = [
  { name: 'Virginia Flue-Cured (FCV)', tag: 'Bright Tobacco', image: 'FLUE CURED VIRGINIA TOBACCO.jpg', text: 'High-quality flue-cured leaf known for its bright golden colour, mild flavour and outstanding consistency.' },
  { name: 'Burley Tobacco', tag: 'Light Air-Cured', image: 'LIGHT AIR CURED TOBACCO (BURLEY).jpg', text: 'Light air-cured tobacco prized in cigarette blends for its excellent absorptive qualities and body.' },
  { name: 'Sun-Cured Rustica', tag: 'Traditional Cure', image: 'SUN-CURED RUSTICA TOBACCO (CHELUM TOBACCO, MULKI TOBACCO, SNUFF TOBACCO).jpg', text: 'Naturally sun-cured Rustica — Chelum, Mulki and Snuff tobacco with distinct aroma and regional character.' },
  { name: 'Dark Air-Cured Tobacco', tag: 'Air-Cured', image: 'DARK AIR-CURED TOBACCO.jpg', text: 'Robust dark air-cured leaf, cleaned and graded as strips or whole leaves ready for export.' },
  { name: 'Light Sun-Cured Tobacco', tag: 'Desi Hukkah', image: 'LIGHT SUN-CURED TOBACCO (DESIHUKKAH TOBACCO).jpg', text: 'Light sun-cured Desi Hukkah tobacco, prepared to customer-defined specifications and blends.' },
  { name: 'Shredded Tobacco', tag: 'Processed Raw Material', image: 'SHREDDED TOBACCO.jpg', text: 'Precisely cut and conditioned tobacco, supplied to your required cut width, moisture and blend.' },
  { name: 'Expanded Stem', tag: 'Processed Raw Material', image: 'EXPANDED STEM.jpg', text: 'Expanded tobacco stem for filling-value improvement and cost-efficient cigarette manufacturing.' },
  { name: 'Custom Buyer Grades', tag: 'Buyer-Specific', image: 'tbc 4.jpg', text: 'Any grade, blend or raw material prepared exactly to your specification — cut, moisture, cleanliness and packing.' },
]

export const services = [
  { title: 'Raw Tobacco Sourcing', text: 'Direct relationships with trusted growers across Pakistan’s finest tobacco regions.' },
  { title: 'Quality Control & Grading', text: 'Rigorous grading, inspection and pre-shipment checks on every consignment.' },
  { title: 'Processing Coordination', text: 'Threshing, cutting, conditioning and packing to buyer-specific requirements.' },
  { title: 'Export & Logistics', text: 'Complete export documentation, freight and door-to-port delivery worldwide.' },
]

export const reasons = [
  { title: 'Consistent Quality', text: 'Uniform tobacco quality through careful sourcing, grading and supplier coordination.' },
  { title: 'Years of Export Experience', text: 'We understand international trade requirements, documentation and destination-specific standards.' },
  { title: 'Reliable Supply Chain', text: 'Long-term grower relationships let us meet volume commitments and delivery timelines.' },
  { title: 'Worldwide Support', text: 'A dedicated team supporting buyers across every time zone, from first sample to final delivery.' },
]

export const steps = [
  { title: 'Enquiry & Specification', text: 'Share your grade, cut, moisture, packing and volume requirements with our export team.' },
  { title: 'Samples & Quotation', text: 'We provide representative samples and a transparent, competitive quotation.' },
  { title: 'Sourcing & Processing', text: 'Leaf is sourced, graded and processed to your exact specification.' },
  { title: 'Inspection', text: 'Independent and in-house pre-shipment quality checks and certification.' },
  { title: 'Shipment & Delivery', text: 'Full export documentation, fumigation and secure container shipment worldwide.' },
]

export const regions = ['Middle East', 'Asia Pacific', 'Africa', 'Europe', 'Central Asia', 'Americas']

export const team = [
  { name: 'Behram Yusuf', role: 'Chief Executive Officer', email: 'behram@sultanhouse.co', photo: 'behramhd.png' },
  { name: 'Zeeshan Akhtar', role: 'Director — Operations', email: 'zeeshan@sultanhouse.co', photo: 'zeeshan.jpg' },
  { name: 'Ruhail Akhtar', role: 'Director — Sales & Marketing', email: 'ruhail@sultanhouse.co', photo: 'ruhailgem.png' },
  { name: 'Akhtar Khan', role: 'Procurement & Sourcing Lead', email: 'akhtar@sultanhouse.co' },
  { name: 'Sohail Ahmed', role: 'Quality Controller', email: 'sohail@sultanhouse.co' },
  { name: 'Sheraz Khan', role: 'Export Manager', email: 'sheraz@sultanhouse.co' },
]

export const faqs = [
  { q: 'What types of tobacco do you export?', a: 'We export Virginia flue-cured, Burley, sun-cured, dark air-cured, shredded tobacco, expanded stem and buyer-specified grades — along with other tobacco raw materials used in manufacturing.' },
  { q: 'Do you supply customised grades?', a: 'Yes. Tobacco is prepared according to customer specifications, including cut, moisture, cleanliness, blend and packaging.' },
  { q: 'Which markets do you serve?', a: 'We supply manufacturers, processors and distributors worldwide, including Asia, the Middle East, Africa and beyond.' },
  { q: 'How do you ensure quality?', a: 'Through careful sourcing, grading, inspection and pre-shipment quality checks on every consignment.' },
  { q: 'Can I request samples before ordering?', a: 'Absolutely. Contact our export team with your requirements and we will arrange representative samples.' },
]
