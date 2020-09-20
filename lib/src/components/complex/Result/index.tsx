import React from 'react';
import { Result } from '../../../models/result';
import { getComponentConstructor } from '../../../helpers/componentConstructors';
import { CardProps } from '../../basic';
import { useDispatch } from 'react-redux';
import { startOverAction } from '../../../actions/reset';

export type ResultStateProps = Partial<CardProps> & {
    /** the result to render */
    result: Result;
};

export const ResultStateElem: React.FC<ResultStateProps> = ({ result, ...props }) => {
    const dispatch = useDispatch();

    const ResultElem = getComponentConstructor('Result');

    return <ResultElem result={result} startOver={() => dispatch(startOverAction())} {...props} />
};

export * from './innerElem';