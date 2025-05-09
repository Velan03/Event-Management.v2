// Sample data for the streaming platform
const moviesData = [
    // Trending Movies
    {
      id: 1,
      title: "The Batman",
      year: 2022,
      rating: "PG-13",
      duration: "2h 56m",
      genre: ["action", "crime", "drama"],
      match: 97,
      description:
        "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate.",
      image: "/placeholder.svg?height=400&width=270",
      trailer: "https://www.youtube.com/embed/mqqft2x_Aa4",
      type: "movie",
      category: "trending",
    },
    {
      id: 2,
      title: "Oppenheimer",
      year: 2023,
      rating: "R",
      duration: "3h 0m",
      genre: ["biography", "drama", "history"],
      match: 95,
      description:
        "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
      image: "/placeholder.svg?height=400&width=270",
      trailer: "https://www.youtube.com/embed/uYPbbksJxIg",
      type: "movie",
      category: "trending",
    },
    {
      id: 3,
      title: "Barbie",
      year: 2023,
      rating: "PG-13",
      duration: "1h 54m",
      genre: ["adventure", "comedy", "fantasy"],
      match: 92,
      description:
        "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land.",
      image: "/placeholder.svg?height=400&width=270",
      trailer: "https://www.youtube.com/embed/8zIf0XvoL9Y",
      type: "movie",
      category: "trending",
    },
    {
      id: 4,
      title: "Poor Things",
      year: 2023,
      rating: "R",
      duration: "2h 21m",
      genre: ["comedy", "drama", "romance"],
      match: 94,
      description:
        "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by an unorthodox scientist.",
      image: "/placeholder.svg?height=400&width=270",
      trailer: "https://www.youtube.com/embed/RlbR5N6veqw",
      type: "movie",
      category: "trending",
    },
    {
      id: 5,
      title: "Killers of the Flower Moon",
      year: 2023,
      rating: "R",
      duration: "3h 26m",
      genre: ["crime", "drama", "history"],
      match: 91,
      description:
        "Members of the Osage tribe in the United States are murdered under mysterious circumstances in the 1920s.",
      image: "/placeholder.svg?height=400&width=270",
      trailer: "https://www.youtube.com/embed/EP34Yoxs3FQ",
      type: "movie",
      category: "trending",
    },
    {
      id: 6,
      title: "The Holdovers",
      year: 2023,
      rating: "R",
      duration: "2h 13m",
      genre: ["comedy", "drama"],
      match: 96,
      description:
        "A cranky history teacher at a remote prep school is forced to remain on campus over the holidays with a troubled student.",
      image: "/placeholder.svg?height=400&width=270",
      trailer: "https://www.youtube.com/embed/AhKLpJmHhsA",
      type: "movie",
      category: "trending",
    },
  
    // TV Shows
    {
      id: 7,
      title: "Stranger Things",
      year: "2016-2024",
      rating: "TV-14",
      duration: "4 Seasons",
      genre: ["drama", "fantasy", "horror"],
      match: 98,
      description:
        "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces.",
      image: "/placeholder.svg?height=400&width=270",
      trailer: "https://www.youtube.com/embed/b9EkMc79ZSU",
      type: "series",
      category: "tv",
    },
    {
      id: 8,
      title: "The Last of Us",
      year: 2023,
      rating: "TV-MA",
      duration: "1 Season",
      genre: ["action", "adventure", "drama"],
      match: 96,
      description:
        "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
      image: "/placeholder.svg?height=400&width=270",
      trailer: "https://www.youtube.com/embed/uLtkt8BonwM",
      type: "series",
      category: "tv",
    },
    {
      id: 9,
      title: "Wednesday",
      year: 2022,
      rating: "TV-14",
      duration: "1 Season",
      genre: ["comedy", "crime", "fantasy"],
      match: 93,
      description:
        "Wednesday Addams is sent to Nevermore Academy, where she attempts to master her emerging psychic ability.",
      image: "/placeholder.svg?height=400&width=270",
      trailer: "https://www.youtube.com/embed/Di310WS8zLk",
      type: "series",
      category: "tv",
    },
    {
      id: 10,
      title: "The Bear",
      year: "2022-2023",
      rating: "TV-MA",
      duration: "2 Seasons",
      genre: ["comedy", "drama"],
      match: 99,
      description:
        "A young chef from the fine dining world returns to Chicago to run his family's sandwich shop after the death of his brother.",
      image: "/placeholder.svg?height=400&width=270",
      trailer: "https://www.youtube.com/embed/y-cqqAJIXhs",
      type: "series",
      category: "tv",
    },
    {
      id: 11,
      title: "Succession",
      year: "2018-2023",
      rating: "TV-MA",
      duration: "4 Seasons",
      genre: ["drama"],
      match: 97,
      description: "The Roy family is known for controlling the biggest media and entertainment company in the world.",
      image: "/placeholder.svg?height=400&width=270",
      trailer: "https://www.youtube.com/embed/OzYxJV_rmE8",
      type: "series",
      category: "tv",
    },
    {
      id: 12,
      title: "Shogun",
      year: 2024,
      rating: "TV-MA",
      duration: "1 Season",
      genre: ["action", "adventure", "drama"],
      match: 95,
      description:
        "Set in Japan in the year 1600, at the dawn of a century-defining civil war, Lord Yoshii Toranaga is fighting for his life.",
      image: "/placeholder.svg?height=400&width=270",
      trailer: "https://www.youtube.com/embed/yAN5uspO_hk",
      type: "series",
      category: "tv",
    },
  
    // New Releases
    {
      id: 13,
      title: "Challengers",
      year: 2024,
      rating: "R",
      duration: "2h 11m",
      genre: ["drama", "romance", "sport"],
      match: 88,
      description:
        "Follows three players who knew each other when they were teenagers as they compete in a tennis tournament.",
      image: "/placeholder.svg?height=400&width=270",
      trailer: "https://www.youtube.com/embed/UtECBg4XYrQ",
      type: "movie",
      category: "new",
    },
    {
      id: 14,
      title: "Civil War",
      year: 2024,
      rating: "R",
      duration: "1h 49m",
      genre: ["action", "drama", "thriller"],
      match: 85,
      description:
        "In a near-future America ravaged by political division, a team of journalists travel across the country during a rapidly escalating civil war.",
      image: "/placeholder.svg?height=400&width=270",
      trailer: "https://www.youtube.com/embed/9sn9oY2VwZY",
      type: "movie",
      category: "new",
    },
    {
      id: 15,
      title: "Godzilla x Kong",
      year: 2024,
      rating: "PG-13",
      duration: "1h 55m",
      genre: ["action", "adventure", "sci-fi"],
      match: 87,
      description:
        "Two ancient titans, Godzilla and Kong, clash in an epic battle as humans unravel their intertwined origins.",
      image: "/placeholder.svg?height=400&width=270",
      trailer: "https://www.youtube.com/embed/odM92ap8_c0",
      type: "movie",
      category: "new",
    },
    {
      id: 16,
      title: "Furiosa",
      year: 2024,
      rating: "R",
      duration: "2h 28m",
      genre: ["action", "adventure", "sci-fi"],
      match: 90,
      description: "The origin story of renegade warrior Furiosa before her encounter with Max Rockatansky.",
      image: "/placeholder.svg?height=400&width=270",
      trailer: "https://www.youtube.com/embed/XdKzUbAiswE",
      type: "movie",
      category: "new",
    },
    {
      id: 17,
      title: "Kingdom of the Planet of the Apes",
      year: 2024,
      rating: "PG-13",
      duration: "2h 25m",
      genre: ["action", "adventure", "drama"],
      match: 86,
      description:
        "Many years after the reign of Caesar, a young ape goes on a journey that will lead him to question everything he's been taught.",
      image: "/placeholder.svg?height=400&width=270",
      trailer: "https://www.youtube.com/embed/6V_YUHRRf1I",
      type: "movie",
      category: "new",
    },
    {
      id: 18,
      title: "Inside Out 2",
      year: 2024,
      rating: "PG",
      duration: "1h 36m",
      genre: ["animation", "adventure", "comedy"],
      match: 92,
      description:
        "Follow Riley in her teenage years as new emotions join her original five feelings inside Headquarters.",
      image: "/placeholder.svg?height=400&width=270",
      trailer: "https://www.youtube.com/embed/4ePJUJMbJU4",
      type: "movie",
      category: "new",
    },
  
    // My List
    {
      id: 19,
      title: "Inception",
      year: 2010,
      rating: "PG-13",
      duration: "2h 28m",
      genre: ["action", "adventure", "sci-fi"],
      match: 94,
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
      image: "/placeholder.svg?height=400&width=270",
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
      type: "movie",
      category: "mylist",
    },
    {
      id: 20,
      title: "The Shawshank Redemption",
      year: 1994,
      rating: "R",
      duration: "2h 22m",
      genre: ["drama"],
      match: 98,
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      image: "/placeholder.svg?height=400&width=270",
      trailer: "https://www.youtube.com/embed/6hB3S9bIaco",
      type: "movie",
      category: "mylist",
    },
    {
      id: 21,
      title: "Parasite",
      year: 2019,
      rating: "R",
      duration: "2h 12m",
      genre: ["drama", "thriller"],
      match: 96,
      description:
        "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      image: "/placeholder.svg?height=400&width=270",
      trailer: "https://www.youtube.com/embed/5xH0HfJHsaY",
      type: "movie",
      category: "mylist",
    },
    {
      id: 22,
      title: "Everything Everywhere All at Once",
      year: 2022,
      rating: "R",
      duration: "2h 19m",
      genre: ["action", "comedy", "sci-fi"],
      match: 95,
      description:
        "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes.",
      image: "/placeholder.svg?height=400&width=270",
      trailer: "https://www.youtube.com/embed/wxN1T1uxQ2g",
      type: "movie",
      category: "mylist",
    },
  ]
  
  // Hero movies rotation
  const heroMovies = [
    {
      id: 101,
      title: "Dune: Part Two",
      year: 2024,
      rating: "PG-13",
      duration: "2h 46m",
      description:
        "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
      image: "https://via.placeholder.com/1920x1080",
    },
    {
      id: 102,
      title: "Deadpool & Wolverine",
      year: 2024,
      rating: "R",
      duration: "2h 7m",
      description:
        "Deadpool teams up with Wolverine for an adventure that will change the Marvel Cinematic Universe forever.",
      image: "https://via.placeholder.com/1920x1080",
    },
    {
      id: 103,
      title: "The Fall Guy",
      year: 2024,
      rating: "PG-13",
      duration: "2h 6m",
      description:
        "A stuntman is drawn back into a dangerous world when the movie star he doubles for disappears during the filming of a major studio film.",
      image: "https://via.placeholder.com/1920x1080",
    },
  ]
  
  