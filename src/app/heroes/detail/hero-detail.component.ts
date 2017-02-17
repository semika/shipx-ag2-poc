import {Component, Input, OnInit, Inject} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Location} from "@angular/common";
import "rxjs/add/operator/switchMap";
import {Hero} from "../model/hero";
import {HeroService} from "../service/hero.service";

declare var __moduleName: string;
@Component ( {
    moduleId : __moduleName,
    selector : 'my-hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls : ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    constructor(private heroService: HeroService,
                private route: ActivatedRoute,
                private location: Location,
                private router : Router,
                @Inject('powerListToken') public powers : {}) { }
    @Input()
    hero: Hero;

    ngOnInit() : void {
        this.route.params.switchMap((params: Params) => this.heroService.getHeroById(+params['id'])).subscribe(hero => {
            if (hero == null) { // '0' should be passed when creating new hero.
                this.newHero();
            } else {
                this.hero = JSON.parse(JSON.stringify(hero)) // clone the object
            }
        });
    }

    goBack() : void {
        this.location.back();
    }

    add() : void {
        this.hero.id = this.heroService.getNextHeroId();
        this.heroService.add(this.hero);
        this.router.navigate(['heroes']);
    }

    update() : void {
        this.heroService.update(this.hero);
        this.router.navigate(['heroes']);
    }

    delete() : void {
        this.heroService.delete(this.hero.id);
        this.router.navigate(['heroes']);
    }

    newHero() : void {
        this.hero = new Hero(this.heroService.getNextHeroId(), '' , '',  '');
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.hero); }

}
