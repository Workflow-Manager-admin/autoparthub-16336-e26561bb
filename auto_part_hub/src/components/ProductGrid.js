import React from "react";
import ProductCard from "./ProductCard";

/**
 * PUBLIC_INTERFACE
 * ProductGrid component displays a grid of ProductCards.
 */
const ProductGrid = ({ onProductView, navigate }) => {
  // Expanded: Richer sample spare part product list with additional fields
  const sampleProducts = [
    {
      id: 1,
      name: "Brake Pads",
      price: 40,
      images: [
        "https://static.autoparthub.com/brake_pads_1a.jpg",
        "https://static.autoparthub.com/brake_pads_1b.jpg"
      ],
      category: "Brakes",
      description: "Front brake pads, ceramic, set of 4. Superior fade resistance.",
      manufacturer: "PremiumParts",
      partNumber: "PP-BRK-4092-C",
      compatibility: ["Toyota Corolla 2015-2021", "Honda Civic 2013-2019"],
      specifications: "Material: Ceramic | Thickness: 18mm | Wear Sensor: Yes",
      warranty: "24 months or 24,000 miles",
      ratings: 4.6,
      totalReviews: 76,
      inStock: true
    },
    {
      id: 2,
      name: "Engine Oil",
      price: 25,
      images: [
        "https://static.autoparthub.com/engine_oil_2a.jpg"
      ],
      category: "Engine",
      description: "Fully synthetic 5W-40, 4L. For modern high-performance engines.",
      manufacturer: "QuickFit",
      partNumber: "QF-OIL-5W40",
      compatibility: ["BMW 3 Series 2011-2020", "VW Golf 2014-2021", "Any 5W-40 engine"],
      specifications: "Type: Synthetic | Viscosity: 5W-40 | Volume: 4L",
      warranty: "12 months (unused/unopened)",
      ratings: 4.9,
      totalReviews: 32,
      inStock: true
    },
    {
      id: 3,
      name: "Suspension Strut",
      price: 110,
      images: [
        "https://static.autoparthub.com/strut_3a.jpg",
        "https://static.autoparthub.com/strut_3b.jpg"
      ],
      category: "Suspension",
      description: "Gas-charged, front left. Offers OE-style ride comfort.",
      manufacturer: "AutoGenix",
      partNumber: "AG-STR-07FL",
      compatibility: ["Ford Focus 2011-2019"],
      specifications: "Position: Front Left | Gas-charged | OEM fit",
      warranty: "36 months",
      ratings: 4.3,
      totalReviews: 18,
      inStock: false
    },
    {
      id: 4,
      name: "Air Filter",
      price: 18,
      images: [
        "https://static.autoparthub.com/air_filter_4a.jpg"
      ],
      category: "Engine",
      description: "OEM replacement for air intake. Maintains superior air flow.",
      manufacturer: "OEMPro",
      partNumber: "OP-AF-1122",
      compatibility: ["Hyundai Elantra 2017-2022", "Kia Forte 2018-2022"],
      specifications: "Shape: Rectangular | Length: 292mm | Width: 176mm",
      warranty: "18 months",
      ratings: 4.7,
      totalReviews: 42,
      inStock: true
    },
    {
      id: 5,
      name: "Spark Plug Set",
      price: 29,
      images: [
        "https://static.autoparthub.com/spark_plugs_5a.jpg"
      ],
      category: "Engine",
      description: "Set of 4 platinum plugs for modern engines.",
      manufacturer: "DriveMax",
      partNumber: "DM-SP-PL4",
      compatibility: ["Subaru Forester 2012-2019", "Mazda 3 2010-2017"],
      specifications: "Material: Platinum | Gap: 1.1mm",
      warranty: "24 months / 20,000 miles",
      ratings: 4.8,
      totalReviews: 59,
      inStock: true
    },
    {
      id: 6,
      name: "Radiator",
      price: 155,
      images: [
        "https://static.autoparthub.com/radiator_6a.jpg",
        "https://static.autoparthub.com/radiator_6b.jpg"
      ],
      category: "Engine Cooling",
      description: "Aluminum core radiator, direct-fit replacement.",
      manufacturer: "QuickFit",
      partNumber: "QF-RAD-02A",
      compatibility: ["Toyota Camry 2008-2015"],
      specifications: "Core: Aluminum | Height: 680mm | Width: 330mm",
      warranty: "36 months",
      ratings: 4.5,
      totalReviews: 22,
      inStock: false
    },
    {
      id: 7,
      name: "Wheel Bearing Kit",
      price: 67,
      images: [
        "https://static.autoparthub.com/wheel_bearing_7a.jpg"
      ],
      category: "Drivetrain",
      description: "Front axle bearing kit, includes seals.",
      manufacturer: "DriveMax",
      partNumber: "DM-WBK-28F",
      compatibility: ["Nissan Altima 2012-2018"],
      specifications: "Position: Front | Includes: Seals, Grease",
      warranty: "18 months",
      ratings: 4.2,
      totalReviews: 11,
      inStock: true
    },
    {
      id: 8,
      name: "Control Arm",
      price: 80,
      images: [
        "https://static.autoparthub.com/control_arm_8a.jpg"
      ],
      category: "Suspension",
      description: "Right lower, includes pre-installed bushings, steel.",
      manufacturer: "PremiumParts",
      partNumber: "PP-CA-RL12",
      compatibility: ["Honda Accord 2013-2017"],
      specifications: "Side: Right Lower | Material: Steel | OEM bushings",
      warranty: "24 months",
      ratings: 4.0,
      totalReviews: 8,
      inStock: true
    },
    {
      id: 9,
      name: "Alternator",
      price: 210,
      images: [
        "https://static.autoparthub.com/alternator_9a.jpg"
      ],
      category: "Electrical",
      description: "Remanufactured, 120A output. Tested to OE standards.",
      manufacturer: "OEMPro",
      partNumber: "OP-ALT-120A",
      compatibility: ["Mazda CX-5 2012-2018"],
      specifications: "Output: 120A | Type: Remanufactured",
      warranty: "12 months",
      ratings: 4.7,
      totalReviews: 17,
      inStock: true
    },
    {
      id: 10,
      name: "Fuel Pump",
      price: 120,
      images: [
        "https://static.autoparthub.com/fuel_pump_10a.jpg"
      ],
      category: "Fuel System",
      description: "In-tank, high output. Restores factory fuel delivery.",
      manufacturer: "AutoGenix",
      partNumber: "AG-FP-800",
      compatibility: ["VW Jetta 2011-2018"],
      specifications: "Location: In-tank | Output: 180LPH",
      warranty: "24 months",
      ratings: 4.4,
      totalReviews: 25,
      inStock: true
    },
    {
      id: 11,
      name: "Headlight Assembly",
      price: 95,
      images: [
        "https://static.autoparthub.com/headlight_11a.jpg",
        "https://static.autoparthub.com/headlight_11b.jpg"
      ],
      category: "Body/Electrical",
      description: "Left side, halogen, clear lens. DOT approved.",
      manufacturer: "PremiumParts",
      partNumber: "PP-HLA-L13",
      compatibility: ["Hyundai Sonata 2012-2014"],
      specifications: "Side: Left | Bulb: Halogen | Lens: Clear | DOT-approved",
      warranty: "30 months",
      ratings: 4.6,
      totalReviews: 13,
      inStock: true
    },
    {
      id: 12,
      name: "Timing Belt Kit",
      price: 130,
      images: [
        "https://static.autoparthub.com/timing_belt_12a.jpg"
      ],
      category: "Engine",
      description: "Includes belt, tensioner, and idler for complete maintenance.",
      manufacturer: "DriveMax",
      partNumber: "DM-TIM-KIT3",
      compatibility: ["Honda CR-V 2007-2011"],
      specifications: "Includes: Belt, Tensioner, Idler",
      warranty: "36 months or 36,000 miles",
      ratings: 4.5,
      totalReviews: 14,
      inStock: true
    }
  ];

  return (
    <section className="product-grid" style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "24px", padding: "24px" }}>
      {sampleProducts.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onView={onProductView}
          navigate={navigate}
        />
      ))}
    </section>
  );
};

export default ProductGrid;
