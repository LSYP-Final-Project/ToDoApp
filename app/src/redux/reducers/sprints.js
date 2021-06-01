import { GET_SPRINTS, GET_SPRINT } from '../actionTypes';

const initState = [
    {
      "id": 1,
      "name": "END GAME",
      "status": "ONGOING",
      "tasks": [
        {
          "description": "Jako zalogowany na widoku sprints moge dodać zadanie do sprintu, lub je usunac do backloga",
          "points": "5"
        },
        {
          "description": "Jako zalogowany na widoku sprints moge wyswietlic sprint i liste zadan",
          "points": "4"
        },
        {
          "description": "Jako zalogowany na widoku sprints moge dodać sprint",
          "points": "3"
        }
      ]
    },
    {
      "id": 2,
      "name": "INFINITY WAR",
      "status": "FINISHED",
      "tasks": [
        {
          "description": "As Thor I go for the head",
          "points": "5"
        },
        {
          "description": "As Thanos I collect all the inifinity stones",
          "points": "5"
        },
        {
          "description": "As Dr.Strange I move my hands in a weird way and call it magic",
          "points": "2"
        },
        {
          "description": "As Spiderman I use my spiderweb to attract huge objects to me",
          "points": "1"
        }
      ]
    },
    {
      "id": 3,
      "name": "AGE OF ULTRON",
      "status": "FINISHED",
      "tasks": [
        {
          "description": "Jako zalogowany wybierając zadanie z (dowolnej) listy przechodzę na ekran szczegółów",
          "points": "4"
        },
        {
          "description": "Jako zalogowany na ekranie wszystkich zadań pole wyszukiwania jest focused",
          "points": "2"
        },
        {
          "description": "Jako zalogowany na ekranie wszystkich zadań mogę filtrować zadania wg. title, status(new,inprogress,review,done), userId i sortować wg. userId lub createdAt",
          "points": "4"
        },
        {
          "description": "Jako zalogowany na ekranie użytkowników mogę przeglądać użytkowników",
          "points": "3"
        }
      ]
    },
    {
      "id": 4,
      "name": "CIVIL WAR",
      "status": "FINISHED",
      "tasks": [
        {
          "description": "Jako zalogowany na widoku kanban widze zadania w kolumnach wg. statusu (przeciąganie zadań niewymagane)",
          "points": "2"
        },
        {
          "description": "Jako zalogowany korzystając z menu rozwijanego mogę przekazać wybrane zadanie innemu użytkownikowi (zmiana historii!)",
          "points": "2"
        },
        {
          "description": "Jako zalogowany na ekranie szczegółów zadania widzę historię zmian w zadaniu (zmiana danych, uzytkownika, dodano komentarz)",
          "points": "1"
        },
        {
          "description": "Jako zalogowany na ekranie szczegółów zadania mogę dodawać komentarze(Comment) do zadania",
          "points": "3"
        },
        {
          "description": "Jako zalogowany na ekranie szczegółów zadania widzę komentarze (Comment - id, userId, content, createdAt) do zadania",
          "points": "4"
        }
      ]
    },
    {
      "id": 5,
      "name": "AVENGERS",
      "status": "FINISHED",
      "tasks": [
        {
          "description": "Jako gość mogę założyć profil użytkownika (User) używając imienia, email i hasła",
          "points": "5"
        },
        {
          "description": "System weryfikuje poprawność email i hasło (7 znaków min, litery i cyfry) i wyświetla komunikat",
          "points": "5"
        },
        {
          "description": "Jako gość mogę się zalogować (email i hasło) i przejść do ekranu głownego",
          "points": "5"
        },
        {
          "description": "System weryfikuje uzytkownik z email i hasło istnieje lub komunikat",
          "points": "5"
        }
      ]
    }
  ]

const sprintsReducer = (
  state = initState, 
  action
  ) => {
    switch (action.type) { 
        case GET_SPRINTS:
            return action.payload
        
        default:
            return state
    }
}

export default sprintsReducer;

export const getAllSprints = (state) => state.sprints
