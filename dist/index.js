"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=u(function(y,i){
var s=require('@stdlib/assert-is-collection/dist'),o=require('@stdlib/array-dtypes/dist'),v=require('@stdlib/array-dtype/dist'),d=require('@stdlib/array-base-assert-contains/dist'),l=require('@stdlib/array-base-join/dist'),m=require('@stdlib/stats-strided-nanmeanpn/dist').ndarray,a=require('@stdlib/error-tools-fmtprodmsg/dist'),t=o("real_and_generic"),p="generic";function c(e){var r;if(!s(e))throw new TypeError(a('null2O',e));if(r=v(e)||p,!d(t,r))throw new TypeError(a('nullHZ',l(t,'", "'),r));return m(e.length,e,1,0)}i.exports=c
});var g=n();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
