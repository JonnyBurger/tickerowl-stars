import {
  App,
  AppInfo,
  AppSlide,
  SlideData,
  SlideMaker,
} from "tickerowl-app-base";

export default class ProductHuntApp implements App {
  getInfo(): AppInfo {
    return {
      id: "github-stars",
      name: "GitHub Stars",
      description: "Show the GitHub stars of a repo",
      version: 1,
      author: "Jonny Burger",
      authorXUrl: "https://x.com/@JNYBGR",
      authorGitHubUrl: "https://github.com/JonnyBurger",
    };
  }

  getSlides(): Record<string, AppSlide> {
    return {
      github: {
        title: "GitHub Stars",
        description: "Display the GitHub stars of a repo",
        inputs: {
          org: {
            type: "text",
            label: "Owner",
            required: true,
            placeholder: "Organization or username",
          },
          repo: {
            type: "text",
            label: "Repo",
            required: true,
            placeholder: "Repository name",
          },
        },
        getData: async ({ inputs, store }) => {
          const org = inputs["org"];
          const repo = inputs["repo"];

          const slides: SlideData[] = [];

          return {
            slides: [
              ...slides,
              SlideMaker.keyValue({
                key: "GitHub",
                value: "20000",
              }),
            ],
          };
        },
      },
    };
  }
}
