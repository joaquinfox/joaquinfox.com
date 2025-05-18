# joaquinfox.com

I built this website and host it from a home server. This walkthrough is for anyone interested in doing something similar.

## Building the Site

### Motivation

Here are my reasons for building and hosting this site:

- Web technology is foundational to many tech stacks, and being able to build and host a website is super useful for anyone working in digital tech.
- I think the web would be a better place if more people built their own websites.
- I like to write, and this site gives me a venue for that.
- It’s a way to show off one’s chops.

### Overview

This is a static webpage built with [Eleventy](https://www.11ty.dev/) and hosted on a home server, behind a [Cloudflare](https://www.cloudflare.com/) tunnel. It takes Markdown files and converts them into HTML, the universal language of the web. It also applies templates to my posts, so everything stays consistent.

### File Structure

- `_includes/`
  - `layout.njk` – Eleventy's convention for reusable templates. This uses [Nunjucks](https://mozilla.github.io/nunjucks/), the templating language that gives Eleventy its magic.
- `assets/` – Stores images.
- `blog/` – Contains the actual posts, written in Markdown.
- `node_modules/` – Holds packages required by Eleventy, based on what's defined in `package.json`.
- `.eleventy.js` – Configuration file for customizing markdown parsing, content structure, date formats, and image handling.
- `.gitignore` – Lists files/folders not to push to GitHub, like the output folder that holds static HTML.
- `index.html` – Defines the basic layout of the site.
- `package.json` – Declares dependencies for the project (e.g., latest version of [Node.js](https://nodejs.org/)).
- `package-lock.json` – Pins the exact versions of the dependencies used.
- `styles.css` – Controls visual styles.

### Function

The workflow:

1. I draft posts on Thursday mornings using LibreOffice on an offline laptop.
2. At home, I transcribe them into Markdown and place them in the `blog` folder.
3. Running `npm` rebuilds the site, triggering Eleventy to generate static HTML in the output folder.
4. I preview the site locally. If it looks good, I push updates to GitHub.
5. I SSH into my server, pull the latest version, and rebuild the site again.
6. Finally, I manually copy the generated HTML files to the directory served by [Nginx](https://nginx.org/).

## Hosting the Site

Hosting locally was harder than I expected—usefully so.

### Challenges

The main obstacle: my ISP blocks several ports on residential accounts. After testing various workarounds, I landed on setting up a [Cloudflare](https://www.cloudflare.com/) reverse proxy to tunnel traffic directly to my server, bypassing the ISP restrictions.

### Hosting Infrastructure

Components of my hosting setup:

- A headless Ubuntu server
- [Nginx](https://nginx.org/) as the web server
- [Cloudflare](https://www.cloudflare.com/) to get around ISP limitations

### More on Cloudflare

This was new to me, but it’s impressive. Cloudflare enables a secure tunnel from their reverse proxy to my home system, helping bypass ISP blocks. It also provides:

- A dashboard for managing DNS records
- Obfuscation of my server’s public IP
- No need for port forwarding, improving network security
- Encrypted tunnel between Cloudflare and my server
- SSL certificate handling for HTTPS
- Excellent web interface for metrics and config

The setup required some trial and error, but Cloudflare’s documentation is top-tier.

## Conclusion

Building and hosting your own website might be impractical—but it's educational. It teaches you a lot about web mechanics and networking. I recommend it.

Got thoughts or questions? Reach out: [contact@joaquinfox.com](mailto:contact@joaquinfox.com)
