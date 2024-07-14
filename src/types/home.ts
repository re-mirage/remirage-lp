export interface Technology {
  value: string;
  title: string;
  description: string;
  techLogos: {
    name: string;
    src: string;
  }[];
  content: {
    title: string;
    description: string;
    icon: string;
  }[];
}
