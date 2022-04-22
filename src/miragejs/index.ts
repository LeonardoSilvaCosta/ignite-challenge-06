import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/continents', () => [
      {
        id: 1,
        name: 'América do Norte',
        descricao: 'A América do Norte está localizada no extremo norte das Américas e é composta por apenas três países: Estados Unidos, Canadá e México, além de territórios de domínios europeus, como a Groelândia (pertencente ao Reino da Dinamarca, com representação no parlamento) e Bermudas (dependência britânica).',
        banner: '../imagens/StatueOfLibertyBanner.png',
        quantidadeDePaises: 4,
        quantidadeDeLinguas: 272,
        quantidadeDeCidades: 95,
        citiesInfo: [
           {
            cityImgUrl: '../newYork.jpg',
            cityName: 'New Your',
            stateName: 'EUA',
            urlImgFlag: '../EuaFlag.png'
          },
          {
            cityImgUrl: '../toronto.jpg',
            cityName: 'Toronto',
            stateName: 'Canadá',
            urlImgFlag: '../CanadaFlag.png'
          },
          {
            cityImgUrl: '../copenhagen.jpg',
            cityName: 'Copenhage',
            stateName: 'Dinamarca',
            urlImgFlag: '../DinamarcaFlag.png'
          },
        ]
      },
      {
        id: 2,
        name: 'América do Sul',
        descricao: 'A América do Sul é um subcontinente que faz parte do continente americano. Apresenta área de 17 milhões de km², com a maior extensão situada no hemisfério sul do planeta Terra. A população sul-americana é de mais de 434 milhões de habitantes, a qual é distribuída por 12 países e um departamento ultramarino francês.',
        banner: '../imagens/AlterDoChaoBanner.png',
        quantidadeDePaises: 20,
        quantidadeDeLinguas: 10,
        quantidadeDeCidades: 121,
        citiesInfo: [
          {
            cityImgUrl: '../parqueIbirapuera.jpg',
            cityName: 'São Paulo',
            stateName: 'Brasil',
            urlImgFlag: '../BrasilFlag.png'
          },
          {
            cityImgUrl: '../lima.jpg',
            cityName: 'Lima',
            stateName: 'Peru',
            urlImgFlag: '../PeruFlag.png'
          },
          {
            cityImgUrl: '../bogota.jpg',
            cityName: 'Bogotá',
            stateName: 'Colombia',
            urlImgFlag: '../ColombiaFlag.png'
          },
       ]
      },
      {
        id: 3,
        name: 'Ásia',
        descricao: 'A Ásia é o maior continente em área terrestre do mundo, estando boa parte do continente localizado no Hemisfério Norte. Além de ser o mais extenso, é também o mais populoso, habitando nele cerca de três quintos da população mundial. A Ásia é multicultural, abrigando diversas culturas, etnias, religiões e tradições.',
        banner: '../imagens/HongKongBanner.png',
        quantidadeDePaises: 49,
        quantidadeDeLinguas: 51,
        quantidadeDeCidades: 180,
        citiesInfo: [
          {
            cityImgUrl: '../seul.jpg',
            cityName: 'Seul',
            stateName: 'Coréia do Sul',
            urlImgFlag: '../CoreiaDoSulFlag.png'
          },
          {
            cityImgUrl: '../toquio.jpg',
            cityName: 'Tóquio',
            stateName: 'Japão',
            urlImgFlag: '../JapaoFlag.png'
          },
          {
            cityImgUrl: '../xangai.jpg',
            cityName: 'Xangai',
            stateName: 'China',
            urlImgFlag: '../ChinaFlag.png'
          },
       ]
      },
      {
        id: 4,
        name: 'África',
        descricao: 'O continente africano é o terceiro maior do mundo. É banhado a leste pelo Oceano Atlântico e a Oeste pelo Oceano Índico. Ao norte, é separado do continente europeu pelo Mar Mediterrâneo; e a nordeste, é separado da Ásia pelo Mar Vermelho e pelo Canal do Suez, localizado no Egito.',
        banner: '../imagens/AngolaBanner.png',
        quantidadeDePaises: 54,
        quantidadeDeLinguas: 13,
        quantidadeDeCidades: 182,
        citiesInfo: [
          {
            cityImgUrl: '../cidadeDoCabo.jpg',
            cityName: 'Cidade do Cabo',
            stateName: 'África do Sul',
            urlImgFlag: '../AfricaDoSulFlag.png'
          },
          {
            cityImgUrl: '../lagos.jpg',
            cityName: 'Lagos',
            stateName: 'Nigéria',
            urlImgFlag: '../NigeriaFlag.png'
          },
          {
            cityImgUrl: '../nairobi.jpg',
            cityName: 'Nairobi',
            stateName: 'Quênia',
            urlImgFlag: '../QueniaFlag.png'
          },
       ]
      },
      {
        id: 5,
        name: 'Europa',
        descricao: 'A Europa é por convenção um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais o rio Ural, o mar Cáspio, o Cáucaso e o mar Negro a sudeste.',
        banner: '../imagens/EuropaBanner.png',
        quantidadeDePaises: 50,
        quantidadeDeLinguas: 60,
        quantidadeDeCidades: 27,
        citiesInfo: [
          {
           cityImgUrl: '../Foto1.png',
           cityName: 'Londres',
           stateName: 'Reino Unido',
           urlImgFlag: '../flag1.svg'
         },
         {
          cityImgUrl: '../Foto2.png',
          cityName: 'Paris',
          stateName: 'França',
          urlImgFlag: '../flag2.svg'
        },
        {
          cityImgUrl: '../Foto3.png',
          cityName: 'Roma',
          stateName: 'Itália',
          urlImgFlag: '../flag3.svg'
        },
        {
          cityImgUrl: '../Foto4.png',
          cityName: 'Praga',
          stateName: 'República Tcheca',
          urlImgFlag: '../flag4.svg'
        },
        {
          cityImgUrl: '../Foto5.png',
          cityName: 'Amsterdã',
          stateName: 'Holanda',
          urlImgFlag: '../flag5.svg'
        },
       ]
      },
      {
        id: 6,
        name: 'Oceania',
        descricao: 'A Oceania é um continente localizado a sudeste da Ásia, compreendendo um conjunto de ilhas somado à Austrália, essa última considerada como uma massa continental chamada de “Australásia”. Possui uma área total de 8.480.355 km², onde habitam aproximadamente 38 milhões de pessoas.',
        banner: '../imagens/SydneyBanner.png',
        quantidadeDePaises: 14,
        quantidadeDeLinguas: 12,
        quantidadeDeCidades: 88,
        citiesInfo: [
          {
            cityImgUrl: '../auckland.jpg',
            cityName: 'Auckland',
            stateName: 'Nova Zelândia',
            urlImgFlag: '../NovaZelandiaFlag.png'
          },
          {
            cityImgUrl: '../melbourne.jpg',
            cityName: 'Melbourne',
            stateName: 'Austrália',
            urlImgFlag: '../AustraliaFlag.png'
          },
          {
            cityImgUrl: '../apia.jpg',
            cityName: 'Apia',
            stateName: 'Samoa',
            urlImgFlag: '../SamoaFlag.png'
          },
       ]
      },
    ]),

  this.namespace = "";
  this.passthrough();
  }
})