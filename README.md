# Svelte Visualization App

## Overview

An interactive visualisation demo built with Svelte, Vite, Tailwind CSS, Vis.js, and Chart.js.

The application demonstrates several ways to represent information visually, including network relationships, hierarchical structures, mathematical functions, and an illustrative stock-price chart.

## Visualisations

- **Network graph:** nodes and edges displayed using Vis.js.
- **Hierarchical tree:** a tree layout for representing parent-child relationships.
- **Function chart:** visualises the function f(x) = 2·sin(x) + 1.5·cos(x/2).
- **Stock chart:** demonstrates a price series using example data; it should not be interpreted as live market data.

## Technology Stack

- [Svelte](https://svelte.dev/) — user interface
- [Vite](https://vitejs.dev/) — development and build tooling
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [Vis.js / vis-network](https://visjs.github.io/vis-network/docs/network/) — network and hierarchical visualisation
- [Chart.js](https://www.chartjs.org/) — charts

## Relevance to Data Analysis

Visualisation helps communicate patterns and relationships that may be difficult to recognise in raw tables. This project demonstrates chart and graph presentation techniques; the stock chart is illustrative rather than a verified financial analysis.

## Run Locally

The project defines the following npm scripts:

    npm install
    npm run dev

For a production build, use npm run build; npm run preview can preview the generated build.

## Further Development

Possible improvements include documenting the data behind each visualisation, adding clearer chart interpretation notes, and distinguishing example data from real-world sources.
