import { Component } from "@angular/core";

@Component({
    selector: 'my-image',
    template: `
            <div>
            <p> Image Display </p>
            <img src = 'https://upload.wikimedia.org/wikipedia/en/c/c8/Sonata_Software_Logo.png'>
            </div>
    `
  })
export class ImageDisplay{}