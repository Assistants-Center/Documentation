import{_ as s,c as a,o as n,e}from"./app.c5917f2e.js";const C=JSON.parse('{"title":"Dashboard Events","description":"","frontmatter":{},"headers":[{"level":2,"title":"User Logged In","slug":"user-logged-in","link":"#user-logged-in","children":[]},{"level":2,"title":"Website Viewed","slug":"website-viewed","link":"#website-viewed","children":[]},{"level":2,"title":"Guild Settings Updated","slug":"guild-settings-updated","link":"#guild-settings-updated","children":[]}],"relativePath":"discord-dashboard/v2/methods/dashboard-events.md","lastUpdated":1669483744000}'),l={name:"discord-dashboard/v2/methods/dashboard-events.md"},o=e(`<h1 id="dashboard-events" tabindex="-1">Dashboard Events <a class="header-anchor" href="#dashboard-events" aria-hidden="true">#</a></h1><p>The Dashboard class allows you to listen for events in the Dashboard. For example, you can know when and what user has logged into the Dashboard and what settings they have changed in Bots.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Dashboard</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DBDEvents</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(EVENT_TYPE</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">//</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="user-logged-in" tabindex="-1">User Logged In <a class="header-anchor" href="#user-logged-in" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Dashboard</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DBDEvents</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">userLoggedIn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">//</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><strong>Data returned</strong>: <code>&lt;DiscordOAuthUserResponse&gt;</code> Object.</li></ul><h2 id="website-viewed" tabindex="-1">Website Viewed <a class="header-anchor" href="#website-viewed" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Dashboard</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DBDEvents</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">websiteView</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">//</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><strong>Data returned</strong>: <code>&lt;UserSessionObject&gt;</code> if user is logged in or <code>{loggedIn: false}</code> if not.</li></ul><h2 id="guild-settings-updated" tabindex="-1">Guild Settings Updated <a class="header-anchor" href="#guild-settings-updated" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Dashboard</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DBDEvents</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">guildSettingsUpdated</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">//</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,11),p=[o];function t(r,c,d,D,i,y){return n(),a("div",null,p)}const A=s(l,[["render",t]]);export{C as __pageData,A as default};