export interface IPosition {
  id?: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
  handleAddFilter: (filter: string) => void;
}

export interface IBadge {
  variant?: "basic" | "clearable" | "rounded";
  colorScheme?: "light" | "primary" | "dark";
  children: React.ReactNode;
  onClear?: () => void;
  onClick?: () => void;
}

export interface IStack {
  children: React.ReactNode;
  pos?: string;
}

export interface ICard {
  children: React.ReactNode;
  isFeatured?: boolean;
  className?: string;
}
