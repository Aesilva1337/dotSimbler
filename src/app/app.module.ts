import { Commands } from './../providers/commands/commands';
import { TextEditorComponent } from './../components/text-editor/text-editor';
import { ComponentsModule } from './../components/components.module';
import { MemoriaProvider } from './../providers/memoria/memoria';
import { CommandsProvider } from './../providers/cpu/commands';
import { ConversorProvider } from './../providers/conversor/conversor';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { CpuProvider } from '../providers/cpu/cpu';
import { UnidadeControleProvider } from '../providers/unidade-controle/unidade-controle';
import { UnidadeLogicaAritmeticaProvider } from '../providers/unidade-logica-aritmetica/unidade-logica-aritmetica';
import { RegistradorGeralProvider } from '../providers/registrador-geral/registrador-geral';
import { RegistradorEstadoProvider } from '../providers/registrador-estado/registrador-estado';
import { AutosizeDirective } from '../directives/autosize/autosize';
import { Select } from 'ionic-angular/components/select/select';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AutosizeDirective
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
    CpuProvider,
    UnidadeControleProvider,
    UnidadeLogicaAritmeticaProvider,
    RegistradorGeralProvider,
    RegistradorEstadoProvider,
    CommandsProvider,
    MemoriaProvider,
    Commands,
    ConversorProvider
  ]
})
export class AppModule {}
