import{_ as s,c as a,o as n,e as o}from"./app.c5917f2e.js";const y=JSON.parse('{"title":"Join Guild After Authorization","description":"","frontmatter":{},"headers":[],"relativePath":"discord-dashboard/v2/optional-config/guild-after-authorization.md","lastUpdated":1669483744000}'),t={name:"discord-dashboard/v2/optional-config/guild-after-authorization.md"},e=o(`<h1 id="join-guild-after-authorization" tabindex="-1">Join Guild After Authorization <a class="header-anchor" href="#join-guild-after-authorization" aria-hidden="true">#</a></h1><p>Automatically add a user to your Discord Server where the bot is when they log into the Dashboard - yes, it&#39;s possible!</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">guildAfterAuthorization</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">use</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Boolean</span><span style="color:#89DDFF;">=</span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#FFCB6B;">guildId</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">String</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">...</span></span>
<span class="line"></span></code></pre></div>`,3),l=[e];function p(r,i,c,d,F,u){return n(),a("div",null,l)}const _=s(t,[["render",p]]);export{y as __pageData,_ as default};