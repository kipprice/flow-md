import { AnsweredQuestion } from '../models';

export const calculateOriginCol = (columns: number, width: number) => {
    return ((columns - width) / 2) + 1;
}

export const calculateNextStartCol = (lastQuestion: AnsweredQuestion, startCol: number, columns: number, width: number) => {
    if (!lastQuestion) { return startCol; }

    const lastAnswer = lastQuestion.answerIdx;
    const midpoint = ((lastQuestion?.answers.length - 1) / 2)

    if (lastAnswer < midpoint) {
        startCol -=  1;
        startCol = Math.max(1, startCol);
    } else if (lastAnswer > midpoint) {
        startCol += 1;
        startCol = Math.min(columns - width + 1, startCol);
    }

    return startCol;
}

export const BREAKPOINT = 800;