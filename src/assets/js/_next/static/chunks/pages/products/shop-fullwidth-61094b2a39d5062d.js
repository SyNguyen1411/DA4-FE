(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[252],{1011:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/shop-fullwidth",function(){return t(1645)}])},5318:function(e,s,t){"use strict";var n=t(5893),r=t(2664),i=(t(1190),t(9216)),c=t(6375),l={closeCompareModal:i.iH,clearCompare:i._Z,deleteFromCompare:i.Ht};s.Z=(0,r.$j)((function(e){return{compare:e.compare}}),l)((function(e){var s=e.compare,t=(e.closeCompareModal,e.deleteFromCompare),r=e.clearCompare;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-xl-12",children:s.items.length>0?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.Z,{data:s.items,features:["name","price","size"],deleteFromCompare:t}),(0,n.jsx)("div",{className:"text-right",children:(0,n.jsx)("span",{className:"clear-btn",onClick:r,children:"Clear All"})})]}):(0,n.jsx)("h4",{children:"No Products"})})})})})}))},6375:function(e,s,t){"use strict";var n=t(5893),r=t(1664),i=t.n(r),c=t(2664),l=t(2920),a={addToCart:t(8866).Xq};s.Z=(0,c.$j)(null,a)((function(e){var s=e.data,t=e.features,r=e.deleteFromCompare,c=e.addToCart;return(0,n.jsx)("table",{className:"table text-center",children:(0,n.jsx)("tbody",{children:t.map((function(e){return(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"text-muted font-md fw-600",style:{textTransform:"capitalize"},children:e}),s.map((function(s){return"preview"==e?(0,n.jsx)("td",{className:"row_img",children:(0,n.jsx)("img",{src:s.images[0].img})}):"name"==e?(0,n.jsx)("td",{className:"product_name",children:(0,n.jsx)("h5",{children:(0,n.jsx)("a",{href:"#",children:s.title})})}):"price"==e?(0,n.jsx)("td",{className:"product_price",children:(0,n.jsxs)("span",{className:"price",children:["$",s.price]})}):"rating"==e?(0,n.jsx)("td",{children:(0,n.jsx)("div",{className:"rating_wrap",children:s.review>=0?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"product-rate d-inline-block",children:(0,n.jsx)("div",{className:"product-rating",style:{width:"".concat(s.ratingScore,"%")}})}),(0,n.jsxs)("span",{className:"rating_num",children:["(",s.review,")"]})]}):null})}):"description"==e?(0,n.jsx)("td",{className:"row_text font-xs",children:(0,n.jsx)("p",{children:s.desc})}):"color"==e?(0,n.jsx)("td",{className:"row_color",children:(0,n.jsx)("ul",{className:"list-filter color-filter",children:s.variations.map((function(e){return(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:(0,n.jsx)("span",{className:"product-color-".concat(e)})})})}))})}):"stock"==e?(0,n.jsx)("td",{className:"row_stock",children:s.stock>=0?(0,n.jsx)("span",{children:"In Stock"}):(0,n.jsx)("span",{className:"text-brand font-weight-bold",children:"Out of stock"})}):"weight"==e?(0,n.jsxs)("td",{className:"row_weight",children:[s.weight," gram"]}):"dimensions"==e?(0,n.jsx)("td",{className:"row_dimensions",children:"N/A"}):"buy"==e?(0,n.jsx)("td",{className:"row_btn",children:s.stock>=0?(0,n.jsxs)("button",{className:"btn btn-sm",onClick:function(e){return function(e){c(e),l.Am.success("Add to Cart !")}(s)},children:[(0,n.jsx)("i",{className:"fi-rs-shopping-bag mr-5"}),"Add to cart"]}):(0,n.jsx)(i(),{href:"/contact",children:(0,n.jsxs)("button",{className:"btn btn-sm btn-secondary",children:[(0,n.jsx)("i",{className:"fi-rs-headset mr-5"}),"Contact Us"]})})}):" "==e?(0,n.jsx)("td",{className:"row_remove",children:(0,n.jsxs)("a",{onClick:function(){return r(s.id)},children:[(0,n.jsx)("i",{className:"fi-rs-trash mr-5"}),(0,n.jsx)("span",{children:"Remove"})]})}):null}))]})}))})})}))},8722:function(e,s,t){"use strict";var n=t(5893);t(7294);s.Z=function(e){var s=e.prev,t=e.currentPage,r=e.getPaginationGroup,i=e.next,c=e.pages,l=e.handleActive;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("ul",{className:"pagination justify-content-start",children:[r.length<=0?null:(0,n.jsx)("li",{onClick:s,className:"page-item",children:1===t?null:(0,n.jsx)("a",{className:"page-link",children:(0,n.jsx)("i",{className:"fi-rs-angle-double-small-left"})})}),r.map((function(e,s){return(0,n.jsx)("li",{onClick:function(){return l(e)},className:t===e?"page-item active":"page-item",children:(0,n.jsx)("a",{className:"page-link",children:e})},s)})),r.length<=0?null:(0,n.jsx)("li",{onClick:i,className:"page-item",children:t>=c?null:(0,n.jsx)("a",{className:"page-link",children:(0,n.jsx)("i",{className:"fi-rs-angle-double-small-right"})})})]}),r.length<=0?null:(0,n.jsxs)("p",{children:["show ",t," of ",c]})]})}},5303:function(e,s,t){"use strict";var n=t(5893),r=(t(7294),t(2664)),i=t(1190),c=t(3181),l=t(7730);s.Z=(0,r.$j)((function(e){return{quickView:e.quickView}}),{closeQuickView:c.z})((function(e){var s=e.quickView,t=e.closeQuickView;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.u,{open:!!s,onClose:t,children:s?(0,n.jsx)("div",{className:"quick-view",children:(0,n.jsx)(l.Z,{product:s,quickView:s})}):null})})}))},9132:function(e,s,t){"use strict";var n=t(5893);s.Z=function(e){var s=e.selectChange,t=e.showLimit;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"sort-by-product-wrap",children:[(0,n.jsx)("div",{className:"sort-by",children:(0,n.jsxs)("span",{children:[(0,n.jsx)("i",{className:"fi-rs-apps"}),"Show:"]})}),(0,n.jsx)("div",{className:"sort-by-dropdown-wrap custom-select",children:(0,n.jsxs)("select",{onChange:s,children:[(0,n.jsx)("option",{value:t,children:t}),(0,n.jsx)("option",{value:5,children:"5"}),(0,n.jsx)("option",{value:10,children:"10"})]})})]})})}},8994:function(e,s,t){"use strict";var n=t(5893),r=t(1163),i=t(7294),c=t(2664),l={updateProductFilters:t(7330).lG};s.Z=(0,c.$j)((function(e){return{products:e.products.items}}),l)((function(e){var s=e.updateProductFilters,t=(0,r.useRouter)().query.search,c=(0,i.useState)(""),l=c[0],a=c[1];(0,i.useEffect)((function(){s({featured:l})}),[t,l]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"sort-by-product-wrap",children:[(0,n.jsx)("div",{className:"sort-by",children:(0,n.jsxs)("span",{children:[(0,n.jsx)("i",{className:"fi-rs-apps-sort"}),"Sort by:"]})}),(0,n.jsx)("div",{className:"sort-by-dropdown-wrap custom-select",children:(0,n.jsxs)("select",{onChange:function(e){return function(e){a(e.target.value)}(e)},children:[(0,n.jsx)("option",{value:"",children:"Defaults"}),(0,n.jsx)("option",{value:"featured",children:"Featured"}),(0,n.jsx)("option",{value:"trending",children:"Trending"}),(0,n.jsx)("option",{value:"lowToHigh",children:"Low To High"}),(0,n.jsx)("option",{value:"highToLow",children:"High To Low"})]})})]})})}))},3094:function(e,s,t){"use strict";var n=t(5893),r=t(2664),i=t(1190),c=t(8866),l=t(2920),a=t(5644),o={closeWishlistModal:a.j2,deleteFromWishlist:a.ib,clearWishlist:a.y6,addToCart:c.Xq};s.Z=(0,r.$j)((function(e){return{wishlist:e.wishlist}}),o)((function(e){var s=e.wishlist,t=e.clearWishlist,r=e.closeWishlistModal,c=e.deleteFromWishlist,a=e.addToCart;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.u,{open:!!s.modal,onClose:r,center:!0,classNames:{modal:"full-modal"},children:s.items.length>0?(0,n.jsxs)("div",{className:"table-responsive",children:[(0,n.jsx)("table",{className:"table",children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"Product Name"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"Price"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"Quantity"})}),(0,n.jsx)("td",{children:(0,n.jsx)("strong",{children:"Action"})})]}),s.items.map((function(e){return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("img",{src:e.image,alt:"",className:"img-fluid",width:"70"})}),(0,n.jsxs)("td",{children:["$",e.price]}),(0,n.jsx)("td",{style:{width:"200px"},children:(0,n.jsx)("span",{onClick:function(s){return function(e){a(e),l.Am.success("Add to Cart !")}(e)},children:"Add To Cart"})}),(0,n.jsx)("td",{style:{width:"50px"},className:"text-center",children:(0,n.jsx)("span",{onClick:function(s){return c(e.id)},children:(0,n.jsx)("button",{children:"Delete"})})})]})}))]})}),(0,n.jsx)("div",{className:"text-right",children:(0,n.jsx)("span",{className:"clear-btn",onClick:t,children:"Clear All"})})]}):(0,n.jsx)("h4",{className:"mb-0",children:"No Products"})})})}))},1645:function(e,s,t){"use strict";t.r(s);var n=t(5893),r=t(1163),i=t(7294),c=t(2664),l=(t(5318),t(8722)),a=t(5303),o=t(9132),d=t(6140),u=t(8994),h=t(3094),m=t(1618),x={fetchProduct:t(8658).MX};s.default=(0,c.$j)((function(e){return{products:e.products,productFilters:e.productFilters}}),x)((function(e){var s=e.products,t=e.productFilters,c=e.fetchProduct,x=(0,r.useRouter)().query.search,j=(0,i.useState)([]),p=j[0],f=j[1],g=(0,i.useState)(12),N=g[0],v=g[1],w=(0,i.useState)(Math.ceil(s.items.length/N)),b=w[0],C=w[1],y=(0,i.useState)(1),k=y[0],_=y[1];(0,i.useEffect)((function(){c(x,"/static/product.json",t),F()}),[t,N,b,s.items.length]);var F=function(){var e=new Array(Math.ceil(s.items.length/N)).fill().map((function(e,s){return s+1}));f(e),C(Math.ceil(s.items.length/N))},P=k*N-N,Z=P+N,A=s.items.slice(P,Z),T=4*Math.floor((k-1)/4),M=T+4,S=p.slice(T,M);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(m.Z,{parent:"Home",sub:"Shop",subChild:"Wide",children:[(0,n.jsx)("section",{className:"mt-50 mb-50",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row flex-row-reverse",children:(0,n.jsxs)("div",{className:"col-lg-12",children:[(0,n.jsxs)("div",{className:"shop-product-fillter",children:[(0,n.jsx)("div",{className:"totall-product",children:(0,n.jsxs)("p",{children:["We found",(0,n.jsx)("strong",{className:"text-brand",children:s.items.length}),"items for you!"]})}),(0,n.jsxs)("div",{className:"sort-by-product-area",children:[(0,n.jsx)("div",{className:"sort-by-cover mr-10",children:(0,n.jsx)(o.Z,{selectChange:function(e){v(Number(e.target.value)),_(1),C(Math.ceil(s.items.length/Number(e.target.value)))},showLimit:12})}),(0,n.jsx)("div",{className:"sort-by-cover",children:(0,n.jsx)(u.Z,{})})]})]}),(0,n.jsxs)("div",{className:"row product-grid-3",children:[0===A.length&&(0,n.jsx)("h3",{children:"No Products Found "}),A.map((function(e,s){return(0,n.jsx)("div",{className:"col-lg-3 col-md-3 col-12 col-sm-6",children:(0,n.jsx)(d.Z,{product:e})},s)}))]}),(0,n.jsx)("div",{className:"pagination-area mt-15 mb-sm-5 mb-lg-0",children:(0,n.jsx)("nav",{"aria-label":"Page navigation example",children:(0,n.jsx)(l.Z,{getPaginationGroup:S,currentPage:k,pages:b,next:function(){_((function(e){return e+1}))},prev:function(){_((function(e){return e-1}))},handleActive:function(e){_(e)}})})})]})})})}),(0,n.jsx)(h.Z,{}),(0,n.jsx)(a.Z,{})]})})}))},7330:function(e,s,t){"use strict";t.d(s,{lG:function(){return r},m7:function(){return c},pP:function(){return i}});var n=t(6330),r=function(e){return function(s){s({type:n.Wi,payload:{productFilters:e}})}},i=function(e){return function(s){s({type:n.$J,payload:{category:e}})}},c=function(e){return function(s){console.log(e),s({type:n.Cr,payload:e})}}}},function(e){e.O(0,[664,894,190,427,618,730,774,888,179],(function(){return s=1011,e(e.s=s);var s}));var s=e.O();_N_E=s}]);