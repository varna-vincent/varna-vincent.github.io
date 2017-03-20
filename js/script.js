
 var Me = Vue.component('me', {
 	name:'me',
 	template: '#me-template'
 });
 
 var Portfolio = Vue.component('portfolio', {
 	name:'portfolio',
 	template: '#portfolio-template'
 });
 
 var Resume = Vue.component('resume', {
 	name:'resume',
 	template: '#resume-template'
 });

 var Blog = Vue.component('blog', {
 	name:'blog',
 	template: '#blog-template'
 });
 
 var Root = new Vue({
   el: '#root',
   data: {
     currentView: Me,
     showMenu: false
   },
   components: {
   	'me': Me,
   	'portfolio': Portfolio,
   	'resume': Resume,
   	'blog': Blog
   },
   methods: {
   	toggleMenu: function () {
   		this.showMenu = !this.showMenu
   	}
   }
 })