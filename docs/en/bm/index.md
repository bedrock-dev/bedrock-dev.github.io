---
layout: bm-home
title: BedrockMap — Map editor for Minecraft Bedrock Edition
description: Open-source, high-performance map editor for Minecraft Bedrock worlds — terrain, entities, biomes, NBT and mcstructure.
hero:
  name: BedrockMap
  tagline: Map editor for Minecraft Bedrock Edition
  description: An open-source map editor built with Qt6 and C++17. It reads and writes LevelDB world saves directly, letting you browse, inspect and edit every chunk of a Bedrock world.
  note: Supports Bedrock 1.2 – 1.21 worlds · No installer, just unpack and run
  download: https://github.com/bedrock-dev/BedrockMap/releases/latest
  ctaTitle: Start editing your world
  ctaText: Download the latest release and open your world folder to see the whole map.
# Carousel — append entries to add slides; each supports src and an optional caption
screenshots:
  - src: /imgs/bm-sample.png
    caption: Map overview — terrain, biomes and entities overlaid
features:
  - title: World browsing
    details: Open and explore every chunk of the Overworld, Nether, The End and custom dimensions.
  - title: Terrain visualization
    details: Biome maps and terrain overlays, with configurable rendering filters.
  - title: Chunk editor
    details: Select, inspect and delete chunks, and visualize the entities, block entities and pending ticks inside them.
  - title: Chunk copy & paste
    details: Copy a selected region into another world — even across saves — with interactive placement.
  - title: NBT editor
    details: View and modify NBT data, including level.dat, player inventories, villages, map items and more.
  - title: mcstructure support
    details: Browse and edit .mcstructure files with a 3D voxel preview, export selections as mcstructure or GLB, or import structures into a world.
mouse:
  - keys: Left drag
    action: Pan the map
  - keys: Right click
    action: Open the context menu
  - keys: Middle drag
    action: Select a region
  - keys: Scroll
    action: Zoom
shortcuts:
  - keys: Ctrl+O
    action: Open a world
  - keys: Ctrl+Shift+O
    action: Open a file (.mcstructure / .nbt / .nbts)
  - keys: Ctrl+C / Ctrl+V
    action: Copy / paste the selection (works across worlds)
  - keys: Ctrl+E / Ctrl+I
    action: Export / import the selection
  - keys: Ctrl+D
    action: Delete selected chunks
  - keys: Ctrl+H
    action: Open the 3D voxel view
  - keys: Ctrl+G
    action: Go to coordinates
  - keys: Alt+1 – Alt+4
    action: Switch dimension (Overworld / Nether / The End / custom)
---
