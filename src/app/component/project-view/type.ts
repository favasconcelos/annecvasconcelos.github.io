// TODO: Change fields to mandatory
export interface Project {
  title: string;
  year: number;
  mainImage: string;
  images?: string[];
  description?: string;
  tags?: string[];
  sections?: Section[];
}

export interface Section {
  type: SectionType;
  images: string[];
}

export enum SectionType {
  TYPE_1 = 'type_1',
  TYPE_2 = 'type_2',
  TYPE_3 = 'type_3',
  TYPE_4 = 'type_4',
}
