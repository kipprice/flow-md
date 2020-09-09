# Flow MD

This library takes in a markdown document of a particular format and transforms it into a flowchart or Choose-Your-Own-Adventure format. 

The library has a self-contained Redux store that can parse markdown files (thanks to [unified](https://github.com/unifiedjs/unified)) and transform into the models expected by the application. It also will handle the rendering of these models for you. However, there are a variety of levers you can use in order to generate a look-and-feel that is all your own. 

## Example
```jsx
import { FlowMD, parseMarkdown } from 'flow-md';

// actually render the application
ReactDOM.render(
    (<FlowMD

        {/** the basic styles (colors, fonts, etc) to use within the application */}
        styles={{}}

        {/* any components that should be overridden; be judicious about how this is used */}
        componentConstructors={{}}

        {/* options that control how the application will work */}
        options={{}}

        {/* if specified, loads the file URL into the state instead of prompting the user to upload */}
        fileToLoad='test.md'

    />),
    document.getElementById('root')
);

// use the application parsing to do your own thing
const { astTree, parsedContent } = await parseMarkdown('file contents go here');
```

## Parameter Details

### Styles

Setting the `styles` property gives you an easy way to override a lot of the visual elements in the application. You can specify colors, fonts, and to a certain extent, how the elements render on the page. You can specify as many or as few elements as you'd like; default styles will be used for the rest. You can view the default styles [here](TODO).

```typescript
/**
 * @interface   Styles
 * ----------------------------------------------------------------------------
 * Keep track of all of the styles used within the app; overridable by calling
 * code. See `defaultStyles` for details on what this is defined as to start.
 */
export type Styles = {

    /** the colors available within the application */
    colors: {
        /** the primary color; used for answer buttons and the sidebar */
        primary: string;

        /** the secondary color; used for buttons on the sidebar */
        secondary: string;

        /** a subtle color used for rendering a hover effect on buttons in choose-your-own-adventure mode */
        tertiary: string;

        /** the darkest neutral in the app; used for a majority of text content */
        darkest: string;

        /** the second-darkest neutral; used for box shadows */
        dark: string;

        /** the lightest neutral in the app; used for card backgrounds */
        lightest: string;

        /** the second-lightest neutral; used for page backgrounds */
        light: string;
    };

    /** what colors pair well in terms of contrast */
    colorPairs: Record<keyof Colors, keyof Colors>;

    /** the fonts to use within the application */
    fontFamilies: {
        body: string;
        header: string;
        accent: string;
    },

    /** how much to round corners on buttons and cards */
    borderRadius: number;

    /** what shape to use when assigning box shadow (not including the color), e.g. '2px p2x 0 4px' */
    boxShadow: string;

    /** the 2-digit hex transparency that should be appended to the shadow color with box-shadows, e.g. 'AA' */
    shadowTransparency: string;
}
```

### Component Constructors

You can override the rendering of any base component in the application via the `componentConstructors` property. This should generally work well, but carries some risk with it. If you're not certain how to use all of the provided properties appropriately, you can look at the default implementations to get a sense of how it fits together.

Each component will receive a set of props from the calling component; you can look at each of these types in the [definition files](TODO).

```typescript
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

}
```


### Options

You can also control what behavioral aspects of the application are enabled via the `options` property. This allows you to specify some details to render about the app itself, what mode the app should start in, and what features the users should have access to.

```typescript
export type Options = {

    /** title of the application */
    title?: string;

    /** description of the application */
    description?: string;

    /** what mode to start the application in; accepts 'flow' (Flowchart Mode) or 'cyoa' (Choose-Your-Own-Adventure) */
    mode: 'flow' | 'cyoa';

    /** if true, shows a visual indicator to the user that a path has or hasn't been explored */
    completionistMode?: boolean;

    /** all of the options the user has permissions to see */
    permissions: ('flow' | 'cyoa' | 'completionist' | 'sidebar' | 'upload' | 'fileDetails')[];
}
```

## Development Guide

The repo is split into two parts: the actual library and the sample application that runs it. 

### Setup Instructions
1. In the terminal, `cd` into the `lib` folder and run `yarn && yarn build && yarn build:webpack -w`
1. Symlink the `dist`, `typings`, and `package.json` from `lib` into `example/node_modules/flow-md` (this makes the webpack server live-reload with changes to the library).
    - Make sure you do not link the `node_modules` folder!
1. Open a new terminal window, `cd` into the `example` folder, and run `yarn && yarn start`
1. You should now have a tab open in the default web browser to http://localhost:5050.

## Reporting Issues
Issues can be reported through GitHub; outside contributions are welcome.
