import type { Metadata } from "next";
import ProjectDetail from "../../_components/ProjectDetail";

export const metadata: Metadata = {
  title: "WalletHistory",
  description:
    "WalletHistory is an end-to-end personal finance platform designed to help users track their income, expenses, budgets, and financial history across both web and mobile environments.",
};

export default function WalletHistoryPage() {
  return (
    <ProjectDetail
      thumbnail="/projects/wallethistory.png"
      slug="wallethistory"
      name="WalletHistory"
      tagline="Personal finance platform"
      description="WalletHistory is an end-to-end personal finance platform designed to help users track their income, expenses, budgets, and financial history across both web and mobile environments."
      role="Founder & Full-stack Developer"
      duration="2020 - present"
      status="active"
      body={[
        "The project started as an opportunity to solve a real-world problem while exploring the challenges of building and maintaining a complete software product from the ground up. As the sole developer behind the platform, I was responsible for the entire software lifecycle, including architecture, backend development, database design, API design, mobile development, deployment, and long-term maintenance.",
        "The backend of the platform was built using PHP 7 and MariaDB, exposing a RESTful API consumed by both the web interface and the native Android application. The mobile application was developed using Java and Kotlin, providing users with a seamless way to manage their finances on the go.",
        "During the development process, I focused heavily on software engineering principles such as SOLID, DRY, separation of concerns, and proven design patterns to ensure the system remained maintainable and easy to extend as new features were introduced.",
      ]}
      highlights={[
        "Designed and implemented the complete system architecture.",
        "Developed REST APIs for communication between backend and mobile clients.",
        "Designed and optimized the database schema for financial transactions and historical data.",
        "Built a native Android application using Java and Kotlin.",
        "Implemented authentication and authorization mechanisms.",
        "Applied clean architecture principles and reusable design patterns throughout the project.",
        "Managed deployment, maintenance, and ongoing improvements of the platform.",
      ]}
      technologyGroups={[
        {
          label: "Project Lead & Tasks",
          items: [
            "Led the project end-to-end",
            "Defined scope, priorities, and roadmap",
            "Planned, prioritized, and executed development tasks",
          ],
        },
        {
          label: "Backend",
          items: ["PHP 7", "REST API", "MariaDB", "CakePHP"],
        },
        {
          label: "Mobile",
          items: ["Java", "Kotlin", "Android SDK"],
        },
        {
          label: "Engineering Practices",
          items: [
            "SOLID Principles",
            "DRY Principle",
            "Design Patterns",
            "Clean Architecture",
          ],
        },
        {
          label: "Website",
          items: ["WordPress"],
        },
      ]}
      closing="WalletHistory demonstrates my ability to design, develop, and maintain a complete software product while working across multiple technologies and platforms, from backend services and database architecture to native mobile development."
      links={{
        website: "https://wallethistory.com",
        github: "https://github.com/wallethistory",
      }}
    />
  );
}
