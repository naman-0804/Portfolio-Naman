import requests

# =========================
# 1️⃣ CODOLIO (ALL EXCEPT TUF)
# =========================
codolio_url = "https://api.codolio.com/user"

codolio_headers = {
    "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJVc2VyIjp7ImlkIjoyMjEwNCwiZW1haWwiOiJuYW1hbnNyaXZhc3RhdmExNjA4QGdtYWlsLmNvbSIsInBhc3N3b3JkIjpudWxsLCJmaXJzdE5hbWUiOiJOYW1hbiIsInNlY29uZE5hbWUiOiIiLCJwcm9maWxlTmFtZSI6Im5hbWFuMDgiLCJwcm9maWxlVmlld3MiOm51bGwsImltYWdlVXJsIjoiaHR0cHM6Ly9kMnYxMTlqbWRqM3N4by5jbG91ZGZyb250Lm5ldC8yMjEwNF80NjE5NzkzNzUiLCJ1c2VyRGV0YWlscyI6bnVsbCwicHJvZmlsZVZpc2liaWxpdHlDb25maWciOm51bGwsInBsYXRmb3JtUHJvZmlsZXMiOm51bGwsImNyZWF0ZWRBdCI6MTczNTAwNzk4NjAwMCwidXBkYXRlZEF0IjoxNzU0MDY5NTU4MDAwfSwiRW1haWwiOiJuYW1hbnNyaXZhc3RhdmExNjA4QGdtYWlsLmNvbSIsInN1YiI6Im5hbWFuc3JpdmFzdGF2YTE2MDhAZ21haWwuY29tIiwiaWF0IjoxNzY2OTI5MTg4LCJleHAiOjE3NjgzMTE1ODh9.LXGYuD1Js6FlyOiMV6R9ueogdqC18W2zdN2tvjwf1L0",
    "accept": "*/*",
    "referer": "https://codolio.com/"
}

res = requests.get(codolio_url, headers=codolio_headers)

if res.status_code != 200:
    print("Codolio Error:", res.status_code)
    exit()

data = res.json()
platforms = data["data"]["platformProfiles"]["platformProfiles"]

codolio_easy = codolio_medium = codolio_hard = codolio_total = 0

for p in platforms:
    if p.get("platform") == "tuf":
        continue  # ❌ skip tuf

    q = p.get("totalQuestionStats")
    if not q:
        continue

    codolio_easy += q.get("easyQuestionCounts") or 0
    codolio_medium += q.get("mediumQuestionCounts") or 0
    codolio_hard += q.get("hardQuestionCounts") or 0

    # fundamentals / basic → EASY
    codolio_easy += q.get("basicQuestionCounts") or 0
    codolio_easy += q.get("schoolQuestionCounts") or 0

    codolio_total += q.get("totalQuestionCounts") or 0


# =========================
# 2️⃣ TUF OFFICIAL API
# =========================
tuf_url = "https://backend-go.takeuforward.org/api/v1/shared/profile/dsa-progress/naman160804"

tuf_headers = {
    "accept": "application/json, text/plain, */*",
    "origin": "https://takeuforward.org",
    "referer": "https://takeuforward.org/"
}

res = requests.get(tuf_url, headers=tuf_headers)

if res.status_code != 200:
    print("TUF Error:", res.status_code)
    exit()

tuf_data = res.json()["data"]["data"]

tuf_easy = tuf_data["solvedEasy"]
tuf_medium = tuf_data["solvedMedium"]
tuf_hard = tuf_data["solvedHard"]
tuf_total = tuf_easy + tuf_medium + tuf_hard


# =========================
# 3️⃣ FINAL COMBINED
# =========================
final_easy = codolio_easy + tuf_easy
final_medium = codolio_medium + tuf_medium
final_hard = codolio_hard + tuf_hard
final_total = final_easy + final_medium + final_hard

import json
import requests

# --- YOUR EXISTING LOGIC (same as before) ---
# After computing final_easy, final_medium, final_hard, etc.

output = {
    "codolio": {
        "easy": codolio_easy,
        "medium": codolio_medium,
        "hard": codolio_hard,
        "total": codolio_total
    },
    "tuf": {
        "easy": tuf_easy,
        "medium": tuf_medium,
        "hard": tuf_hard,
        "total": tuf_total
    },
    "final": {
        "easy": final_easy,
        "medium": final_medium,
        "hard": final_hard,
        "total": final_total
    }
}

with open("public/coding-stats.json", "w") as f:
    json.dump(output, f, indent=2)

print("✅ coding-stats.json generated")
