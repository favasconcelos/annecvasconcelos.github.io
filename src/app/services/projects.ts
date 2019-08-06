import imgGalery from '../../_assets/gallery.jpg';
import { Project } from '../component/project-view/type';

export const PROJECTS: Project[] = [
  {
    title: 'Brega Museum',
    year: 2017,
    mainImage: 'http://be.beantownthemes.com/html/theme/images/home_betheme_portfolio_post_1.jpg',
    description: 'Project developed to present one of the cultural heritage of the city of Recife, the "Brega".',
    tags: ['museum', 'history'],
  },
  {
    title: 'Dacraena tattoo gallery',
    year: 2016,
    mainImage: imgGalery,
  },
  {
    title: 'Loft - Studio 54',
    year: 2017,
    mainImage: imgGalery,
  },
  {
    title: 'Water Square',
    year: 2017,
    mainImage: imgGalery,
  },
  {
    title: 'Multifamily Residential',
    year: 2017,
    mainImage: imgGalery,
  },
];

export const getProjectURL = (str: string) => encodeURIComponent(str).replace(/%20/g, '+');

export const getProjectByID = (id: string = '') => PROJECTS.find(p => getProjectURL(p.title) === id);
