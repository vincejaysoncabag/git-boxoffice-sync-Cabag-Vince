\# Box Office Sync – Git Workflow



\*\*Student:\*\* Vince Cabag  

\*\*Repository:\*\* git-boxoffice-sync-Cabag-Vince  

\*\*Branch:\*\* feature/group-pricing  

\*\*Final Tag:\*\* v1.0-synced



\---



\## 1. Final `calculateTicketPrice` and Contributor Responsibilities



The final `calculateTicketPrice` function combines all three contributors' changes:



1\. \*\*Base ticket calculation\*\* – The original code calculates the total price using:

&#x20;  `quantity \* basePrice`.



2\. \*\*10% Group Discount – Contributor A\*\*

&#x20;  - Applies a 10% discount when the customer orders 5 or more tickets.

&#x20;  - This was introduced in Task 1.



3\. \*\*50% VIP Premium Surcharge – Contributor C\*\*

&#x20;  - Applies a 50% surcharge when premium/VIP seating is selected.

&#x20;  - This was introduced in Task 4.



4\. \*\*$10 Flat Discount – Contributor A\*\*

&#x20;  - Subtracts $10 from the order total.

&#x20;  - This was introduced in Task 6.



5\. \*\*Rounding – Contributor B\*\*

&#x20;  - Uses `Math.round()` instead of `Math.floor()` so the final price is rounded to the nearest whole number.

&#x20;  - This was introduced in Task 2.



The final implementation successfully combines all of these behaviors.



\---



\## 2. Task 3 vs. Task 5 Conflict



In Task 3, there were two lines of development that had diverged:



\- Contributor A added the group discount.

\- Contributor B changed price calculation from truncation to rounding.



The merge caused conflicts in both `tickets.js` and `test.js`. The solution was to preserve both changes.



Task 5 was more difficult because a third line of development was introduced:



\- Contributor C added the VIP surcharge.



The merge therefore had to reconcile three different versions of the same files. The final solution preserved the group discount, rounding, and VIP surcharge.



The main difficulty with three-way divergence was that there were more changes affecting the same sections of code, requiring more careful conflict resolution and testing.



\---



\## 3. Why the $10 Discount Affected Other Tests



The flat $10 discount was added inside the shared `calculateTicketPrice()` function.



Because the function is used by all pricing scenarios, the $10 discount also affected:



\- Normal ticket prices

\- Group-discount prices

\- VIP prices



For example, a test that previously expected a group-discount price of $70 now expected $60 after the additional $10 discount.



This shows that changes to shared code are not completely isolated. Even when a feature is intended to affect one type of order, changing a common function can affect other existing behaviors.



\---



\## 4. Process Change That Could Have Prevented the Rejected Pushes



A simple process change would have been:



> \*\*Always fetch/pull the latest remote changes before starting work or pushing a branch.\*\*



If each contributor had first synchronized their local branch with the remote branch, they would have known that another contributor had already pushed changes.



A possible workflow would be:



```bash

git fetch origin

git pull --rebase origin feature/group-pricing

