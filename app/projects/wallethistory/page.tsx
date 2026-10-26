import type { Metadata } from "next";
import ProjectDetail from "../../_components/ProjectDetail";

export const metadata: Metadata = {
  title: "WalletHistory",
  description:
    "WalletHistory is a source-available personal finance tracker for accounts, transactions, budgets, savings goals and reports, available as a hosted app or self-hosted with Docker.",
};

export default function WalletHistoryPage() {
  return (
    <ProjectDetail
      thumbnail="/projects/wallethistory.png"
      slug="wallethistory"
      name="WalletHistory"
      tagline="Personal finance platform"
      description="WalletHistory is a source-available personal finance tracker for accounts, transactions, budgets, savings goals and reports, available as a hosted app or self-hosted with Docker."
      role="Founder & Full-stack Developer"
      duration="2020 - present"
      status="active"
      body={[
        "WalletHistory started in 2020 as a PHP web platform with a native Android app. After years of running and maintaining it, I rewrote it from scratch on a modern stack: a single Next.js application in TypeScript, backed by PostgreSQL, that works well on a phone without an app store and that anyone can host on their own server, NAS or home lab.",
        "The new version covers the whole financial picture: cash, bank and card accounts with computed balances, income, expenses and transfers, recurring transactions, weekly or monthly budgets with spending pace and alerts, savings goals, and reports such as cash flow, spending by category, balance over time and forecasts. Households let family members share accounts and goals while keeping personal data personal.",
        "As the sole developer, I own everything from the data model and authentication to the release pipeline. The same code runs the hosted app and the official Docker image, which applies its own database migrations on startup.",
      ]}
      highlights={[
        "Rewrote the platform from PHP and Android into a single Next.js App Router application in TypeScript.",
        "Designed the PostgreSQL schema and migrations with Drizzle ORM, with Redis as an optional cache.",
        "Built custom authentication with bcrypt, database-backed sessions, email verification, rate limiting and account lockout.",
        "Added households, budgets with alerts, savings goals, recurring rules and reports with CSV export.",
        "Published a multi-arch Docker image (amd64 and arm64) to GitHub Container Registry on every release.",
        "Covered the app with Vitest unit and component tests and Playwright end-to-end tests.",
        "Localized the app in English, Bulgarian and Spanish, with light and dark themes and a mobile-first PWA.",
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
          label: "Application",
          items: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Tailwind CSS 4",
            "Zod",
          ],
        },
        {
          label: "Data",
          items: ["PostgreSQL", "Drizzle ORM", "Redis"],
        },
        {
          label: "Delivery",
          items: ["Docker", "Docker Compose", "GitHub Actions", "GHCR"],
        },
        {
          label: "Testing",
          items: ["Vitest", "Testing Library", "Playwright"],
        },
      ]}
      closing="WalletHistory shows how I take a product through its whole life: building it, running it for years, and then rebuilding it on a modern, self-hostable stack without losing what made it useful."
      previousVersion={{
        title: "Previous version",
        duration: "2020 - 2026",
        description:
          "The first WalletHistory was an end-to-end personal finance platform for tracking income, expenses, budgets and financial history across web and mobile.",
        body: [
          "The backend was built with PHP 7 and MariaDB on CakePHP, exposing a RESTful API consumed by both the web interface and a native Android app written in Java and Kotlin. The public website ran on WordPress.",
          "I was responsible for the entire lifecycle, from architecture, API and database design to mobile development, deployment and long-term maintenance, with a strong focus on SOLID, DRY, separation of concerns and proven design patterns.",
        ],
        technologyGroups: [
          {
            label: "Backend",
            items: ["PHP 7", "REST API", "MariaDB", "CakePHP"],
          },
          {
            label: "Mobile",
            items: ["Java", "Kotlin", "Android SDK"],
          },
          {
            label: "Website",
            items: ["WordPress"],
          },
        ],
      }}
      links={{
        website: "https://wallethistory.com",
        github: "https://github.com/canon4o/wallethistory",
      }}
    />
  );
}
