var ransomChecker = (function () {

    function generateWordCount(words) {
        var wordCount = {};

        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            addWordToCount(word, wordCount);
        }

        function addWordToCount(word, wordCount) {
            if (word in wordCount) {
                wordCount[word]++;
            } else {
                wordCount[word] = 1;
            }
        }
        return wordCount;
    }

    function canCreateRansom(ransom, magazine) {
        var magazineWordCount = generateWordCount(magazine.split(' '));
        var ransomWordCount = generateWordCount(ransom.split(' '));

        for (word in ransomWordCount) {
            var canWriteWord = checkMagazineForWord(word);
            if (!canWriteWord) { return false }
        }

        function checkMagazineForWord(word) {
            if (ransomWordCount.hasOwnProperty(word)) {
                return ((word in magazineWordCount) && magazineWordCount[word] >= ransomWordCount[word]);
            } else {
                return false;
            }
        }

        return true;
    }

    return {
        canCreateRansom: canCreateRansom
    }

}());