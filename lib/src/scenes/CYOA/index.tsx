/* @jsx jsx */
import React from 'react';
import { useSelector } from 'react-redux';
import { selectContent } from '../../selectors';
import { selectMode } from '../../selectors/options';
import { getComponentConstructor } from '../../helpers/componentConstructors';
import { selectNextQuestion, selectAnsweredQuestions, selectFinalResult } from '../../selectors/answerChain';
import { Question } from '../../models/question';
import { StyledQuestion } from './StyledQuestion';
import { StyledResult } from './StyledResult';
import { FileDetails } from '../../components/complex/FileDetails';
import { css, jsx } from '@emotion/core';

export type CYOASceneProps = {
    
};

export const CYOAScene: React.FC<CYOASceneProps> = ({  }) => {
    const content = useSelector(selectContent);
    const mode = useSelector(selectMode);

    const answeredQuestions = useSelector(selectAnsweredQuestions);
    const nextQuestion = useSelector(selectNextQuestion);
    const nextResult = useSelector(selectFinalResult);

    const questions: Question[] = [ ...answeredQuestions ];
    if (nextQuestion) { questions.push(nextQuestion); }

    const FlexColumn = getComponentConstructor('FlexColumn');

    if (!content || (mode !== 'cyoa')) { return null; }

    return(
        <FlexColumn horizontal='center'>
            <React.Fragment>
                <FileDetails css={css`width: 60vw;`}/>

                {questions.map((q) => 
                    <StyledQuestion key={`cyoa-question-${q.id}`}  question={q} mode='multiline' />  
                )}

                {nextResult && <StyledResult result={nextResult} />}
            </React.Fragment>
        </FlexColumn>
    );
};
