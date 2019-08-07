// TODO: Change fields to mandatory
export interface Project {
  title: string;
  year: number;
  image: string;
  document?: string;
  description?: string;
  tags?: string[];
  sections?: Section[];
}

export interface Section {
  type: SectionType;
  images: Image[];
}

export enum SectionType {
  TYPE_1 = 'section1',
  TYPE_2 = 'section2',
}

export interface Image {
  src: string;
  label?: string;
}
