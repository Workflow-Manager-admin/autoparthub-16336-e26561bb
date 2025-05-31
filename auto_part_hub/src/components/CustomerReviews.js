import React from "react";

/**
 * PUBLIC_INTERFACE
 * CustomerReviews displays user feedback (sample reviews) about the AutoPartHub app,
 * styled for the main page and includes a placeholder for future submissions or dynamic integration.
 */
const sampleReviews = [
  {
    id: 1,
    name: "Maria P.",
    rating: 5,
    date: "2024-03-24",
    text: "AutoPartHub made it super easy to find genuine spare parts for my car. The checkout was fast, and delivery was prompt! Highly recommended.",
  },
  {
    id: 2,
    name: "Alex G.",
    rating: 4,
    date: "2024-04-02",
    text: "Great selection and intuitive search options. I liked the ability to quickly compare products. Will shop again.",
  },
  {
    id: 3,
    name: "Chris V.",
    rating: 5,
    date: "2024-04-10",
    text: "Customer service was helpful and the tracking feature kept me updated throughout. Five stars from me.",
  },
];

const star = (full) => (
  <span style={{ color: "#E87A41", fontSize: "1.1em", marginRight: 2 }}>
    {full ? "★" : "☆"}
  </span>
);

const CustomerReviews = () => {
  return (
    <section
      className="customer-reviews"
      style={{
        background: "#fff",
        borderRadius: 13,
        boxShadow: "0 3px 16px rgba(60,60,60,0.09)",
        padding: "32px 28px",
        maxWidth: 600,
        margin: "42px auto 38px auto",
        border: "1px solid #E0E0E0",
      }}
    >
      <h2
        style={{
          color: "#424242",
          fontWeight: 700,
          fontSize: "1.9rem",
          margin: "0 0 10px 0",
          letterSpacing: "0.01em",
        }}
      >
        What Our Customers Say
      </h2>
      <div
        style={{
          marginBottom: 18,
          color: "#757575",
          fontSize: "1.11rem",
          fontWeight: 520,
        }}
      >
        Real feedback from AutoPartHub users
      </div>
      <div>
        {sampleReviews.map((review) => (
          <div
            key={review.id}
            style={{
              background: "#f7f7f7",
              borderRadius: 8,
              padding: "18px 16px 16px 16px",
              marginBottom: 18,
              borderLeft: "5px solid #E87A41",
              boxShadow: "0 2px 8px rgba(150,150,150,0.04)",
              position: "relative",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
              <div
                style={{
                  fontWeight: 600,
                  color: "#343434",
                  fontSize: "1rem",
                  marginRight: 10,
                }}
              >
                {review.name}
              </div>
              <div style={{ fontSize: "0.97rem", color: "#bdbdbd", marginRight: 10 }}>
                {new Date(review.date).toLocaleDateString()}
              </div>
              <div style={{ marginLeft: "auto" }}>
                {Array.from({ length: 5 }).map((_, i) => star(i < review.rating))}
              </div>
            </div>
            <div
              style={{
                color: "#3c3c3c",
                fontSize: "1.08rem",
                marginTop: 3,
                marginBottom: 0,
                lineHeight: 1.46,
              }}
            >
              {review.text}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 25,
          color: "#757575",
          fontStyle: "italic",
          padding: "10px 0",
          textAlign: "center",
          fontSize: "1.01rem",
          background: "#ededed",
          borderRadius: 5,
          letterSpacing: "0.01em",
        }}
      >
        {/* Placeholder for review submission or user integration */}
        Want to share your experience? <span style={{ color: "#E87A41" }}>Review submission coming soon!</span>
      </div>
    </section>
  );
};

export default CustomerReviews;
