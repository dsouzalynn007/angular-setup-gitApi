import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import axios from "axios";

@Component({
    selector: 'home-angular',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    standalone: true,
    imports: [CommonModule]
})

export class HomeComponent implements OnInit {
    private apiUrl = 'https://api.github.com/users'
    userData: any

    ngOnInit(): void {
        console.log(this.userData)
    }

    getFunc() {
        axios.get(this.apiUrl).then(res=>this.userData=res.data).catch(err=>console.error(err))
    }

    closeFunc() {
        this.userData = undefined
    }
}