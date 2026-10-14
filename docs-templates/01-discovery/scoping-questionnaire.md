# Scoping questionnaire: {customer} {project name}

Version {n}, {YYYY-MM-DD}. Prepared by {name} for discovery with {customer contacts}.

Use this before you estimate. Each question names the estimate line or design decision its
answer feeds, so a missing answer shows up as a gap in a specific number rather than a vague
risk.

> **Good:** every question has a "Feeds" entry. A question that feeds nothing is curiosity and
> costs the customer time. A line in your estimate that no question feeds is a guess, and the
> [assumptions register](assumptions-register.csv) should say so.

How to use it:

1. Send the questionnaire before the first working session, so people can find the numbers.
2. Record each answer with who gave it and the date. A number from the operations lead and a
   number from a slide are not the same evidence.
3. Mark each answer `confirmed`, `estimate`, or `unknown`. Carry every `estimate` and `unknown`
   into the assumptions register.

## 1. Sites and locations

| Question                                                        | Why it matters                                     | Feeds                            |
| --------------------------------------------------------------- | -------------------------------------------------- | -------------------------------- |
| Which sites are in scope, and which one goes first?             | Sets travel, survey effort, and the pilot site     | Site count, survey hours         |
| How many {install points, for example doors or lines} per site? | The main multiplier for hardware and install labor | Bill of materials, install hours |
| Who can approve work on site, and what notice do they need?     | Access lead time often sets the schedule           | Timeline                         |

## 2. Volumes

| Question                                                    | Why it matters                                   | Feeds                     |
| ----------------------------------------------------------- | ------------------------------------------------ | ------------------------- |
| How many {units, for example shipments} per day, per shift? | Sizes throughput and the test sample             | Capacity model, test plan |
| What is the peak day, and when does it happen?              | The system has to survive the peak, not the mean | Capacity model            |
| How does volume change over the next {n} years?             | Decides whether the design needs to scale out    | Architecture, roadmap     |

## 3. Items being tracked or measured

| Question                                                | Why it matters                                | Feeds                     |
| ------------------------------------------------------- | --------------------------------------------- | ------------------------- |
| What is being tracked, and what is it made of?          | Materials change what sensing works           | Design, vendor comparison |
| Is anything already labeled or instrumented? With what? | Reuse can remove a cost line                  | Bill of materials         |
| Who applies labels or fits sensors today, and where?    | Sets the process change and its training cost | SOPs, change management   |

## 4. Handling and process

| Question                                                         | Why it matters                                    | Feeds                    |
| ---------------------------------------------------------------- | ------------------------------------------------- | ------------------------ |
| Walk through one unit from arrival to departure. Who touches it? | Finds the points where measurement is possible    | Process map, design      |
| What equipment moves it, and how fast?                           | Speed and orientation bound what a sensor can see | Design, test factors     |
| What goes wrong today, and how is it found?                      | Gives the baseline the project must beat          | Charter, success metrics |

## 5. Existing equipment

| Question                                                          | Why it matters                                         | Feeds                  |
| ----------------------------------------------------------------- | ------------------------------------------------------ | ---------------------- |
| What equipment of this kind is installed? Model, firmware, owner? | Decides reuse or replace, and who must agree           | Legacy assessment, BOM |
| Is that equipment still supported by its maker?                   | An end-of-life device is a cost later even if free now | Roadmap, risk register |
| Is any of it shared with another team or process?                 | Shared equipment needs change control                  | SOPs, risk register    |

## 6. IT, network, and cloud

| Question                                                                | Why it matters                              | Feeds                      |
| ----------------------------------------------------------------------- | ------------------------------------------- | -------------------------- |
| What network is available at each point: wired, Wi-Fi, cellular?        | Sets connectivity hardware and install cost | BOM, architecture          |
| Does traffic pass a proxy or TLS inspection?                            | A common cause of failed cloud connections  | Architecture, threat model |
| Which systems receive the data, and who owns the integration?           | Integration is often the largest unknown    | Estimate, roles            |
| What security review must the solution pass, and how long does it take? | Can block go-live after the work is done    | Timeline                   |

## 7. Process measures and success

| Question                                              | Why it matters                                      | Feeds               |
| ----------------------------------------------------- | --------------------------------------------------- | ------------------- |
| Which measure decides whether the project worked?     | Without one the acceptance criteria are opinion     | Acceptance criteria |
| What is that measure today, and how is it measured?   | A target without a baseline cannot be met or missed | Charter, test plan  |
| Who signs off, and what evidence do they need to see? | Sets the shape of the final report                  | Deliverables        |

## 8. Commercial

| Question                                                  | Why it matters                                    | Feeds                  |
| --------------------------------------------------------- | ------------------------------------------------- | ---------------------- |
| Is there a budget range or an approval threshold?         | Decides the size of the first phase               | Statement of work      |
| Who buys the hardware, and who owns it after the project? | Changes the price and the support model           | Statement of work, BOM |
| Is there a competing proposal, and what does it include?  | Lets you compare scope rather than headline price | Estimate review        |

## Worked example

Acme Logistics asked for temperature monitoring on refrigerated trailers. Question 2.2 returned
"peak is the week before a major holiday, about twice a normal week", marked `estimate` from the
transport planner. That answer went into the assumptions register with "confirm from twelve
months of dispatch records" as the check, and the capacity model used a range of 1.5 to 2.5
times normal until the records arrived.
