var db;

function load_options() {
  db = {};
  chrome.storage.local.get("database", function(items) {
    if (!items.database || items.database == "") {
      items.database = `# Contribute to the database by filing an issue at:
# https://github.com/stefansundin/the-onion-notifier

www.facebook.com   www.facebookcorewwwi.onion   # https://www.facebook.com/notes/protect-the-graph/making-connections-to-facebook-more-secure/1526085754298237
protonmail.com     protonirockerxow.onion       # https://protonmail.com/tor
keybase.io         fncuwbiisyh6ak3i.onion       # https://keybase.io/docs/command_line/tor
www.propublica.org propub3r6espa33w.onion       # https://www.propublica.org/nerds/item/a-more-secure-and-anonymous-propublica-using-tor-hidden-services
scryptmail.com     scryptmaildniwm6.onion       # https://blog.scryptmail.com/complete-tor-support/
duckduckgo.com     3g2upl4pq6kufc4m.onion       # https://github.com/duckduckgo/zeroclickinfo-goodies/blob/b9e7ad188885aa22b37c578296afbf270bc44665/t/DuckDuckGo.t#L95-L110
www.qubes-os.org   qubesos4rrrrz6n4.onion       # bottom of https://www.qubes-os.org/

# https://riseup.net/en/tor#riseups-tor-hidden-services
# https://riseup.net/security/network-security/tor/hs-addresses-signed.txt
riseup.net          nzh3fv6jc6jskki3.onion
help.riseup.net     nzh3fv6jc6jskki3.onion
black.riseup.net    cwoiopiifrlzcuos.onion
imap.riseup.net     zsolxunfmbfuq7wf.onion
lists.riseup.net    xpgylzydxykgdqyg.onion
mail.riseup.net     zsolxunfmbfuq7wf.onion
mx1.riseup.net      wy6zk3pmcwiyhiao.onion
pad.riseup.net      5jp7xtmox6jyoqd5.onion
pop.riseup.net      zsolxunfmbfuq7wf.onion
share.riseup.net    6zc6sejeho3fwrd4.onion
smtp.riseup.net     zsolxunfmbfuq7wf.onion
account.riseup.net  j6uhdvbhz74oefxf.onion
we.riseup.net       7lvd7fa5yfbdqaii.onion
xmpp.riseup.net     4cjw6cwpeaeppfqz.onion
0xacab.org          vivmyccb3jdb7yij.onion

# bottom of https://thepiratebay.org/
thepiratebay.am    uj3wazyk5u4hnvtk.onion
thepiratebay.com   uj3wazyk5u4hnvtk.onion
thepiratebay.gd    uj3wazyk5u4hnvtk.onion
thepiratebay.gl    uj3wazyk5u4hnvtk.onion
thepiratebay.gs    uj3wazyk5u4hnvtk.onion
thepiratebay.gy    uj3wazyk5u4hnvtk.onion
thepiratebay.la    uj3wazyk5u4hnvtk.onion
thepiratebay.mn    uj3wazyk5u4hnvtk.onion
thepiratebay.ms    uj3wazyk5u4hnvtk.onion
thepiratebay.net   uj3wazyk5u4hnvtk.onion
thepiratebay.org   uj3wazyk5u4hnvtk.onion
thepiratebay.pe    uj3wazyk5u4hnvtk.onion
thepiratebay.se    uj3wazyk5u4hnvtk.onion
thepiratebay.sx    uj3wazyk5u4hnvtk.onion
thepiratebay.vg    uj3wazyk5u4hnvtk.onion
piratebay.am       uj3wazyk5u4hnvtk.onion
piratebay.net      uj3wazyk5u4hnvtk.onion
piratebay.no       uj3wazyk5u4hnvtk.onion
piratebay.se       uj3wazyk5u4hnvtk.onion
themusicbay.com    uj3wazyk5u4hnvtk.onion
themusicbay.net    uj3wazyk5u4hnvtk.onion
themusicbay.org    uj3wazyk5u4hnvtk.onion

# https://onion.torproject.org/
archive.torproject.org yjuwkcxlgo7f7o6s.onion
atlas.testnet.torproject.org 2d5quh2deowe4kpd.onion
atlas.torproject.org 52g5y5karruvc7bz.onion
aus1.torproject.org x3nelbld33llasqv.onion
aus2.torproject.org vijs2fmpd72nbqok.onion
bridges.torproject.org z5tfsnikzulwicxs.onion
cloud.torproject.org icxe4yp32mq6gm6n.onion
collector.testnet.torproject.org vhbbidwvzwhahsrg.onion
collector.torproject.org qigcb4g4xxbh5ho6.onion
collector2.torproject.org kkvj4mhsttfcrksj.onion
compass.torproject.org lwygejoa6fm26eef.onion
consensus-health.torproject.org tgnv2pssfumdedyw.onion
crm.torproject.org sgs4q3dzv74f723x.onion
deb.torproject.org sdscoq7snqtznauu.onion
dist.torproject.org rqef5a5mebgq46y5.onion
donate.torproject.org bjk3o77eebkax2ud.onion
exonerator.torproject.org zfu7x4fuagirknhb.onion
extra.torproject.org klbl4glo2btuwyok.onion
gettor.torproject.org tngjm3owsslo3wgo.onion
git.torproject.org dccbbv6cooddgcrq.onion
gitweb.torproject.org jqs44zhtxl2uo6gk.onion
health.testnet.torproject.org fr6scuhdp5dqvy7d.onion
help.torproject.org 54nujbl4qohb5qdp.onion
jenkins.torproject.org f7lqb5oicvsahone.onion
media.torproject.org n46o4uxsej2icp5l.onion
metrics.torproject.org rougmnvswfsmd4dq.onion
munin.torproject.org hhr6fex2giwmolct.onion
nagios.torproject.org kakxayzmcc3zeomu.onion
nyx.torproject.org ebxqgaz3dwywcoxl.onion
onion.torproject.org yz7lpwfhhzcdyc5y.onion
onionoo.torproject.org tgel7v4rpcllsrk2.onion
onionperf.torproject.org llhb3u5h3q66ha62.onion
ooni.torproject.org fqnqc7zix2wblwex.onion
people.torproject.org sbe5fi5cka5l3fqe.onion
research.torproject.org wcgqzqyfi7a6iu62.onion
spec.torproject.org s2bweojt5vg52e5i.onion
staging.crm.torproject.org swnwd5bhvjk4dd5o.onion
staging.donate.torproject.org cvtwbn7mgxki7gvc.onion
stem.torproject.org vt5hknv6sblkgf22.onion
tb-manual.torproject.org dgvdmophvhunawds.onion
test-data.tbb.torproject.org fylvgu5r6gcdadeo.onion
test.crm.torproject.org abp7hndzgazze2wy.onion
test.donate.torproject.org p73stlm5nhogxw4w.onion
testnet.torproject.org bo7uextohjpuqvrh.onion
trac.torproject.org ea5faa5po25cf7fb.onion
webstats.torproject.org gbinixxw7gnsh5jr.onion
www-staging.torproject.org krkzagd5yo4bvypt.onion
www.onion-router.net hzmun3rnnxjhkyhg.onion
www.torproject.org expyuzz4wqqyqhjn.onion
`;
      chrome.storage.local.set(items);
    }
    items.database.split("\n").forEach(function(line) {
      var hash_index = line.indexOf("#");
      if (hash_index != -1) {
        line = line.substr(0, hash_index);
      }
      line = line.trim();
      if (line == "") return;
      var space_index = line.indexOf(" ");
      var domain = line.substr(0, space_index);
      var onion_domain = line.substr(space_index).trim();
      db[domain] = onion_domain;
    });
  });
}

load_options();

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action == "load-options") {
    load_options();
  }
});

function extract_domain(url) {
  var prot_index = url.indexOf("://");
  if (prot_index == -1) return;
  var path_index = url.indexOf("/", prot_index+3);
  if (path_index == -1) return;
  return url.substring(prot_index+3, path_index);
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.url) {
    var domain = extract_domain(changeInfo.url);
    var onion_domain = db[domain];
    if (onion_domain) {
      chrome.notifications.create(`${tabId}`, {
        type: "basic",
        iconUrl: "img/icon48.png",
        title: `Onion domain available for ${domain}`,
        message: `Click to open ${onion_domain}.`,
      });
    }
    else {
      chrome.notifications.clear(`${tabId}`);
    }
  }
});

chrome.notifications.onClicked.addListener(function(id) {
  var tabId = parseInt(id, 10);
  chrome.tabs.get(tabId, function(tab) {
    var domain = extract_domain(tab.url);
    var onion_domain = db[domain];
    var onion_url = tab.url.replace(domain, onion_domain).replace(/^https/, "http");
    chrome.tabs.update(tabId, {
      active: true,
      url: onion_url,
    });
  });
});
