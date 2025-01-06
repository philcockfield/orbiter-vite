# Sample: Vite → Orbiter (IPFS)

Sample of [Vite](https://vite.dev/) derived `/dist` asset bundles not rendering when deployed to [Orbiter](https://app.orbiter.host/).

- Sample deployment: https://phil.orbiter.website
- Sample source (generated from): 
  - [@sys/driver-vite](https://jsr.io/@sys/driver-vite)
  - [@sys/driver-vitepress](https://jsr.io/@sys/driver-vitepress)
  
- People:
  - [Justin](https://warpcast.com/polluterofminds)
  - [Steve](https://warpcast.com/stevedylandev.eth)
  - [Me (@pjc)](https://warpcast.com/pjc)



## Problem Description
Bundled assets from a Vite build process, when copied into an Orbiter site deployment, successfully serve files however it appears that `.js` files are being delivered with a content-type of `text/html` rather than `application/json`.

![image](https://github.com/user-attachments/assets/7c2c5694-feea-43e6-9744-3407992038c2)

Note: I have tried both dragging the root folder into Orbiter for upload, as well as selecting all the files and dragging them in individually as a set to the UI.  Both result in the described behavior.


## Reproduction

Included in this repo are two examples of built assets that when uploaded to Orbiter product the described `content-type` issue. 

One is a vanilla [Vite](https://vite.dev/) bundle using React, and the other is the product of a [VitePress](https://vitepress.dev/) (via Vite) bundle.

- [dist/vite-vanilla](dist/vite-vanilla/)
- [dist/vite-vitepress](dist/vite-vitepress/)

Both these distributions run fine locally when served via a simple HTTP server.

Each of the drivers interfaces are lightweight wrappers that pass-throughs to the underlying Vite commands of `dev`, `build`.



## Building from Source (Scaffold)
The VitePress example can be quickly reconstructed from source using it's template scaffolder.  
See documentation at https://jsr.io/@sys/driver-vitepress  
Runtime: [Deno](https://deno.com/)

```
deno run -A jsr:@sys/driver-vitepress/init
deno task build
```
↓  
produces → `./dist/*`

### Video Walkthrough
Screenshot video of running the above sequence:  
https://warpcast.com/pjc/0xe9736afe



<p>&nbsp;<p>

#### Screenshot: `sys.driver.vitepress` 

<img  alt="image" src="https://github.com/user-attachments/assets/84977210-62aa-487e-bb28-f3f84a40f0c9" />


#### Screenshot: `sys.driver.vite` 

<img  alt="image" src="https://github.com/user-attachments/assets/35b87a18-478b-4c09-9621-f3bcfb072701" />




---
### [MIT](/LICENCE)
