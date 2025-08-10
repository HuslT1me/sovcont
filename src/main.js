import 'swiper/css';
import './styles/main.scss';
import SliderCollection from './modules/SliderCollection';
import OverlayMenu from './modules/OverlayMenu';
import TabsCollections from './modules/TabsCollection';

document.addEventListener('DOMContentLoaded', () => {
  new SliderCollection();
  new OverlayMenu();
  new TabsCollections();
});
