import React from 'react';
import { useSelector } from 'react-redux';
import { selectContent } from '../../selectors';
import { selectMode } from '../../selectors/options';
import { getComponentConstructor, ComponentConstructor } from '../../helpers/componentConstructors';
import { selectNextQuestion, selectAnsweredQuestions, selectFinalResult } from '../../selectors/answerChain';
import { Question } from '../../models/question';
import { StyledQuestion } from './StyledQuestion';
import { StyledResult } from './StyledResult';
import { FileDetailsState } from '../../components/complex/FileDetails';
import styled, { StyledComponent } from '@emotion/styled';
import { FlexProps } from '../../components';
import { BREAKPOINT } from '../../helpers/grid';

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
    if (!StyledCyoa) { generateStyledCyo(FlexColumn); }

    if (!content || (mode !== 'cyoa')) { return null; }

    return(
        <StyledCyoa horizontal='center'>
            <React.Fragment>
                <FileDetailsState />

                {questions.map((q) => 
                    <StyledQuestion key={`cyoa-question-${q.id}`}  question={q} mode='multiline' />  
                )}

                {nextResult && <StyledResult result={nextResult} />}
            </React.Fragment>
        </StyledCyoa>
    );
};

let StyledCyoa: StyledComponent<any, any, any>;
const generateStyledCyo = (FlexColumn: ComponentConstructor<FlexProps>) => {
    StyledCyoa = styled(FlexColumn)`
        > * {
            width: 60vw;
        }

        @media screen and (max-width: ${BREAKPOINT}px) {
            > * {
                width: calc(100% - 2rem);
            }
        }
    `;
}
