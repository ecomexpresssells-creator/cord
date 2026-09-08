"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft, ArrowRight, Globe, Award, Truck, Shield, Mail, Phone, MapPin,
  Package, Leaf, Palette, Shirt, Cpu, Star, CheckCircle, Users,
  Info, X, ExternalLink, RefreshCw, MessageSquare, Linkedin,
  Instagram, Facebook, Youtube, ChevronRight,
  FileText, ShieldCheck, Scale, Download,
  ClipboardCheck, PackageSearch, Menu
} from "lucide-react"

// =========================================================================
// SEPARATE PRODUCT CARD COMPONENT (Fixes shared image slider index issue)
// =========================================================================
function ProductCard({ product, onSelect }: { product: any; onSelect: (product: any) => void }) {
  // Har card ki APNI khud ki image index state:
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  const images = product.images && product.images.length > 0 ? product.images : (product.image ? [product.image] : [])

  return (
    <div className="group relative bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl">
      <div>
        <div className="aspect-17/10 relative bg-slate-950 overflow-hidden group">
          {/* Active Image */}
          <Image
            src={images[currentImgIndex] || "/images/placeholder.jpg"}
            alt={product.name}
            fill
            className="object-cover object-center group-hover:scale-102 transition-transform duration-500 opacity-95"
            unoptimized
          />

          {/* Left Arrow Button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-1.5 rounded-full z-20 cursor-pointer"
            >
              ‹
            </button>
          )}

          {/* Right Arrow Button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-1.5 rounded-full z-20 cursor-pointer"
            >
              ›
            </button>
          )}

          {/* Reference Purpose Only Badge */}
          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-2 py-0.5 border border-slate-800/60 text-[8px] font-mono font-medium text-slate-400 tracking-wider uppercase z-10">
            Reference Purpose Only
          </div>
        </div>

        <div className="p-6">
          <h4 className="font-serif text-xl font-bold text-white mb-2 tracking-tight group-hover:text-sky-400 transition-colors">{product.name}</h4>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6 font-normal">{product.description}</p>

          <div className="space-y-2 border-t border-slate-800 pt-4">
            {product.features?.map((feat: string, fi: number) => (
              <div key={fi} className="flex items-center gap-2 text-[12px] text-slate-200 font-medium">
                <span className="w-1.5 h-1.5 bg-sky-400 shrink-0" />
                {feat}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <button
          onClick={() => onSelect(product)}
          className="w-full flex items-center justify-center gap-2 border border-slate-700 hover:bg-slate-900/80 py-2.5 text-[11px] font-mono font-black uppercase tracking-widest text-slate-200 hover:text-white transition-all cursor-pointer"
        >
          <Info className="w-4 h-4" /> View full specifications
        </button>
      </div>
    </div>
  )
}

// =========================================================================
// PRODUCT CATEGORIES DATA (Unique IDs for each category)
// =========================================================================
const categories = [
  {
    id: "leather",
    name: "Leather Products",
    tagline: "Premium Craftsmanship",
    description: "Handcrafted leather goods made with finest quality full-grain and genuine leather, exported to luxury retailers worldwide.",
    icon: Package,
    products: [
      {
        name: "Leather Footwear",
        description: "Premium export-quality leather footwear designed for superior comfort, durability, and timeless fashion appeal. Upgrade your collection today with premium leather footwear crafted to meet international quality standards and customer expectations.",
        features: ["Crafted from premium genuine leather", "Durable design with superior comfort fit", "Export-quality finishing for global markets"],
        image: "/images/leather/leather footwear.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Leather Garments",
        description: "High-quality leather garments manufactured with modern styling, fine craftsmanship, and long-lasting performance. Partner with us now to deliver premium leather fashion products that attract customers and increase market value.",
        features: ["Premium stitching with elegant finishing", "Comfortable and durable leather material", "Stylish designs for global fashion markets"],
        image: "/images/leather/leather garments.jpg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Leather Handbags",
        description: "Elegant leather handbags crafted with refined detailing, luxury finishing, and practical everyday functionality. Order today and offer your customers stylish leather handbags made for premium global fashion trends",
        features: ["Premium-quality genuine leather material", "Stylish and durable handcrafted designs", "Luxury finishing with spacious utility"],
        image: "/images/leather/leather handbags.jpg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Leather Accessories",
        description: "Premium leather accessories developed with fine craftsmanship, modern designs, and practical everyday use. Enhance your business collection with premium leather accessories trusted by international buyers worldwide.",
        features: ["Precision-crafted premium leather products", "Elegant designs with durable finishing", "Suitable for fashion and lifestyle markets"],
        image: "/images/leather/leather accessories.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Saddery & Harness",
        description: "Expertly handcrafted saddlery and harness products built for durability, comfort, and professional equestrian performance. Connect with us today for reliable equestrian leather products designed for professional standards.",
        features: ["Strong and durable leather construction", "Comfortable design for professional use", "Handcrafted with premium workmanship"],
        image: "/images/leather/saddery harness.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Industrial Leather Goods",
        description: "Heavy-duty industrial leather goods engineered for strength, reliability, and demanding commercial applications. Get customized industrial leather solutions today to improve operational performance and long-term durability.",
        features: ["Industrial-grade heavy-duty leather quality", "Reliable performance for commercial usage", "Customized solutions for global industries"],
        image: "/images/leather/industrial leather goods.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      }
    ]
  },
  {
    id: "spices",
    name: "Spices & Agro",
    tagline: "Authentic Indian Flavors",
    description: "Premium quality spices sourced directly from Indian farms, processed and packaged to international food safety standards.",
    icon: Leaf,
    products: [
      {
        name: "Red Chilli",
        description: "Premium-quality red chilli with rich color, strong aroma, and authentic flavor for global food markets. Order today with customized packaging options designed for your business needs.",
        features: [
          "Rich natural color and strong aroma",
          "Hygienically processed export-quality spice",
          "FSSAI Certified"
        ],
        images: [
          "/images/spices/redchili2.jpeg",
          "/images/spices/redchili.jpeg",
        ],
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Cummin Seeds",
        description: "Export-grade cumin seeds processed for purity, strong aroma, and superior taste for worldwide culinary use. Secure premium spice supplies today with flexible packaging solutions.",
        features: ["Strong aroma with premium quality", "Cleaned and hygienically packed seeds", "Custom packaging for global buyers"],
        images: [
          "/images/spices/cummin seeds.jpeg",
          "/images/spices/cumminseeds2.jpeg",
        ],
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Turmeric",
        description: "High-quality turmeric powder with vibrant color, natural purity, and rich curcumin content. Connect with us for premium turmeric exports with customized packaging support.",
        features: ["Bright color with natural purity", "High curcumin quality standards", "Organic available"],
        images: [
          "/images/spices/turmeric2.jpeg",
          "/images/spices/turmeric.jpeg",
        ],
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Cardamom",
        description: "Premium aromatic cardamom selected for freshness, rich flavor, and export-quality standards. Order now with customized packaging tailored to your market requirements.",
        features: ["Naturally rich aroma and freshness", "Premium export-quality cardamom pods", "Long-lasting natural flavor retention"],
        images: [
          "/images/spices/cardamom.jpeg",
          "/images/spices/cardamom2.jpeg",
        ],
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "fenugreek",
        description: "Carefully sourced fenugreek seeds known for natural aroma and superior export quality. Partner with us for reliable supply and packaging solutions made for global markets.",
        features: ["Natural aroma with premium purity", "Hygienically processed quality seeds", "Long shelf life with freshness"],
        image: "/images/spices/fenugreek.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Peanuts",
        description: "Premium export-quality peanuts processed for freshness, rich taste, and international standards. Book your bulk orders today with packaging customized to your needs.",
        features: ["Fresh and premium-quality peanuts", "Strict hygienic processing standards", "Long-lasting storage quality"],
        image: "/images/spices/peanut.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Other Spices ",
        description: "Wide range of premium Indian spices processed for purity, quality, and authentic flavor. Expand your business today with customized spice export solutions.",
        features: ["Authentic Indian spice varieties", "Available in whole and powder forms", "Premium quality assurance standards"],
        image: "/images/spices/Other Spices.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      }
    ]
  },
  {
    id: "handicrafts",
    name: "Handicrafts",
    tagline: "Artisan Traditions",
    description: "Exquisite handmade crafts showcasing rich cultural heritage, created by skilled artisans across legacy regions.",
    icon: Palette,
    products: [
      {
        name: "Wooden Handicrafts",
        description: "Beautiful handcrafted wooden products made with traditional artistry and premium finishing. Order today and add timeless handmade craftsmanship to your collection.",
        features: ["Handcrafted with fine detailing", "Premium-quality wooden craftsmanship", "Customized packaging available"],
        image: "/images/handicrafts/wooden_handicrafts.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Crocheted Products",
        description: "Creative crochet handicrafts designed with vibrant detailing and artisan quality for global markets. Place your order now for unique handmade collections loved worldwide.",
        features: ["Handmade with skilled craftsmanship", "Attractive colorful crochet designs", "Customized as required"],
        image: "/images/handicrafts/crocheted_products.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Copper Handicrafts",
        description: "Elegant copper handicrafts crafted with rich finishing and authentic Indian workmanship. Connect with us today for premium handcrafted décor collections.",
        features: ["Premium copper finishing quality", "Traditional handcrafted artistic designs", "Flexible export solutions"],
        image: "/images/handicrafts/copper_handicrafts.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Handprinted Textiles",
        description: "High-quality handprinted textiles featuring artistic patterns and export-grade fabric quality. Book your orders today and offer authentic handcrafted textiles to your customers.",
        features: ["Unique handcrafted textile prints", "Premium export-quality fabric materials", "Customized Designs & packaging for buyers"],
        image: "/images/handicrafts/handprinted_textiles.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Stone & Marble Crafts",
        description: "Premium stone and marble crafts designed with detailed artistry and luxurious finishing. Secure your orders now for elegant handcrafted décor products.",
        features: ["Fine handcrafted stone detailing", "Elegant marble finishing quality", "Safe customized export packaging & Designing"],
        image: "/images/handicrafts/stone_marble_crafts.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Handmade Carpets",
        description: "Beautiful handmade carpets crafted with fine weaving, durability, and elegant designs. Order today and bring premium handmade luxury to your product range.",
        features: ["Durable handcrafted weaving quality", "Elegant traditional carpet patterns", "Customized Designs & packaging available"],
        image: "/images/handicrafts/handmade_carpets.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Paper & Stationery Crafts",
        description: "Creative handmade paper and stationery products perfect for gifting, décor, and daily use. Partner with us now for exclusive handcrafted stationery collections.",
        features: ["Unique handmade paper craftsmanship", "Ideal for gifting and décor", "Flexible style & packaging as per requirements"],
        image: "/images/handicrafts/Papers_tationery_crafts.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Other Handicrafts",
        description: "Wide range of premium handicrafts showcasing authentic Indian artistry and export-quality finishing. Contact us today and expand your business with unique handmade products.",
        features: ["Authentic handcrafted artisan products", "Premium export-quality finishing", "All Products Customized for global markets"],
        image: "/images/handicrafts/Papers_tationery_crafts.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      }
    ]
  },
  {
    id: "electronics",
    name: "Electronics & Tech",
    tagline: "Precision Engineering",
    description: "Next-gen enterprise electronics hardware, micro-architectures, and smart accessories engineered for modern global standards.",
    icon: Cpu,
    products: [
      {
        name: "Mobile & Smart Accessories",
        description: "Premium mobile and smart accessories designed for modern technology needs with reliable quality, global standards, and competitive export pricing trusted by international buyers, Partner with us today for trusted export quality and competitive global pricing!",
        features: ["Advanced smart device solutions", "Durable and high-quality accessories", "Designed for international markets"],
        image: "/images/electronics/mobile_accessories.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Renewable Energy System",
        description: "Efficient renewable energy solutions engineered for sustainable power generation, long-term performance, and trusted export quality for global business needs, Choose our export solutions for smarter and sustainable energy worldwide!",
        features: ["Energy-efficient power systems", "Eco-friendly and reliable technology", "Suitable for residential & industrial use"],
        image: "/images/electronics/RES.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Industrial Power & Control",
        description: "Advanced industrial power and control products built for safe operations, stability, and high-performance industrial applications, Connect with us for dependable industrial export products at global standards!",
        features: ["Reliable industrial control systems", "High-performance power solutions", "Built for demanding environments"],
        image: "/images/electronics/industrial_power_control.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Electronic Components",
        description: "High-quality electronic components manufactured for precision, durability, and efficient industrial and commercial performance, Source trusted electronic components from experienced global exporters!",
        features: ["Premium-grade electronic parts", "Reliable and long-lasting quality", "Suitable for multiple applications"],
        image: "/images/electronics/electronics_components.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "LED & Smart Lighting",
        description: "Modern LED and smart lighting solutions designed for energy savings, durability, and advanced lighting performance, Upgrade your projects with premium lighting products from trusted exporters!",
        features: ["Energy-saving lighting systems", "Smart and modern designs", "Long-lasting illumination solutions"],
        image: "/images/electronics/Led_s_l.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Telecom & Networking",
        description: "Reliable telecom and networking products designed for stable connectivity, secure communication, and high-speed performance, Partner with us for world-class telecom export solutions today!",
        features: ["Advanced networking solutions", "Stable and secure connectivity", "Built for global communication needs"],
        image: "/images/electronics/telecom_networking.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Industrial Electric Motors",
        description: "High-performance industrial electric motors engineered for reliable operation, energy efficiency, and long-lasting industrial applications. Power your business with premium motors supplied by trusted exporters!",
        features: ["High-efficiency motor systems", "Durable industrial-grade performance", "Reliable solutions for global industries"],
        image: "/images/electronics/electric_motor.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Wires & Other Electronics",
        description: "Comprehensive range of wires, electrical, and electronic products manufactured to meet international quality and performance standards. Choose our export-quality electrical products for trusted performance worldwide!",
        features: ["High-quality electrical solutions", "Durable and reliable products", "Suitable for industrial & commercial use"],
        image: "/images/electronics/other_electronics.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      }
    ]
  },
  {
    id: "garments",
    name: "Garments & Fabric",
    tagline: "Fashion & Textiles",
    description: "Quality apparel and industrial textiles from premier manufacturing hubs, offering optimized scale pricing and full customization options.",
    icon: Shirt,
    products: [
      {
        name: "T-Shirts",
        description: "Premium export-quality T-shirts crafted with comfortable fabrics, modern designs, and customized manufacturing solutions to match international fashion requirements. Contact us today for customized apparel solutions and competitive export pricing worldwide.",
        features: ["Soft and durable fabric quality", "Trend-focused modern designs", "Customization available as per buyer requirements"],
        image: "/images/garments/tshirts.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Kids Wear",
        description: "High-quality kids wear designed with comfort, safety, and stylish patterns while offering flexible customization for global apparel markets. Partner with trusted exporters for premium customized kids wear collections.",
        features: ["Comfortable and skin-friendly fabrics", "Trendy designs for all age groups", "Customized production as per requirements"],
        image: "/images/garments/kids_wear.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Sport Garments",
        description: "Performance-driven sport garments crafted for comfort, flexibility, and durability with trusted export quality for global markets. Connect with us for high-quality sportswear export solutions worldwide.",
        features: ["Breathable and flexible materials", "Designed for active performance", "Premium quality export solutions"],
        image: "/images/garments/sport_garments.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Man's Knitted/Sweatshirts",
        description: "Stylish men’s knitted sweatshirts produced with premium fabrics, modern fits, and reliable export-quality finishing. Source premium sweatshirt collections from trusted global exporters.",
        features: ["Warm and comfortable fabric", "Modern and fashionable designs", "High-standard garment production"],
        image: "/images/garments/mans_knitted_sweatshirts.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Man's Polo Shirts",
        description: "Premium men’s polo shirts designed with superior comfort, elegant styling, and export-quality craftsmanship for global apparel markets. Partner with us for premium polo shirt exports at competitive prices.",
        features: ["Classic and modern style options", "High-quality stitching and fabrics", "Suitable for international fashion markets"],
        image: "/images/garments/mans_polo_shirts.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Denim Jeans & Shorts for Men & Women",
        description: "Durable and fashionable denim jeans and shorts manufactured with premium materials and trusted export-quality craftsmanship. Choose reliable denim export solutions for your international business needs.",
        features: ["Trendy and durable denim styles", "Comfortable premium fabric quality", "Designed for global fashion demand"],
        image: "/images/garments/jeans_men_women.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Other Garments",
        description: "Wide range of high-quality garments tailored to meet international fashion standards with reliable manufacturing and competitive export pricing. Grow your fashion business with trusted garment export partners worldwide.",
        features: ["Modern apparel collections", "Quality-focused garment production", "Trusted solutions for global buyers"],
        image: "/images/garments/other_garments.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      }
    ]
  },
  {
    id: "marble",
    name: "Marble & Stone",
    tagline: "Natural Stone & Surfaces",
    description: "Architectural grade marble and natural stone slabs crafted for structural and luxury decorative installations.",
    icon: Shirt,
    products: [
      {
        name: "Marble & Stone/Products",
        description: "Premium marble and stone products crafted with elegant finishes, durable quality, and customized solutions for global construction and interior projects. Partner with us for reliable marble and stone export solutions worldwide.",
        features: ["High-quality natural stone materials", "Elegant and modern surface finishes", "Custom sizes and designs available"],
        image: "/images/marbles/marble_stone.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Bespoke Stone & Marble Collection",
        description: "Exclusive bespoke stone and marble collections designed to deliver luxury aesthetics, premium craftsmanship, and customized solutions for international buyers. Choose trusted exporters for premium customized marble collections globally.",
        features: ["Premium handcrafted stone finishes", "Luxury designs for modern spaces", "Custom manufacturing as per requirements"],
        image: "/images/marbles/marble_collection.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      }
    ]
  },
  {
    id: "packaging",
    name: "Packaging Materials",
    tagline: "Packaging Products",
    description: "Export-grade durable packaging, pallets, and bags engineered to keep cross-border container loads safe and secured.",
    icon: Shirt,
    products: [
      {
        name: "Industrial Packaging Solutions",
        description: "Reliable industrial packaging solutions manufactured for secure handling, durability, and efficient transportation across global industries. Connect with us for dependable industrial packaging export services worldwide.",
        features: ["Durable export-grade packaging", "Safe and efficient product protection", "Customized packaging solutions available"],
        image: "/images/packaging/ips.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Plastic & Wooden Pallets",
        description: "High-strength plastic and wooden pallets designed for safe storage, easy handling, and reliable logistics operations in international markets. Source trusted pallet export solutions for your global supply chain needs.",
        features: ["Durable and heavy-duty pallet solutions", "Suitable for warehouse and logistics use", "Custom sizes and specifications available"],
        image: "/images/packaging/pwp.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      },
      {
        name: "Ready-made Paper & Plastic Bags",
        description: "Premium ready-made paper and plastic bags manufactured with durable materials, modern designs, and customized solutions for international business requirements. Partner with us for high-quality packaging bag export solutions at competitive prices.",
        features: ["Eco-friendly and durable materials", "Available in multiple styles and sizes", "Custom printing and branding options available"],
        image: "/images/packaging/rmdppbag.jpeg",
        moq: "NEGOTIABLE",
        leadTime: "AS PER DESTINATION"
      }
    ]
  }
]

const targetCountries = [
  { name: "United Kingdom", code: "UK", port: "Port of Felixstowe / Southampton" },
  { name: "United States", code: "USA", port: "Port of LA / New York" },
  { name: "Germany", code: "DE", port: "Port of Hamburg" },
  { name: "Netherlands", code: "NL", port: "Port of Rotterdam" }
]

const testimonials = [
  {
    quote: "Zhen Sea has been our trusted supplier for leather goods for over 5 years. Exceptional quality and reliable delivery every time.",
    name: "James Mitchell",
    company: "Premium Retail Group, UK",
    rating: 5
  },
  {
    quote: "The spices we source from Zhen Sea are consistently fresh and aromatic. Our customers love the authentic Indian flavors.",
    name: "Sarah Thompson",
    company: "Gourmet Foods Ltd, London",
    rating: 5
  }
]

export default function ZhenSeaInternational() {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null)
  const [formStatus, setFormStatus] = useState<"IDLE" | "PENDING" | "SUCCESS" | "ERROR">("IDLE")
  const [selectedCategoryNode, setSelectedCategoryNode] = useState("Not Specified")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const formRef = useRef<HTMLFormElement>(null)

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormStatus("PENDING")
    const formData = new FormData(e.currentTarget)
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      const data = await response.json()
      if (data.success) {
        setFormStatus("SUCCESS")
        if (formRef.current) formRef.current.reset()
        setSelectedCategoryNode("Not Specified")
      } else {
        setFormStatus("ERROR")
      }
    } catch (err) {
      setFormStatus("ERROR")
    }
  }

  function handleProductDrawerSelection(categoryName: string) {
    setSelectedCategoryNode(categoryName)
    setSelectedProduct(null)

    setTimeout(() => {
      const element = document.getElementById("contact")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 150)
  }

  return (
    <div className="min-h-screen bg-[#0b0e14] text-slate-100 font-sans antialiased selection:bg-sky-500 selection:text-black">

      {/* Sticky Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#07090c]/95 backdrop-blur-xl border-b border-slate-700/80">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" className="flex items-center gap-4 group cursor-pointer">
            <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.jpg"
                alt="Zhen Sea International Logo"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
            <div>
              <h1 className="text-base font-black tracking-wider uppercase text-white group-hover:text-sky-400 transition-colors">Zhen Sea International</h1>
              <p className="text-[10px] text-sky-400 tracking-[0.3em] uppercase font-mono font-black">Global Supply Chain LLP</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-[12px] uppercase tracking-wider font-bold">
            <Link href="/about" className="text-slate-300 hover:text-white transition-colors">About Us</Link>
            <a href="#marketplace" className="text-slate-300 hover:text-white transition-colors">Asset Portfolio</a>
            <a href="#corridors" className="text-slate-300 hover:text-white transition-colors">Trade Corridors</a>
            <a href="#contact" className="bg-white text-black px-5 py-2.5 font-black hover:bg-slate-200 transition-colors">Inquire Freight</a>
          </nav>

          {/* Mobile Navigation Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 border border-slate-700 hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer / Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-[#07090c] px-6 py-6 space-y-4 font-mono text-xs uppercase tracking-wider font-bold shadow-2xl">
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-sky-400 py-2 border-b border-slate-800/60 transition-colors"
            >
              About Us
            </Link>
            <a
              href="#marketplace"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-sky-400 py-2 border-b border-slate-800/60 transition-colors"
            >
              Asset Portfolio
            </a>
            <a
              href="#corridors"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-sky-400 py-2 border-b border-slate-800/60 transition-colors"
            >
              Trade Corridors
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-white text-black text-center py-3 font-black hover:bg-slate-200 transition-colors mt-2"
            >
              Inquire Freight
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80"
            alt="International Ocean Freight Asset Line"
            fill
            className="object-cover opacity-[0.45] scale-105"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0b0e14] via-[#0b0e14]/40 to-[#0b0e14]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-6">
          <div className="inline-flex items-center gap-2 border border-slate-600 bg-slate-900/80 px-4 py-1.5">
            <Globe className="w-4 h-4 text-sky-400" />
            <span className="text-[11px] uppercase tracking-widest text-white font-mono font-black">Accredited Sovereign Commodity Transit</span>
          </div>
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight text-white leading-none mb-8 tracking-tighter">
            Routing Premium Trade to <br />
            <span className="italic font-normal text-sky-400">Global Ports</span>
          </h2>
          <p className="text-sm md:text-lg text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed font-normal shadow-sm">
            Zhen Sea International LLP standardizes enterprise asset movement. We deliver premium hardware electronics, leather crafts, verified agro-spices, and tailored garments with total freight clearance assurance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Button 1: Initiate Commercial Order */}
            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-8 py-4 font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all group"
            >
              Initiate Commercial Order
              <ExternalLink className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
            </a>

            {/* Button 2: View Asset Portfolios */}
            <a
              href="#marketplace"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-8 py-4 font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all group"
            >
              View Asset Portfolios
              <ExternalLink className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
            </a>

            {/* Button 3: Practical Learning About EXIM */}
            <Link
              href="/practical-learning"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-8 py-4 font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all group"
            >
              Practical EXIM Training
              <ExternalLink className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Live Enterprise Ledger Numbers */}
      <section className="py-12 border-y border-slate-800 bg-[#0f131c]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Years Trade Domain Expertise" },
              { value: "50+", label: "Corporate Sovereign Partners" },
              { value: "25+", label: "International Ports Serviced" },
              { value: "100%", label: "Traceable Supply Compliance" }
            ].map((stat, i) => (
              <div key={i} className="border-l-2 border-sky-400 pl-6">
                <p className="font-mono text-3xl md:text-4xl font-black text-white tracking-tight mb-1">{stat.value}</p>
                <p className="text-[12px] uppercase tracking-wider text-slate-300 font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Corporate Infrastructure Context */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-mono font-black tracking-[0.3em] uppercase text-sky-400 block mb-3">ABOUT ZHEN SEA INTERNATIONAL LLP</span>
              <h3 className="font-serif text-4xl md:text-6xl font-light text-white mb-8 leading-tight">
                Architecting freight reliability through structured <span className="italic text-sky-400">end-to-end clearing nodes.</span>
              </h3>
              <div className="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
                <p>
                  As an accredited Indian multi-category export enterprise, Zhen Sea International LLP enforces programmatic quality gates across our entire product range—from electronics, spices, and marble to leather, garments, and specialized packaging. We operate as direct wholesale clearing counter-parties for enterprise networks throughout the United Kingdom, Continental Europe, and North America, eliminating unverified middlemen to maximize supply chain transparency and container cost-efficiency.
                </p>
                <p>
                  <strong>Our Export Portfolio</strong><br /><br />
                  We bridge the gap between Indian manufacturing and global demand by specializing in:
                  <br /><br />
                  <strong>Industrial & Technical:</strong> Precision electronics, components, and high-performance packaging solutions.<br /><br />

                  <strong>Artisanal & Lifestyle:</strong> Authentic Indian handicrafts, premium leather goods, and high-finish garments.<br /><br />

                  <strong>Natural Resources:</strong> Ethically sourced spices, agro-products, and premium-grade marble and stone.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-4/3 bg-slate-900 relative overflow-hidden border border-slate-700 shadow-2xl">
                <Image
                  src="/images/about-warehouse.jpg"
                  alt="Consolidated Shipping Container Logistics Hub Infrastructure"
                  fill
                  className="object-cover transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commodity Portfolio Directory */}
      <section id="marketplace" className="py-24 md:py-32 bg-[#05070a] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-[11px] font-mono font-black tracking-[0.3em] uppercase text-sky-400 block mb-3">Verified Supply Lines</span>
              <h3 className="font-serif text-4xl md:text-5xl font-light text-white">Consolidated Asset Directory</h3>
            </div>

            <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-2">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-1.5 text-xs uppercase font-mono tracking-wider font-bold transition-all ${activeTab === "all" ? "bg-white text-black font-black" : "text-slate-300 hover:text-white"}`}
              >
                All Sectors
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-1.5 text-xs uppercase font-mono tracking-wider font-bold transition-all ${activeTab === cat.id ? "bg-white text-black font-black" : "text-slate-300 hover:text-white"}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories
              .filter(cat => activeTab === "all" || cat.id === activeTab)
              .flatMap(cat => cat.products.map(p => ({ ...p, categoryName: cat.name })))
              .map((product, i) => (
                <ProductCard
                  key={product.name + i}
                  product={product}
                  onSelect={(p) => setSelectedProduct(p)}
                />
              ))}
          </div>
        </div>
      </section>

      {/* Global Freight Corridors */}
      <section id="corridors" className="py-24 md:py-32 border-t border-slate-800 bg-[#0b0e14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-[11px] font-mono font-black tracking-[0.3em] uppercase text-sky-400 block mb-3">Logistics Channels</span>
            <h3 className="font-serif text-4xl md:text-5xl font-light text-white">Active Operational Trade Gateways</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetCountries.map((country, idx) => (
              <div key={idx} className="border border-slate-800 bg-[#0f131c] p-6 flex items-start gap-4 hover:border-slate-700 transition-colors">
                <div className="w-10 h-10 border border-slate-700 flex items-center justify-center font-mono text-xs font-black text-sky-400 bg-slate-950 shrink-0">
                  {country.code}
                </div>
                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-wider">{country.name} Corridor</h4>
                  <p className="text-slate-400 font-mono text-[11px] mt-1 uppercase font-bold">{country.port}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 border-t border-slate-800 bg-[#05070a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[11px] font-mono font-black tracking-[0.3em] uppercase text-sky-400 block mb-3">Endorsements</span>
            <h3 className="font-serif text-4xl md:text-5xl font-light text-white">Trusted Globally</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-[#0b0e14] border border-slate-800 p-8 relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-sky-400 text-sky-400" />
                  ))}
                </div>
                <blockquote className="text-slate-300 text-sm italic mb-6 leading-relaxed">
                  “{t.quote}”
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-900 border border-slate-700 flex items-center justify-center">
                    <Users className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <p className="font-black text-xs text-white uppercase font-mono">{t.name}</p>
                    <p className="text-[11px] text-slate-400 font-medium">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statutory Clearance Certifications Showcase */}
      <section className="py-20 border-t border-slate-800 bg-[#05070a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-xl mx-auto mb-16">
            <Shield className="w-8 h-8 text-sky-400 mx-auto mb-4" />
            <h3 className="font-serif text-3xl md:text-4xl font-light text-white mb-2">Statutory Clearance Governance</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {["ISO 9001:2015 Management", "CE & WEEE Tech Compliant", "DGFT India Export Authorized", "Customs ICEGATE Interface Ready"].map((badge, idx) => (
              <div key={idx} className="bg-[#0f131c] border border-slate-800 p-5 flex items-center gap-3 text-left">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-[11px] font-mono tracking-wider font-black text-slate-200 uppercase">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intake Freight Form Section */}
      <section className="py-24 md:py-32 bg-[#05070a] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-b border-slate-800 pb-12 mb-16">
            <span className="text-[11px] font-mono font-black tracking-[0.3em] uppercase text-sky-400 block mb-3">Corporate Trunk Coordinates</span>
            <h3 className="font-serif text-4xl md:text-5xl font-light text-white mb-10 leading-tight">
              Ready to partner <span className="italic text-sky-400">with us?</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <a href="https://maps.google.com/?q=Petlad,Gujarat,India" target="_blank" rel="noreferrer" className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 border border-slate-700 flex items-center justify-center text-sky-400 bg-slate-950 group-hover:border-sky-400 shrink-0 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">Registered Office Node</p>
                  <p className="text-sm font-black text-white group-hover:text-sky-400 transition-colors leading-relaxed">
                    Petlad, Gujarat,<br />India, 388450
                  </p>
                </div>
              </a>

              <a href="https://maps.google.com/?q=Littlehampton,West+Sussex,United+Kingdom" target="_blank" rel="noreferrer" className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 border border-slate-700 flex items-center justify-center text-sky-400 bg-slate-950 group-hover:border-sky-400 shrink-0 transition-colors">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">UK Operations Node</p>
                  <p className="text-sm font-black text-white group-hover:text-sky-400 transition-colors leading-relaxed">
                    Littlehampton, West Sussex,<br />United Kingdom
                  </p>
                </div>
              </a>

              <a href="mailto:zhensea.services@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 border border-slate-700 flex items-center justify-center text-sky-400 bg-slate-950 group-hover:border-sky-400 shrink-0 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">Secure Trunk Route</p>
                  <p className="text-sm font-black text-white group-hover:text-sky-400 group-hover:underline transition-all">zhensea.services@gmail.com</p>
                </div>
              </a>

              <div className="flex flex-col gap-3">
                <a href="tel:+447741385820" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 border border-slate-700 flex items-center justify-center text-sky-400 bg-slate-950 group-hover:border-sky-400 shrink-0 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[9px] font-mono uppercase tracking-widest text-slate-400 font-bold">UK Operations Desk</p>
                    <p className="text-xs font-black text-white group-hover:text-sky-400 transition-all">+44 77413 85820</p>
                  </div>
                </a>
                <a href="tel:+916354538750" className="flex items-center gap-3 group border-t border-slate-800/60 pt-2">
                  <div className="w-9 h-9 border border-slate-700 flex items-center justify-center text-sky-400 bg-slate-950 group-hover:border-sky-400 shrink-0 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[9px] font-mono uppercase tracking-widest text-slate-400 font-bold">India Procurement Desk</p>
                    <p className="text-xs font-black text-white group-hover:text-sky-400 transition-all">+91 63545 38750</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-mono font-black tracking-[0.3em] uppercase text-sky-400 block mb-3">Procurement Inbound</span>
              <h4 className="font-serif text-2xl font-light text-white mb-6">Global Proforma Valuation</h4>
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                Submit target configuration indicators, metrics volume variables, and packaging conditions. Our desk engineers compile comprehensive EXW/FOB/CIF/CFR schedules inside standard operational limits.
              </p>
            </div>

            <div id="contact" className="lg:col-span-8 bg-[#0b0e14] border border-slate-800 p-8 md:p-12 shadow-2xl scroll-mt-28">
              <h4 className="font-serif text-xl font-bold text-white mb-8 tracking-tight">Consignment Allocation Manifest Questionnaire</h4>

              {formStatus === "SUCCESS" && (
                <div className="p-4 mb-6 text-xs font-mono border bg-emerald-500/10 border-emerald-500/40 text-emerald-400 uppercase tracking-wider font-bold">
                  Thank you! Your response has been submitted successfully. We will get back to you shortly.
                </div>
              )}
              {formStatus === "ERROR" && (
                <div className="p-4 mb-6 text-xs font-mono border bg-rose-500/10 border-rose-500/40 text-rose-400 uppercase tracking-wider font-bold">
                  Error: Protocol transmission timeout. Verify configuration parameters.
                </div>
              )}

              <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-6">
                <input type="hidden" name="access_key" value="62aa5781-fd44-4802-b905-6ecc04f13761" />
                <input type="hidden" name="subject" value="New Cargo Inquest - Zhen Sea Web Core" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-slate-300 mb-2 font-bold">Legal Representative *</label>
                    <input
                      type="text"
                      name="Client Name"
                      required
                      className="w-full bg-[#050608] border border-slate-700 px-4 py-3 text-sm text-white focus:outline-none focus:border-slate-500 transition-colors font-medium"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-slate-300 mb-2 font-bold">Corporate Entity</label>
                    <input
                      type="text"
                      name="Company Name"
                      className="w-full bg-[#050608] border border-slate-700 px-4 py-3 text-sm text-white focus:outline-none focus:border-slate-500 transition-colors font-medium"
                      placeholder="Global Logistics Ltd"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-slate-300 mb-2 font-bold">Secure Corporate Email *</label>
                    <input
                      type="email"
                      name="Email Address"
                      required
                      className="w-full bg-[#050608] border border-slate-700 px-4 py-3 text-sm text-white focus:outline-none focus:border-slate-500 transition-colors font-medium"
                      placeholder="procurement@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-slate-300 mb-2 font-bold">Contact Call Number *</label>
                    <input
                      type="text"
                      name="Phone Connection Number"
                      required
                      className="w-full bg-[#050608] border border-slate-700 px-4 py-3 text-sm text-white focus:outline-none focus:border-slate-500 transition-colors font-medium"
                      placeholder="+44 76413 83850"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-slate-300 mb-2 font-bold">Target Asset Portfolio</label>
                  <select
                    name="Target Category Node"
                    value={selectedCategoryNode}
                    onChange={(e) => setSelectedCategoryNode(e.target.value)}
                    className="w-full bg-[#050608] border border-slate-700 px-4 py-3 text-sm text-white focus:outline-none focus:border-slate-500 transition-colors font-bold select-dark-fix"
                  >
                    <option value="Not Specified">Select Commodity Focus</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.name} className="bg-[#07090c] text-white">
                        {cat.name}
                      </option>
                    ))}
                    <option value="Consolidated Mixed Freight" className="bg-[#07090c] text-white">Consolidated Cross-Category Freight</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-slate-300 mb-2 font-bold">Logistics Metrics & Volume Parameters *</label>
                  <textarea
                    name="Required Freight Parameters"
                    required
                    rows={4}
                    className="w-full bg-[#050608] border border-slate-700 px-4 py-3 text-sm text-white focus:outline-none focus:border-slate-500 transition-colors resize-none font-normal"
                    placeholder="Specify total weight/tonnes, electronic unit components counts, destination port coordinates, and preferred delivery schedule (EXW/FOB/CIF/CFR terms)..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "PENDING"}
                  className="w-full bg-white text-black py-4 font-mono font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all disabled:opacity-40 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {formStatus === "PENDING" ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Routing Data Packets...
                    </>
                  ) : "Dispatch Order Specification"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#030508] pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">

            <div className="col-span-2 md:col-span-2 lg:col-span-2 pr-0 lg:pr-6">
              <a href="#" className="flex items-center gap-3 mb-5 group cursor-pointer">
                <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/logo.jpg"
                    alt="Zhen Sea International Logo"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <div>
                  <span className="font-serif font-black text-white text-lg tracking-wider uppercase group-hover:text-sky-400 transition-colors">Zhen Sea International</span>
                  <span className="text-[11px] text-sky-400 font-mono tracking-widest ml-2 font-bold">LLP</span>
                </div>
              </a>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                A globally accredited multi-category export enterprise ensuring container mapping efficiency, rigorous raw material auditing parameters, and direct-to-port logistics corridors.
              </p>

              <div className="space-y-2.5">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-black">Global Operations App</p>
                <div className="flex flex-wrap gap-2">
                  <a href="#" className="flex items-center gap-2 bg-[#07090c] border border-slate-800 hover:border-slate-600 px-3 py-1.5 transition-all text-[11px] font-mono font-bold text-slate-300 group">
                    <Download className="w-3.5 h-3.5 text-sky-400" />
                    <span>Google Play</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 bg-[#07090c] border border-slate-800 hover:border-slate-600 px-3 py-1.5 transition-all text-[11px] font-mono font-bold text-slate-300 group">
                    <Download className="w-3.5 h-3.5 text-sky-400" />
                    <span>App Store</span>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-mono text-[11px] font-black uppercase tracking-widest text-slate-300 mb-4 flex items-center gap-1.5">
                <Package className="w-3.5 h-3.5 text-sky-400" /> Buy Categories
              </h5>
              <ul className="space-y-2 text-xs font-mono font-bold text-slate-400">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <a href="#marketplace"
                      onClick={() => setActiveTab(cat.id)}
                      className="hover:text-white transition-colors flex items-center gap-0.5 group">
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-sky-400" />
                      {cat.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-mono text-[11px] font-black uppercase tracking-widest text-slate-300 mb-4 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-sky-400" /> Corporate Desk
              </h5>
              <ul className="space-y-2 text-xs font-mono font-bold text-slate-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li><a href="#marketplace" className="hover:text-white transition-colors">Asset Directory</a></li>
                <li><a href="#corridors" className="hover:text-white transition-colors">Logistics Corridors</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Procurement Inbound</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-mono text-[11px] font-black uppercase tracking-widest text-slate-300 mb-4 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400" /> Global Hubs
              </h5>
              <div className="space-y-4 text-xs text-slate-400 font-mono">
                <div>
                  <p className="font-black text-white uppercase tracking-wider text-[10px]">Primary India Office</p>
                  <a href="https://www.google.com/maps/place/ZHEN+SEA+INTERNATIONAL+LLP/@22.4711474,72.7907992,17z/data=!3m1!4b1!4m6!3m5!1s0x395e55b189f22bd9:0x7038b4da320042f1!8m2!3d22.4711474!4d72.7907992!16s%2Fg%2F11zfqxygjy?hl=en_GB&entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="font-medium hover:text-sky-400 transition-colors">
                    Petlad, Gujarat, India, 388450
                  </a>
                  <p className="text-[10px] text-sky-400 font-bold mt-0.5">Procurement Node</p>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <p className="font-black text-white uppercase tracking-wider text-[10px]">United Kingdom Branch</p>
                  <a href="https://maps.google.com/?q=Littlehampton,West+Sussex,United+Kingdom" target="_blank" rel="noreferrer" className="font-medium hover:text-sky-400 transition-colors">
                    Littlehampton, West Sussex, UK
                  </a>
                  <p className="text-[10px] text-sky-400 font-bold mt-0.5">Clearing Logistics Hub</p>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 pb-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-300 font-mono font-bold">
              <a href="mailto:zhensea.services@gmail.com" className="flex items-center gap-1.5 hover:text-sky-400 transition-colors group">
                <Mail className="w-4 h-4 text-sky-400" />
                <span>zhensea.services@gmail.com</span>
              </a>
              <a href="tel:+447741385820" className="flex items-center gap-1.5 hover:text-sky-400 transition-colors group">
                <Phone className="w-4 h-4 text-sky-400" />
                <span>UK Desk: +44 77413 85820</span>
              </a>
              <a href="tel:+916354538750" className="flex items-center gap-1.5 hover:text-sky-400 transition-colors group">
                <Phone className="w-4 h-4 text-sky-400" />
                <span>IN Desk: +91 63545 38750</span>
              </a>
            </div>

            <div className="flex items-center gap-4 text-slate-400">
              <a href="https://www.linkedin.com/in/zhensea-smedia-a2a957416?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" className="hover:text-white transition-colors p-1" aria-label="LinkedIn Profile"><Linkedin className="w-4 h-4" /></a>
              <a href="https://x.com/Zhenseaglobal" target="_blank" rel="noreferrer" className="hover:text-white transition-colors p-1" aria-label="X Profile">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
              <a href="https://www.instagram.com/zhensea.international_?igsh=MXNyNHZ1Nm94d2J3Yw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="hover:text-white transition-colors p-1" aria-label="Instagram Profile"><Instagram className="w-4 h-4" /></a>
              <a href="https://www.facebook.com/share/19D2LHZz6F/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="hover:text-white transition-colors p-1" aria-label="Facebook Page"><Facebook className="w-4 h-4" /></a>
              <a href="https://www.youtube.com/@ZhenSeaInternational" target="_blank" rel="noreferrer" className="hover:text-white transition-colors p-1" aria-label="YouTube Channel"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] font-mono text-slate-400 font-bold">
            <p>© 2026 Zhen Sea International LLP. Infrastructure Hub Registry.</p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] text-slate-500 font-bold">
              <a href="/terms" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors flex items-center gap-1">
                <Scale className="w-3 h-3" /> Terms
              </a>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-300 transition-colors flex items-center gap-1"
                >
                  <ShieldCheck className="w-3 h-3" /> Privacy Policy
                </a>
              </div>
              <a href="/guidelines" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors flex items-center gap-1">
                <ClipboardCheck className="w-3.5 h-3.5" /> Supply Guidelines
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Action Desk Matrix */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a href="tel:+447741385820" className="w-12 h-12 bg-sky-600 border border-sky-400 text-white flex items-center justify-center shadow-2xl hover:bg-sky-500 transition-all group relative">
          <Phone className="w-5 h-5" />
          <span className="absolute right-14 bg-slate-900 text-[11px] font-mono uppercase tracking-widest px-3 py-1 text-white border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-bold">Call UK Desk</span>
        </a>
        <a href="tel:+916354538750" className="w-12 h-12 bg-slate-900 border border-slate-600 text-sky-400 flex items-center justify-center shadow-2xl hover:bg-slate-800 transition-all group relative">
          <Phone className="w-5 h-5" />
          <span className="absolute right-14 bg-slate-900 text-[11px] font-mono uppercase tracking-widest px-3 py-1 text-white border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-bold">Call India Desk</span>
        </a>
        <a href="mailto:zhensea.services@gmail.com" className="w-12 h-12 bg-slate-900 border border-slate-600 text-sky-400 flex items-center justify-center shadow-2xl hover:bg-slate-800 transition-all group relative">
          <Mail className="w-5 h-5" />
          <span className="absolute right-14 bg-slate-900 text-[11px] font-mono uppercase tracking-widest px-3 py-1 text-white border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-bold">Email Inbound</span>
        </a>

        <a href="https://wa.me/916354538750" target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#25D366] text-black flex items-center justify-center shadow-2xl hover:bg-[#20ba59] transition-all group relative rounded-full">
          <Image src="/whatsapp.png" alt="WhatsApp" width={88} height={88} className="z-10" />
          <span className="absolute right-14 bg-slate-900 text-[11px] font-mono uppercase tracking-widest px-3 py-1 text-white border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-bold">
            WhatsApp INDIA Desk
          </span>
        </a>
      </div>

      {/* Specifications Pop-up Modal Drawer */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#07090c] border border-slate-700 p-6 md:p-8 max-w-md w-full relative shadow-2xl">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 text-slate-300 hover:text-white transition-colors cursor-pointer">
              <X className="w-6 h-6" />
            </button>
            <h4 className="font-serif text-3xl font-bold text-white mb-2">{selectedProduct.name}</h4>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed font-normal">{selectedProduct.description}</p>
            <div className="space-y-3 bg-[#050608] border border-slate-700 p-4 font-mono text-[12px] tracking-wide mb-6 font-bold">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400 uppercase">Customize Packaging</span>
                <span className="text-white">{selectedProduct.moq}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-400 uppercase">Avg Port Lead Time</span>
                <span className="text-white">{selectedProduct.leadTime}</span>
              </div>
            </div>
            <button
              onClick={() => handleProductDrawerSelection(selectedProduct.categoryName)}
              className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 text-center text-xs font-mono font-black uppercase tracking-widest hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Send Inquiry <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

    </div>
  )
}