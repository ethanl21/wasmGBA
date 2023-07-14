# wasmGBA

[![build workflow status](https://img.shields.io/github/actions/workflow/status/ethanl21/wasmgba/deploy-pages.yml)](https://github.com/ethanl21/wasmGBA/actions/workflows/deploy-pages.yml)
[![lint workflow status](https://img.shields.io/github/actions/workflow/status/ethanl21/wasmgba/lint.yml?label=lint)](https://github.com/ethanl21/wasmGBA/actions/workflows/lint.yml)
[![badge linking to storybook](https://img.shields.io/badge/Storybook-ff4785?logo=storybook&logoColor=white&labelColor=gray&color=ff4785)](https://main--64af9d812dc042a1d4205e5f.chromatic.com)

(TODO insert screenshot)
wasmGBA is a web-based frontend for [mGBA](https://github.com/mgba-emu/mgba). It is a static Single Page App that plays user-provided Gameboy, Gameboy Color, and Gameboy Advance ROMs.

## Notice

_No ROMs are provided with wasmGBA. Users must supply their own backups of their games to use wasmGBA. No files (including ROMs, save files, and cheat files) are uploaded to a server, all operation is perfomed client-side._

## (planned) Features

- [ ] Import GB, GBC, GBA ROMs
- [ ] Save files
  - [ ] Upload and import save files
  - [ ] Export save files locally
- [ ] Save states
  - [ ] Create save states
  - [ ] Load save states
  - [ ] Upload and import save states
  - [ ] Export save states locally
- [ ] Cheats
  - [ ] Upload and import .cheats files
  - [ ] Export .cheats files locally
  - [ ] Add and remove cheats from active .cheats file
  - [ ] Activate and Deactivate cheats from active .cheats file
- [ ] Gameplay
  - [ ] Intro animation
  - [ ] Pause and unpause
  - [ ] Fast-forward
  - [ ] Audio
    - [ ] Change volume
    - [ ] Mute and Unmute
- [ ] Input
  - [ ] Keyboard input handling
  - [ ] Controller input handling
  - [ ] View input map
  - [ ] Rebind input map
- [ ] Offline PWA
- [ ] Dark Mode

## Usage

A demo tracking the `main` branch is hosted via [GitHub Pages](https://ethanl21.github.io/wasmGBA/).

### Building

wasmGBA is a React SPA built using Vite. To run wasmGBA locally, clone the repository and run the following in the root directory:

```
pnpm i
pnpm run dev
```

To build for production:

```
pnpm i
pnpm run lint
pnpm run build
```

The resulting files will be located in `.dist/`.

### Copyright

wasmGBA is distributed under the MIT License. Additionally, the following open source software is used:
| Name | License type | Link |
| :------------------------ | :----------- | :--------------------------------------------------- |
| mgba | MPL-2.0 | https://github.com/thenick775/mgba/tree/feature/wasm |
| lucide-react | ISC | https://github.com/lucide-icons/lucide.git |
| react | MIT | https://github.com/facebook/react.git |
| tailwindcss | MIT | https://github.com/tailwindlabs/tailwindcss |
| shadcn/ui | MIT | https://github.com/shadcn/ui |
| vite | MIT | https://github.com/vitejs/vite.git |

#### Other
- [Game Boy Advance Intro - After Effects Template Type Beat](https://www.youtube.com/watch?v=Hjax6bX2x2Q) by Cyranek, used for the intro animation [(archive.org 📸)](https://web.archive.org/web/20230418164951/https://www.youtube.com/watch?v=Hjax6bX2x2Q)
