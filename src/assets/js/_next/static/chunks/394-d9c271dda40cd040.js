"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[394],{3370:function(s,e,r){r.d(e,{Z:function(){return g}});var a=r(4051),n=r.n(a),i=r(5893),c=r(7294),l=r(8267),t=r(6140),d=function(s){var e=s.products;return(0,i.jsx)(i.Fragment,{children:e.slice(0,8).map((function(s,e){return(0,i.jsx)("div",{className:"col-lg-3 col-md-4 col-12 col-sm-6",children:(0,i.jsx)(t.Z,{product:s})},e)}))})},o=r(8116);o.ZP.use([o.W_]);var m=function(s){var e=s.products;return(0,i.jsx)(i.Fragment,{children:e.slice(0,8).map((function(s,e){return(0,i.jsx)("div",{className:"col-lg-3 col-md-4 col-12 col-sm-6",children:(0,i.jsx)(t.Z,{product:s})},e)}))})};o.ZP.use([o.W_]);var h=function(s){var e=s.products;return(0,i.jsx)(i.Fragment,{children:e.slice(0,8).map((function(s,e){return(0,i.jsx)("div",{className:"col-lg-3 col-md-4 col-12 col-sm-6",children:(0,i.jsx)(t.Z,{product:s})},e)}))})},x=r(1664),u=r.n(x);function j(s,e,r,a,n,i,c){try{var l=s[i](c),t=l.value}catch(d){return void r(d)}l.done?e(t):Promise.resolve(t).then(a,n)}function p(s){return function(){var e=this,r=arguments;return new Promise((function(a,n){var i=s.apply(e,r);function c(s){j(i,a,n,c,l,"next",s)}function l(s){j(i,a,n,c,l,"throw",s)}c(void 0)}))}}var g=function(){var s=(0,c.useState)("1"),e=s[0],r=s[1],a=(0,c.useState)([]),t=a[0],o=a[1],x=(0,c.useState)([]),j=x[0],g=x[1],f=(0,c.useState)([]),v=f[0],N=f[1],b=function(){var s=p(n().mark((function s(){var e,a,i;return n().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch("".concat(l.f,"/static/product.json"));case 2:return e=s.sent,s.next=5,e.json();case 5:a=s.sent,i=a.filter((function(s){return s.featured})),o(i),r("1");case 9:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}}(),w=function(){var s=p(n().mark((function s(){var e,a,i;return n().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch("".concat(l.f,"/static/product.json"));case 2:return e=s.sent,s.next=5,e.json();case 5:a=s.sent,i=a.filter((function(s){return s.trending})),g(i),r("2");case 9:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}}(),y=function(){var s=p(n().mark((function s(){var e,a,i;return n().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch("".concat(l.f,"/static/product.json"));case 2:return e=s.sent,s.next=5,e.json();case 5:a=s.sent,i=a.sort((function(s,e){return s.created>e.created?-1:1})),N(i),r("3");case 9:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}}();return(0,c.useEffect)((function(){b()}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"tab-header",children:[(0,i.jsxs)("ul",{className:"nav nav-tabs",id:"myTab",role:"tablist",children:[(0,i.jsx)("li",{className:"nav-item",role:"presentation",children:(0,i.jsx)("button",{className:"1"===e?"nav-link active":"nav-link",onClick:b,children:"Featured"})}),(0,i.jsx)("li",{className:"nav-item",role:"presentation",children:(0,i.jsx)("button",{className:"2"===e?"nav-link active":"nav-link",onClick:w,children:"Popular"})}),(0,i.jsx)("li",{className:"nav-item",role:"presentation",children:(0,i.jsx)("button",{className:"3"===e?"nav-link active":"nav-link",onClick:y,children:"New added"})})]}),(0,i.jsx)("h6",{children:(0,i.jsx)(u(),{href:"/products/shop-grid-right",children:(0,i.jsxs)("a",{className:"view-more d-none d-md-flex",children:["View More",(0,i.jsx)("i",{className:"fi-rs-angle-double-small-right"})]})})})]}),(0,i.jsxs)("div",{className:"tab-content wow fadeIn animated",children:[(0,i.jsx)("div",{className:"1"===e?"tab-pane fade show active":"tab-pane fade",children:(0,i.jsx)("div",{className:"product-grid-4 row",children:(0,i.jsx)(d,{products:t})})}),(0,i.jsx)("div",{className:"2"===e?"tab-pane fade show active":"tab-pane fade",children:(0,i.jsx)("div",{className:"product-grid-4 row",children:(0,i.jsx)(h,{products:j})})}),(0,i.jsx)("div",{className:"3"===e?"tab-pane fade show active":"tab-pane fade",children:(0,i.jsx)("div",{className:"product-grid-4 row",children:(0,i.jsx)(m,{products:v})})})]})]})}},1322:function(s,e,r){r.d(e,{Z:function(){return f}});var a=r(4051),n=r.n(a),i=r(5893),c=r(7294),l=r(8267),t=r(8116),d=r(8352),o=r(6140);t.ZP.use([t.W_]);var m=function(s){var e=s.products;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.tq,{slidesPerView:4,spaceBetween:30,navigation:{prevEl:".custom_prev_f",nextEl:".custom_next_f"},className:"custom-class",children:e.map((function(s,e){return(0,i.jsx)(d.o5,{children:(0,i.jsx)(o.Z,{product:s})},e)}))}),(0,i.jsxs)("div",{className:"slider-arrow slider-arrow-2 carausel-4-columns-arrow",children:[(0,i.jsx)("span",{className:"slider-btn slider-prev slick-arrow custom_prev_f",children:(0,i.jsx)("i",{className:"fi-rs-angle-left"})}),(0,i.jsx)("span",{className:"slider-btn slider-next slick-arrow custom_next_f",children:(0,i.jsx)("i",{className:"fi-rs-angle-right"})})]})]})};t.ZP.use([t.W_]);var h=function(s){var e=s.products;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.tq,{slidesPerView:4,spaceBetween:20,navigation:{prevEl:".custom_prev_n",nextEl:".custom_next_n"},className:"custom-class",children:e.map((function(s,e){return(0,i.jsx)(d.o5,{children:(0,i.jsx)(o.Z,{product:s})},e)}))}),(0,i.jsxs)("div",{className:"slider-arrow slider-arrow-2 carausel-4-columns-arrow",children:[(0,i.jsx)("span",{className:"slider-btn slider-prev slick-arrow custom_prev_n",children:(0,i.jsx)("i",{className:"fi-rs-angle-left"})}),(0,i.jsx)("span",{className:"slider-btn slider-next slick-arrow custom_next_n",children:(0,i.jsx)("i",{className:"fi-rs-angle-right"})})]})]})};t.ZP.use([t.W_]);var x=function(s){var e=s.products;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.tq,{slidesPerView:4,spaceBetween:30,navigation:{prevEl:".custom_prev_t",nextEl:".custom_next_t"},className:"custom-class",children:e.map((function(s,e){return(0,i.jsx)(d.o5,{children:(0,i.jsx)(o.Z,{product:s})},e)}))}),(0,i.jsxs)("div",{className:"slider-arrow slider-arrow-2 carausel-4-columns-arrow",children:[(0,i.jsx)("span",{className:"slider-btn slider-prev slick-arrow custom_prev_t",children:(0,i.jsx)("i",{className:"fi-rs-angle-left"})}),(0,i.jsx)("span",{className:"slider-btn slider-next slick-arrow custom_next_t",children:(0,i.jsx)("i",{className:"fi-rs-angle-right"})})]})]})},u=r(1664),j=r.n(u);function p(s,e,r,a,n,i,c){try{var l=s[i](c),t=l.value}catch(d){return void r(d)}l.done?e(t):Promise.resolve(t).then(a,n)}function g(s){return function(){var e=this,r=arguments;return new Promise((function(a,n){var i=s.apply(e,r);function c(s){p(i,a,n,c,l,"next",s)}function l(s){p(i,a,n,c,l,"throw",s)}c(void 0)}))}}var f=function(){var s=(0,c.useState)("1"),e=s[0],r=s[1],a=(0,c.useState)([]),t=a[0],d=a[1],o=(0,c.useState)([]),u=o[0],p=o[1],f=(0,c.useState)([]),v=f[0],N=f[1],b=function(){var s=g(n().mark((function s(){var e,a,i;return n().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch("".concat(l.f,"/static/product.json"));case 2:return e=s.sent,s.next=5,e.json();case 5:a=s.sent,i=a.filter((function(s){return s.featured})),d(i),r("1");case 9:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}}(),w=function(){var s=g(n().mark((function s(){var e,a,i;return n().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch("".concat(l.f,"/static/product.json"));case 2:return e=s.sent,s.next=5,e.json();case 5:a=s.sent,i=a.filter((function(s){return s.trending})),p(i),r("2");case 9:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}}(),y=function(){var s=g(n().mark((function s(){var e,a,i;return n().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch("".concat(l.f,"/static/product.json"));case 2:return e=s.sent,s.next=5,e.json();case 5:a=s.sent,i=a.sort((function(s,e){return s.created>e.created?-1:1})),N(i),r("3");case 9:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}}();return(0,c.useEffect)((function(){b()}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"heading-tab d-flex",children:[(0,i.jsx)("div",{className:"heading-tab-left wow fadeIn animated",children:(0,i.jsxs)("h3",{className:"section-title mb-20",children:[(0,i.jsx)("span",{children:"Monthly"})," Best Sell"]})}),(0,i.jsx)("div",{className:"heading-tab-right wow fadeIn animated",children:(0,i.jsxs)("ul",{className:"nav nav-tabs right no-border",id:"myTab-1",role:"tablist",children:[(0,i.jsx)("li",{className:"nav-item",role:"presentation",children:(0,i.jsx)("button",{className:"1"===e?"nav-link active":"nav-link",onClick:b,children:"Featured"})}),(0,i.jsx)("li",{className:"nav-item",role:"presentation",children:(0,i.jsx)("button",{className:"2"===e?"nav-link active":"nav-link",onClick:w,children:"Popular"})}),(0,i.jsx)("li",{className:"nav-item",role:"presentation",children:(0,i.jsx)("button",{className:"3"===e?"nav-link active":"nav-link",onClick:y,children:"New added"})})]})})]}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-3 d-none d-lg-flex",children:(0,i.jsxs)("div",{className:"banner-img style-2 wow fadeIn animated",children:[(0,i.jsx)("img",{src:"assets/imgs/banner/banner-9.jpg",alt:""}),(0,i.jsxs)("div",{className:"banner-text",children:[(0,i.jsx)("span",{children:"Woman Area"}),(0,i.jsxs)("h4",{className:"mt-5",children:["Save 17% on ",(0,i.jsx)("br",{}),"Clothing"]}),(0,i.jsx)(j(),{href:"/products",children:(0,i.jsxs)("a",{className:"text-white",children:["Shop Now ",(0,i.jsx)("i",{className:"fi-rs-arrow-right"})]})})]})]})}),(0,i.jsx)("div",{className:"col-lg-9 col-md-12",children:(0,i.jsxs)("div",{className:"tab-content wow fadeIn animated",id:"myTabContent",children:[(0,i.jsx)("div",{className:"1"===e?"tab-pane fade show active":"tab-pane fade",children:(0,i.jsx)("div",{className:"carausel-4-columns-cover card-product-small arrow-center position-relative",children:(0,i.jsx)(m,{products:t})})}),(0,i.jsx)("div",{className:"2"===e?"tab-pane fade show active":"tab-pane fade",children:(0,i.jsx)("div",{className:"carausel-4-columns-cover card-product-small arrow-center position-relative",children:(0,i.jsx)(x,{products:u})})}),(0,i.jsx)("div",{className:"3"===e?"tab-pane fade show active":"tab-pane fade",children:(0,i.jsx)("div",{className:"carausel-4-columns-cover card-product-small arrow-center position-relative",children:(0,i.jsx)(h,{products:v})})})]})})]})]})}},6457:function(s,e,r){var a=r(5893),n=(r(7294),r(1664)),i=r.n(n);e.Z=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"banner-img banner-big wow fadeIn animated f-none",children:[(0,a.jsx)("img",{src:"assets/imgs/banner/banner-4.png",alt:""}),(0,a.jsxs)("div",{className:"banner-text d-md-block d-none",children:[(0,a.jsx)("h4",{className:"mb-15 mt-40 text-brand",children:"Repair Services"}),(0,a.jsxs)("h1",{className:"fw-600 mb-20",children:["We're an Apple ",(0,a.jsx)("br",{}),"Authorised Service Provider"]}),(0,a.jsx)(i(),{href:"/products",children:(0,a.jsxs)("a",{className:"btn",children:["Learn More ",(0,a.jsx)("i",{className:"fi-rs-arrow-right"})]})})]})]})})}},6845:function(s,e,r){var a=r(5893),n=(r(7294),r(1664)),i=r.n(n);e.Z=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"col-md-6",children:(0,a.jsxs)("div",{className:"banner-img banner-1 wow fadeIn animated",children:[(0,a.jsx)("img",{src:"assets/imgs/banner/banner-5.jpg",alt:""}),(0,a.jsxs)("div",{className:"banner-text",children:[(0,a.jsx)("span",{children:"Accessories"}),(0,a.jsxs)("h4",{children:["Save 17% on ",(0,a.jsx)("br",{}),"Autumn Hat"]}),(0,a.jsx)(i(),{href:"/products",children:(0,a.jsxs)("a",{children:["Shop Now ",(0,a.jsx)("i",{className:"fi-rs-arrow-right"})]})})]})]})}),(0,a.jsxs)("div",{className:"col-md-6",children:[(0,a.jsxs)("div",{className:"banner-img mb-15 wow fadeIn animated",children:[(0,a.jsx)("img",{src:"assets/imgs/banner/banner-6.jpg",alt:""}),(0,a.jsxs)("div",{className:"banner-text",children:[(0,a.jsx)("span",{children:"Big Offer"}),(0,a.jsxs)("h4",{children:["Save 20% on ",(0,a.jsx)("br",{}),"Women's socks"]}),(0,a.jsx)(i(),{href:"/products",children:(0,a.jsxs)("a",{children:["Shop Now ",(0,a.jsx)("i",{className:"fi-rs-arrow-right"})]})})]})]}),(0,a.jsxs)("div",{className:"banner-img banner-2 wow fadeIn animated",children:[(0,a.jsx)("img",{src:"assets/imgs/banner/banner-7.jpg",alt:""}),(0,a.jsxs)("div",{className:"banner-text",children:[(0,a.jsx)("span",{children:"Smart Offer"}),(0,a.jsxs)("h4",{children:["Save 20% on ",(0,a.jsx)("br",{}),"Eardrop"]}),(0,a.jsx)(i(),{href:"/products",children:(0,a.jsxs)("a",{children:["Shop Now ",(0,a.jsx)("i",{className:"fi-rs-arrow-right"})]})})]})]})]})]})}},9430:function(s,e,r){var a=r(5893);r(7294);e.Z=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"banner-bg wow fadeIn animated",style:{backgroundImage:"url('assets/imgs/banner/banner-8.jpg')"},children:(0,a.jsxs)("div",{className:"banner-content",children:[(0,a.jsx)("h5",{className:"text-grey-4 mb-15",children:"Shop Today\u2019s Deals"}),(0,a.jsxs)("h2",{className:"fw-600",children:["Happy ",(0,a.jsx)("span",{className:"text-brand",children:"Mother's Day"}),". Big Sale Up to 40%"]})]})})})}},8698:function(s,e,r){var a=r(5893),n=(r(7294),r(1664)),i=r.n(n);e.Z=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,a.jsxs)("div",{className:"banner-img wow fadeIn animated",children:[(0,a.jsx)("img",{src:"/assets/imgs/banner/banner-1.png",alt:""}),(0,a.jsxs)("div",{className:"banner-text",children:[(0,a.jsx)("span",{children:"Smart Offer"}),(0,a.jsxs)("h4",{children:["Save 20% on ",(0,a.jsx)("br",{}),"Woman Bag"]}),(0,a.jsx)(i(),{href:"/products",children:(0,a.jsxs)("a",{children:["Shop Now ",(0,a.jsx)("i",{className:"fi-rs-arrow-right"})]})})]})]})}),(0,a.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,a.jsxs)("div",{className:"banner-img wow fadeIn animated",children:[(0,a.jsx)("img",{src:"/assets/imgs/banner/banner-2.png",alt:""}),(0,a.jsxs)("div",{className:"banner-text",children:[(0,a.jsx)("span",{children:"Sale off"}),(0,a.jsxs)("h4",{children:["Great Summer ",(0,a.jsx)("br",{}),"Collection"]}),(0,a.jsx)(i(),{href:"/products",children:(0,a.jsxs)("a",{children:["Shop Now ",(0,a.jsx)("i",{className:"fi-rs-arrow-right"})]})})]})]})}),(0,a.jsx)("div",{className:"col-lg-4 d-md-none d-lg-flex",children:(0,a.jsxs)("div",{className:"banner-img wow fadeIn animated mb-sm-0",children:[(0,a.jsx)("img",{src:"/assets/imgs/banner/banner-3.png",alt:""}),(0,a.jsxs)("div",{className:"banner-text",children:[(0,a.jsx)("span",{children:"New Arrivals"}),(0,a.jsxs)("h4",{children:["Shop Today\u2019s ",(0,a.jsx)("br",{}),"Deals & Offers"]}),(0,a.jsx)(i(),{href:"/products",children:(0,a.jsxs)("a",{children:["Shop Now ",(0,a.jsx)("i",{className:"fi-rs-arrow-right"})]})})]})]})})]})}},7556:function(s,e,r){var a=r(5893);e.Z=function(){return(0,a.jsx)(a.Fragment,{children:[{id:1,title:"Free Shipping",img:"feature-2.png",color:"bg-1"},{id:2,title:"Online Order",img:"feature-1.png",color:"bg-2"},{id:3,title:"Save Money",img:"feature-3.png",color:"bg-3"},{id:4,title:"Promotions",img:"feature-4.png",color:"bg-4"},{id:5,title:"Happy Sell",img:"feature-5.png",color:"bg-5"},{id:6,title:"24/7 Support",img:"feature-6.png",color:"bg-6"}].map((function(s,e){return(0,a.jsx)("div",{className:"col-lg-2 col-md-4 mb-md-3 mb-lg-0",children:(0,a.jsxs)("div",{className:"banner-features wow fadeIn animated hover-up",children:[(0,a.jsx)("img",{src:"assets/imgs/theme/icons/".concat(s.img),alt:""}),(0,a.jsx)("h4",{className:s.color,children:s.title})]})},e)}))})}},5598:function(s,e,r){var a=r(5893),n=(r(7294),r(1664)),i=r.n(n);e.Z=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-3 col-md-6 mb-sm-5 mb-md-0",children:(0,a.jsxs)("div",{className:"banner-img wow fadeIn animated mb-md-4 mb-lg-0",children:[(0,a.jsx)("img",{src:"/assets/imgs/banner/banner-10.jpg",alt:""}),(0,a.jsxs)("div",{className:"banner-text",children:[(0,a.jsx)("span",{children:"Shoes Zone"}),(0,a.jsxs)("h4",{children:["Save 17% on ",(0,a.jsx)("br",{}),"All Items"]}),(0,a.jsx)(i(),{href:"/products/shop-grid-right",children:(0,a.jsxs)("a",{children:["Shop Now",(0,a.jsx)("i",{className:"fi-rs-arrow-right"})]})})]})]})}),(0,a.jsxs)("div",{className:"col-lg-3 col-md-6 mb-sm-5 mb-md-0",children:[(0,a.jsx)("h4",{className:"section-title style-1 mb-30 wow fadeIn animated",children:"Deals & Outlet"}),(0,a.jsxs)("div",{className:"product-list-small wow fadeIn animated",children:[(0,a.jsxs)("article",{className:"row align-items-center",children:[(0,a.jsx)("figure",{className:"col-md-4 mb-0",children:(0,a.jsx)(i(),{href:"/products/shop-grid-right",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"/assets/imgs/shop/thumbnail-3.jpg",alt:""})})})}),(0,a.jsxs)("div",{className:"col-md-8 mb-0",children:[(0,a.jsx)("h4",{className:"title-small",children:(0,a.jsx)(i(),{href:"/products/shop-grid-right",children:(0,a.jsx)("a",{children:"Fish Print Patched T-shirt"})})}),(0,a.jsxs)("div",{className:"product-price",children:[(0,a.jsx)("span",{children:"$238.85 "}),(0,a.jsx)("span",{className:"old-price",children:"$245.8"})]})]})]}),(0,a.jsxs)("article",{className:"row align-items-center",children:[(0,a.jsx)("figure",{className:"col-md-4 mb-0",children:(0,a.jsx)(i(),{href:"/products/shop-grid-right",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"/assets/imgs/shop/thumbnail-4.jpg",alt:""})})})}),(0,a.jsxs)("div",{className:"col-md-8 mb-0",children:[(0,a.jsx)("h4",{className:"title-small",children:(0,a.jsx)(i(),{href:"/products/shop-grid-right",children:(0,a.jsx)("a",{children:"Vintage Floral Print Dress"})})}),(0,a.jsxs)("div",{className:"product-price",children:[(0,a.jsx)("span",{children:"$238.85 "}),(0,a.jsx)("span",{className:"old-price",children:"$245.8"})]})]})]}),(0,a.jsxs)("article",{className:"row align-items-center",children:[(0,a.jsx)("figure",{className:"col-md-4 mb-0",children:(0,a.jsx)(i(),{href:"/products/shop-grid-right",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"/assets/imgs/shop/thumbnail-5.jpg",alt:""})})})}),(0,a.jsxs)("div",{className:"col-md-8 mb-0",children:[(0,a.jsx)("h4",{className:"title-small",children:(0,a.jsx)(i(),{href:"/products/shop-grid-right",children:(0,a.jsx)("a",{children:"Multi-color Stripe Circle Print T-Shirt"})})}),(0,a.jsxs)("div",{className:"product-price",children:[(0,a.jsx)("span",{children:"$238.85 "}),(0,a.jsx)("span",{className:"old-price",children:"$245.8"})]})]})]})]})]}),(0,a.jsxs)("div",{className:"col-lg-3 col-md-6 mb-sm-5 mb-md-0",children:[(0,a.jsx)("h4",{className:"section-title style-1 mb-30 wow fadeIn animated",children:"Top Selling"}),(0,a.jsxs)("div",{className:"product-list-small wow fadeIn animated",children:[(0,a.jsxs)("article",{className:"row align-items-center",children:[(0,a.jsx)("figure",{className:"col-md-4 mb-0",children:(0,a.jsx)(i(),{href:"/products/shop-grid-right",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"/assets/imgs/shop/thumbnail-6.jpg",alt:""})})})}),(0,a.jsxs)("div",{className:"col-md-8 mb-0",children:[(0,a.jsx)("h4",{className:"title-small",children:(0,a.jsx)(i(),{href:"/products/shop-grid-right",children:(0,a.jsx)("a",{children:"Geometric Printed Long Sleeve Blosue"})})}),(0,a.jsxs)("div",{className:"product-price",children:[(0,a.jsx)("span",{children:"$238.85 "}),(0,a.jsx)("span",{className:"old-price",children:"$245.8"})]})]})]}),(0,a.jsxs)("article",{className:"row align-items-center",children:[(0,a.jsx)("figure",{className:"col-md-4 mb-0",children:(0,a.jsx)(i(),{href:"/products/shop-grid-right",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"/assets/imgs/shop/thumbnail-7.jpg",alt:""})})})}),(0,a.jsxs)("div",{className:"col-md-8 mb-0",children:[(0,a.jsx)("h4",{className:"title-small",children:(0,a.jsx)(i(),{href:"/products/shop-grid-right",children:(0,a.jsx)("a",{children:"Print Patchwork Maxi Dress"})})}),(0,a.jsxs)("div",{className:"product-price",children:[(0,a.jsx)("span",{children:"$238.85 "}),(0,a.jsx)("span",{className:"old-price",children:"$245.8"})]})]})]}),(0,a.jsxs)("article",{className:"row align-items-center",children:[(0,a.jsx)("figure",{className:"col-md-4 mb-0",children:(0,a.jsx)(i(),{href:"/products/shop-grid-right",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"/assets/imgs/shop/thumbnail-8.jpg",alt:""})})})}),(0,a.jsxs)("div",{className:"col-md-8 mb-0",children:[(0,a.jsx)("h4",{className:"title-small",children:(0,a.jsx)(i(),{href:"/products/shop-grid-right",children:(0,a.jsx)("a",{children:"Daisy Floral Print Straps Jumpsuit"})})}),(0,a.jsxs)("div",{className:"product-price",children:[(0,a.jsx)("span",{children:"$238.85 "}),(0,a.jsx)("span",{className:"old-price",children:"$245.8"})]})]})]})]})]}),(0,a.jsxs)("div",{className:"col-lg-3 col-md-6",children:[(0,a.jsx)("h4",{className:"section-title style-1 mb-30 wow fadeIn animated",children:"Hot Releases"}),(0,a.jsxs)("div",{className:"product-list-small wow fadeIn animated",children:[(0,a.jsxs)("article",{className:"row align-items-center",children:[(0,a.jsx)("figure",{className:"col-md-4 mb-0",children:(0,a.jsx)(i(),{href:"/products/shop-grid-right",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"/assets/imgs/shop/thumbnail-9.jpg",alt:""})})})}),(0,a.jsxs)("div",{className:"col-md-8 mb-0",children:[(0,a.jsx)("h4",{className:"title-small",children:(0,a.jsx)(i(),{href:"/products/shop-grid-right",children:(0,a.jsx)("a",{children:"Floral Print Casual Cotton Dress"})})}),(0,a.jsxs)("div",{className:"product-price",children:[(0,a.jsx)("span",{children:"$238.85 "}),(0,a.jsx)("span",{className:"old-price",children:"$245.8"})]})]})]}),(0,a.jsxs)("article",{className:"row align-items-center",children:[(0,a.jsx)("figure",{className:"col-md-4 mb-0",children:(0,a.jsx)(i(),{href:"/products/shop-grid-right",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"/assets/imgs/shop/thumbnail-1.jpg",alt:""})})})}),(0,a.jsxs)("div",{className:"col-md-8 mb-0",children:[(0,a.jsx)("h4",{className:"title-small",children:(0,a.jsx)(i(),{href:"/products/shop-grid-right",children:(0,a.jsx)("a",{children:"Ruffled Solid Long Sleeve Blouse"})})}),(0,a.jsxs)("div",{className:"product-price",children:[(0,a.jsx)("span",{children:"$238.85 "}),(0,a.jsx)("span",{className:"old-price",children:"$245.8"})]})]})]}),(0,a.jsxs)("article",{className:"row align-items-center",children:[(0,a.jsx)("figure",{className:"col-md-4 mb-0",children:(0,a.jsx)(i(),{href:"/products/shop-grid-right",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"/assets/imgs/shop/thumbnail-2.jpg",alt:""})})})}),(0,a.jsxs)("div",{className:"col-md-8 mb-0",children:[(0,a.jsx)("h4",{className:"title-small",children:(0,a.jsx)(i(),{href:"/products/shop-grid-right",children:(0,a.jsx)("a",{children:"Multi-color Print V-neck T-Shirt"})})}),(0,a.jsxs)("div",{className:"product-price",children:[(0,a.jsx)("span",{children:"$238.85 "}),(0,a.jsx)("span",{className:"old-price",children:"$245.8"})]})]})]})]})]})]})})})})}},6637:function(s,e,r){var a=r(5893),n=(r(7294),r(4945)),i=r(1664),c=r.n(i);e.Z=function(){var s=new Date;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"deal wow fadeIn animated mb-md-4 mb-sm-4 mb-lg-0",style:{backgroundImage:"url('assets/imgs/banner/menu-banner-7.jpg')"},children:[(0,a.jsxs)("div",{className:"deal-top",children:[(0,a.jsx)("h2",{className:"text-brand",children:"Deal of the Day"}),(0,a.jsx)("h5",{children:"Limited quantities."})]}),(0,a.jsxs)("div",{className:"deal-content",children:[(0,a.jsx)("h6",{className:"product-title",children:(0,a.jsx)(c(),{href:"/products/shop-grid-right",children:(0,a.jsx)("a",{children:"Summer Collection New Morden Design"})})}),(0,a.jsxs)("div",{className:"product-price",children:[(0,a.jsx)("span",{className:"new-price",children:"$139.00"}),(0,a.jsx)("span",{className:"old-price",children:"$160.99"})]})]}),(0,a.jsxs)("div",{className:"deal-bottom",children:[(0,a.jsx)("p",{children:"Hurry Up! Offer End In:"}),(0,a.jsx)(n.Z,{endDateTime:s.setDate(s.getDate()+2)}),(0,a.jsx)(c(),{href:"/products/shop-grid-right",children:(0,a.jsxs)("a",{className:"btn hover-up",children:["Shop Now ",(0,a.jsx)("i",{className:"fi-rs-arrow-right"})]})})]})]})})}},5077:function(s,e,r){var a=r(5893),n=(r(7294),r(4945)),i=r(1664),c=r.n(i);e.Z=function(){var s=new Date;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"deal wow fadeIn animated mb-md-4 mb-sm-4 mb-lg-0",style:{backgroundImage:"url('assets/imgs/banner/menu-banner-8.jpg')"},children:[(0,a.jsxs)("div",{className:"deal-top",children:[(0,a.jsx)("h2",{className:"text-brand",children:"Men Clothing"}),(0,a.jsx)("h5",{children:"Shirt & Bag"})]}),(0,a.jsxs)("div",{className:"deal-content",children:[(0,a.jsx)("h6",{className:"product-title",children:(0,a.jsx)(c(),{href:"/products/shop-grid-right",children:(0,a.jsx)("a",{children:"Summer Collection New Morden Design"})})}),(0,a.jsxs)("div",{className:"product-price",children:[(0,a.jsx)("span",{className:"new-price",children:"$178.00"}),(0,a.jsx)("span",{className:"old-price",children:"$256.99"})]})]}),(0,a.jsxs)("div",{className:"deal-bottom",children:[(0,a.jsx)("p",{children:"Hurry Up! Offer End In:"}),(0,a.jsx)(n.Z,{endDateTime:s.setDate(s.getDate()+2)}),(0,a.jsx)(c(),{href:"/products/shop-grid-right",children:(0,a.jsxs)("a",{className:"btn hover-up",children:["Shop Now ",(0,a.jsx)("i",{className:"fi-rs-arrow-right"})]})})]})]})})}},1845:function(s,e,r){var a=r(5893),n=(r(7294),r(1664)),i=r.n(n);e.Z=function(){return(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"post-list mb-4 mb-lg-0",children:[(0,a.jsx)("article",{className:"wow fadeIn animated",children:(0,a.jsxs)("div",{className:"d-md-flex d-block",children:[(0,a.jsx)("div",{className:"post-thumb d-flex mr-15",children:(0,a.jsx)(i(),{href:"/blog-post-fullwidth",children:(0,a.jsx)("a",{className:"color-white",children:(0,a.jsx)("img",{src:"assets/imgs/blog/blog-2.jpg",alt:""})})})}),(0,a.jsxs)("div",{className:"post-content",children:[(0,a.jsx)("div",{className:"entry-meta mb-10 mt-10",children:(0,a.jsx)(i(),{href:"/blog-category-fullwidth",children:(0,a.jsx)("a",{className:"entry-meta meta-2",children:(0,a.jsx)("span",{className:"post-in font-x-small",children:"Fashion"})})})}),(0,a.jsx)("h4",{className:"post-title mb-25 text-limit-2-row",children:(0,a.jsx)(i(),{href:"/blog-post-fullwidth",children:(0,a.jsx)("a",{children:"Qualcomm is developing a Nintendo Switch-like console, report says"})})}),(0,a.jsxs)("div",{className:"entry-meta meta-1 font-xs color-grey mt-10 pb-10",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"post-on",children:"14 April 2021"}),(0,a.jsx)("span",{className:"hit-count has-dot",children:"12M Views"})]}),(0,a.jsx)(i(),{href:"/blog-post-right",children:(0,a.jsx)("a",{children:"Read More"})})]})]})]})}),(0,a.jsx)("article",{className:"wow fadeIn animated",children:(0,a.jsxs)("div",{className:"d-md-flex d-block",children:[(0,a.jsx)("div",{className:"post-thumb d-flex mr-15",children:(0,a.jsx)(i(),{href:"/blog-post-fullwidth",children:(0,a.jsx)("a",{className:"color-white",children:(0,a.jsx)("img",{src:"assets/imgs/blog/blog-1.jpg",alt:""})})})}),(0,a.jsxs)("div",{className:"post-content",children:[(0,a.jsx)("div",{className:"entry-meta mb-10 mt-10",children:(0,a.jsx)(i(),{href:"/blog-category-fullwidth",children:(0,a.jsx)("a",{className:"entry-meta meta-2",children:(0,a.jsx)("span",{className:"post-in font-x-small",children:"Healthy"})})})}),(0,a.jsx)("h4",{className:"post-title mb-25 text-limit-2-row",children:(0,a.jsx)(i(),{href:"/blog-post-fullwidth",children:(0,a.jsx)("a",{children:"Not even the coronavirus can derail 5G's global momentum"})})}),(0,a.jsxs)("div",{className:"entry-meta meta-1 font-xs color-grey mt-10 pb-10",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"post-on",children:"14 April 2021"}),(0,a.jsx)("span",{className:"hit-count has-dot",children:"12M Views"})]}),(0,a.jsx)(i(),{href:"/blog-post-right",children:(0,a.jsx)("a",{children:"Read More"})})]})]})]})})]})})}},4669:function(s,e,r){var a=r(5893),n=r(7294),i=r(1664),c=r.n(i),l=r(4945);e.Z=function(){var s=(0,n.useState)(0),e=s[0],r=s[1],i=new Date;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:e?"modal fade custom-modal d-none":"modal fade custom-modal  show d-block",children:(0,a.jsx)("div",{className:"modal-dialog",children:(0,a.jsxs)("div",{className:"modal-content",children:[(0,a.jsx)("button",{type:"button",className:"btn-close",onClick:function(){r(!e)}}),(0,a.jsx)("div",{className:"modal-body",children:(0,a.jsxs)("div",{className:"deal",style:{backgroundImage:"url('assets/imgs/banner/menu-banner-7.png')"},children:[(0,a.jsxs)("div",{className:"deal-top",children:[(0,a.jsx)("h2",{className:"text-brand",children:"Deal of the Day"}),(0,a.jsx)("h5",{children:"Limited quantities."})]}),(0,a.jsxs)("div",{className:"deal-content",children:[(0,a.jsx)("h6",{className:"product-title",children:(0,a.jsx)(c(),{href:"/products/shop-grid-right",children:(0,a.jsx)("a",{children:"Summer Collection New Morden Design"})})}),(0,a.jsxs)("div",{className:"product-price",children:[(0,a.jsx)("span",{className:"new-price",children:"$139.00"}),(0,a.jsx)("span",{className:"old-price",children:"$160.99"})]})]}),(0,a.jsxs)("div",{className:"deal-bottom",children:[(0,a.jsx)("p",{children:"Hurry Up! Offer End In:"}),(0,a.jsx)(l.Z,{endDateTime:i.setDate(i.getDate()+2)}),(0,a.jsx)(c(),{href:"/products/shop-grid-right",children:(0,a.jsxs)("a",{className:"btn hover-up",children:["Shop Now ",(0,a.jsx)("i",{className:"fi-rs-arrow-right"})]})})]})]})})]})})}),(0,a.jsx)("div",{className:e?"modal-backdrop fade d-none":"modal-backdrop fade show"})]})}},4945:function(s,e,r){var a=r(5893),n=r(7294),i=6e4,c=36e5,l=864e5;e.Z=function(s){var e=(0,n.useState)((new Date).toLocaleTimeString()),r=e[0],t=e[1];(0,n.useEffect)((function(){var s=setTimeout((function(){var s=new Date;t(s.toLocaleTimeString())}),1e3);return function(){clearTimeout(s)}}),[r]);var d,o=Date.now(),m=new Date(s.endDateTime).getTime()-o,h=(d=m,{days:Math.floor(d/l),hours:Math.floor(d%l/c),minutes:Math.floor(d%c/i),seconds:Math.floor(d%i/1e3)});return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"deals-countdown",children:[(0,a.jsxs)("span",{className:"countdown-section",children:[(0,a.jsx)("span",{className:"countdown-amount hover-up",suppressHydrationWarning:!0,children:h.days}),(0,a.jsx)("span",{className:"countdown-period",children:" days "})]}),(0,a.jsxs)("span",{className:"countdown-section",children:[(0,a.jsx)("span",{className:"countdown-amount hover-up",suppressHydrationWarning:!0,children:h.hours}),(0,a.jsx)("span",{className:"countdown-period",children:" hours "})]}),(0,a.jsxs)("span",{className:"countdown-section",children:[(0,a.jsx)("span",{className:"countdown-amount hover-up",suppressHydrationWarning:!0,children:h.minutes}),(0,a.jsx)("span",{className:"countdown-period",children:" mins "})]}),(0,a.jsxs)("span",{className:"countdown-section",children:[(0,a.jsx)("span",{className:"countdown-amount hover-up",suppressHydrationWarning:!0,children:h.seconds}),(0,a.jsx)("span",{className:"countdown-period",children:" sec "})]})]})})}},4863:function(s,e,r){var a=r(5893),n=r(8116),i=r(8352);n.ZP.use([n.W_]);e.Z=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.tq,{slidesPerView:6,spaceBetween:20,navigation:{prevEl:".custom_prev_br1",nextEl:".custom_next_br1"},className:"carausel-6-columns text-center",children:[{id:1,img:"brand-1.png"},{id:2,img:"brand-2.png"},{id:3,img:"brand-3.png"},{id:4,img:"brand-4.png"},{id:5,img:"brand-5.png"},{id:6,img:"brand-6.png"}].map((function(s,e){return(0,a.jsx)(i.o5,{children:(0,a.jsx)("div",{className:"brand-logo",children:(0,a.jsx)("img",{className:"img-grey-hover",src:"assets/imgs/banner/".concat(s.img),alt:""})})},e)}))}),(0,a.jsxs)("div",{className:"slider-arrow slider-arrow-2 carausel-6-columns-arrow",id:"carausel-6-columns-3-arrows",children:[(0,a.jsx)("span",{className:"slider-btn slider-prev slick-arrow custom_prev_br1",children:(0,a.jsx)("i",{className:"fi-rs-angle-left"})}),(0,a.jsx)("span",{className:"slider-btn slider-next slick-arrow custom_next_br1",children:(0,a.jsx)("i",{className:"fi-rs-angle-right"})})]})]})}},4728:function(s,e,r){var a=r(5893),n=r(8116),i=r(8352),c=r(1664),l=r.n(c);n.ZP.use([n.W_]);e.Z=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.tq,{slidesPerView:6,spaceBetween:20,navigation:{prevEl:".custom_prev_ct1",nextEl:".custom_next_ct1"},className:"custom-class",children:[{id:1,title:"T-Shirt",img:"category-thumb-1.jpg"},{id:2,title:"Bags",img:"category-thumb-2.jpg"},{id:3,title:"Sandan",img:"category-thumb-3.jpg"},{id:4,title:"Scarf Cap",img:"category-thumb-4.jpg"},{id:5,title:"Shoes",img:"category-thumb-5.jpg"},{id:6,title:"Pillowcase",img:"category-thumb-6.jpg"},{id:7,title:"Jumpsuits",img:"category-thumb-7.jpg"},{id:8,title:"Hats",img:"category-thumb-8.jpg"}].map((function(s,e){return(0,a.jsx)(i.o5,{children:(0,a.jsxs)("div",{className:"card-1",children:[(0,a.jsx)("figure",{className:" img-hover-scale overflow-hidden",children:(0,a.jsx)(l(),{href:"/products/shop-grid-right",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{src:"assets/imgs/shop/".concat(s.img),alt:""})})})}),(0,a.jsx)("h5",{children:(0,a.jsx)(l(),{href:"/products/shop-grid-right",children:(0,a.jsx)("a",{children:s.title})})})]})},e)}))}),(0,a.jsxs)("div",{className:"slider-arrow slider-arrow-2 carausel-6-columns-arrow",id:"carausel-6-columns-arrows",children:[(0,a.jsx)("span",{className:"slider-btn slider-prev slick-arrow custom_prev_ct1",children:(0,a.jsx)("i",{className:"fi-rs-angle-left"})}),(0,a.jsx)("span",{className:"slider-btn slider-next slick-arrow custom_next_ct1",children:(0,a.jsx)("i",{className:"fi-rs-angle-right"})})]})]})}},203:function(s,e,r){var a=r(4051),n=r.n(a),i=r(5893),c=r(7294),l=r(8116),t=r(8352),d=r(8267),o=r(6140);function m(s,e,r,a,n,i,c){try{var l=s[i](c),t=l.value}catch(d){return void r(d)}l.done?e(t):Promise.resolve(t).then(a,n)}l.ZP.use([l.W_]);e.Z=function(){var s=(0,c.useState)([]),e=s[0],r=s[1];(0,c.useEffect)((function(){a()}),[]);var a=function(){var s,e=(s=n().mark((function s(){var e,a,i;return n().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch("".concat(d.f,"/static/product.json"));case 2:return e=s.sent,s.next=5,e.json();case 5:a=s.sent,i=a.sort((function(s,e){return s.created>e.created?-1:1})),r(i);case 8:case"end":return s.stop()}}),s)})),function(){var e=this,r=arguments;return new Promise((function(a,n){var i=s.apply(e,r);function c(s){m(i,a,n,c,l,"next",s)}function l(s){m(i,a,n,c,l,"throw",s)}c(void 0)}))});return function(){return e.apply(this,arguments)}}();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.tq,{slidesPerView:4,spaceBetween:15,navigation:{prevEl:".custom_prev_n",nextEl:".custom_next_n"},className:"carausel-6-columns carausel-arrow-center",children:e.map((function(s,e){return(0,i.jsx)(t.o5,{children:(0,i.jsx)(o.Z,{product:s})},e)}))}),(0,i.jsxs)("div",{className:"slider-arrow slider-arrow-2 carausel-6-columns-arrow",id:"carausel-6-columns-2-arrows",children:[(0,i.jsx)("span",{className:"slider-btn slider-prev slick-arrow custom_prev_n",children:(0,i.jsx)("i",{className:"fi-rs-angle-left"})}),(0,i.jsx)("span",{className:"slider-btn slider-next slick-arrow custom_next_n",children:(0,i.jsx)("i",{className:"fi-rs-angle-right"})})]})]})}},8267:function(s,e,r){r.d(e,{f:function(){return a}});var a="https://evara-nextjs.vercel.app"}}]);