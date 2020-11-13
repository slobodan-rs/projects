//Modules
import AdvertisingData from './resources/src/AdvertisingData.js';
import Beomaster from './resources/src/Beomaster.js';
import BrandCare from './resources/src/BrandCare.js';
import BudgetCalculator from './resources/src/BudgetCalculator.js';
import HomeComponent from './resources/src/HomeComponent.js'
import MakiboGroup from './resources/src/MakiboGroup.js';
import RickAndMorty from './resources/src/RickAndMory.js';
import SpaceX from './resources/src/SpaceX.js'
import TempControl from './resources/src/TemperatureControl.js';

// Router
const parseLocation = () => location.hash.slice(1).toLowerCase() || '/'
const findComponentByPath = (path, routes) => routes.find(el => el.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

const routes = [
    { path: '/', component: HomeComponent, },
    { path: '/spacex', component: SpaceX, },
    { path: '/beomaster', component: Beomaster, },
    { path: '/brandcare', component: BrandCare, },
    { path: '/budget-calculator', component: BudgetCalculator, },
    { path: '/makibogroup', component: MakiboGroup, },
    { path: '/rickandmorty', component: RickAndMorty, },
    { path: '/tempcontrol', component: TempControl, },
    { path: '/advertising-data', component: AdvertisingData, }
]

const router = () => {
    const path = parseLocation();
    const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
    document.getElementById('app').innerHTML = component.render();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
