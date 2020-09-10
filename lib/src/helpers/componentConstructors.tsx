import React from 'react';

import { 
    ButtonProps, Button,
    CardProps, Card, 
    CheckboxProps, Checkbox,
    CollapsibleProps, Collapsible,
    FlexProps, FlexColumn, FlexRow,
    GridProps, Grid,
    HeadingProps, Heading,
    SpacingProps, Spacing,
    TagProps, Tag,
    TextProps, Text,
    ToggleButtonProps, ToggleButton,
    ResultElemProps, ResultElem, 
    QuestionElemProps, QuestionElem, 
    AnswerElemProps, AnswerElem ,
    ErrorDisplayProps, ErrorDisplay, 
    FileDetailsProps, FileDetails,
    HelpText, 
} from '../components';

export type ComponentConstructor<P> = React.FC<P>;

export type ComponentTypeProps = {

    /** a basic button element without a concept of toggling */
    Button: ComponentConstructor<ButtonProps>;

    /** 
     * a container that hosts a variety of elements, such as results
     * and questions
     */
    Card: ComponentConstructor<CardProps>;

    /** a simple checkbox and label pair */
    Checkbox: ComponentConstructor<CheckboxProps>;

    /** an element with a title that upon clicking can collapse or expand its children */
    Collapsible: ComponentConstructor<CollapsibleProps>;

    /** render a simple error to the user */
    ErrorDisplay: ComponentConstructor<ErrorDisplayProps>;

    /** a layout element for vertical arrangement */
    FlexColumn: ComponentConstructor<FlexProps>;

    /** a layout element for horizontal arrangement */
    FlexRow: ComponentConstructor<FlexProps>;

    /** a layout element for grid arrangement */
    Grid: ComponentConstructor<GridProps>;

    /** a wrapper around heading elements */
    Heading: ComponentConstructor<HeadingProps>;

    /** an element to add vertical or horizontal (or both) space */
    Spacing: ComponentConstructor<SpacingProps>;

    /** a visual indicator of whether an answer has been fully explored */
    Tag: ComponentConstructor<TagProps>;

    /** a wrapper around text elements */
    Text: ComponentConstructor<TextProps>;

    /** a button that can detect being selected or not */
    ToggleButton: ComponentConstructor<ToggleButtonProps>;


    /**
     * renders the final result of the user's answers. Of all of the complex 
     * elements, this is the least risky to override.
     */
    Result: ComponentConstructor<ResultElemProps>;

    /**
     * renders a question to the user. If overriding this element, ensure that you
     * are using the `renderAnswer` method to generate the appropriate JSX wrapper 
     * for the answer element (whether overridden or not)
     */
    Question: ComponentConstructor<QuestionElemProps>;

    /** 
     * renders an answer to the user within a question. If overriding this element,
     * ensure that you are dispatching the `onSelect` event when a user makes a 
     * selection.
     */
    Answer: ComponentConstructor<AnswerElemProps>;

    FileDetails: ComponentConstructor<FileDetailsProps>;

    HelpText: ComponentConstructor<{ }>;

}

export type ExpectsChildren = {
    children: React.ReactNode | React.ReactNode[];
}

export type ComponentConstructors = Partial<ComponentTypeProps>

const defaultFactory: ComponentTypeProps = {
    Button,
    Card,
    Checkbox,
    Collapsible,
    ErrorDisplay,
    FlexColumn,
    FlexRow,
    Grid,
    Heading,
    HelpText,
    Spacing,
    Tag,
    Text,
    ToggleButton,

    Result: ResultElem,
    Question: QuestionElem,
    Answer: AnswerElem,
    FileDetails
}

let userFactory: ComponentConstructors;

export const getComponentConstructor = <K extends keyof ComponentTypeProps>(type: K): ComponentTypeProps[K] => {
    let out;
    if (userFactory) { out = userFactory[type] as ComponentTypeProps[K] }
    if (out) { return out; }
    return defaultFactory[type];
}

// TODO: turn this into part of the redux store
export const updateUserFactory = (uf: ComponentConstructors) => {
    userFactory = uf;
}