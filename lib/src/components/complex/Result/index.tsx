import React from 'react';
import { Result } from '../../../models/result';
import { getComponentConstructor } from '../../../helpers/componentConstructors';
import { CardProps } from '../../basic';

export type ResultElemProps = Partial<CardProps> & {
    /** the result to render */
    result: Result;
};

export const ResultElem: React.FC<ResultElemProps> = ({ result, ...props }) => {
    const Card = getComponentConstructor('Card');

    return(
        <Card {...props}>
            <h1>{result.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: result.nestedHtml || '' }}></div>
        </Card>
    );
};
