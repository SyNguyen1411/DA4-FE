(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[724],{4184:function(n,e){var r;!function(){"use strict";var t={}.hasOwnProperty;function c(){for(var n=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)n.push(r);else if(Array.isArray(r)&&r.length){var s=c.apply(null,r);s&&n.push(s)}else if("object"===i)for(var u in r)t.call(r,u)&&r[u]&&n.push(u)}}return n.join(" ")}n.exports?(c.default=c,n.exports=c):void 0===(r=function(){return c}.apply(e,[]))||(n.exports=r)}()},9853:function(n,e,r){"use strict";var t=r(5893),c=r(1163),i=r(2664),s=r(7330);e.Z=(0,i.$j)(null,{updateProductCategory:s.pP})((function(n){var e=n.updateProductCategory,r=(0,c.useRouter)(),i=function(n,t){n.preventDefault(),r.push({pathname:"/products"}),e(t)};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("ul",{className:"categories",children:[(0,t.jsx)("li",{onClick:function(n){return i(n,"")},children:(0,t.jsx)("a",{children:"All"})}),(0,t.jsx)("li",{onClick:function(n){return i(n,"jeans")},children:(0,t.jsx)("a",{children:"Jeans"})}),(0,t.jsx)("li",{onClick:function(n){return i(n,"shoe")},children:(0,t.jsx)("a",{children:"Shoe"})}),(0,t.jsx)("li",{onClick:function(n){return i(n,"jacket")},children:(0,t.jsx)("a",{children:"Jacket"})}),(0,t.jsx)("li",{onClick:function(n){return i(n,"trousers")},children:(0,t.jsx)("a",{children:"Trousers"})}),(0,t.jsx)("li",{onClick:function(n){return i(n,"accessories")},children:(0,t.jsx)("a",{children:"Accessories"})})]})})}))},774:function(n,e,r){"use strict";var t=r(5893),c=r(1163),i=r(7294),s=r(2664),u=r(7330),a=r(3076),o=(r(939),{updateProductFilters:u.lG});e.Z=(0,s.$j)((function(n){return{products:n.products.items}}),o)((function(n){var e=n.updateProductFilters,r=(0,c.useRouter)().query.search,s=(0,i.useState)({value:{min:0,max:500}}),u=s[0],o=s[1];return(0,i.useEffect)((function(){var n={price:u.value};e(n)}),[u,r]),(0,t.jsxs)("div",{className:"evara_price_slider_amount",children:[(0,t.jsx)(a.Z,{range:!0,allowCross:!1,defaultValue:[0,100],min:0,max:500,onChange:function(n){return o({value:{min:n[0],max:n[1]}})}}),(0,t.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,t.jsx)("span",{children:u.value.min}),(0,t.jsx)("span",{children:u.value.max})]})]})}))},6140:function(n,e,r){"use strict";r.d(e,{Z:function(){return j}});var t=r(5893),c=r(1664),i=r.n(c),s=r(7294),u=r(2664),a=r(2920),o=r(8866),l=r(9216),d=r(3181),f=r(5644),p=r(4561),h=function(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(p.ZP,{viewBox:"0 0 500 420",height:420,width:400,children:[(0,t.jsx)("rect",{x:"16",y:"17",rx:"0",ry:"0",width:"360",height:"200"}),(0,t.jsx)("circle",{cx:"35",cy:"248",r:"20"}),(0,t.jsx)("rect",{x:"69",y:"229",rx:"2",ry:"2",width:"275",height:"15"}),(0,t.jsx)("rect",{x:"69",y:"253",rx:"2",ry:"2",width:"140",height:"15"})]})})},x={addToCart:o.Xq,addToCompare:l.a$,addToWishlist:f.Mp,openQuickView:d.$},j=(0,u.$j)(null,x)((function(n){var e=n.product,r=n.addToCart,c=n.addToCompare,u=n.addToWishlist,o=n.openQuickView,l=(0,s.useState)(!1),d=l[0],f=l[1];(0,s.useEffect)((function(){f(!0),setTimeout((function(){f(!1)}),2e3)}),[]);return(0,t.jsx)(t.Fragment,{children:d?(0,t.jsx)(h,{}):(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"product-cart-wrap mb-30",children:[(0,t.jsxs)("div",{className:"product-img-action-wrap",children:[(0,t.jsx)("div",{className:"product-img product-img-zoom",children:(0,t.jsx)(i(),{href:"/products/[slug]",as:"/products/".concat(e.slug),children:(0,t.jsxs)("a",{children:[(0,t.jsx)("img",{className:"default-img",src:e.images[0].img,alt:""}),(0,t.jsx)("img",{className:"hover-img",src:e.images[1].img,alt:""})]})})}),(0,t.jsxs)("div",{className:"product-action-1",children:[(0,t.jsx)("a",{"aria-label":"Quick view",className:"action-btn hover-up","data-bs-toggle":"modal",onClick:function(n){return o(e)},children:(0,t.jsx)("i",{className:"fi-rs-eye"})}),(0,t.jsx)("a",{"aria-label":"Add To Wishlist",className:"action-btn hover-up",onClick:function(n){return u(e),void a.Am.success("Add to Wishlist !")},children:(0,t.jsx)("i",{className:"fi-rs-heart"})}),(0,t.jsx)("a",{"aria-label":"Compare",className:"action-btn hover-up",onClick:function(n){return c(e),void a.Am.success("Add to Compare !")},children:(0,t.jsx)("i",{className:"fi-rs-shuffle"})})]}),(0,t.jsxs)("div",{className:"product-badges product-badges-position product-badges-mrg",children:[e.trending?(0,t.jsx)("span",{className:"hot",children:"Hot"}):null,e.created?(0,t.jsx)("span",{className:"new",children:"New"}):null,e.totalSell>100?(0,t.jsx)("span",{className:"best",children:"Best Sell"}):null,e.discount.isActive?(0,t.jsx)("span",{className:"sale",children:"Sale"}):null,e.discount.percentage>=5?(0,t.jsxs)("span",{className:"hot",children:[e.discount.percentage,"%"]}):null]})]}),(0,t.jsxs)("div",{className:"product-content-wrap",children:[(0,t.jsx)("div",{className:"product-category",children:(0,t.jsx)(i(),{href:"/products",children:(0,t.jsx)("a",{children:e.brand})})}),(0,t.jsx)("h2",{children:(0,t.jsx)(i(),{href:"/products/[slug]",as:"/products/".concat(e.slug),children:(0,t.jsx)("a",{children:e.title})})}),(0,t.jsx)("div",{className:"rating-result",title:"90%",children:(0,t.jsx)("span",{children:(0,t.jsxs)("span",{children:[e.ratingScore,"%"]})})}),(0,t.jsxs)("div",{className:"product-price",children:[(0,t.jsxs)("span",{children:["$",e.price," "]}),(0,t.jsx)("span",{className:"old-price",children:e.oldPrice?"$ ".concat(e.oldPrice):null})]}),(0,t.jsx)("div",{className:"product-action-1 show",children:(0,t.jsx)("a",{"aria-label":"Add To Cart",className:"action-btn hover-up",onClick:function(n){return r(e),void a.Am.success("Add to Cart !")},children:(0,t.jsx)("i",{className:"fi-rs-shopping-bag-add"})})})]})]})})})}))},2121:function(n,e,r){"use strict";var t=r(5893),c=(r(7294),r(1664)),i=r.n(c);e.Z=function(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"banner-img wow fadeIn mb-45mb-lg-0 animated d-lg-block d-none",children:[(0,t.jsx)("img",{src:"/assets/imgs/banner/banner-11.jpg",alt:""}),(0,t.jsxs)("div",{className:"banner-text",children:[(0,t.jsx)("span",{children:"Women Zone"}),(0,t.jsxs)("h4",{children:["Save 17% on ",(0,t.jsx)("br",{}),"Office Dress"]}),(0,t.jsx)(i(),{href:"/products",children:(0,t.jsxs)("a",{children:["Shop Now ",(0,t.jsx)("i",{className:"fi-rs-arrow-right"})]})})]})]})})}},8866:function(n,e,r){"use strict";r.d(e,{EI:function(){return i},Ee:function(){return l},LA:function(){return a},LL:function(){return o},Qd:function(){return s},Xq:function(){return c},a3:function(){return u}});var t=r(6330),c=function(n){return function(e){e({type:t.G2,payload:{product:n}})}},i=function(n){return function(e){e({type:t.Yw,payload:{productId:n}})}},s=function(n){return function(e){e({type:t.RC,payload:{productId:n}})}},u=function(n){return function(e){e({type:t.eL,payload:{productId:n}})}},a=function(){return function(n){n({type:t.tN})}},o=function(){return function(n){n({type:t.qX})}},l=function(){return function(n){n({type:t.wy})}}},9216:function(n,e,r){"use strict";r.d(e,{Ht:function(){return s},_Z:function(){return u},a$:function(){return i},iH:function(){return c}});var t=r(6330),c=function(n){return function(n){n({type:t.zg})}},i=function(n){return function(e){e({type:t.Zd,payload:{product:n}})}},s=function(n){return function(e){e({type:t.Oh,payload:{productId:n}})}},u=function(){return function(n){n({type:t.Jx})}}},7330:function(n,e,r){"use strict";r.d(e,{lG:function(){return c},m7:function(){return s},pP:function(){return i}});var t=r(6330),c=function(n){return function(e){e({type:t.Wi,payload:{productFilters:n}})}},i=function(n){return function(e){e({type:t.$J,payload:{category:n}})}},s=function(n){return function(e){console.log(n),e({type:t.Cr,payload:n})}}},3181:function(n,e,r){"use strict";r.d(e,{$:function(){return c},z:function(){return i}});var t=r(6330),c=function(n){return function(e){e({type:t.GS,payload:{product:n}})}},i=function(){return function(n){n({type:t.fJ})}}},5644:function(n,e,r){"use strict";r.d(e,{Mp:function(){return i},ib:function(){return s},j2:function(){return c},y6:function(){return u}});var t=r(6330),c=function(n){return function(n){n({type:t.DZ})}},i=function(n){return function(e){e({type:t.Cm,payload:{product:n}})}},s=function(n){return function(e){e({type:t.ww,payload:{productId:n}})}},u=function(){return function(n){n({type:t.lS})}}}}]);