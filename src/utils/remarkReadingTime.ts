// import getReadingTime from 'reading-time'
// import { toString } from 'mdast-util-to-string'

// export function remarkReadingTime() {
// 	// @ts-expect-error:next-line
// 	return function (tree, { data }) {
// 		const textOnPage = toString(tree)
// 		const readingTime = getReadingTime(textOnPage)
// 		// readingTime.text will give us minutes read as a friendly string,
// 		// i.e. "3 min read"
// 		data.astro.frontmatter.minutesRead = readingTime.text
// 	}
// }
import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';
import type { Root } from 'mdast';

interface AstroFile {
  data?: {
    astro?: {
      frontmatter?: Record<string, unknown>;
    };
  };
}

export function remarkReadingTime() {
  return function (tree: Root, file: AstroFile) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    
    // Ensure the data object exists
    if (!file.data) {
      file.data = {};
    }
    
    // Ensure the astro object exists
    if (!file.data.astro) {
      file.data.astro = {};
    }
    
    // Ensure the frontmatter object exists
    if (!file.data.astro.frontmatter) {
      file.data.astro.frontmatter = {};
    }
    
    // Add the reading time to the frontmatter
    if (file.data.astro && file.data.astro.frontmatter) {
      file.data.astro.frontmatter.minutesRead = readingTime.text;
    }
  };
}