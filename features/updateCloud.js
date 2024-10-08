/**
 * Add new words occurrences to the cloud,
 * calculate their weights inside the total number of occurrences.
 * 
 * @param {array} words - Words to count and add to the cloud.
 * @param {object} cloud - Words, occurrences, weights and totalWordOcurrences to power a word-cloud.
 */

export default function updateCloud(words, cloud) {

    for (const word of words) {

        const cloudItem = cloud.wordDetails.find(item => item.word == word);

        if (cloudItem)
            cloudItem.occurrences++;
        else
            cloud.wordDetails.push({
                word,
                occurrences: 1
            });
    }

    cloud.totalWordOccurrences += words.length;

    cloud.wordDetails.forEach(item => {
        item.weight = parseFloat((item.occurrences / cloud.totalWordOccurrences).toFixed(3));
    });

    cloud.wordDetails.sort((a, b) => b.occurrences - a.occurrences);
}