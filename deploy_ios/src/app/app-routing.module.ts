import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'create-contents',
    loadChildren: () => import('./create-contents/create-contents.module').then( m => m.CreateContentsPageModule)
  },
  {
    path: 'create-contents/:id',
    loadChildren: () => import('./create-contents/create-contents.module').then( m => m.CreateContentsPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'eula',
    loadChildren: () => import('./eula/eula.module').then( m => m.EulaPageModule)
  },
  {
    path: 'content-details/:id',
    loadChildren: () => import('./content-details/content-details.module').then( m => m.ContentDetailsPageModule)
  },
  {
    path: 'search-results-yt',
    loadChildren: () => import('./search-results-yt/search-results-yt.module').then( m => m.SearchResultsYTPageModule)
  },
  {
    path: 'yt-add/:title',
    loadChildren: () => import('./yt-add/yt-add.module').then( m => m.YtAddPageModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('./upload/upload.module').then( m => m.UploadPageModule)
  },
  {
    path: 'subscription',
    loadChildren: () => import('./subscription/subscription.module').then( m => m.SubscriptionPageModule)
  },
  {
    path: 'edit-clip/:id',
    loadChildren: () => import('./edit-clip/edit-clip.module').then( m => m.EditClipPageModule)
  },
  {
    path: 'edit-clip',
    loadChildren: () => import('./edit-clip/edit-clip.module').then( m => m.EditClipPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'tab2/:id',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  },
  {
    path: 'text',
    loadChildren: () => import('./text/text.module').then( m => m.TextPageModule)
  },
  {
    path: 'appt',
    loadChildren: () => import('./appt/appt.module').then( m => m.ApptPageModule)
  },
  {
    path: 'audio',
    loadChildren: () => import('./audio/audio.module').then( m => m.AudioPageModule)
  },
  {
    path: 'pdf',
    loadChildren: () => import('./pdf/pdf.module').then( m => m.PdfPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'image',
    loadChildren: () => import('./image/image.module').then( m => m.ImagePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then( m => m.TodoPageModule)
  },
  {
    path: 'delete-account',
    loadChildren: () => import('./delete-account/delete-account.module').then( m => m.DeleteAccountPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'create-profile',
    loadChildren: () => import('./create-profile/create-profile.module').then( m => m.CreateProfilePageModule)
  },
  {
    path: 'create-pc',
    loadChildren: () => import('./create-pc/create-pc.module').then( m => m.CreatePcPageModule)
  },
  {
    path: 'create-pc/:id',
    loadChildren: () => import('./create-pc/create-pc.module').then( m => m.CreatePcPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab4/:id',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'play/:id',
    loadChildren: () => import('./play/play.module').then( m => m.PlayPageModule)
  },
  {
    path: 'share/:id',
    loadChildren: () => import('./share/share.module').then( m => m.SharePageModule)
  },
  {
    path: 'preview/:id',
    loadChildren: () => import('./preview/preview.module').then( m => m.PreviewPageModule)
  },
  {
    path: 'view-clip',
    loadChildren: () => import('./view-clip/view-clip.module').then( m => m.ViewClipPageModule)
  },
  {
    path: 'view-clip/:id',
    loadChildren: () => import('./view-clip/view-clip.module').then( m => m.ViewClipPageModule)
  },
  {
    path: 'link',
    loadChildren: () => import('./link/link.module').then( m => m.LinkPageModule)
  },
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then( m => m.DemoPageModule)
  },
  {
    path: 'offend',
    loadChildren: () => import('./offend/offend.module').then( m => m.OffendPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
