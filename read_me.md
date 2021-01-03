### ---- Routes ----

# GET to /feedback

Returns to successful requestsin the from:
{success: true,
data: [{"uid": "d6587569589dk3r437890584gjfni",
"name": "Stefan",
"role": "Bootcamper",
"cohort": 4,
"feedbackid": 1,
"bootcamperuid": "d6587569589dk3r437890584gjfni",
"coachname": "Tao",
"feedbackdate": "2020-11-18T00:00:00.000Z",
"subject": "react",
"week": 7,
"type": "mastery",
"quantitative": "12/15",
"qualitative": "(coach's comment)",
"duedate": "2020-11-15T00:00:00.000Z",
"datesubmitted": "2020-11-15T00:00:00.000Z"}, ... ]}

the elipses represent more objects with the same keys

Firstly checks if there is a uid query, if there is then it will execute next() and move on to the next middleware.
