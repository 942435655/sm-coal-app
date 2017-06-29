import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MeProfilePage } from './me-profile';
import { MeNoticePage } from '../../../notice/pages/me-notice';
import { MeSettingPage } from './me-setting';
import { TimelinePage } from '../../../timeline/pages/timeline';
import { LogisticsManagePage } from '../../../manage/pages/logistics-manage/logistics-manage';
import {FactoryManage} from "../../../manage/pages/factory-manage/factory-manage";
import {InfostoreManage} from "../../../manage/pages/infostore-manage/infostore-manage";
import {LifestoreManage} from "../../../manage/pages/lifestore-manage/lifestore-manage";

import { HCAboutPage } from '../setting/hc-about';
import { HCGuidePage } from '../setting/hc-guide';
import { HCFeedbackPage } from '../setting/hc-feedback';
import {BrowserPage} from "../../../common/pages/browser";
import {ProductListPage} from "../../../manage/pages/price-manage/product-list";
import {AppService} from "../../../common/services/app.service";
import {NoticeService} from "../../../notice/services/notice.service";

@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {

  MeSettingPage = MeSettingPage;
  HCAboutPage = HCAboutPage;
  HCGuidePage = HCGuidePage;
  HCFeedbackPage = HCFeedbackPage;

  constructor(
    public heyApp: AppService,
    public noticeService: NoticeService,
    public navCtrl: NavController
  ) {
  }

  gotoMeProfilePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(MeProfilePage);
    }
  }


  gotoMeNoticePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(MeNoticePage);
    }
  }


  gotoMyTimelinePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(TimelinePage);
    }
  }

  gotoCoalOrignPriceMangePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(ProductListPage, 1);
    }
  }

  gotoCoalSalePriceManagePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(ProductListPage, 2);
    }
  }

  gotoLantanPriceManagePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(ProductListPage, 3);
    }
  }

  gotoLogisticseManagePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(LogisticsManagePage);
    }
  }

  gotoFactoryManagePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(FactoryManage);
    }
  }

  gotoInfoStoreManagePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(InfostoreManage);
    }
  }

  gotoLifeStoreManagePage() {
    if (this.heyApp.authService.authOrLogin()) {
      this.navCtrl.push(LifestoreManage);
    }
  }

  doRefresh(refresher) {

    setTimeout(function(){
      refresher.complete();
    }, 1000)
  }

  //
  // open terms page
  openTermsPage() {
    this.navCtrl.push(BrowserPage, {
      browser: {
        title: '用户协议',
        url: 'http://119.29.250.146:8900/docs/terms.html'
      }
    });
  }

  gotoContact(){
    window.location.href = "tel:0912-8313333";
  }

}
