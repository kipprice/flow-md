import React from 'react';
import { Result } from '../../../../models/result';
import { getComponentConstructor } from '../../../../helpers/componentConstructors';
import { CardProps } from '../../../basic';

export type ResultElemProps = Partial<CardProps> & {
    /** the result to render */
    result: Result;

    /** will reset the set of answered questions (but not all of the questions the user has encountered) */
    startOver: () => void
};

export const ResultElem: React.FC<ResultElemProps> = ({ result, startOver, ...props }) => {
    const Card = getComponentConstructor('Card');
    const FlexRow = getComponentConstructor('FlexRow');
    const Button = getComponentConstructor('Button');

    return(
        <Card {...props}>
            <h1>{result.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: result.nestedHtml || '' }}></div>
            <FlexRow horizontal='center'><Button colorScheme='primary' onClick={startOver}>Start Over</Button></FlexRow>
        </Card>
    );
};
