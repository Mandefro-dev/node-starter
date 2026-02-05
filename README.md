<div align="center">
  <img src="https://img.icons8.com/fluency/96/000000/node-js.png" alt="nodex-logo" width="80" />

  <h1>🚀 nodex</h1>

  <p>
    <b>The Ultimate Node.js Backend Scaffolder</b><br />
    <i>Stop writing boilerplate. Start building features.</i>
  </p>

  <div>
    <img src="https://img.shields.io/npm/v/@mandedev/nodex?style=flat-square&color=CB3837&logo=npm" alt="npm version" />
    <img src="https://img.shields.io/badge/TypeScript-Ready-3178C6?style=flat-square&logo=typescript" alt="typescript" />
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="license" />
    <img src="https://img.shields.io/badge/Maintained%3F-yes-brightgreen.svg?style=flat-square" alt="maintained" />
  </div>

  <br />

  <p>
    <a href="#-installation">Installation</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-magic-commands">Magic Commands</a> •
    <a href="#-roadmap">Roadmap</a>
  </p>
</div>

<hr />

<h3>⚡ Why nodex?</h3>
<p>
  Setting up a backend usually means folder structure headaches, repeated boilerplate, and manual configs. 
  <b>nodex</b> automates the mundane so you can focus on your business logic.
</p>

<table>
  <tr>
    <td><b>🏗️ MVC Architecture</b></td>
    <td>Clean separation of Controllers, Services, Models, and Routes.</td>
  </tr>
  <tr>
    <td><b>📘 TypeScript First</b></td>
    <td>Strict typing and best-practice TS configs out of the box.</td>
  </tr>
  <tr>
    <td><b>✨ Resource Generator</b></td>
    <td>Generate full CRUD resources with a single command.</td>
  </tr>
  <tr>
    <td><b>📝 Auto Documentation</b></td>
    <td>Swagger & Postman docs generated directly from your routes.</td>
  </tr>
</table>

<hr />

<h3 id="-installation">📦 Installation</h3>

<p>Recommended (Run instantly via npx):</p>
<pre><code>npx @mandedev/nodex &lt;project-name&gt;</code></pre>

<p>Optional (Global Install):</p>
<pre><code>npm install -g @mandedev/nodex</code></pre>

<hr />

<h3 id="-quick-start">🚀 Quick Start</h3>

<p><b>1. Initialize your project</b></p>
<pre><code>npx @mandedev/nodex my-awesome-api</code></pre>

<p><b>2. Start the engine</b></p>
<pre><code>cd my-awesome-api
npm run dev</code></pre>

<blockquote>
  <p>💡 Server runs at <code>http://localhost:3000</code> with Hot Reloading enabled.</p>
</blockquote>

<hr />

<h3 id="-magic-commands">🛠️ Magic Commands</h3>

<h4>➕ Generate Resources</h4>
<p>Instantly scaffold a full feature module:</p>
<pre><code>nodex add product</code></pre>

<ul>
  <li>✅ <b>Controller:</b> <code>src/controllers/product.controller.ts</code></li>
  <li>✅ <b>Service:</b> <code>src/services/product.service.ts</code></li>
  <li>✅ <b>Model:</b> <code>src/models/product.model.ts</code></li>
  <li>✅ <b>Route:</b> <code>src/routes/product.routes.ts</code></li>
  <li>🪄 <b>Auto Injection:</b> Routes are automatically registered.</li>
</ul>

<h4>📚 Documentation</h4>
<pre><code>nodex doc</code></pre>
<p>Generates <code>swagger.json</code> and <code>postman_collection.json</code> in the <code>/docs</code> folder.</p>

<hr />

<h3 id="-roadmap">🗺️ Roadmap</h3>

<ul>
  <li>[x] <b>v1.0.0</b> – MVC scaffolding, TypeScript, MongoDB/Postgres</li>
  <li>[ ] <b>v1.1.0</b> – Resource generator (nodex add)</li>
  <li>[ ] <b>v1.2.0</b> – Frontend type sync (React / Vue)</li>
  <li>[ ] <b>v1.3.0</b> – Cloud deployment scripts</li>
</ul>

<hr />

<div align="center">
  <p>Built with ❤️ by <b>mandedev</b></p>
  <p>
    <a href="https://github.com/mandedev/nodex/issues">Report Bug</a> •
    <a href="https://github.com/mandedev/nodex/issues">Request Feature</a>
  </p>
</div>
