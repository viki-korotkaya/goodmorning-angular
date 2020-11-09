import {Component} from '@angular/core';

// @ts-ignore
@Component({
    selector: 'my-app',
    template: `<label>Input your name:</label>
                <input placeholder="name" [(ngModel)]="name">
                <h1>You are welcome, {{name}}!</h1>`
})

export class AppComponent {
    name = '';
}