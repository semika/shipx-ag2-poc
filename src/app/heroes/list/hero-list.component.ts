import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Hero} from "../model/hero";
import {HeroService} from "../service/hero.service";

declare var __moduleName: string;
@Component({
    moduleId : __moduleName,
    selector : 'hero-list',
    templateUrl : './hero-list.component.html',
    styleUrls : ['./hero-list.component.css']
 })

export class HeroListComponent implements OnInit {

    heroes : Hero[];
    selectedHero : Hero;

    constructor(private heroService : HeroService, private router : Router) { }

    ngOnInit() : void {
        this.getHeroes ();
    }

    getHeroes () : void {
        this.heroService.getHeroList().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero) : void {
        this.selectedHero = hero;
        this.goToDetail(this.selectedHero.id);
    }

    goToDetail(id : number) : void {
        this.router.navigate(['heroDetail', id]);
    }

    addNewHero() : void {
        this.router.navigate(['heroDetail', 0]);
    }
}
