this["JST"] = this["JST"] || {};

this["JST"]["index"] = function anonymous(locals) {
jade.debug = [{ lineno: 1, filename: "app/templates/index.jade" }];
try {
var buf = [];
var locals_ = (locals || {}),copy = locals_.copy,env = locals_.env;jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
buf.push("<!DOCTYPE html>");
jade.debug.shift();
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
buf.push("<html lang=\"en\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
buf.push("<head>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
buf.push("<title>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = copy.site_title) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.shift();
buf.push("</title>");
jade.debug.shift();
jade.debug.unshift({ lineno: 5, filename: jade.debug[0].filename });
buf.push("<meta charset=\"utf-8\">");
jade.debug.shift();
jade.debug.unshift({ lineno: 6, filename: jade.debug[0].filename });
buf.push("<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">");
jade.debug.shift();
jade.debug.unshift({ lineno: 7, filename: jade.debug[0].filename });
buf.push("<meta name=\"viewport\" content=\"width=device-width,initial-scale=1, maximum-scale=1, user-scalable=no\">");
jade.debug.shift();
jade.debug.unshift({ lineno: 8, filename: jade.debug[0].filename });
buf.push("<link href=\"http://www5.mercedes-benz.com/media/assets/img/favicon.ico\" rel=\"icon\" type=\"image/x-icon\">");
jade.debug.shift();
jade.debug.unshift({ lineno: 9, filename: jade.debug[0].filename });
buf.push("<link rel=\"shortcut icon\" href=\"http://www5.mercedes-benz.com/media/assets/img/favicon.ico\">");
jade.debug.shift();
jade.debug.unshift({ lineno: 10, filename: jade.debug[0].filename });
buf.push("<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">");
jade.debug.shift();
jade.debug.unshift({ lineno: 11, filename: jade.debug[0].filename });
buf.push("<meta name=\"mobile-web-app-capable\" content=\"yes\">");
jade.debug.shift();
jade.debug.unshift({ lineno: 12, filename: jade.debug[0].filename });
buf.push("<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"default\">");
jade.debug.shift();
jade.debug.unshift({ lineno: 13, filename: jade.debug[0].filename });
buf.push("<link rel=\"apple-touch-icon\" href=\"assets/imgs/exo-logo_120.png\">");
jade.debug.shift();
jade.debug.unshift({ lineno: 14, filename: jade.debug[0].filename });
buf.push("<meta name=\"description\" content=\"project scaffolding\">");
jade.debug.shift();
jade.debug.unshift({ lineno: 15, filename: jade.debug[0].filename });
buf.push("<meta name=\"keywords\" content=\"scaffolding, web-app, backbone, layoutmanager, jquery, bower, yeoman, grunt, jade, less\">");
jade.debug.shift();
jade.debug.unshift({ lineno: 16, filename: jade.debug[0].filename });
buf.push("<meta name=\"author\" content=\"posit labs\">");
jade.debug.shift();
jade.debug.unshift({ lineno: 17, filename: jade.debug[0].filename });
buf.push("<meta name=\"copyright\" content=\"©2013\">");
jade.debug.shift();
jade.debug.unshift({ lineno: 18, filename: jade.debug[0].filename });
buf.push("<meta property=\"og:url\" content=\"http://github.com/positlabs/exo-skeleton\">");
jade.debug.shift();
jade.debug.unshift({ lineno: 19, filename: jade.debug[0].filename });
buf.push("<meta property=\"og:title\" content=\"exo-skeleton\">");
jade.debug.shift();
jade.debug.unshift({ lineno: 20, filename: jade.debug[0].filename });
buf.push("<meta property=\"og:image\" content=\"https://raw.github.com/positlabs/exo-skeleton/master/app/assets/imgs/exo-logo_120.png\">");
jade.debug.shift();
jade.debug.unshift({ lineno: 21, filename: jade.debug[0].filename });
buf.push("<meta property=\"og:image:type\" content=\"image/png\">");
jade.debug.shift();
jade.debug.unshift({ lineno: 22, filename: jade.debug[0].filename });
buf.push("<meta property=\"og:description\" content=\"\">");
jade.debug.shift();
jade.debug.unshift({ lineno: 23, filename: jade.debug[0].filename });
buf.push("<meta property=\"twitter:title\" content=\"exo-skeleton\">");
jade.debug.shift();
jade.debug.unshift({ lineno: 24, filename: jade.debug[0].filename });
buf.push("<meta property=\"twitter:image\" content=\"https://raw.github.com/positlabs/exo-skeleton/master/app/assets/imgs/exo-logo_120.png\">");
jade.debug.shift();
jade.debug.unshift({ lineno: 25, filename: jade.debug[0].filename });
buf.push("<meta property=\"twitter:description\" content=\"exo-skeleton can support up to 25 times its own weight!\">");
jade.debug.shift();
jade.debug.unshift({ lineno: 26, filename: jade.debug[0].filename });
if ( env == "dist")
{
jade.debug.unshift({ lineno: 27, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 27, filename: jade.debug[0].filename });
buf.push("<link rel=\"stylesheet\" href=\"css/styles.css\">");
jade.debug.shift();
jade.debug.shift();
}
else
{
jade.debug.unshift({ lineno: 29, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 29, filename: jade.debug[0].filename });
buf.push("<link rel=\"stylesheet\" href=\"styles/master.css\">");
jade.debug.shift();
jade.debug.shift();
}
jade.debug.shift();
jade.debug.unshift({ lineno: 30, filename: jade.debug[0].filename });
buf.push("<script>");
jade.debug.unshift({ lineno: 31, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 31, filename: jade.debug[0].filename });
buf.push("var env = \"" + (jade.escape((jade.interp = env) == null ? '' : jade.interp)) + "\"; ");
jade.debug.shift();
jade.debug.shift();
buf.push("</script>");
jade.debug.shift();
jade.debug.shift();
buf.push("</head>");
jade.debug.shift();
jade.debug.unshift({ lineno: 33, filename: jade.debug[0].filename });
buf.push("<body>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 1, filename: "app/templates/global/header.jade" });
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
buf.push("<header>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
buf.push("<div class=\"logo\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.unshift({ lineno: 3, filename: jade.debug[0].filename });
buf.push("<a class=\"menu-button fa fa-bars\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</a>");
jade.debug.shift();
jade.debug.shift();
buf.push("</header>");
jade.debug.shift();
jade.debug.shift();
jade.debug.unshift({ lineno: 1, filename: "app/templates/global/footer.jade" });
jade.debug.shift();
jade.debug.unshift({ lineno: 1, filename: "app/templates/ui/main-menu.jade" });
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
buf.push("<div id=\"main-menu\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 3, filename: jade.debug[0].filename });
buf.push("<nav>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 3, filename: jade.debug[0].filename });
for (var i = 0; i < copy["main-menu"].nav.length; ++i) {
{
jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
buf.push("<a" + (jade.attrs({ terse: true, 'href':("" + (copy["main-menu"].nav[i].href) + ""), "class": [('nav-item')] }, {"href":true})) + ">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
buf.push("" + (jade.escape((jade.interp = copy["main-menu"].nav[i].name) == null ? '' : jade.interp)) + "");
jade.debug.shift();
jade.debug.shift();
buf.push("</a>");
jade.debug.shift();
jade.debug.shift();
}
jade.debug.shift();
jade.debug.unshift({ lineno: 5, filename: jade.debug[0].filename });
}
jade.debug.shift();
jade.debug.shift();
buf.push("</nav>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
jade.debug.unshift({ lineno: 1, filename: "app/templates/main.jade" });
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
buf.push("<main id=\"main\" role=\"main\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
buf.push("<section class=\"page0 full-bleed\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 1, filename: "app/templates/Pages/Home.jade" });
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
buf.push("<div id=\"home\" class=\"full-bleed page-content\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
buf.push("<h1>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
buf.push(" ");
jade.debug.shift();
jade.debug.shift();
buf.push("</h1>");
jade.debug.shift();
jade.debug.unshift({ lineno: 3, filename: jade.debug[0].filename });
buf.push("Front Page");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
jade.debug.shift();
buf.push("</section>");
jade.debug.shift();
jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
buf.push("<section class=\"page1 full-bleed\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 1, filename: "app/templates/Pages/Interior.jade" });
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
buf.push("<div id=\"interior\" class=\"full-bleed page-content two-up\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 3, filename: jade.debug[0].filename });
buf.push("<h1>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</h1>");
jade.debug.shift();
jade.debug.unshift({ lineno: 3, filename: jade.debug[0].filename });
buf.push("Interior Section");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
jade.debug.shift();
buf.push("</section>");
jade.debug.shift();
jade.debug.unshift({ lineno: 6, filename: jade.debug[0].filename });
buf.push("<section class=\"page2 full-bleed\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 6, filename: jade.debug[0].filename });
buf.push(" ");
jade.debug.shift();
jade.debug.unshift({ lineno: 1, filename: "app/templates/Pages/Exterior.jade" });
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
buf.push("<div id=\"exterior\" class=\"full-bleed page-content\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 3, filename: jade.debug[0].filename });
buf.push("<h1>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</h1>");
jade.debug.shift();
jade.debug.unshift({ lineno: 3, filename: jade.debug[0].filename });
buf.push("Exterior Section");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
jade.debug.shift();
buf.push("</section>");
jade.debug.shift();
jade.debug.shift();
buf.push("</main>");
jade.debug.shift();
jade.debug.shift();
jade.debug.unshift({ lineno: 37, filename: jade.debug[0].filename });
if ( env == "dist")
{
jade.debug.unshift({ lineno: 38, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 38, filename: jade.debug[0].filename });
buf.push("<script data-main=\"js/master\" src=\"source.js\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</script>");
jade.debug.shift();
jade.debug.shift();
}
else
{
jade.debug.unshift({ lineno: 40, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 40, filename: jade.debug[0].filename });
buf.push("<script data-main=\"js/master\" src=\"js/bower/requirejs/require.js\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</script>");
jade.debug.shift();
jade.debug.shift();
}
jade.debug.shift();
jade.debug.shift();
buf.push("</body>");
jade.debug.shift();
jade.debug.shift();
buf.push("</html>");
jade.debug.shift();
jade.debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade.debug[0].filename, jade.debug[0].lineno,"doctype html\nhtml(lang='en')\n  head\n    title #{copy.site_title}\n    meta(charset    ='utf-8')\n    meta(http-equiv ='X-UA-Compatible'                      , content='IE=edge,chrome=1')\n    meta(name       ='viewport'                             , content='width=device-width,initial-scale=1, maximum-scale=1, user-scalable=no')\n    link(href       ='http://www5.mercedes-benz.com/media/assets/img/favicon.ico'          , rel='icon', type='image/x-icon')\n    link(rel        ='shortcut icon'                        , href='http://www5.mercedes-benz.com/media/assets/img/favicon.ico')\n    meta(name       ='apple-mobile-web-app-capable'         , content='yes')\n    meta(name       ='mobile-web-app-capable'               , content='yes')\n    meta(name       ='apple-mobile-web-app-status-bar-style', content='default')\n    link(rel        ='apple-touch-icon'                     , href='assets/imgs/exo-logo_120.png')\n    meta(name       ='description'                          , content='project scaffolding')\n    meta(name       ='keywords'                             , content='scaffolding, web-app, backbone, layoutmanager, jquery, bower, yeoman, grunt, jade, less')\n    meta(name       ='author'                               , content='posit labs')\n    meta(name       ='copyright'                            , content='©2013')\n    meta(property   ='og:url'                               , content='http://github.com/positlabs/exo-skeleton')\n    meta(property   ='og:title'                             , content='exo-skeleton')\n    meta(property   ='og:image'                             , content='https://raw.github.com/positlabs/exo-skeleton/master/app/assets/imgs/exo-logo_120.png')\n    meta(property   ='og:image:type'                        , content='image/png')\n    meta(property   ='og:description'                       , content='')\n    meta(property   ='twitter:title'                        , content='exo-skeleton')\n    meta(property   ='twitter:image'                        , content='https://raw.github.com/positlabs/exo-skeleton/master/app/assets/imgs/exo-logo_120.png')\n    meta(property   ='twitter:description'                  , content='exo-skeleton can support up to 25 times its own weight!')\n    if env == \"dist\"\n        link(rel='stylesheet', href='css/styles.css')\n    else\n        link(rel='stylesheet', href='styles/master.css')\n    script.\n      var env = \"#{env}\"; \n  body\n    include global/header\n    include global/footer\n    include ui/main-menu\n    include main\n    if env == \"dist\"\n        script(data-main='js/master', src='source.js')\n    else\n        script(data-main='js/master', src='js/bower/requirejs/require.js')");
}
};

this["JST"]["main"] = function anonymous(locals) {
jade.debug = [{ lineno: 1, filename: "app/templates/main.jade" }];
try {
var buf = [];
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
buf.push("<main id=\"main\" role=\"main\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
buf.push("<section class=\"page0 full-bleed\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 1, filename: "app/templates/Pages/Home.jade" });
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
buf.push("<div id=\"home\" class=\"full-bleed page-content\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
buf.push("<h1>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
buf.push(" ");
jade.debug.shift();
jade.debug.shift();
buf.push("</h1>");
jade.debug.shift();
jade.debug.unshift({ lineno: 3, filename: jade.debug[0].filename });
buf.push("Front Page");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
jade.debug.shift();
buf.push("</section>");
jade.debug.shift();
jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
buf.push("<section class=\"page1 full-bleed\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 1, filename: "app/templates/Pages/Interior.jade" });
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
buf.push("<div id=\"interior\" class=\"full-bleed page-content two-up\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 3, filename: jade.debug[0].filename });
buf.push("<h1>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</h1>");
jade.debug.shift();
jade.debug.unshift({ lineno: 3, filename: jade.debug[0].filename });
buf.push("Interior Section");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
jade.debug.shift();
buf.push("</section>");
jade.debug.shift();
jade.debug.unshift({ lineno: 6, filename: jade.debug[0].filename });
buf.push("<section class=\"page2 full-bleed\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 6, filename: jade.debug[0].filename });
buf.push(" ");
jade.debug.shift();
jade.debug.unshift({ lineno: 1, filename: "app/templates/Pages/Exterior.jade" });
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
buf.push("<div id=\"exterior\" class=\"full-bleed page-content\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 3, filename: jade.debug[0].filename });
buf.push("<h1>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</h1>");
jade.debug.shift();
jade.debug.unshift({ lineno: 3, filename: jade.debug[0].filename });
buf.push("Exterior Section");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
jade.debug.shift();
buf.push("</section>");
jade.debug.shift();
jade.debug.shift();
buf.push("</main>");
jade.debug.shift();
jade.debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade.debug[0].filename, jade.debug[0].lineno,"main#main(role='main')\n\tsection.page0.full-bleed\n\t\tinclude Pages/Home\n\tsection.page1.full-bleed\n\t\tinclude Pages/Interior\n\tsection.page2.full-bleed \n\t\tinclude Pages/Exterior");
}
};