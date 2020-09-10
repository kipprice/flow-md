/* @jsx jsx */
import React from 'react';
import { useSelector } from 'react-redux';
import { selectHasContent, selectStyles } from '../../selectors';
import { getComponentConstructor, ComponentConstructor } from '../../helpers/componentConstructors';
import { selectAnsweredQuestions, selectNextQuestion, selectFinalResult } from '../../selectors/answerChain';
import { StyledQuestion } from './StyledQuestion';
import { Question, AnsweredQuestion } from '../../models/question';
import { StyledResult } from './StyledResult';
import { selectMode } from '../../selectors/options';
import { FileDetailsState } from '../../components/complex/FileDetails';
import { css, jsx } from '@emotion/core';
import { calculateOriginCol, calculateNextStartCol, BREAKPOINT } from '../../helpers/grid'
import styled, { StyledComponent } from '@emotion/styled';
import { GridProps } from '../../components';

export type FlowSceneProps = {
    
};

export const FlowScene: React.FC<FlowSceneProps> = ({  }) => {
    const hasData = useSelector(selectHasContent);
    const mode = useSelector(selectMode);
    const answered = useSelector(selectAnsweredQuestions);
    const nextQuestion = useSelector(selectNextQuestion);
    const nextResult = useSelector(selectFinalResult);
    const styles = useSelector(selectStyles);

    const Grid = getComponentConstructor('Grid');
    
    if (    !hasData || 
            mode !== 'flow' || 
            (!nextQuestion && !nextResult)
        ) { 
        return null;
    }

    const questions: Question[] = [...answered];
    if (nextQuestion) { questions.push(nextQuestion) }
    let startCol = calculateOriginCol(styles.gridColumns, styles.gridQuestionCardWidth);

    if (!StyledGrid) { generateStyledGrid(Grid); }

    return(
        <StyledGrid columns={styles.gridColumns}>
            <FileDetailsState css={css`
                grid-column-start: ${startCol}; 
                grid-column-end: ${startCol + styles.gridQuestionCardWidth};

                @media screen and (max-width: ${BREAKPOINT}px) {
                    grid-column-start: 1;
                    grid-column-end: unset;
                }
            `}/>

            {/* question section */}
            {questions.map((q, qIdx) => {
                startCol = calculateNextStartCol(questions[qIdx - 1] as AnsweredQuestion, startCol, styles.gridColumns, styles.gridQuestionCardWidth);

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

            
        </StyledGrid>
    );
};

let StyledGrid: StyledComponent<any, any, any>;
const generateStyledGrid = (Grid: ComponentConstructor<GridProps>) => {
    StyledGrid = styled(Grid)`

        @media screen and (max-width: ${BREAKPOINT}px) {
            grid-template-columns: 1fr !important;
        }
    `;
    return StyledGrid;
}

