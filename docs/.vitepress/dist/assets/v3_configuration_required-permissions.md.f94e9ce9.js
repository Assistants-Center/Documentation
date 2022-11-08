import{_ as p,c as e,a as l,b as s,d as a,e as o,o as A,r as c}from"./app.56853059.js";const I=JSON.parse('{"title":"Required Permissions","description":"","frontmatter":{},"headers":[{"level":2,"title":"Permissions Available","slug":"permissions-available","link":"#permissions-available","children":[]}],"relativePath":"v3/configuration/required-permissions.md"}'),i={name:"v3/configuration/required-permissions.md"},r={id:"required-permissions",tabindex:"-1"},t=l("a",{class:"header-anchor",href:"#required-permissions","aria-hidden":"true"},"#",-1),C=o(`<p>With required permissions you can tell the Dashboard which permissions on a guild Discord user should have to view and edit guild&#39;s settings.</p><p>If you want to change single option&#39;s display and/or edit permissions, you should use <code>shouldBeDisplayed</code> and <code>permissionsValidate</code> functions in option data.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> Dashboard</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> DiscordPermissions </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">discord-dashboard</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Dashboard</span><span style="color:#A6ACCD;">(</span><span style="color:#676E95;">/*ENGINE*/</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setRequiredPermissions</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">        DiscordPermissions</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ADMINISTRATOR</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        DiscordPermissions</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MANAGE_NICKNAMES</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ])</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"></span></code></pre></div><h2 id="permissions-available" tabindex="-1">Permissions Available <a class="header-anchor" href="#permissions-available" aria-hidden="true">#</a></h2><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">CREATE_INSTANT_INVITE</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,5);function D(E,y,_,d,S,N){const n=c("Badge");return A(),e("div",null,[l("h1",r,[s("Required Permissions "),a(n,{type:"info",text:"OPTIONAL"}),s(),a(n,{type:"tip",text:"DEFAULT ADMINISTRATOR"}),s(),t]),C])}const M=p(i,[["render",D]]);export{I as __pageData,M as default};
