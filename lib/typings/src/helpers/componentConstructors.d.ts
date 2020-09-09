import React from 'react';
import { ButtonProps, CardProps, CheckboxProps, CollapsibleProps, FlexProps, GridProps, HeadingProps, SpacingProps, TagProps, TextProps, ToggleButtonProps, ResultElemProps, QuestionElemProps, AnswerElemProps } from '../components';
export declare type ComponentConstructor<P> = React.FC<P>;
export declare type ComponentTypeProps = {
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
};
export declare type ExpectsChildren = {
    children: React.ReactNode | React.ReactNode[];
};
export declare type ComponentConstructors = Partial<ComponentTypeProps>;
export declare const getComponentConstructor: <K extends "Button" | "Card" | "Checkbox" | "Collapsible" | "FlexColumn" | "FlexRow" | "Grid" | "Heading" | "Spacing" | "Tag" | "Text" | "ToggleButton" | "Result" | "Question" | "Answer">(type: K) => ComponentTypeProps[K];
export declare const updateUserFactory: (uf: ComponentConstructors) => void;
