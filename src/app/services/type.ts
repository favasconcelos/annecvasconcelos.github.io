export enum GalleryOptions {
  ALL = 'all',
  BATHROOM = 'bathroom',
  DECORATION = 'decoration',
  KITCHEN = 'kitchen',
  LIVINGROOM = 'livingroom',
}

export interface GalleryImages {
  id: string;
  src: string;
  title: string;
  description: string;
  options: GalleryOptions[]
}