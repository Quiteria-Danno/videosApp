import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IFilme } from '../models/IFilme.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Videos';

  listaVideos: IFilme [] = [
    {
      nome: '22 Contra a Terra (2021)',
      lancamento: '30/04/2021',
      duracao: '5m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yXhjueyyNNrGinwM9WIxuwNqzbm.jpg',
      generos: ['Família', 'Animação', 'Comédia']
    },
    {
      nome: 'Pets Monstruosos (2021)',
      lancamento: '02/04/2021',
      duracao: '6m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dkokENeY5Ka30BFgWAqk14mbnGs.jpg',
      generos: ['Família', 'Animação', 'Comédia']
    }
  ];

  constructor(public alertController: AlertController, public toastController: ToastController)  {}
    async exibirAlertaFavorito() {
      const alert = await this.alertController.create({
        header: 'Alerta!',
        message: 'Deseja realmente favoritar o filme? ',
       buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
          }
        } , {
            text: 'SIM, favoritar',
            handler: () => {
             this.apresentarToast ();
            }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color:'success'
    });
    toast.present();
  }

}
