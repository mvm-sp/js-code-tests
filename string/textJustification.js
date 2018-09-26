
function textJustification(words, l) {
	var index;
	var currLength;
	var numWords;
	var ret;
	var newLength;
	var newWordLength;
	var spaces;
	var line;
	var extraSpace;
	var spaceBetweenEachWord;
	var spaceAtEnd;
	
	index = 0;
	ret = [];
	while (index < words.length) {
		currLength = 0;
		numWords = 0;
		newLength = 0;
		
		while (newLength <= l && index + numWords < words.length) {
			newWordLength = words[index + numWords].length;
			spaces = numWords;
			newLength = newWordLength + currLength + spaces;
			
			if (newLength <= l) {
				currLength = newLength - spaces;
				numWords++;
			} else {
				break;
			}
		}
		
		extraSpace = l - currLength;
		line = words[index];
		
		if (numWords === 1 || index + numWords >= words.length) {
			for(i = index + 1; i < index + numWords; i++) {
				line = line + ' ' + words[i];
			}
			
			spaceAtEnd = extraSpace - (numWords - 1);
			line = line + Array(spaceAtEnd + 1).join(' ');
		} else {
			spaceBetweenEachWord = Math.floor(extraSpace / (numWords-1));
			extraSpace = extraSpace % (numWords-1);
			spaceBetweenEachWord = Array(spaceBetweenEachWord + 1).join(' ');
			
			for (i = index + 1; i < index + numWords; i++) {
				line = line + spaceBetweenEachWord;
				
				if (extraSpace > 0) {
					line = line + ' ';
					extraSpace--;
				}
				
				line = line + words[i];
			}
		}
		
		ret.push(line);
		index = index + numWords;
	}
	
	return ret;
}