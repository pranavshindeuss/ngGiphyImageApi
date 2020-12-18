import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-ffgi',
  templateUrl: './footer-ffgi.component.html',
  styleUrls: ['./footer-ffgi.component.scss']
})
export class FooterFfgiComponent implements OnInit {

  categories = [
    { category: 'Graphics', slug: '#' },
    { category: 'PSDs', slug: '#' },
    { category: 'Icons', slug: '#' },
    { category: 'Templates', slug: '#' },
    { category: 'Themes', slug: '#' },

    { category: 'Addons', slug: '#' },
    { category: 'Fonts', slug: '#' },
    { category: 'Textures', slug: '#' },
    { category: 'Patterns', slug: '#' },
    { category: 'Backgrounds', slug: '#' },

    { category: 'Buttons', slug: '#' },
    { category: 'Forms', slug: '#' },
    { category: 'GUI', slug: '#' },
    { category: 'Navigation', slug: '#' },
    { category: 'UI Kits', slug: '#' },

    { category: 'Infographics', slug: '#' },
    { category: 'Graphs', slug: '#' },
    { category: 'Logos', slug: '#' },
    { category: 'Vectors', slug: '#' },
    { category: 'Business Cards', slug: '#' },
  ];

  pages = [
    { title: 'Affiliate', slug: '#' },
    { title: 'Contributers', slug: '#' },
    { title: 'Press/Media', slug: '#' },
    { title: 'Careers', slug: '#' },
    { title: 'About', slug: '#' },
    { title: 'Contact', slug: '#' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
