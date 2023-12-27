"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[740],{9853:function(s,e,a){var r=a(5893),c=a(1163),n=a(2664),i=a(7330);e.Z=(0,n.$j)(null,{updateProductCategory:i.pP})((function(s){var e=s.updateProductCategory,a=(0,c.useRouter)(),n=function(s,r){s.preventDefault(),a.push({pathname:"/products"}),e(r)};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("ul",{className:"categories",children:[(0,r.jsx)("li",{onClick:function(s){return n(s,"")},children:(0,r.jsx)("a",{children:"All"})}),(0,r.jsx)("li",{onClick:function(s){return n(s,"jeans")},children:(0,r.jsx)("a",{children:"Jeans"})}),(0,r.jsx)("li",{onClick:function(s){return n(s,"shoe")},children:(0,r.jsx)("a",{children:"Shoe"})}),(0,r.jsx)("li",{onClick:function(s){return n(s,"jacket")},children:(0,r.jsx)("a",{children:"Jacket"})}),(0,r.jsx)("li",{onClick:function(s){return n(s,"trousers")},children:(0,r.jsx)("a",{children:"Trousers"})}),(0,r.jsx)("li",{onClick:function(s){return n(s,"accessories")},children:(0,r.jsx)("a",{children:"Accessories"})})]})})}))},5318:function(s,e,a){var r=a(5893),c=a(2664),n=(a(1190),a(9216)),i=a(6375),l={closeCompareModal:n.iH,clearCompare:n._Z,deleteFromCompare:n.Ht};e.Z=(0,c.$j)((function(s){return{compare:s.compare}}),l)((function(s){var e=s.compare,a=(s.closeCompareModal,s.deleteFromCompare),c=s.clearCompare;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-xl-12",children:e.items.length>0?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{data:e.items,features:["name","price","size"],deleteFromCompare:a}),(0,r.jsx)("div",{className:"text-right",children:(0,r.jsx)("span",{className:"clear-btn",onClick:c,children:"Clear All"})})]}):(0,r.jsx)("h4",{children:"No Products"})})})})})}))},6375:function(s,e,a){var r=a(5893),c=a(1664),n=a.n(c),i=a(2664),l=a(2920),t={addToCart:a(8866).Xq};e.Z=(0,i.$j)(null,t)((function(s){var e=s.data,a=s.features,c=s.deleteFromCompare,i=s.addToCart;return(0,r.jsx)("table",{className:"table text-center",children:(0,r.jsx)("tbody",{children:a.map((function(s){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"text-muted font-md fw-600",style:{textTransform:"capitalize"},children:s}),e.map((function(e){return"preview"==s?(0,r.jsx)("td",{className:"row_img",children:(0,r.jsx)("img",{src:e.images[0].img})}):"name"==s?(0,r.jsx)("td",{className:"product_name",children:(0,r.jsx)("h5",{children:(0,r.jsx)("a",{href:"#",children:e.title})})}):"price"==s?(0,r.jsx)("td",{className:"product_price",children:(0,r.jsxs)("span",{className:"price",children:["$",e.price]})}):"rating"==s?(0,r.jsx)("td",{children:(0,r.jsx)("div",{className:"rating_wrap",children:e.review>=0?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"product-rate d-inline-block",children:(0,r.jsx)("div",{className:"product-rating",style:{width:"".concat(e.ratingScore,"%")}})}),(0,r.jsxs)("span",{className:"rating_num",children:["(",e.review,")"]})]}):null})}):"description"==s?(0,r.jsx)("td",{className:"row_text font-xs",children:(0,r.jsx)("p",{children:e.desc})}):"color"==s?(0,r.jsx)("td",{className:"row_color",children:(0,r.jsx)("ul",{className:"list-filter color-filter",children:e.variations.map((function(s){return(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:(0,r.jsx)("span",{className:"product-color-".concat(s)})})})}))})}):"stock"==s?(0,r.jsx)("td",{className:"row_stock",children:e.stock>=0?(0,r.jsx)("span",{children:"In Stock"}):(0,r.jsx)("span",{className:"text-brand font-weight-bold",children:"Out of stock"})}):"weight"==s?(0,r.jsxs)("td",{className:"row_weight",children:[e.weight," gram"]}):"dimensions"==s?(0,r.jsx)("td",{className:"row_dimensions",children:"N/A"}):"buy"==s?(0,r.jsx)("td",{className:"row_btn",children:e.stock>=0?(0,r.jsxs)("button",{className:"btn btn-sm",onClick:function(s){return function(s){i(s),l.Am.success("Add to Cart !")}(e)},children:[(0,r.jsx)("i",{className:"fi-rs-shopping-bag mr-5"}),"Add to cart"]}):(0,r.jsx)(n(),{href:"/contact",children:(0,r.jsxs)("button",{className:"btn btn-sm btn-secondary",children:[(0,r.jsx)("i",{className:"fi-rs-headset mr-5"}),"Contact Us"]})})}):" "==s?(0,r.jsx)("td",{className:"row_remove",children:(0,r.jsxs)("a",{onClick:function(){return c(e.id)},children:[(0,r.jsx)("i",{className:"fi-rs-trash mr-5"}),(0,r.jsx)("span",{children:"Remove"})]})}):null}))]})}))})})}))},774:function(s,e,a){var r=a(5893),c=a(1163),n=a(7294),i=a(2664),l=a(7330),t=a(3076),d=(a(939),{updateProductFilters:l.lG});e.Z=(0,i.$j)((function(s){return{products:s.products.items}}),d)((function(s){var e=s.updateProductFilters,a=(0,c.useRouter)().query.search,i=(0,n.useState)({value:{min:0,max:500}}),l=i[0],d=i[1];return(0,n.useEffect)((function(){var s={price:l.value};e(s)}),[l,a]),(0,r.jsxs)("div",{className:"evara_price_slider_amount",children:[(0,r.jsx)(t.Z,{range:!0,allowCross:!1,defaultValue:[0,100],min:0,max:500,onChange:function(s){return d({value:{min:s[0],max:s[1]}})}}),(0,r.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,r.jsx)("span",{children:l.value.min}),(0,r.jsx)("span",{children:l.value.max})]})]})}))},4042:function(s,e,a){var r=a(5893),c=a(1664),n=a.n(c),i=(a(7294),a(2664)),l=a(2920),t=a(8866),d=a(9216),o=a(3181),u=a(5644),m={addToCart:t.Xq,addToCompare:d.a$,addToWishlist:u.Mp,openQuickView:o.$};e.Z=(0,i.$j)(null,m)((function(s){var e=s.product,a=s.addToCart,c=s.addToCompare,i=s.addToWishlist,t=s.openQuickView;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"product-list mb-30",children:(0,r.jsxs)("div",{className:"product-cart-wrap",children:[(0,r.jsxs)("div",{className:"product-img-action-wrap",children:[(0,r.jsx)("div",{className:"product-img product-img-zoom",children:(0,r.jsx)("div",{className:"product-img-inner",children:(0,r.jsx)(n(),{href:"/products/[slug]",as:"/products/".concat(e.slug),children:(0,r.jsxs)("a",{children:[(0,r.jsx)("img",{className:"default-img",src:e.images[0].img,alt:""}),(0,r.jsx)("img",{className:"hover-img",src:e.images[1].img,alt:""})]})})})}),(0,r.jsxs)("div",{className:"product-action-1",children:[(0,r.jsx)("a",{"aria-label":"Quick view",className:"action-btn hover-up","data-bs-toggle":"modal",onClick:function(s){return t(e)},children:(0,r.jsx)("i",{className:"fi-rs-eye"})}),(0,r.jsx)("a",{"aria-label":"Add To Wishlist",className:"action-btn hover-up",onClick:function(s){return i(e),void l.Am.success("Add to Wishlist !")},children:(0,r.jsx)("i",{className:"fi-rs-heart"})}),(0,r.jsx)("a",{"aria-label":"Compare",className:"action-btn hover-up",onClick:function(s){return c(e),void l.Am.success("Add to Compare !")},children:(0,r.jsx)("i",{className:"fi-rs-shuffle"})})]}),(0,r.jsxs)("div",{className:"product-badges product-badges-position product-badges-mrg",children:[e.trending?(0,r.jsx)("span",{className:"hot",children:"Hot"}):null,e.created?(0,r.jsx)("span",{className:"new",children:"New"}):null,e.totalSell>100?(0,r.jsx)("span",{className:"best",children:"Best Sell"}):null,e.discount.isActive?(0,r.jsx)("span",{className:"sale",children:"Sale"}):null,e.discount.percentage>=5?(0,r.jsxs)("span",{className:"hot",children:[e.discount.percentage,"%"]}):null]})]}),(0,r.jsxs)("div",{className:"product-content-wrap",children:[(0,r.jsx)("div",{className:"product-category",children:(0,r.jsx)(n(),{href:"/products",children:(0,r.jsx)("a",{children:e.brand})})}),(0,r.jsx)("h2",{children:(0,r.jsx)(n(),{href:"/products/[slug]",as:"/products/".concat(e.slug),children:(0,r.jsx)("a",{children:e.title})})}),(0,r.jsxs)("div",{className:"product-price",children:[(0,r.jsxs)("span",{children:["$",e.price," "]}),(0,r.jsxs)("span",{className:"old-price",children:["$",e.oldPrice]})]}),(0,r.jsx)("p",{className:"mt-15",children:e.desc}),(0,r.jsxs)("div",{className:"product-action-1 show",children:[(0,r.jsxs)("a",{"aria-label":"Add To Cart",className:"action-btn hover-up",onClick:function(s){return a(e),void l.Am.success("Add to Cart !")},children:[(0,r.jsx)("i",{className:"fi-rs-shopping-bag-add"}),"Add to Cart"]}),(0,r.jsx)("div",{className:"rating-result",title:"90%",children:(0,r.jsx)("span",{children:(0,r.jsxs)("span",{children:[e.ratingScore,"%"]})})})]})]})]})})})}))}}]);