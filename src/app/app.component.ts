import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import localeBn from '@angular/common/locales/bn';
import { AdminService } from './services/admin.service';
import { NavigationEnd, Router } from '@angular/router';
import { UserService } from './services/user.service';
import { isPlatformBrowser, registerLocaleData } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { RedirectRouteService } from './services/redirect-route.service';
import { filter } from 'rxjs/operators'


// declare gives Angular app access to ga function
// declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentRoute: string;

  constructor(
    private adminService: AdminService,
    private userService: UserService,
    private router: Router,
    private title: Title,
    private meta: Meta,
    @Inject(PLATFORM_ID) public platformId: any
  ) {
    registerLocaleData(localeBn, 'bn');
    this.userService.autoUserLoggedIn();
    this.adminService.autoAdminLoggedIn();

    console.log(this.router.url);



    // this.router.events.filter(event => event instanceof NavigationEnd)
    //       .subscribe(event => 
    //        {
    //           this.currentRoute = event.url;          
    //           console.log(event);
    //        });


    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;

        // if(this.cu){

        // }
        // localStorage.setItem('currentUrl:',this.currentRoute);
        // console.log(event);

        // console.log(event.urlAfterRedirects);
        // gtag('config', 'UA-84699438-4', {'page_path': event.urlAfterRedirects});
      }
    });

  }

  ngOnInit(): void {


    // Facebook Script
    // if (isPlatformBrowser(this.platformId)) {
    //   const tag = document.createElement('script');
    //   tag.src = 'https://connect.facebook.net/en_US/sdk.js';
    //   document.body.appendChild(tag);
    // }

    this.updateMetaData();
    // Init Facebook
    // this.initFacebookChat();
  }

  private updateMetaData() {
    // Title
    // this.title.setTitle('E-medilife ');

    // Meta
    // this.meta.addTag({name: 'author', content: 'E-medilife '});
    // this.meta.addTag({name: 'author', content: 'E-medilife '});
    // this.meta.addTag({name: 'copyright', content: 'E-medilife '});
    // this.meta.addTag({name: 'og:locale', content: 'en_US'});
    // // Open Graph
    // this.meta.addTag({name: 'og:site_name', content: 'E-medilife '});
    // // Twitter
    // this.meta.addTag({name: 'twitter:card', content: 'summary_large_image'});
    // this.meta.addTag({name: 'twitter:site', content: '@EsquireElectronics'});
    // this.meta.addTag({name: 'twitter:creator', content: '@EsquireElectronics/'});
  }

  /**
   * INIT FACEBOOK CHAT
   */

  // private initFacebookChat() {
  //   const initParams: InitParams = {
  //     xfbml: true,
  //     version: 'v11.0'
  //   };
  //   this.facebookService.init(initParams);
  // }


}
