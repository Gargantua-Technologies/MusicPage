import { Component, ElementRef, ViewChild, ViewEncapsulation } from "@angular/core";
import { APIController } from "../server-api/controller";

@Component({
    selector: 'player-component',
    templateUrl: 'player.component.html',
    styleUrls: ['player.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PlayerComponent {
    @ViewChild('player', {read: ElementRef})
    _player!: ElementRef;

    @ViewChild('source', {read: ElementRef})
    _source!: ElementRef;


    private sourceUrl: string = "";

    ngAfterViewInit() {
        // this._player.nativeElement.autoplay = true;
        this._player.nativeElement.loop = true;
        // this._player.nativeElement.volume = 0.03;
        // this._player.nativeElement.controls = true;

        APIController.setPlayer(this);
    }

    public getSource() {
        this.sourceUrl;
    }

    public setSource(url: string) {
        this.sourceUrl = url;
    }

    public play(url : string) {
        this.sourceUrl = url;

        let element : HTMLAudioElement = this._player.nativeElement;

        let source : HTMLSourceElement = this._source.nativeElement;

        source.src = url;
        source.type = "audio/mpeg";

        element.load();
        element.play();
    }
}