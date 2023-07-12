# wasmGBA
![build workflow status](https://img.shields.io/github/actions/workflow/status/ethanl21/wasmgba/deploy.yml)
![lint workflow status](https://img.shields.io/github/actions/workflow/status/ethanl21/wasmgba/lint.yml)

(TODO insert screenshot)
wasmGBA is a web-based frontend for [mGBA](https://github.com/mgba-emu/mgba). It is a static Single Page App that plays user-provided Gameboy, Gameboy Color, and Gameboy Advance ROMs.
## Notice
*No ROMs are provided with wasmGBA. Users must supply their own backups of their games to use wasmGBA. No files (including ROMs, save files, and cheat files) are uploaded to a server, all operation is perfomed client-side.*
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
## Usage
A demo tracking this repository's `main` branch is hosted via [GitHub Pages](https://ethanl21.github.io/wasmGBA/).
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
| Name                      | License type | Link                                                 |
| :------------------------ | :----------- | :--------------------------------------------------- |
| mgba                      | MPL-2.0      | https://github.com/thenick775/mgba/tree/feature/wasm |
| lucide-react              | ISC          | https://github.com/lucide-icons/lucide.git           |
| react                     | MIT          | https://github.com/facebook/react.git                |
| tailwindcss               | MIT          | https://github.com/tailwindlabs/tailwindcss          |
| shadcn/ui                 | MIT          | https://github.com/shadcn/ui                         |
| vite                             | MIT          | https://github.com/vitejs/vite.git                             |

