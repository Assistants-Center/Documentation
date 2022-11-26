import{_ as s,c as n,o as a,e as p}from"./app.c5917f2e.js";const y=JSON.parse('{"title":"Required Permissions","description":"","frontmatter":{},"headers":[],"relativePath":"discord-dashboard/v2/optional-config/required-permissions.md","lastUpdated":1669483744000}'),l={name:"discord-dashboard/v2/optional-config/required-permissions.md"},o=p(`<h1 id="required-permissions" tabindex="-1">Required Permissions <a class="header-anchor" href="#required-permissions" aria-hidden="true">#</a></h1><p>You can restrict the availability of the Dashboard to only users with reassurance data on the server. This is done with this option.</p><p>It must be an Array of <code>DISCORD_FLAGS.Permissions</code> that you want to require users to have in order to allow them to use the Dashboard.</p><p><code>DISCORD_FLAGS.Permissions</code> is accesible from:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">DBD</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DISCORD_FLAGS</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Permissions</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PERMISSION_NAME</span></span>
<span class="line"></span></code></pre></div><p>Discord-Dashboard allows to use multiple permissions required:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">requiredPermissions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    DBD</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DISCORD_FLAGS</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Permissions</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MANAGE_GUILD</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    DBD</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DISCORD_FLAGS</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Permissions</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">BAN_MEMBERS</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><p><code>PERMISSION_NAME</code>s available:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">CREATE_INSTANT_INVITE</span></span>
<span class="line"><span style="color:#A6ACCD;">KICK_MEMBERS</span></span>
<span class="line"><span style="color:#A6ACCD;">BAN_MEMBERS</span></span>
<span class="line"><span style="color:#A6ACCD;">ADMINISTRATOR</span></span>
<span class="line"><span style="color:#A6ACCD;">MANAGE_CHANNELS</span></span>
<span class="line"><span style="color:#A6ACCD;">MANAGE_GUILD</span></span>
<span class="line"><span style="color:#A6ACCD;">ADD_REACTIONS</span></span>
<span class="line"><span style="color:#A6ACCD;">VIEW_AUDIT_LOG</span></span>
<span class="line"><span style="color:#A6ACCD;">PRIORITY_SPEAKER</span></span>
<span class="line"><span style="color:#A6ACCD;">STREAM</span></span>
<span class="line"><span style="color:#A6ACCD;">VIEW_CHANNEL</span></span>
<span class="line"><span style="color:#A6ACCD;">SEND_MESSAGES</span></span>
<span class="line"><span style="color:#A6ACCD;">SEND_TTS_MESSAGES</span></span>
<span class="line"><span style="color:#A6ACCD;">MANAGE_MESSAGES</span></span>
<span class="line"><span style="color:#A6ACCD;">EMBED_LINKS</span></span>
<span class="line"><span style="color:#A6ACCD;">ATTACH_FILES</span></span>
<span class="line"><span style="color:#A6ACCD;">READ_MESSAGE_HISTORY</span></span>
<span class="line"><span style="color:#A6ACCD;">MENTION_EVERYONE</span></span>
<span class="line"><span style="color:#A6ACCD;">USE_EXTERNAL_EMOJIS</span></span>
<span class="line"><span style="color:#A6ACCD;">VIEW_GUILD_INSIGHTS</span></span>
<span class="line"><span style="color:#A6ACCD;">CONNECT</span></span>
<span class="line"><span style="color:#A6ACCD;">SPEAK</span></span>
<span class="line"><span style="color:#A6ACCD;">MUTE_MEMBERS</span></span>
<span class="line"><span style="color:#A6ACCD;">DEAFEN_MEMBERS</span></span>
<span class="line"><span style="color:#A6ACCD;">MOVE_MEMBERS</span></span>
<span class="line"><span style="color:#A6ACCD;">USE_VAD</span></span>
<span class="line"><span style="color:#A6ACCD;">CHANGE_NICKNAME</span></span>
<span class="line"><span style="color:#A6ACCD;">MANAGE_NICKNAMES</span></span>
<span class="line"><span style="color:#A6ACCD;">MANAGE_ROLES</span></span>
<span class="line"><span style="color:#A6ACCD;">MANAGE_WEBHOOKS</span></span>
<span class="line"><span style="color:#A6ACCD;">MANAGE_EMOJIS_AND_STICKERS</span></span>
<span class="line"><span style="color:#A6ACCD;">USE_APPLICATION_COMMANDS</span></span>
<span class="line"><span style="color:#A6ACCD;">REQUEST_TO_SPEAK</span></span>
<span class="line"><span style="color:#A6ACCD;">MANAGE_EVENTS</span></span>
<span class="line"><span style="color:#A6ACCD;">MANAGE_THREADS</span></span>
<span class="line"><span style="color:#A6ACCD;">CREATE_PUBLIC_THREADS</span></span>
<span class="line"><span style="color:#A6ACCD;">CREATE_PRIVATE_THREADS</span></span>
<span class="line"><span style="color:#A6ACCD;">USE_EXTERNAL_STICKERS</span></span>
<span class="line"><span style="color:#A6ACCD;">SEND_MESSAGES_IN_THREADS</span></span>
<span class="line"><span style="color:#A6ACCD;">START_EMBEDDED_ACTIVITIES</span></span>
<span class="line"><span style="color:#A6ACCD;">MODERATE_MEMBERS</span></span>
<span class="line"></span></code></pre></div><p>Each permission is described on <a href="https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags" target="_blank" rel="noreferrer">Discord OAuth2 Documentation</a>.</p><p><strong>Default value</strong>:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">requiredPermissions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [ DBD</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DISCORD_FLAGS</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Permissions</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MANAGE_GUILD ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span></code></pre></div>`,12),e=[o];function c(A,r,t,i,C,D){return a(),n("div",null,e)}const _=s(l,[["render",c]]);export{y as __pageData,_ as default};
