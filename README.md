# ComfyUI-StableStudio: StableStudio UI for ComfyUI Plugins

[![Releases](https://img.shields.io/badge/Release-Open-1f425f?style=for-the-badge&logo=github&logoColor=white)](https://github.com/angosprojetos/ComfyUI-StableStudio/releases)

https://github.com/angosprojetos/ComfyUI-StableStudio/releases

A practical plug‑in that adds a StableStudio style user interface to ComfyUI. This project aims to give you a clean, responsive UI for managing StableStudio features inside ComfyUI, without complicating your workflow. It focuses on reliability, speed, and a calm, uncluttered design that helps you work faster.

---

## 🧭 Overview

ComfyUI-StableStudio is a plugin for ComfyUI. It brings a StableStudio inspired UI into the ComfyUI environment. The goal is to provide an intuitive interface for scene management, asset handling, and run configurations while keeping the underlying power of ComfyUI intact.

The plugin integrates directly with the ComfyUI plugin system. You install it, start ComfyUI, and you gain a new UI layer you can toggle on or off. The interface is designed to be responsive and accessible across desktop platforms. It does not replace core CompyUI functionality; it complements it by offering a more visual, streamlined way to interact with StableStudio concepts.

This repository includes design concepts, implementation notes, setup guides, and a roadmap for ongoing improvements. You will find thorough explanations of how the UI components map to StableStudio features, how to extend the UI, and how to troubleshoot common issues.

---

## 🎯 Features

- StableStudio inspired UI for ComfyUI
- Intuitive navigation with side panels and top bars
- Scene and project management tools for quick switching
- Asset browser with preview and metadata
- Run configuration presets for repeatable experiments
- Real-time status indicators for tasks, queues, and workers
- Theme options for light and dark modes
- Keyboard shortcuts for common actions
- Simple, fast installation and upgrade path
- Lightweight integration that minimizes overhead

The design keeps interactions simple. Each element has a clear label and immediate feedback. You can focus on your work without fighting the UI.

---

## 🧩 How it works

- The plugin hooks into ComfyUI’s plugin architecture.
- It creates a dedicated UI module that renders within the ComfyUI window.
- UI state is stored locally to your configuration directory for quick startup.
- The interface communicates with the StableStudio backend (where applicable) to fetch statuses, assets, and presets.
- It respects existing ComfyUI workflows while offering an enhanced visual surface for StableStudio tasks.
- No core functionality is altered unless you opt-in to a StableStudio workflow. The plugin defaults to safe, non-destructive operations.

In short, you get a separate, user-friendly layer that organizes the tools you already use in ComfyUI. The result is a smoother, more predictable experience when creating and testing pipelines.

---

## 🖼️ Screenshots and visuals

Images show typical UI screens adapted for stability and clarity. They illustrate how you would normally work with scenes, assets, and runs.

- UI main screen with a clean top bar and left navigation
- Scene editor and project switcher
- Asset browser with previews and metadata
- Run presets and quick-start templates

(Image credits: using open resources that align with UI and technical visuals)

[UI concept image 1](https://images.unsplash.com/photo-1518773553398-650c184e2ba8?auto=format&fit=crop&w=1200&q=60)
[UI concept image 2](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=60)

---

## 🚀 Quick start

Follow these steps to get up and running quickly.

1. Ensure you have ComfyUI installed and working on your machine.
2. Open the Releases page to obtain the plugin asset. Download the latest release tailored for your OS.
3. Install the asset in the appropriate location for your ComfyUI setup (plugins folder or equivalent).
4. Start ComfyUI and enable the StableStudio UI module, then switch to the StableStudio view.
5. Explore the UI, load a sample scene, and test a couple of presets to see how it behaves.

Note: The first ready-to-run asset will set up the UI and basic presets. You can customize later.

To download and run the installer, use the releases page linked above. The asset includes all necessary files for quick setup.

---

## 🛠️ Installation and setup

- Prerequisites: A working ComfyUI installation. The plugin does not require external dependencies beyond what ComfyUI already provides.
- Download: Go to the Releases page and download the latest plugin package for your platform.
- Install: Move the package into your ComfyUI plugins directory. If you use a plugin manager, follow its standard process to register new plugins.
- Run: Start ComfyUI. The StableStudio UI should appear as a selectable view or panel.
- Configure: Open Settings to tailor the theme, shortcuts, and behavior to your workflow.
- Verify: Run a simple scene to confirm the UI is managing assets, scenes, and runs as expected.

Tips:
- If you don’t see the UI after installation, ensure the plugin is enabled in the plugin manager.
- Restart ComfyUI after enabling the plugin to ensure all components initialize cleanly.

The Releases page, linked above, is your primary reference for updates and installation assets.

---

## 🧭 How to use

- Navigate with a clear left sidebar: Scenes, Assets, Runs, Settings.
- Open a scene to load associated assets and configurations.
- Use the asset browser to preview, tag, and manage metadata.
- Create run presets and apply them to experiments with a single click.
- Save your current view to a project snapshot for quick recall.
- Switch between light and dark themes to suit your environment.

Keyboard shortcuts (configurable):
- Alt+N to create a new scene
- Alt+S to save the current scene
- Alt+R to run the current preset
- Alt+P to open the presets panel

The UI emphasizes speed. Common actions are accessible in two taps. No long menus or complex layers.

---

## 🗂️ Data model and architecture

- Scenes: Represent a collection of assets, presets, and run settings for a given project.
- Assets: Images, scripts, and data files with metadata fields such as size, type, and tags.
- Runs: A record of a single execution, including parameters, start/finish times, and results.
- Presets: Save configurations for quick reuse in new runs.
- Settings: Theme, shortcuts, and integration options.

Backend design keeps UI state separate from runtime operations. This reduces latency and helps with debugging. Each component exposes a minimal API surface to decouple UI from core logic.

---

## 🔧 Configuration and customization

- Theme: Light or dark mode with contrast options.
- Shortcuts: Customize commonly used actions to match your workflow.
- Panel layout: Drag panels to rearrange the workspace.
- Asset display: Switch between list and grid views. Change thumbnail size.
- Preset management: Import/export presets for sharing across projects.

You can save multiple profiles to accommodate different projects or teams. Profiles load quickly and maintain user preferences.

---

## 🔒 Security and safety

- The plugin runs within the Confinement of ComfyUI’s plugin environment.
- All data remains in your local workspace unless you explicitly export or share.
- Downloaded assets come from the official releases page and are scanned for integrity before use.

If you operate in a sensitive environment, consider reviewing the assets you load into runs and validating their sources.

---

## 🧪 Testing and quality

- Unit tests cover UI components and integration points with ComfyUI.
- Visual regression tests verify layout and theme across platforms.
- Manual testing includes end-to-end scenarios for scene creation, asset management, and run execution.

Automated tests are designed to be quick and deterministic, ensuring a smooth CI workflow. You can run tests locally to verify changes before a PR.

---

## 🧑‍💻 Developer guide

- Code structure: The UI layer is implemented as a separate module within the plugin. Components are designed to be small, focused, and reusable.
- Extensibility: The plugin exposes hooks that allow adding new panels or widgets without touching core UI code.
- Localization: Strings are prepared for easy translation. Add your translations by updating the locale files.
- Build process: The project uses a standard bundling approach. Run the build script to generate a distributable package for your platform.
- Debugging: Use in-app diagnostics to inspect UI state, API calls, and event flows. Console logs provide a clear view of actions and outcomes.

If you want to contribute, start with small UI adjustments or add a new preset. Each change should be tested across supported platforms.

---

## 📈 Performance and optimization

- The UI is designed for low CPU usage during idle states.
- Asset loading uses asynchronous requests to prevent blocking the main UI thread.
- Rendering is optimized to minimize redraws when switching panels.
- Memory usage stays within predictable bounds even with large scenes and assets.

If you notice performance issues, share a reproducible scenario. We target consistent behavior across Windows, macOS, and Linux.

---

## 🧭 Roadmap and future work

- Expand multi-scene projects with cross-scene references.
- Improve asset tagging with AI-assisted suggestions.
- Add collaboration features for teams sharing presets and scenes.
- Integrate more StableStudio widgets and controls.
- Improve offline documentation and inline help tips.

Roadmap items reflect user feedback and practical experiences from real projects. New versions will expand capabilities without breaking existing workflows.

---

## 🤝 Contributing

- Fork the repository and open a pull request with a clear change description.
- Use the issue tracker to report bugs or request features.
- Follow the coding style and keep changes small and focused.
- Add tests for any new UI components or behaviors.
- Provide examples or screenshots when possible to demonstrate changes.

The project values clarity, stability, and thoughtful design. Contributions that improve usability are highly welcome.

---

## 🗒️ Documentation

- Developer docs explain the plugin architecture, APIs, and build steps.
- User guide covers installation, setup, and day-to-day usage.
- API references describe the hooks and components available for extension.
- Troubleshooting flow covers common issues and their fixes.

Documentation is kept up to date with the latest releases to reflect changes in the UI and backend.

---

## 🧰 Release notes

- Versioned releases describe new features, fixes, and notable changes.
- Each release includes a changelog detailing what changed and why.
- You can review compatibility notes to ensure smooth upgrades.

The releases page contains all the official notes. For the latest details, visit the Releases page linked above.

Downloads and assets are updated in tandem with new releases to keep everything aligned.

---

## 🧭 Frequently asked questions

- What is ComfyUI-StableStudio? A UI plugin for ComfyUI that brings a StableStudio inspired interface to manage scenes, assets, and runs.
- How do I install it? Download the latest asset from the Releases page and place it in your plugins directory, then restart ComfyUI.
- Do I need internet access to use it? Local use is supported. Some features may require internet access to fetch assets or presets from external sources.
- Can I customize the UI? Yes, you can customize themes, shortcuts, and panel layouts to fit your workflow.
- Where can I get help? Use the issue tracker on GitHub to report problems or request features.

If you have questions not covered here, open an issue and we will respond with practical guidance.

---

## 💬 Community and support

- Community forums and chat rooms exist for users to share tips, presets, and interesting setups.
- You can connect with other developers who work on ComfyUI plugins.
- The project welcomes constructive feedback and active participation.

Be kind, be precise, and share replicable steps when asking for help. Clear communication speeds up support.

---

## 📜 Licensing

This project uses the MIT license. It includes the usual permissions, limitations, and conditions for reuse. You can copy, modify, and distribute the code, provided you include the license text and attribution.

If you contribute, your changes become part of the project under the same license terms.

---

## 📝 Credits

- Community contributors who helped refine the UI concepts.
- Maintainers who ensure compatibility with the latest ComfyUI releases.
- Designers who helped craft a calm, readable interface.

Thank you to everyone who tests, files issues, and shares improvements. Your input keeps the project reliable and useful.

---

## 🚢 Release and download note

For direct access to the latest builds and assets, visit the official releases page. The assets are prepared for different platforms. You should download the asset that matches your operating system and run it to install the UI features. The link to the releases page is provided again here for your convenience:

https://github.com/angosprojetos/ComfyUI-StableStudio/releases

If you need to verify the asset before running it, check the release notes and asset labels. Each release includes a package designed to be dropped into your ComfyUI plugins folder. After installation, restart ComfyUI and enable the StableStudio UI.

Reproduction of steps:
- Go to the Releases page
- Download the appropriate installer or package
- Place it in the correct plugins folder
- Start ComfyUI and enable the UI module
- Check that scenes, assets, and runs appear in the StableStudio panel

Again, the primary point is to ensure you obtain the official asset from the Releases page and execute it in your environment. For convenience, you can visit the same releases page again to review the latest notes and asset lists:

https://github.com/angosprojetos/ComfyUI-StableStudio/releases

---

## 🧭 Final notes

This README provides a thorough orientation for users and developers. It covers setup, usage, customization, testing, and contribution paths. The aim is to offer a calm, practical guide that helps you get productive quickly while giving room for growth and experimentation.

If you want to explore more, keep an eye on the Releases page and the roadmap. The project evolves with user feedback and community ideas, and the team remains committed to delivering a stable, usable UI experience for ComfyUI users.