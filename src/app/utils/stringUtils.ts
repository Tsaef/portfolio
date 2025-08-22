/**
 * Utility functions for string manipulation
 */

import React from 'react';

/**
 * Makes specified words bold in a text string
 * @param text The original text
 * @param wordsToMakeBold Array of words to make bold
 * @returns React fragment with bold words
 */
export function makeBoldWords(text: string, wordsToMakeBold: string[]): React.ReactNode {
  if (!wordsToMakeBold.length) return text;

  // Create a regex pattern that matches any of the words to make bold
  const pattern = new RegExp(`\\b(${wordsToMakeBold.join('|')})\\b`, 'gi');

  // Split the text by the pattern while keeping the delimiters
  const parts = text.split(pattern);

  return parts.map((part, index) => {
    // Check if this part should be bold
    const shouldBeBold = wordsToMakeBold.some(word =>
      part.toLowerCase() === word.toLowerCase()
    );

    if (shouldBeBold) {
      return React.createElement('span', { key: index, className: 'font-bold' }, part);
    }

    return part;
  });
}

/**
 * Alternative version that allows custom styling
 * @param text The original text
 * @param wordsToMakeBold Array of words to make bold
 * @param customClassName Custom CSS class for styling (default: "font-bold")
 * @returns React fragment with styled words
 */
export function makeStyledWords(
  text: string,
  wordsToMakeBold: string[],
  customClassName: string = "font-bold"
): React.ReactNode {
  if (!wordsToMakeBold.length) return text;

  const pattern = new RegExp(`\\b(${wordsToMakeBold.join('|')})\\b`, 'gi');
  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const shouldBeStyled = wordsToMakeBold.some(word =>
      part.toLowerCase() === word.toLowerCase()
    );

    if (shouldBeStyled) {
      return React.createElement('span', { key: index, className: customClassName }, part);
    }

    return part;
  });
}

/**
 * Utility to highlight multiple different word groups with different styles
 * @param text The original text
 * @param wordGroups Array of objects with words and their styles
 * @returns React fragment with styled words
 */
export function makeMultiStyledWords(
  text: string,
  wordGroups: { words: string[]; className: string }[]
): React.ReactNode {
  let result: React.ReactNode = text;

  wordGroups.forEach((group, groupIndex) => {
    if (typeof result === 'string') {
      result = makeStyledWords(result, group.words, group.className);
    }
  });

  return result;
}
