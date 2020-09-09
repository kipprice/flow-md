export const sampleWithoutResults = `# Title of File
Description of file

## 1
Text for the first question
- [Answer A Text](#2)
- [Answer B Text](#3)

## 2
Answer A took us to this question
- [Answer C Text](#4)

## 3
Answer B took us to this question

## 4
This is the last question
`

export const sampleWithResults = `# Title of File
Description of file

## Questions

### 1
Text for the first question
- [Answer A Text](#2)
- [Answer B Text](#3)

## 2
Answer A took us to this question
- [Answer C Text](#Result-Z)

## 3
Answer B took us to this question
- [Answer D Text](#Result-Y)

## Results

### Result Z

#### Overview
A result can have any content you want within it. It will 
turn all of your markdown content into valid HTML for viewing. 
You could include \`code blocks\`, **emphasized text**, or any 
other valid Markdown syntax. 

### Result Y

You can even have different structures per result if you prefer. 
It will do it all.
`