rimport React from "react";
;
import ProductCard from "./ProductCard";

/**
 * PUBLIC_INTERFACE
 * ProductGrid component displays a grid of ProductCards.
 */
const ProductGrid = ({ onProductView, navigate }) => {
  // Expanded: Richer sample spare part product list
  const sampleProducts = [
    {
      id: 1,
      name: "Brake Pads",
      price: 40,
      image: "",
      category: "Brakes",
      description: "Front brake pads, ceramic, set of 4"
    },
    {
      id: 2,
      name: "Engine Oil",
      price: 25,
      image: "",
      category: "Engine",
      description: "Fully synthetic 5W-40, 4L"
    },
    {
      id: 3,
      name: "Suspension Strut",
      price: 110,
      image: "",
      category: "Suspension",
      description: "Gas-charged, front left"
    },
    {
      id: 4,
      name: "Air Filter",
      price: 18,
      image: "",
      category: "Engine",
      description: "OEM replacement for air intake"
    },
    {
      id: 5,
      name: "Spark Plug Set",
      price: 29,
      image: "",
      category: "Engine",
      description: "Set of 4 platinum plugs for modern engines"
    },
    {
      id: 6,
      name: "Radiator",
      price: 155,
      image: "",
      category: "Engine Cooling",
      description: "Aluminum core radiator, direct-fit"
    },
    {
      id: 7,
      name: "Wheel Bearing Kit",
      price: 67,
      image: "",
      category: "Drivetrain",
      description: "Front axle bearing kit"
    },
    {
      id: 8,
      name: "Control Arm",
      price: 80,
      image: "",
      category: "Suspension",
      description: "Right lower, pre-installed bushings"
    },
    {
      id: 9,
      name: "Alternator",
      price: 210,
      image: "",
      category: "Electrical",
      description: "Remanufactured, 120A"
    },
    {
      id: 10,
      name: "Fuel Pump",
      price: 120,
      image: "",
      category: "Fuel System",
      description: "In-tank, high output"
    },
    {
      id: 11,
      name: "Headlight Assembly",
      price: 95,
      image: "",
      category: "Body/Electrical",
      description: "Left side, halogen, clear lens"
    },
    {
      id: 12,
      name: "Timing Belt Kit",
      price: 130,
      image: "",
      category: "Engine",
      description: "Includes belt, tensioner, idler"
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
