$(function(){"use strict";$(".toggle-sidebar").on("click",function(){$(".content-area, .sidebar").toggleClass("no-sidebar")}),$(".toggle-submenu").on("click",function(){$(this).toggleClass("fa-angle-right fa-angle-down"),$(this).parent("a").next(".child-links").slideToggle()}),$(".toggle-fullscreen").on("click",function(){$(this).toggleClass("full-screen"),$(this).hasClass("full-screen")?openFullscreen():closeFullscreen()}),$(".toggle-settings").on("click",function(){$(this).parent().toggleClass("hide-settings")})});var elem=document.documentElement;function openFullscreen(){elem.requestFullscreen?elem.requestFullscreen():elem.webkitRequestFullscreen?elem.webkitRequestFullscreen():elem.msRequestFullscreen&&elem.msRequestFullscreen()}function closeFullscreen(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}const myMap=new Map,mySet=new Set;