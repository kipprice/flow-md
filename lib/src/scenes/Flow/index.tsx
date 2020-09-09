/* @jsx jsx */
import React from 'react';
import { useSelector } from 'react-redux';
import { selectHasContent } from '../../selectors';
import { getComponentConstructor } from '../../helpers/componentConstructors';
import { selectAnsweredQuestions, selectNextQuestion, selectFinalResult, AnsweredQuestion } from '../../selectors/answerChain';
import { StyledQuestion } from './StyledQuestion';
import { Question } from '../../models/question';
import { StyledResult } from './StyledResult';
import { selectMode } from '../../selectors/options';
import { FileDetails } from '../../components/complex/FileDetails';
import { css, jsx } from '@emotion/core';

export const CARD_WIDTH = 4;
export const RESULT_WIDTH = 6;
export const COLUMNS = 12;

export type FlowSceneProps = {
    
};

export const FlowScene: React.FC<FlowSceneProps> = ({  }) => {
    const hasData = useSelector(selectHasContent);
    const mode = useSelector(selectMode);
    const answered = useSelector(selectAnsweredQuestions);
    const nextQuestion = useSelector(selectNextQuestion);
    const nextResult = useSelector(selectFinalResult);

    const Grid = getComponentConstructor('Grid');
    
    if (    !hasData || 
            mode !== 'flow' || 
            (!nextQuestion && !nextResult)
        ) { 
        return null;
    }

    const questions: Question[] = [...answered];
    if (nextQuestion) { questions.push(nextQuestion) }
    let startCol = 5;

    return(
        <Grid columns={COLUMNS}>
            <FileDetails css={css`grid-column-start: ${startCol}; grid-column-end: ${startCol + CARD_WIDTH}`}/>

            {/* question section */}
            {questions.map((q, qIdx) => {
                startCol = calculateStartCol(questions[qIdx - 1] as AnsweredQuestion, startCol);

                return (
                    <StyledQuestion 
                        key={`question-${q.id}`} 
                        question={q} 
                        startCol={startCol}
                    />
                );
            })}

            {/* answer section */}
            {nextResult && <StyledResult result={nextResult} />}

            
        </Grid>
    );
};

const calculateStartCol = (lastQuestion: AnsweredQuestion, startCol: number) => {
    if (!lastQuestion) { return startCol; }

    const lastAnswer = lastQuestion.answerIdx;
    const midpoint = ((lastQuestion?.answers.length - 1) / 2)

    if (lastAnswer < midpoint) {
        startCol -=  1;
        startCol = Math.max(1, startCol);
    } else if (lastAnswer > midpoint) {
        startCol += 1;
        startCol = Math.min(COLUMNS - CARD_WIDTH + 1, startCol);
    }

    return startCol;
}
