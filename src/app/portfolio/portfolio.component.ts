import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'After the Journey', 
      summary: "2D educational adventure game in Java featuring tile-based maps, collision detection, and collectible chemical elements.",
      description: "After the Journey is a 2D game developed in Java using Swing, where the player explores a tile-based world loaded from text maps. The game includes real-time movement, collision detection, collectible objects inspired by chemical elements, and interactive UI components. It was designed as an educational project combining basic game engine mechanics with learning elements related to chemistry and exploration. The project demonstrates object-oriented programming, sprite rendering, keyboard input handling, and map management.",
      projectLink: 'https://github.com/EduardoArc3/After-the-journe#',
      tags: [Tag.GOLANG],
      pictures: ["../../assets/AfterJourney.jpeg", "../../assets/Tiptoethru.jpeg"]
    },
    { 
       id: 2,
      name: 'Breakout Game',
      summary: "Classic Breakout-style arcade game with paddle control, ball physics, and brick destruction.",
      description: "Breakout is a classic arcade game where the player controls a paddle to bounce a ball and destroy rows of bricks. The game features real-time movement, precise collision detection between the ball, paddle, walls, and bricks, along with a scoring system and limited lives. This project demonstrates core game development concepts such as implementing a game loop, handling keyboard input, object-oriented design, basic physics simulation, and simple level progression.",
      projectLink: 'https://github.com/EduardoArc3/Breakout.git',
      tags: [Tag.GOLANG],
      pictures: ["../../assets/Breakout.jpeg", "../../assets/Breakout2.jpeg"]
    },

    { 
       id: 3,
        name: 'PokeApi - Pokedex',
        summary: " Pokédex is a application that consumes the PokéAPI to display Pokémon data with search and detail views. ",
        description: "PokeApi - Pokedex is a Desktop applicatio developed in java using javafx. This that fetches data from the public PokéAPI and presents detailed information about Pokémon, including stats, types, abilities, and images. The project includes search and filtering features, dynamic views for each Pokémon, and API integration using asynchronous requests. It demonstrates frontend development skills, REST API consumption, component-based architecture, state handling, and user interface design.",
        projectLink: 'https://github.com/EduardoArc3/PokeApiFinal.git',
        tags: [Tag.GOLANG],
        pictures: ["../../assets/Pokeapi4.jpeg", "../../assets/Pokeapi1.jpeg","../../assets/Pokeapi2.jpeg", "../../assets/Pokeapi1.jpeg" ]
      },

      { 
       id: 4,
        name: 'Testing NutriApp',
        summary: "  ",
        description: " ",
        projectLink: 'https://github.com/Luisa-GVR/NutriApp.git',
        tags: [Tag.GOLANG],
        pictures: ["../../assets/", "../../assets/","../../assets/", "../../assets/" ]
      },

      { 
       id: 5,
        name: 'PUCA (Cafetería)',
        summary: "  ",
        description: " ",
        projectLink: 'https://github.com/SeaBassy4/PUCA_Front_End.git\nhttps://github.com/SeaBassy4/PUCA_Back_End.git',
        tags: [Tag.GOLANG],
        pictures: ["../../assets/", "../../assets/","../../assets/", "../../assets/" ]
      },

    
      
  
     ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('Eduardo | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
