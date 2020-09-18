import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  imageObject: Array<object> = [{
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQw9kXSBAkiHZY0f3juDHL0fNk7T84AxQtjFg&usqp=CAU',
    thumbImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQw9kXSBAkiHZY0f3juDHL0fNk7T84AxQtjFg&usqp=CAU',
    alt: 'alt of image',
    title: 'Backpack'
  }, {
    image: 'https://rukminim1.flixcart.com/image/352/352/jesunbk0/lipstick/m/5/g/4-7-enrich-matte-lipstick-lakme-original-imaf3euhm2n8zcmy.jpeg?q=70',
    thumbImage: 'https://rukminim1.flixcart.com/image/352/352/jesunbk0/lipstick/m/5/g/4-7-enrich-matte-lipstick-lakme-original-imaf3euhm2n8zcmy.jpeg?q=70',
    title: 'Lipstick',
    alt: 'Image alt'
  }, {
    image: 'https://5.imimg.com/data5/NR/KK/CZ/SELLER-5537952/jbl-bluetooth-headphones-500x500.jpg',
    thumbImage: 'https://5.imimg.com/data5/NR/KK/CZ/SELLER-5537952/jbl-bluetooth-headphones-500x500.jpg',
    title: 'Bluetooth',
    alt: 'Image alt'
  }, {
    image: 'https://22yz5v4cagnrhfa931gvorr1-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/TH-43GX400X.jpg',
    thumbImage: 'https://22yz5v4cagnrhfa931gvorr1-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/TH-43GX400X.jpg',
    title: 'Panasonic LG',
    alt: 'Image alt'
  }, {
    image: 'https://slimages.macysassets.com/is/image/MCY/products/6/optimized/9232756_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$',
    thumbImage: 'https://slimages.macysassets.com/is/image/MCY/products/6/optimized/9232756_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$',
    title: 'Bracelets',
    alt: 'Image alt'
  }, {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzzBSoXMvGX4pbd1y9ZVDyjmc_TE686PgKiA&usqp=CAU',
    thumbImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzzBSoXMvGX4pbd1y9ZVDyjmc_TE686PgKiA&usqp=CAU',
    title: 'Lakme',
    alt: 'Image alt'
  }, {
    image: 'https://rukminim1.flixcart.com/image/352/352/computer/g/3/2/hp-compaq-notebook-compaq-420-preloaded-original-imadfea4x3z3bqcf.jpeg?q=70',
    thumbImage: 'https://rukminim1.flixcart.com/image/352/352/computer/g/3/2/hp-compaq-notebook-compaq-420-preloaded-original-imadfea4x3z3bqcf.jpeg?q=70',
    title: 'Laptop',
    alt: 'Image alt'
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
