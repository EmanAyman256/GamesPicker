import { Routes } from "@angular/router";
import { GuideComponent } from "./guide/guide.component";
import { DisplayGamesComponent } from "./display-games/display-games.component";
import { SelectedGameComponent } from "./display-games/selected-game/selected-game.component";

export const routes:Routes=
[
    {
        path:'games',
        component:DisplayGamesComponent
    }
    ,
    {
        path:'',
        component:DisplayGamesComponent
    },
    {
        path:'guide',
        component:GuideComponent
    },
    {
        path:'games/:gameId',
        component:SelectedGameComponent
    }
]