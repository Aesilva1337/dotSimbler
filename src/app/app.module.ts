import { Elastic } from './../directives/elastic/elastic';
import { Comandos } from './../providers/cpu/comandos';
import { Registrador } from './../providers/cpu/registrador/registrador';
import { CPU } from './../providers/cpu/cpu';
import { Commands } from './../providers/commands/commands';
import { ComponentsModule } from './../components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { AutosizeDirective } from '../directives/autosize/autosize';
import { UnidadeControle } from '../providers/cpu/unidade-controle/unidade-controle';
import { UnidadeLogicaAritmetica } from '../providers/cpu/unidade-aritmetica/unidade-aritmetica';
import { Memoria } from '../providers/cpu/memoria/memoria';
import { Conversor } from '../providers/conversor/conversor';
import { Analyzer } from '../providers/analyzer/analyzer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AutosizeDirective,
    Elastic
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CPU,
    UnidadeControle,
    UnidadeLogicaAritmetica,
    Registrador,
    Comandos,
    Memoria,
    Commands,
    Conversor,
    Analyzer
  ]
})
export class AppModule {}
