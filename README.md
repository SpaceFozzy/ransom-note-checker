# Ransom Note Checker
## Challenge:
A villain needs to create a ransom note by cutting words out of a magazine. He needs to know if a magazine contains enough words to create his ransom note. Create an algorithm that takes two strings as input (the magazine text and the ransom note text) and evaluates whether the magazine has the sufficient words to create the note.

The solution must:
 * Be case-sensitive
 * Scale well (the magazine and ransom note may be tens of thousands of words each!)
 * Be an encapsulated module with privacy for its internal variables (i.e. use the _module pattern_ and _revealing object pattern_).

 ## Solution:
 The algorithm splits the input strings into arrays of words, then converts those into two separate key-value hashes of words and their frequencies (`magazineWordCount`, and `ransomWordCount`). Then each key (word) of the `ransomWordCount` is confirmed to exist in the `magazineWordCount` with a frequency that is greater or equal to what the ransom note requires. If a single word is not found in the `magazineWordCount`, or not found in a high enough frequency, the loop is broken and the ransom checker module returns false.

 ## Usage:
 `let isMagazineSufficient = ransomChecker.canCreateRansom(ransomText, magazineText)`
