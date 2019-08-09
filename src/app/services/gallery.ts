import uuid from 'uuid';

import { GalleryImages, GalleryOptions } from './type';

export const IMAGES: GalleryImages[] = [
  {
    id: uuid.v4(),
    src: 'http://w.themedemo.co/coca-html/assets/images/masonry-15.png',
    title: 'APPARTMEN TS',
    description: 'fitzroy north house',
    options: [GalleryOptions.BATHROOM]
  },
  {
    id: uuid.v4(),
    src: 'http://w.themedemo.co/coca-html/assets/images/masonry-14.png',
    title: 'KITCHEN',
    description: 'north caroline, eua',
    options: [GalleryOptions.KITCHEN]
  },
  {
    id: uuid.v4(),
    src: 'http://w.themedemo.co/coca-html/assets/images/masonry-13.png',
    title: 'CHAIR FURNITURE',
    description: 'perth, australia',
    options: [GalleryOptions.LIVINGROOM]
  },
  {
    id: uuid.v4(),
    src: 'http://w.themedemo.co/coca-html/assets/images/masonry-12.png',
    title: 'SPA RESIDENCE',
    description: 'aqaba, jordan',
    options: [GalleryOptions.BATHROOM]
  },
  {
    id: uuid.v4(),
    src: 'http://w.themedemo.co/coca-html/assets/images/masonry-11.png',
    title: 'SPA RESIDENCE',
    description: 'muscat, sultanate of oman',
    options: [GalleryOptions.BATHROOM]
  },
  {
    id: uuid.v4(),
    src: 'http://w.themedemo.co/coca-html/assets/images/masonry-9.png',
    title: 'MODERN DECORATION',
    description: 'muscat, sultanate of oman',
    options: [GalleryOptions.DECORATION]
  },
  {
    id: uuid.v4(),
    src: 'http://w.themedemo.co/coca-html/assets/images/masonry-10.png',
    title: 'CHAIR FURNITURE',
    description: 'muscat, sultanate of oman',
    options: [GalleryOptions.LIVINGROOM]
  },
  {
    id: uuid.v4(),
    src: 'http://w.themedemo.co/coca-html/assets/images/masonry-8.png',
    title: 'MODERN DECORATION',
    description: 'muscat, sultanate of oman',
    options: [GalleryOptions.DECORATION]
  },
  {
    id: uuid.v4(),
    src: 'http://w.themedemo.co/coca-html/assets/images/masonry-16.png',
    title: 'LAMP DECORATION',
    description: 'aqaba, jordan',
    options: [GalleryOptions.DECORATION]
  },
];


export function filterByOption(images: GalleryImages[], option: GalleryOptions) {
  if (option === GalleryOptions.ALL) {
    return images;
  }
  return images.filter(image => image.options.includes(option));
}