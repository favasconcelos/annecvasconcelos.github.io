import imgGalery from '../../_assets/gallery.jpg';
import { Project, SectionType } from '../component/project/type';
// images
import brega01 from '../../_assets/projects/museum_brega/img01.jpg';
import brega02 from '../../_assets/projects/museum_brega/img02.jpg';
import brega03 from '../../_assets/projects/museum_brega/img03.jpg';
import brega04 from '../../_assets/projects/museum_brega/img04.jpg';
import brega05 from '../../_assets/projects/museum_brega/img05.jpg';

export const PROJECTS: Project[] = [
  {
    title: 'Brega Museum',
    year: 2017,
    image: brega01,
    description: 'Project developed to present one of the cultural heritage of the city of Recife, the "Brega".',
    document: 'https://drive.google.com/file/d/1DWVa6TUx_EqFzq07Ro0M3vfXM9wLKEmB/view?usp=drive_open',
    tags: ['museum', 'history'],
    sections: [
      {
        type: SectionType.TYPE_1,
        images: [{ src: brega01 }],
      },
      {
        type: SectionType.TYPE_2,
        images: [{ src: brega02 }, { src: brega03 }],
      },
      {
        type: SectionType.TYPE_1,
        images: [{ src: brega04 }],
      },
      {
        type: SectionType.TYPE_1,
        images: [{ src: brega05 }],
      },
    ],
  },
  {
    title: 'Dacraena tattoo gallery',
    year: 2016,
    image: imgGalery,
  },
  {
    title: 'Loft - Studio 54',
    year: 2017,
    image: imgGalery,
  },
  {
    title: 'Water Square',
    year: 2017,
    image: imgGalery,
  },
  {
    title: 'Multifamily Residential',
    year: 2017,
    image: imgGalery,
  },
];

export const getProjectURL = (str: string) => encodeURIComponent(str).replace(/%20/g, '+');

export const getProjectByID = (id: string = '') => PROJECTS.find(p => getProjectURL(p.title) === id);
