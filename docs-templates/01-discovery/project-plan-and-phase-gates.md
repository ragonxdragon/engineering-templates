# Project plan and phase gates: {project name}

Version {n}, {YYYY-MM-DD}. Owner: {name}.

The plan lists the activities in dependency order, groups them into phases, and states the exit
criteria for each phase. A phase is finished when its criteria are true, not when its weeks run
out.

> **Good:** every activity names the activity it waits on and the deliverable it produces. Every
> phase gate says what happens when a criterion is not met. A plan without that second column
> assumes nothing will slip.

## 1. Activities

| ID  | Phase        | Activity                             | Owner          | Start week | Weeks | Depends on | Deliverable       | Why it matters                                       |
| --- | ------------ | ------------------------------------ | -------------- | ---------- | ----- | ---------- | ----------------- | ---------------------------------------------------- |
| A01 | {0 Mobilize} | {Kickoff, roles, communication plan} | {Both parties} | 1          | 1     | -          | {Charter, RACI}   | {Names the decision maker before anything is bought} |
| A02 | {0 Mobilize} | {Order long-lead equipment}          | {Supplier}     | 1          | {n}   | A01        | {Purchase orders} | {Lead time sets the earliest install date}           |
| A03 | {1 Build}    | {activity}                           | {owner}        | {n}        | {n}   | {IDs}      | {deliverable}     | {reason}                                             |

## 2. Phase gates

| Phase        | Ends week | Exit criteria (all must be true)                       | If it is not met                                         |
| ------------ | --------- | ------------------------------------------------------ | -------------------------------------------------------- |
| {0 Mobilize} | {n}       | {Orders placed; site access confirmed; charter signed} | {Each week an order slips moves the install week by one} |
| {1 Build}    | {n}       | {criteria}                                             | {consequence and fallback}                               |
| {2 Test}     | {n}       | {criteria}                                             | {consequence and fallback}                               |

## 3. Schedule options

Offer more than one schedule when the customer is deciding between speed and risk.

|             | {Aggressive, n weeks} | {Recommended, n weeks} | {Safe, n weeks}  |
| ----------- | --------------------- | ---------------------- | ---------------- |
| Structure   | {What is compressed}  | {structure}            | {What has slack} |
| Depends on  | {What must go right}  | {dependencies}         | {dependencies}   |
| Main risk   | {risk}                | {risk}                 | {risk}           |
| Use it when | {condition}           | {condition}            | {condition}      |

## 4. Critical path

{List the chain of activities whose delay delays the end date, with the slack on each near-critical
activity. Update it when a gate slips.}
