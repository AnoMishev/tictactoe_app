import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TicTacToeGame } from "./game.component";

const routes: Routes = [
    {
        path: '',
        component: TicTacToeGame
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    
})
export class TicTacToeRoutingModule {
    
}