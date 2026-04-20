// src/data/projectsData.ts

export interface ProjectDataItem {
  title: string;
  timeframe?: string; // TIME & DATE (MONTH 0000) PROJECT TOOK PLACE
  imdbpageUrl?: string; // IMDB PAGE
  githubRepos?: { title?: string; url: string }[];
  pressUrl?: string; // OTHER NEWS OR NOTEWORTHY ARTICLES
  productionDetails?: string[];
  imageSrc?: string;
  imageAlt?: string;
  thumbnailSrc?: string; // Optional: Path to a square thumbnail image
  description: string; // HTML string
  homepageSummary?: string; // Concise summary for homepage
  isFeatured?: boolean; // Flag for featuring on homepage
}

// Example data (replace with your actual data later)
export const allProjectsData: ProjectDataItem[] = [
   {
    title: "My Animal (2023)",
    timeframe: "January 2023",
    imdbpageUrl: "https://www.imdb.com/title/tt23572542/",
    pressUrl: "https://www.sundance.org/projects/my-animal/",
    productionDetails: ["Feature Film", "|", "Sundance Premiere", "|", "Horror", "|", "Drama"],
    imageSrc: "/images/projects/my-animal.jpg", // got it
    imageAlt: "Still from My Animal film",
    description: `
      <p>First Assistant Director on <em>My Animal</em>, a feature film that premiered at Sundance. Led scheduling and on-set execution across a demanding winter shoot, coordinating departments and maintaining production flow under tight constraints.</p>
    `,
    isFeatured: true,
    homepageSummary: "First Assistant Director on Sundance-premiered feature film.",
  },
  {
    title: "Violence (2025)",
    timeframe: "October 2025",
    imdbpageUrl: "https://www.imdb.com/title/tt7709160/",
    pressUrl: "https://www.wearecritix.com/post/exclusive-violence-we-talk-punk-cinema-and-chaos-with-director-connor-marsden-in-time-for-b",
    productionDetails: ["Feature Film", "|", "Action", "|", "Crime"],
    imageSrc: "/images/projects/violence.jpg",// got it
    imageAlt: "Still from Violence film",
    description: `
      <p>First Assistant Director on <em>Violence</em>, a stylized feature set in an alternate 1980s world. Managed production logistics and supported execution across a complex, high-intensity shoot.</p>
    `,
    isFeatured: true,
    homepageSummary: "First Assistant Director on stylized action feature.",
  },
  {
    title: "The Strangers: Chapter 3 (2026)",
    timeframe: "February 2026",
    imdbpageUrl: "https://www.imdb.com/title/tt28682323/",
    pressUrl: "https://thehollywoodnews.com/2025/11/27/first-teaser-trailer-arrives-for-the-strangers-chapter-3-release-date-confirmed/",
    productionDetails: ["Studio Film", "|", "Horror", "|", "Franchise"],
    imageSrc: "/images/projects/strangers.jpg", // got it
    imageAlt: "Still from The Strangers Chapter 3",
    description: `
      <p>First Assistant Director on <em>The Strangers: Chapter 3</em>, part of Lionsgate’s rebooted horror trilogy. Contributed to a large-scale studio production with high operational demands.</p>
    `,
    isFeatured: true,
    homepageSummary: "First Assistant Director on major studio horror franchise.",
  },
  {
    title: "Morningside (2024)",
    timeframe: "September 2024",
    imdbpageUrl: "https://www.imdb.com/title/tt24666718/",
    pressUrl: "https://www.theglobeandmail.com/arts/film/article-from-its-people-to-its-story-morningside-is-pure-scarborough/",
    productionDetails: ["Feature Film", "|", "Drama"],
    imageSrc: "/images/projects/morningside.jpg", // got it
    imageAlt: "Still from Morningside film",
    description: `
      <p>Second Assistant Director on <em>Morningside</em>, a community-driven drama set in Scarborough. Supported daily production logistics and coordination across cast and crew.</p>
    `,
    isFeatured: true,
    homepageSummary: "Second Assistant Director on community-driven drama feature.",
  },
  {
    title: "Running Dry (N.D.)",
    timeframe: "TBD Release",
    imdbpageUrl: "https://www.imdb.com/title/tt29417311/",
    pressUrl: "https://variety.com/2023/film/global/hamzah-jamjoom-running-dry-1235827680/",
    productionDetails: ["Feature Film", "|", "Action", "|", "Drama"],
    imageSrc: "", // not released yet
    imageAlt: "Still from Running Dry film",
    description: `
      <p>First Assistant Director on <em>Running Dry</em>, managing production logistics on an action-driven feature with international scope and complex scheduling needs.</p>
    `,
    isFeatured: false,
    homepageSummary: "First Assistant Director on internationally scoped action feature.",
  },
  {
    title: "Secrets of Wickensburg (2025)",
    timeframe: "October 2025",
    imdbpageUrl: "https://www.imdb.com/title/tt34580495/",
    pressUrl: "https://playbackonline.ca/2024/11/12/richard-boddington-wraps-third-film-in-wickensburg-series/",
    productionDetails: ["Feature Film", "|", "Fantasy", "|", "Family"],
    imageSrc: "/images/projects/wickensburg.jpg", // got it
    imageAlt: "Still from Secrets of Wickensburg",
    description: `
      <p>First Assistant Director on <em>Secrets of Wickensburg</em>, a fantasy adventure production involving large setups and multi-department coordination.</p>
    `,
    isFeatured: false,
    homepageSummary: "First Assistant Director on fantasy adventure feature.",
  },
  {
    title: "Wait for U (Future, Drake, Tems)",
    timeframe: "May 2022",
    imdbpageUrl: "https://www.imdb.com/title/tt20114164/",
    pressUrl: "https://www.youtube.com/watch?v=rP09GUQFDFk",
    productionDetails: ["Music Video", "|", "Commercial Production"],
    imageSrc: "/images/projects/wait-for-u2.jpg", // got it
    imageAlt: "Still from Wait For U music video",
    description: `
      <p>Third Assistant Director on the music video for <em>Wait for U</em>. Contributed to a high-profile production with large-scale set coordination and fast-paced execution.</p>
    `,
    isFeatured: true,
    homepageSummary: "Assistant Director on major artist music video production.",
  },
  {
    title: "Eli Roth’s Haunted House: Trick VR Treat (2022)",
    timeframe: "October 2022",
    imdbpageUrl: "https://www.imdb.com/title/tt22984770/",
    pressUrl: "https://www.lightsailvr.com/trickvrtreat.php",
    productionDetails: ["VR Experience", "|", "Meta", "|", "Horror"],
    imageSrc: "/images/projects/trick-vr.jpg", //
    imageAlt: "Still from Trick VR Treat",
    description: `
      <p>Third Assistant Director on an immersive VR horror experience produced with Eli Roth. Expanded into interactive production formats beyond traditional film.</p>
    `,
    isFeatured: false,
    homepageSummary: "Assistant Director on immersive VR horror experience.",
  },
  // Add more projects here
];
