import {Hero} from "../model/hero";
import {HEROES} from "./hero-mock.data";

export class HeroService {

    getHeroList() : Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroById(id : number) : Promise<Hero> {
        return this.getHeroList().then(heroes => heroes.find(hero => hero.id === id));
    }

    add(hero: Hero) : void {
        HEROES.push(hero);
    }

    delete(id : number) : void {
        for (var i = 0; i < HEROES.length; i++) {
            if (HEROES[i].id == id) {
                HEROES.splice(i, 1);
                break;
            }
        }
    }

    update(_hero : Hero) : void {
        for (var i = 0; i < HEROES.length; i++) {
            if (HEROES[i].id == _hero.id) {
                HEROES[i].name = _hero.name;
                HEROES[i].alterEgo = _hero.alterEgo;
                HEROES[i].power = _hero.power;
                break;
            }
        }
    }

    getNextHeroId() : number {
        return HEROES.length + 1;
    }
}
