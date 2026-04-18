#!/usr/bin/env python3
"""
Download official logos from Clearbit for all tools.
Run from the saas-directory folder:
  python3 download_logos.py
"""
import urllib.request
import os
import sys

DOMAINS = {
    "1password": "1password.com",
    "activecampaign": "activecampaign.com",
    "adcreative-ai": "adcreative.ai",
    "adwisely": "adwisely.com",
    "aftersell": "aftersell.com",
    "agencyanalytics": "agencyanalytics.com",
    "aircall": "aircall.io",
    "amplitude": "amplitude.com",
    "apollo": "apollo.io",
    "aweber": "aweber.com",
    "beautiful-ai": "beautiful.ai",
    "bitdefender": "bitdefender.com",
    "brand24": "brand24.com",
    "brevo": "brevo.com",
    "bright-data": "brightdata.com",
    "callhippo": "callhippo.com",
    "callrail": "callrail.com",
    "campaign-monitor": "campaignmonitor.com",
    "capsule": "capsulecrm.com",
    "carbon6": "carbon6.io",
    "castmagic": "castmagic.io",
    "clickup": "clickup.com",
    "close": "close.com",
    "cloudtalk": "cloudtalk.io",
    "cognism": "cognism.com",
    "cometchat": "cometchat.com",
    "connecteam": "connecteam.com",
    "convertkit": "kit.com",
    "crazy-egg": "crazyegg.com",
    "crowdstrike": "crowdstrike.com",
    "databox": "databox.com",
    "deel": "deel.com",
    "deputy": "deputy.com",
    "descript": "descript.com",
    "drip": "drip.com",
    "elevenlabs": "elevenlabs.io",
    "folk": "folk.app",
    "freshdesk": "freshdesk.com",
    "gamma": "gamma.app",
    "getresponse": "getresponse.com",
    "glide": "glideapps.com",
    "goflow": "goflow.com",
    "gorgias": "gorgias.com",
    "gusto": "gusto.com",
    "help-scout": "helpscout.com",
    "hibob": "hibob.com",
    "hive": "hive.com",
    "hubspot": "hubspot.com",
    "iconosquare": "iconosquare.com",
    "idrive": "idrive.com",
    "influencer-hero": "influencer-hero.com",
    "instantly": "instantly.ai",
    "instapage": "instapage.com",
    "interakt": "interakt.shop",
    "jibble": "jibble.io",
    "kaspr": "kaspr.io",
    "katana": "katanamrp.com",
    "keap": "keap.com",
    "keeper-security": "keepersecurity.com",
    "krispcall": "krispcall.com",
    "landbot": "landbot.io",
    "landingi": "landingi.com",
    "later": "later.com",
    "laxis": "laxis.com",
    "leadfeeder": "leadfeeder.com",
    "leadpages": "leadpages.com",
    "lemlist": "lemlist.com",
    "livestorm": "livestorm.co",
    "manychat": "manychat.com",
    "mindstudio": "mindstudio.ai",
    "miro": "miro.com",
    "monday": "monday.com",
    "moosend": "moosend.com",
    "murf-ai": "murf.ai",
    "nextiva": "nextiva.com",
    "norton": "norton.com",
    "notifyme": "notifymeapp.io",
    "nutshell": "nutshell.com",
    "openphone": "openphone.com",
    "oyster": "oysterhr.com",
    "pagecloud": "pagecloud.com",
    "papaya-global": "papayaglobal.com",
    "passpack": "passpack.com",
    "pipedrive": "pipedrive.com",
    "playroll": "playroll.com",
    "postscript": "postscript.io",
    "printify": "printify.com",
    "process-street": "process.st",
    "proton": "proton.me",
    "pushowl": "pushowl.com",
    "quartile": "quartile.com",
    "quillbot": "quillbot.com",
    "reclaim-ai": "reclaim.ai",
    "respond-io": "respond.io",
    "restream": "restream.io",
    "rocketreach": "rocketreach.co",
    "salesflare": "salesflare.com",
    "sellfy": "sellfy.com",
    "sendcloud": "sendcloud.com",
    "sender": "sender.net",
    "shipbob": "shipbob.com",
    "shippo": "goshippo.com",
    "shopify": "shopify.com",
    "similarweb": "similarweb.com",
    "simpletexting": "simpletexting.com",
    "smartsuite": "smartsuite.com",
    "snapchat-for-business": "snapchat.com",
    "socialbee": "socialbee.com",
    "softr": "softr.io",
    "spocket": "spocket.co",
    "stamped": "stamped.io",
    "streak": "streak.com",
    "sunsama": "sunsama.com",
    "surfer": "surferseo.com",
    "surveysparrow": "surveysparrow.com",
    "survicate": "survicate.com",
    "tellent": "tellent.com",
    "threatdown": "threatdown.com",
    "tidio": "tidio.com",
    "todoist": "todoist.com",
    "toggl": "toggl.com",
    "tresorit": "tresorit.com",
    "unbounce": "unbounce.com",
    "vibe": "vibe.us",
    "vista-social": "vistasocial.com",
    "vwo": "vwo.com",
    "wati": "wati.io",
    "webflow": "webflow.com",
    "whatconverts": "whatconverts.com",
    "wrike": "wrike.com",
    "zendesk": "zendesk.com",
    "zoominfo": "zoominfo.com",
}

LOGO_DIR = os.path.join(os.path.dirname(__file__), "public", "logos")
os.makedirs(LOGO_DIR, exist_ok=True)

success = []
failed = []

total = len(DOMAINS)
for i, (slug, domain) in enumerate(DOMAINS.items(), 1):
    url = f"https://logo.clearbit.com/{domain}?size=256"
    out_path = os.path.join(LOGO_DIR, f"{slug}.png")

    sys.stdout.write(f"\r[{i}/{total}] Downloading {slug}...")
    sys.stdout.flush()

    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            if len(data) > 500:
                with open(out_path, "wb") as f:
                    f.write(data)
                success.append(slug)
            else:
                failed.append((slug, domain))
    except Exception as e:
        failed.append((slug, domain))

print(f"\n\n✅ Downloaded: {len(success)}/{total}")
if failed:
    print(f"❌ Failed ({len(failed)}):")
    for s, d in failed:
        print(f"   - {s} ({d})")
print(f"\nLogos saved to: {LOGO_DIR}")
