import { Routes } from '@angular/router';
import { HomeComponent } from './user/pages/home/home.component';
import { LoginComponent } from './user/pages/auth/login/login.component';
import { SignUpComponent } from './user/pages/auth/sign-up/sign-up.component';
import { ProgrammsCoursesComponent } from './user/pages/naregyme/programms-courses/programms-courses.component';
import { AboutComponent } from './user/pages/programms-and-courses/about/about.component';
import { KnowladgeBaseComponent } from './user/pages/knowladge-base-d/knowladge-base/knowladge-base.component';
import { ShopComponent } from './user/pages/shop/shop.component';
import { PersonalAccountComponent } from './user/pages/personal-account/personal-account.component';
import { AvailableCoursesComponent } from './user/pages/sibebar/online-academy/available-courses/available-courses.component';
import { OtherCoursesToBuyComponent } from './user/pages/sibebar/online-academy/other-courses-to-buy/other-courses-to-buy.component';
import { KnowladgeBaseLibraryComponent } from './user/pages/sibebar/online-academy/knowladge-base-library/knowladge-base-library.component';
import { TrainingTypeComponent } from './user/pages/sibebar/training-plan/training-type/training-type.component';
import { BaseMrComponent } from './user/pages/sibebar/metrics-results/base-mr/base-mr.component';
import { AcademyMrComponent } from './user/pages/sibebar/metrics-results/academy-mr/academy-mr.component';
import { TrainingPlanMrComponent } from './user/pages/sibebar/metrics-results/training-plan-mr/training-plan-mr.component';
import { FoodPlanMrComponent } from './user/pages/sibebar/metrics-results/food-plan-mr/food-plan-mr.component';
import { RepotringMrComponent } from './user/pages/sibebar/metrics-results/repotring-mr/repotring-mr.component';
import { FoodPlanComponent } from './user/pages/sibebar/food-plan/food-plan.component';
import { MainRecampComponent } from './user/pages/recamp/main-recamp/main-recamp.component';
import { MainWeNaregymeComponent } from './user/pages/we-naregyme/main-we-naregyme/main-we-naregyme.component';
import { MainCalcComponent } from './user/pages/calculators/main-calc/main-calc.component';
import { ForgotpasswordComponent } from './user/pages/auth/forgotpassword/forgotpassword.component';
import { authGuard } from './user/guards/auth.guard';
import { NotFoundComponent } from './user/pages/not-found/not-found.component';
import { KnowladgeBaseMoreComponent } from './user/pages/knowladge-base-d/knowladge-base-more/knowladge-base-more.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }, // - naregyme
    { path: 'auth/login', component: LoginComponent },
    { path: 'auth/signup', component: SignUpComponent },
    { path: 'auth/forgot-password', component: ForgotpasswordComponent },
    { path: 'recamp', component: MainRecampComponent },
    { path: 'programms-and-courses', component: AboutComponent },
    { path: 'knowladge-base', component: KnowladgeBaseComponent },
    { path: 'knowladge-base/:knowladgeBaseId', component: KnowladgeBaseMoreComponent},
    { path: 'shop', component: ShopComponent },
    { path: 'calculators', component: MainCalcComponent },
    { path: 'we-naregyme', component: MainWeNaregymeComponent },
    { path: 'user/personal-account', component: PersonalAccountComponent, canActivate: [authGuard] },
    { path: 'online-academy/available-courses', component: AvailableCoursesComponent },
    { path: 'online-academy/other-courses', component: OtherCoursesToBuyComponent },
    { path: 'online-academy/knowladge-base', component: KnowladgeBaseLibraryComponent },
    { path: 'training-plan/programms-courses', component: ProgrammsCoursesComponent },
    { path: 'training-plan/training-type', component: TrainingTypeComponent },
    { path: 'metrics-results/base', component: BaseMrComponent },
    { path: 'metrics-results/academy', component: AcademyMrComponent },
    { path: 'metrics-results/training-plan', component: TrainingPlanMrComponent },
    { path: 'metrics-results/food-plan', component: FoodPlanMrComponent },
    { path: 'metrics-results/reports', component: RepotringMrComponent },
    { path: 'food-plan', component: FoodPlanComponent },
    { path: '**', component: NotFoundComponent }
];
