import Script from "next/script";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rahul Chourasia",
  url: "https://rahulchourasia.in",
  jobTitle: "Website & Mobile Developer",
  email: "mailto:contact@rahulchourasia.in",
  sameAs: [
    "https://github.com/rahul0105",
    "https://www.linkedin.com/in/rahul--chourasia",
  ],
};

export default function PersonSchema() {
  return (
    <Script
      id="person-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema),
      }}
    />
  );
}