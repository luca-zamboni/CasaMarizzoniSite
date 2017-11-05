import { Component, Input, Injectable, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

export class Message {
    @Input() text:string;
    constructor(message: string) {
        console.log(message);
        this.text = message;
    }
}

@Injectable()
export class MessageService {
    getMessages() : Message[]{
        return [new Message("tiniziami")];
    }

    saveMessages(ms: Message[]) : void {
        console.log(ms);
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Testo';
    toAdd:string
    ruot:string
    messages : Message[] = [];

    constructor(private messageService: MessageService, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.messages = this.messageService.getMessages();
        this.route.params.subscribe((params: Params) => {
            this.ruot = params['id'];
            console.log(params);
        });
    }


    router():void {

    }

    onClick(): void {
        this.messages.push(new Message(this.toAdd));
        this.toAdd = "";
    }

    keyPress(a: number): void {
        if(a == 13) {
            this.onClick();
        }
    }

    del(i:number) {
        this.messages.splice(i,1);
    }

    onSave() {
        this.messageService.saveMessages(this.messages);
    }

}
