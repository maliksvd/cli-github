import { consola } from "consola";
import { defineCommand } from "citty";
import { $fetch } from "ofetch";
import "dotenv/config";

export default defineCommand({
  meta: {
    name: "info",
    description: "get some info about your github account",
  },
  async run() {
    try {
      const response = await $fetch("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "cli-github",
          "Content-Type": "application/json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      consola.success("User Information:", response.name);
      consola.info("Username:", response.login);
      consola.info("Email:", response.email);
      consola.info("Avatar:", response.avatar_url);
      consola.info("Followers:", response.followers);
      consola.info("Following:", response.following);
    } catch (error) {
      consola.warn("Error fetching user information:", error);
    }
  },
});
