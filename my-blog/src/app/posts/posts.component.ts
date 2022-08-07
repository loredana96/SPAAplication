import {AfterViewChecked, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CodeHilightService } from '../services/code-hilight.service';

declare var ng: any;

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class PostsComponent implements AfterViewChecked {

  ngAfterViewChecked() {
    this.codeHilightService.highlightAll();
  }

  constructor(private router: Router, private route: ActivatedRoute, public codeHilightService: CodeHilightService) {
  }
}
