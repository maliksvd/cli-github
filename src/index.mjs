#!/usr/bin/env node

import { defineCommand, runMain } from "citty";

import info from "./commands/info.mjs";

const main = defineCommand({
  meta: {
    name: "CLI - GitHub",
    version: "1.0.0",
    description: "a simple cli to get some info from your github account",
  },

  subCommands: [info],
});

runMain(main);
