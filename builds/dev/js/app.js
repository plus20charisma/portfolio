!function e(m,t,a){function s(n,i){if(!t[n]){if(!m[n]){var r="function"==typeof require&&require;if(!i&&r)return r(n,!0);if(u)return u(n,!0);throw new Error("Cannot find module '"+n+"'")}var c=t[n]={exports:{}};m[n][0].call(c.exports,function(e){var t=m[n][1][e];return s(t?t:e)},c,c.exports,e,m,t,a)}return t[n].exports}for(var u="function"==typeof require&&require,n=0;n<a.length;n++)s(a[n]);return s}({1:[function(e,m,t){var a=angular.module("portfolio",[]);a.controller("galleryCtrl",["$scope",function(e){e.portfolio=[{name:"name1",image:"image1",thumb:"thumb1",desc:"desc1"},{name:"name2",image:"image2",thumb:"thumb2",desc:"desc2"},{name:"name3",image:"image3",thumb:"thumb3",desc:"desc3"},{name:"name4",image:"image4",thumb:"thumb4",desc:"desc4"},{name:"name5",image:"image5",thumb:"thumb5",desc:"desc5"},{name:"name6",image:"image6",thumb:"thumb6",desc:"desc6"},{name:"name7",image:"image7",thumb:"thumb7",desc:"desc7"},{name:"name8",image:"image8",thumb:"thumb8",desc:"desc8"},{name:"name9",image:"image9",thumb:"thumb9",desc:"desc9"},{name:"name10",image:"image10",thumb:"thumb10",desc:"desc10"},{name:"name11",image:"image11",thumb:"thumb11",desc:"desc11"},{name:"name12",image:"image12",thumb:"thumb12",desc:"desc12"},{name:"name13",image:"image13",thumb:"thumb13",desc:"desc13"},{name:"name14",image:"image14",thumb:"thumb14",desc:"desc14"},{name:"name15",image:"image15",thumb:"thumb15",desc:"desc15"}]}]),a.controller("contactCtrl",["$scope","$http",function(e,m){e.result="hidden",e.resultMessage="",e.formData={},e.$submitted=!1,e.submitButtonDisabled=!1,e.submit=function(t){e.submitted=!0,e.submitButtonDisabled=!0;var a=function(e){var m="";for(var t in e)e.hasOwnProperty(t)&&(m+=t+"="+e[t]+"&");return m.slice(0,m.length-1)};t.$valid?m({method:"POST",url:"contact-form.php",data:a(e.formData),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(m){m.success?(e.submitButtonDisabled=!0,e.resultMessage=m.message,e.result="success"):(e.submitButtonDisabled=!1,e.resultMessage=m.message,e.result="failure")}):(e.submitButtonDisabled=!1,e.resultMessage="Failed. Please fill out all the fields.",e.result="failure")}}])},{}]},{},[1]);