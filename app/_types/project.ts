export type ProjectStatus = "active" | "completed" | "archived";

export type TechnologyGroup = {
  label: string;
  items: string[];
};

export type PreviousVersion = {
  title: string;
  duration: string;
  description: string;
  body?: string[];
  highlights?: string[];
  technologyGroups?: TechnologyGroup[];
};

export type ProjectDetailContent = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  duration: string;
  status: ProjectStatus;
  stack?: string[];
  body?: string[];
  responsibilities?: string[];
  highlights?: string[];
  technologyGroups?: TechnologyGroup[];
  closing?: string;
  previousVersion?: PreviousVersion;
  links?: {
    website?: string;
    github?: string;
  };
  thumbnail?: string;
};

export type ProjectListingEntry = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  duration: string;
  status: ProjectStatus;
  summary?: string;
  thumbnail?: string;
  order: number;
  readmore?: boolean;
};

export const DEFAULT_PROJECT_THUMBNAIL = "/projects/placeholder.png";
