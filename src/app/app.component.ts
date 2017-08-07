import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  config: Object = {
    pagination: '.swiper-pagination',
    effect: 'coverflow',
    autoplay: 3000,
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 0,
    // mousewheelControl: true,
    autoplayDisableOnInteraction: true,
    loop: true
  };
}
