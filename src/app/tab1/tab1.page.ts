import { GeneroService } from './../services/genero.service';
import { IListaFilmes, IFilmeApi } from './../models/IFilmeAPImodel';
import { FilmeService } from './../services/filme.service';
import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.model';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  titulo = 'Filmes';

  listaVideos: IFilme [] = [
    {
      nome: '22 Contra a Terra (2021)',
      lancamento: '30/04/2021',
      duracao: '5m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yXhjueyyNNrGinwM9WIxuwNqzbm.jpg',
      generos: ['Família', 'Animação', 'Comédia'],
      pagina: '/vintedois-contra-terra'
    },
    {
      nome: 'Pets Monstruosos (2021)',
      lancamento: '02/04/2021',
      duracao: '6m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dkokENeY5Ka30BFgWAqk14mbnGs.jpg',
      generos: ['Família', 'Animação', 'Comédia'],
      pagina: '/pets-monstruosos'
    },
    {
      nome: 'Buffalo Boys (2018)',
      lancamento: '11/01/2019',
      duracao: '1h 43m',
      classificacao: 69,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/o1Bn2zlIDJSnM5aOljbOPTM6Kf9.jpg',
      generos: ['Drama', 'Ação'],
      pagina: '/buffalo-boys'
    },
    {
      nome: 'Cruella (2021)',
      lancamento: '28/05/2021',
      duracao: '2h 14m',
      classificacao: 88,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ljPHd7WiPVKmuXi1hgQUpZQslbC.jpg',
      generos: ['Comédia', 'Crime'],
      pagina: '/cruella'
    },
    {
      nome: 'Vanquish (2021)',
      lancamento: '16/04/2021',
      duracao: '1h 36m',
      classificacao: 60,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1jkNM1NHyHsxiBBuOlOeqgmidM0.jpg',
      generos: ['Comédia', 'Crime'],
      pagina: '/vanquish'
    }
    ,
    {
      nome: 'The Virtuoso (2021)',
      lancamento: '30/04/2021',
      duracao: '1h 45m',
      classificacao: 64,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vXHzO26mJaOt4VO7ZFiM6No5ScT.jpg',
      generos: ['Thriller', 'Ação', 'Crime'],
      pagina: '/the-virtuoso'
    },
    {
      nome: 'Godzilla vs. Kong (2021)',
      lancamento: '01/04/2021',
      duracao: '01/04/2021',
      classificacao: 60,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wllzjZxg4ynlAm5xmOICJ2uHOPJ.jpg',
      generos: ['Ação', 'Ficção científica'],
      pagina: '/godzilla-kong'
    }
  ];

  listaFilmes: IListaFilmes;

  generos: string[] = [];


  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public generoService: GeneroService,
    public route: Router){}

  buscarFilmes(evento: any) {
    console.log(evento.target.value);
    const busca = evento.target.value;
    if(busca && busca.trim() !== ''){
      this.filmeService.buscarFilmes(busca).subscribe(dados =>{
        console.log(dados);
        this.listaFilmes = dados;
      });
    }
  }

  exibirFilme(filme: IFilmeApi){
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

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

  ngOnInit(){

    this.generoService.buscarGeneros().subscribe(dados =>{
      console.log('Generos:',dados.genres);
      dados.genres.forEach(genero => {
        this.generos[genero.id] = genero.name;
      });

      this.dadosService.guardarDados('generos', this.generos);


    });
  }
}
