# Sample: Vite Dist → Orbiter (IPFS)

Sample of [Vite](https://vite.dev/) derived `/dist` asset output not rendering when deployed to [Orbiter](https://app.orbiter.host/).

- Deployment: https://phil.orbiter.website
- Sample (generated from): 
  - https://jsr.io/@sys/driver-vite
  - https://jsr.io/@sys/driver-vitepress



## Problem Description
Bundled assets from a Vite build process, when copied into an Orbiter site deployment, successfully serve files however it appears that `.js` files are being delivered with a content-type of `text/html` rather than `application/json`.

![image](https://github.com/user-attachments/assets/7c2c5694-feea-43e6-9744-3407992038c2)
